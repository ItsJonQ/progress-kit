import React from "react";
import { View } from "styled-view";
import { Progress, progressDefaultProps } from "./Progress";
import { useProgressState } from "./useProgressState";

export const progressBarDefaultProps = {
	...progressDefaultProps,
	color: "currentColor",
	height: 3,
	transition: "all 200ms ease"
};

export function ProgressBar(props) {
	const {
		color,
		onChange,
		progress,
		transition,
		height,
		...restProps
	} = props;

	const progressStateProps = useProgressState(props);

	const barCssProps = {
		backgroundColor: color,
		height,
		transition: props.isSmooth ? null : transition
	};

	return (
		<>
			<Progress {...progressStateProps} {...restProps} />
			<View
				{...progressStateProps}
				{...barCssProps}
				style={{
					width: `${progressStateProps.progress}%`
				}}
			/>
		</>
	);
}

ProgressBar.defaultProps = progressBarDefaultProps;

export default ProgressBar;
