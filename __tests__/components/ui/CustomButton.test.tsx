import { fireEvent, render, screen } from "@testing-library/react-native";
import CustomButton from "../../../src/components/ui/CustomButton";

describe('Custom Button', () => {
    const title = 'Test Button'
    it('should render with correct title', () => {
        const getByText = render(<CustomButton onPress={() => {}} title={title} />)
        const buttonText = screen.getByText(title);
        expect(buttonText).toBeTruthy();
    })
})