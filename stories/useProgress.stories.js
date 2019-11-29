import React from "react";
import { useProgressState } from "../src/useProgressState";

export default {
	title: "useProgressState"
};

const Example = () => {
	const { progress } = useProgressState();

	return <div>{progress}</div>;
};

export const _default = () => <Example />;
