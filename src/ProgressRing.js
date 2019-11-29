import React from "react";
import { View } from "styled-view";
import { useProgressState, progressDefaultProps } from "./useProgressState";

export const progressRingDefaultProps = {
	...progressDefaultProps,
	circleStyle: {},
	backgroundColor: "transparent",
	color: "currentColor",
	height: 3,
	isRounded: true,
	size: 60,
	transition: "all 200ms ease",
	strokeWidth: 4
};

export function ProgressRing(props) {
	const {
		backgroundColor,
		circleStyle,
		color,
		isRounded,
		size,
		strokeWidth,
		transition,
		...restProps
	} = props;

	const { progress, progressProps } = useProgressState(props);

	const circleSize = size / 2;
	const radius = circleSize - strokeWidth;
	const circumference = radius * 2 * Math.PI;
	const offset = circumference - (progress / 100) * circumference;

	const circleCssProps = {
		stroke: color,
		strokeWidth,
		strokeLinecap: isRounded ? "round" : "square",
		transition: props.isSmooth ? null : transition
	};

	const style = {
		...circleStyle,
		strokeDasharray: `${circumference} ${circumference}`,
		strokeDashoffset: offset,
		transform: "rotate(-90deg)",
		transformOrigin: "50% 50%"
	};

	return (
		<>
			<View
				{...restProps}
				as="svg"
				display="block"
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
			>
				<View
					as="circle"
					stroke={backgroundColor}
					strokeWidth={strokeWidth}
					fill="none"
					r={radius}
					cx={circleSize}
					cy={circleSize}
				/>
				<View
					{...progressProps}
					{...circleCssProps}
					as="circle"
					fill="none"
					r={radius}
					cx={circleSize}
					cy={circleSize}
					style={style}
				/>
			</View>
		</>
	);
}

ProgressRing.defaultProps = progressRingDefaultProps;

export default ProgressRing;
