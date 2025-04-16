import { fireEvent, render, screen } from "@testing-library/react-native";
import FooterTextTouchable from "../../../src/components/ui/FooterTextTouchable";

describe('Footer Text Touchable', () => {
    it('should call onPress when pressed', () => {
        const onPressMock = jest.fn();
        render(<FooterTextTouchable onPress={onPressMock} text={'Hello'} />)

        const footerButton = screen.getByTestId('footer-button');
        fireEvent(footerButton, 'onPress')
        expect(onPressMock).toHaveBeenCalled();

        // Also there is .toHaveStyle({
        //     position: 'relative',
        //     top: 0,
        //     left: 0
        // })


    })
})