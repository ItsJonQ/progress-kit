import React, { useState } from "react";
import { ProgressBar, clamp } from "../src/index";

export default {
	title: "Updates"
};

function UpdateExample() {
	const [progress, setProgress] = useState(0);
	const addProgress = () => {
		setProgress(progress + 10);
	};

	return (
		<>
			<button onClick={addProgress}>Add Progress</button>
			<ProgressBar
				color="blue"
				progress={progress}
				onChange={setProgress}
			/>
		</>
	);
}

export const _default = () => <UpdateExample />;

function UpdateSmoothExample() {
	const [progress, setProgress] = useState(0);
	const addProgress = () => {
		setProgress(clamp(progress + 10));
	};

	return (
		<>
			<button onClick={addProgress}>Add Progress</button>
			<ProgressBar
				color="blue"
				progress={progress}
				onChange={setProgress}
				isSmooth
			/>
		</>
	);
}

export const smooth = () => <UpdateSmoothExample />;
