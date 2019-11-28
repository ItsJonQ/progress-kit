import { useEffect, useState, useRef } from "react";
import {
	FPS,
	START_VALUE,
	NEAR_COMPLETION_VALUE,
	COMPLETION_VALUE,
	noop,
	clamp,
	randomNumber
} from "./utils";
import { useInterval } from "./hooks";

export const progressDefaultProps = {
	children: null,
	isPaused: false,
	isSmooth: false,
	progress: START_VALUE,
	onComplete: noop,
	onChange: noop,
	refreshTimeout: 1000,
	randomMin: 10,
	randomMax: 15,
	nearCompletionRandomMin: 2,
	nearCompletionRandomMax: 8,
	smoothIncrementValue: 0.05
};

export default function Progress(props) {
	const {
		isPaused,
		isSmooth,
		nearCompletionRandomMax,
		nearCompletionRandomMin,
		onChange,
		onComplete,
		progress,
		randomMax,
		randomMin,
		refreshTimeout,
		smoothIncrementValue
	} = props;

	const [progressState, setProgressState] = useState(progress);
	const progressRef = useRef(progress);

	const shouldRun = progressState !== COMPLETION_VALUE && !isPaused;

	const [isRunning, setIsRunning] = useState(shouldRun);
	const timeoutValue = !isSmooth ? refreshTimeout : FPS;

	useInterval(
		() => {
			if (progressState >= COMPLETION_VALUE) {
				onComplete();
				setIsRunning(false);
				return;
			}
			const nearCompletion = progressState < NEAR_COMPLETION_VALUE;
			const randomProgress = nearCompletion
				? randomNumber(nearCompletionRandomMax, nearCompletionRandomMin)
				: randomNumber(randomMin, randomMax);

			const nextProgress = !isSmooth
				? randomProgress
				: smoothIncrementValue;

			setProgressState(clamp(progressState + nextProgress));
		},
		isRunning && shouldRun ? timeoutValue : null
	);

	useEffect(() => {
		if (progressRef.current !== progressState) {
			progressRef.current = progressState;
			onChange(clamp(progressState));
		}
	}, [onChange, progressState, progressRef]);

	useEffect(() => {
		setProgressState(clamp(progress));
	}, [progress, setProgressState]);

	return null;
}

Progress.defaultProps = progressDefaultProps;
