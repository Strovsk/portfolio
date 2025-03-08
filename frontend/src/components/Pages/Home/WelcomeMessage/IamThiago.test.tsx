import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import IamThiago from "./IamThiago";

describe("<IamThiago />", () => {
	it("Should render the rigth svg", () => {
		render(<IamThiago />);

		const element = screen.getByTestId("svg-container");

		expect(element).toHaveAttribute("data", "/iamthiago.svg");
	});
});
