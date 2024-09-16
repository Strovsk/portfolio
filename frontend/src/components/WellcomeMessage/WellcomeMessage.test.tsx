import "@testing-library/jest-dom";

import { screen, render } from "@testing-library/react";
import WellcomeMessage from "./WellcomeMessage";

describe("<Menu />", () => {
	it("Should redirect to the right links", () => {
		render(<WellcomeMessage />);

		const welcomeGithub = screen.getByTestId("github-link");
		const welcomeLinkedin = screen.getByTestId("linkedin-link");

		expect(welcomeGithub).toHaveAttribute(
			"href",
			"https://www.github.com/strovsk",
		);
		expect(welcomeLinkedin).toHaveAttribute(
			"href",
			"https://www.linkedin.com/in/thiago-santa-clara/",
		);
	});

	it("Should show right icons", () => {
		render(<WellcomeMessage />);

		const welcomeGithub = screen.getByTestId("github-logo");
		const welcomeLinkedin = screen.getByTestId("linkedin-logo");

		expect(welcomeGithub).toHaveAttribute("src", "/github.svg");
		expect(welcomeLinkedin).toHaveAttribute("src", "/linkedin.svg");
	});
});
