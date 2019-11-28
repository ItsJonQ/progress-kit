import { useEffect, useState } from "react";
import { noop, clamp, randomNumber } from "./utils";
import { useInterval } from "./hooks";

export const START_VALUE = 0;
export const NEAR_COMPLETION_VALUE = 90;
export const COMPLETION_VALUE = 100;

export const progressDefaultProps = {
	children: null,
	isPaused: false,
	progress: START_VALUE,
	onComplete: noop,
	onChange: noop,
	refreshTimeout: 1000,
	randomMin: 10,
	randomMax: 15,
	nearCompletionRandomMin: 2,
	nearCompletionRandomMax: 8
};

function clampProgress(progress) {
	return clamp(progress, START_VALUE, COMPLETION_VALUE);
}

export default function Progress(props) {
	const {
		isPaused,
		nearCompletionRandomMax,
		nearCompletionRandomMin,
		onChange,
		onComplete,
		progress,
		randomMax,
		randomMin,
		refreshTimeout
	} = props;
	const shouldRun = progress !== COMPLETION_VALUE && !isPaused;

	const [progressState, setProgressState] = useState(progress);
	const [isRunning, setIsRunning] = useState(shouldRun);

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
			setProgressState(clampProgress(progressState + randomProgress));
		},
		isRunning && shouldRun ? refreshTimeout : null
	);

	useEffect(() => {
		onChange(progressState);
	}, [onChange, progressState]);

	useEffect(() => {
		setProgressState(clampProgress(progress));
	}, [progress, setProgressState]);

	return null;
}

Progress.defaultProps = progressDefaultProps;
