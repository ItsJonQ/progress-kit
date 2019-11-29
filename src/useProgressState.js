import { useEffect, useState, useRef } from "react";
import {
	FPS,
	START_VALUE,
	NEAR_COMPLETION_VALUE,
	COMPLETION_VALUE,
	clamp,
	randomNumber,
	isFunction
} from "./utils";
import { useInterval } from "./hooks";

export const progressDefaultProps = {
	children: null,
	isPaused: false,
	isSmooth: false,
	progress: START_VALUE,
	refreshTimeout: 1000,
	randomMin: 10,
	randomMax: 15,
	nearCompletionRandomMin: 2,
	nearCompletionRandomMax: 8,
	smoothIncrementValue: 0.05
};

export function useProgressState(props = {}) {
	const mergedProps = { ...progressDefaultProps, ...props };
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
	} = mergedProps;

	const [progressState, setProgressState] = useState(progress);
	const progressRef = useRef(progress);

	const isComplete = progressState !== COMPLETION_VALUE;
	const shouldRun = isComplete && !isPaused;

	const [isRunning, setIsRunning] = useState(shouldRun);
	const timeoutValue = !isSmooth ? refreshTimeout : FPS;

	useInterval(
		() => {
			if (progressState >= COMPLETION_VALUE) {
				if (isFunction(onComplete)) {
					onComplete();
				}
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
			if (isFunction(onChange)) {
				onChange(clamp(progressState));
			}
		}
	}, [onChange, progressState, progressRef]);

	useEffect(() => {
		setProgressState(clamp(progress));
	}, [progress, setProgressState]);

	const setProgress = nextProgress => {
		setProgressState(clamp(nextProgress));
	};

	return {
		progress: progressState,
		setProgress,
		isComplete,
		isRunning,
		progressProps: {
			role: "progressbar",
			"aria-valuenow": progressState,
			"aria-valuemin": "0",
			"aria-valuemax": "100"
		}
	};
}

export default useProgressState;
