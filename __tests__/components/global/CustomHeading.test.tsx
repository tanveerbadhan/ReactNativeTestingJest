import { render } from "@testing-library/react-native";
import CustomHeading from "../../../src/components/global/CustomHeading";

describe("Custom Heading", () => {
    it("should render title correctly", () => {
        const title = "Test title"
        const {getByText} = render(<CustomHeading title={title} />)
        expect(getByText(title)).toBeTruthy()
    })
})