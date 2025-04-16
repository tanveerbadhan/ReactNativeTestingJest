import { MMKV } from "react-native-mmkv";
import reduxStorage from "../../../src/redux/storage";

jest.mock('react-native-mmkv', () => {
    const setMock = jest.fn()
    const getStringMock = jest.fn()
    const deleteMock = jest.fn()

    return {
        MMKV: jest.fn().mockImplementation(() => ({
            set: setMock,
            getString: getStringMock,
            delete: deleteMock
        })),
        setMock,
        getStringMock,
        deleteMock
    }
})

describe('reduxStorage', () => {
    let setMock: jest.Mock
    let getStringMock: jest.Mock
    let deleteMock: jest.Mock

    beforeEach(() => {
        ({setMock, getStringMock, deleteMock} = require('react-native-mmkv'))
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("Set Item", async () => {
        const key = 'name';
        const value = 'Tanveer'
        await reduxStorage.setItem(key, value);
        expect(setMock).toHaveBeenCalledWith(key, value)
    })

    it("Get Item", async () => {
        const key = 'name';
        const value = 'Tanveer'
        getStringMock.mockReturnValue(value);
        const result = await reduxStorage.getItem(key);
        expect(result).toBe(value)
        expect(getStringMock).toHaveBeenCalledWith(key)
    })

    it("Delete Item", async () => {
        const key = 'name';
        await reduxStorage.removeItem(key);
        expect(deleteMock).toHaveBeenCalledWith(key)
    })
})