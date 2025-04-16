import {fireEvent, render} from '@testing-library/react-native';
import OnboardItem from '../../../src/components/global/OnboardItem';

describe('OnboardItem', () => {
  const mockFirstFunc = jest.fn();
  const mockSecondFunc = jest.fn();
  const title = 'Test Title';
  const subTitle = 'Test Sub Title';
  const imgUrl = {uri: 'https://gif.png'};
  const buttonTitleFirst = 'Button Title first';
  const buttonTitleSecond = 'Button Title second';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('It should render correctly with one button', () => {
    const {getByText, getByTestId} = render(
      <OnboardItem
        buttonTitleFirst={buttonTitleFirst}
        onPressFirst={mockFirstFunc}
        imageSource={imgUrl}
        title={title}
        subtitle={subTitle}
      />,
    );
    expect(getByText(title)).toBeTruthy();
    expect(getByText(buttonTitleFirst)).toBeTruthy();
    expect(getByTestId('background-image')).toBeTruthy();
  });

  it('It should render correctly with two button', () => {
    const {getByText, getByTestId} = render(
      <OnboardItem
        buttonTitleSecond={buttonTitleSecond}
        buttonTitleFirst={buttonTitleFirst}
        onPressSecond={mockSecondFunc}
        onPressFirst={mockFirstFunc}
        imageSource={imgUrl}
        title={title}
        subtitle={subTitle}
      />,
    );
    expect(getByText(title)).toBeTruthy();
    expect(getByText(buttonTitleSecond)).toBeTruthy();
    expect(getByTestId('background-image')).toBeTruthy();
  });
});
