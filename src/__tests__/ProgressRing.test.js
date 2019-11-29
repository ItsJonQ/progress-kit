import React from "react";
import { cy } from "@itsjonq/cyan";
import { ProgressRing } from "../index";

describe("ProgressRing", () => {
	test("should render", () => {
		cy.render(<ProgressRing />);

		const el = cy.get('[role="progressbar"]');

		expect(el.exists()).toBeTruthy();
	});
});
