import React from "react";
import { cy } from "@itsjonq/cyan";
import { ProgressBar } from "../index";

describe("ProgressBar", () => {
	test("should render", () => {
		cy.render(<ProgressBar />);

		const el = cy.get('[role="progressbar"]');

		expect(el.exists()).toBeTruthy();
	});
});
