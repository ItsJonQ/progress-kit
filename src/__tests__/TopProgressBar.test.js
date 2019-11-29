import React from "react";
import { cy } from "@itsjonq/cyan";
import { TopProgressBar } from "../index";

describe("TopProgressBar", () => {
	test("should render", () => {
		cy.render(<TopProgressBar />);

		const el = cy.get('[role="progressbar"]');

		expect(el.exists()).toBeTruthy();
	});
});
