import { render } from '@testing-library/react-native';

import App from '../App';

test('snapshot test', () => {
    const {toJSON} = render(<App />);
    expect(toJSON()).toMatchSnapshot();
})