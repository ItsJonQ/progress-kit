import React from "react";
import ProgressBar from "../src/ProgressBar";

export default {
	title: "ProgressBar"
};

export const _default = () => (
	<ProgressBar color="blue" onChange={console.log} />
);
