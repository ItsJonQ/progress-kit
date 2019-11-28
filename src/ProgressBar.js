import React, { useEffect, useState } from "react";
import { View } from "styled-view";
import Progress, { progressDefaultProps } from "./Progress";
import { clamp } from "./utils";

export const progressBarDefaultProps = {
	...progressDefaultProps,
	color: "currentColor",
	height: 3,
	transition: "all 200ms ease"
};

export default function ProgressBar(props) {
	const {
		color,
		onChange,
		progress,
		transition,
		height,
		...restProps
	} = props;

	const [progressState, setProgressState] = useState(progress);

	useEffect(() => {
		setProgressState(clamp(progress));
	}, [progress, setProgressState]);

	const handleOnChange = nextProgress => {
		onChange(nextProgress);
		setProgressState(nextProgress);
	};

	const barCssProps = {
		backgroundColor: color,
		height,
		transition: props.isSmooth ? null : transition
	};

	return (
		<>
			<Progress
				{...restProps}
				progress={progressState}
				onChange={handleOnChange}
			/>
			<View
				{...barCssProps}
				role="progressbar"
				aria-valuenow={progressState}
				aria-valuemin="0"
				aria-valuemax="100"
				style={{
					width: `${progressState}%`
				}}
			/>
		</>
	);
}

ProgressBar.defaultProps = progressBarDefaultProps;
