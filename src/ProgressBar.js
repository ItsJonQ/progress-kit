import React, { useState } from "react";
import Progress, { progressDefaultProps } from "./Progress";
import View from "./View";

export const progressBarDefaultProps = {
	...progressDefaultProps,
	color: "currentColor",
	height: 3,
	transition: "all 200ms ease"
};

export default function TopProgressBar(props) {
	const { color, onChange, transition, height, ...restProps } = props;

	const [progressState, setProgressState] = useState(0);

	const handleOnChange = nextProgress => {
		onChange(nextProgress);
		setProgressState(nextProgress);
	};

	const barCssProps = {
		backgroundColor: color,
		width: `${progressState}%`,
		height,
		transition
	};

	return (
		<>
			<Progress {...restProps} onChange={handleOnChange} />
			<View
				{...barCssProps}
				role="progressbar"
				aria-valuenow={progressState}
				aria-valuemin="0"
				aria-valuemax="100"
			/>
		</>
	);
}

TopProgressBar.defaultProps = progressBarDefaultProps;
