import React from "react";
import ProgressBar, { progressBarDefaultProps } from "./ProgressBar";
import View from "./View";

export const topProgressBarDefaultProps = {
	...progressBarDefaultProps,
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	zIndex: 100
};

export default function TopProgressBar(props) {
	const { position, top, left, width, zIndex, ...restProps } = props;

	const wrapperCssProps = {
		position,
		top,
		left,
		width,
		zIndex
	};

	return (
		<>
			<View {...wrapperCssProps}>
				<ProgressBar {...restProps} />
			</View>
		</>
	);
}

TopProgressBar.defaultProps = topProgressBarDefaultProps;
