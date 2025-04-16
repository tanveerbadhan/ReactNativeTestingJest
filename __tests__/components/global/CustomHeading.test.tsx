import { fireEvent, render } from "@testing-library/react-native";
import CustomHeading from "../../../src/components/global/CustomHeading";
import { goBack } from "../../../src/utils/NavigationUtil";

jest.mock("../../../src/utils/NavigationUtil", () => ({
    goBack: jest.fn()
}))

describe("Custom Heading", () => {
    it("should render title correctly", () => {
        const title = "Test title"
        const {getByText} = render(<CustomHeading title={title} />)
        expect(getByText(title)).toBeTruthy()
    })

    it("should call go back function", () => {
        const title = "Test title2"
        const {getByTestId} = render(<CustomHeading title={title} />)
        const button = getByTestId('back-button');
        fireEvent.press(button);
        expect(goBack).toHaveBeenCalled();
    })
})