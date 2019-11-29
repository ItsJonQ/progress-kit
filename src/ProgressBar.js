import React from "react";
import { View } from "styled-view";
import { useProgressState, progressDefaultProps } from "./useProgressState";

export const progressBarDefaultProps = {
	...progressDefaultProps,
	color: "currentColor",
	height: 3,
	transition: "all 200ms ease"
};

export function ProgressBar(props) {
	const { color, transition, height, ...restProps } = props;
	const { progress, progressProps } = useProgressState(props);

	const barCssProps = {
		backgroundColor: color,
		height,
		transition: props.isSmooth ? null : transition
	};

	return (
		<>
			<View
				{...progressProps}
				{...barCssProps}
				{...restProps}
				style={{
					width: `${progress}%`
				}}
			/>
		</>
	);
}

ProgressBar.defaultProps = progressBarDefaultProps;

export default ProgressBar;
