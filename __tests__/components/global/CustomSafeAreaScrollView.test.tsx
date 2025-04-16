import { fireEvent, render } from "@testing-library/react-native";
import CustomSafeAreaScrollView from "../../../src/components/global/CustomSafeAreaViewScroll";
import { Text } from "react-native";

describe('CustomSafeAreaScrollView', () => {
    it('Should render children correctly', () => {
        const testText = "Test Text";
        const {getByText} = render(<CustomSafeAreaScrollView><Text>{testText}</Text></CustomSafeAreaScrollView>);

        expect(getByText(testText)).toBeTruthy()
    })
})