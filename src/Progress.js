import { useEffect, useState } from "react";
import { noop, clamp, randomNumber } from "./utils";
import { useInterval } from "./hooks";

export const progressDefaultProps = {
	children: null,
	isPaused: false,
	progress: 0,
	onComplete: noop,
	onChange: noop,
	refreshTimeout: 1000
};

export default function Progress(props) {
	const { progress, isPaused, onComplete, onChange, refreshTimeout } = props;
	const shouldRun = progress !== 100 && !isPaused;

	const [progressState, setProgressState] = useState(progress);
	const [isRunning, setIsRunning] = useState(shouldRun);

	useInterval(
		() => {
			if (progressState >= 100) {
				onComplete();
				setIsRunning(false);
				return;
			}
			const nearCompletion = progressState < 90;
			const randomProgress = nearCompletion
				? randomNumber(2, 8)
				: randomNumber(20, 30);
			setProgressState(clamp(progressState + randomProgress, 0, 100));
		},
		isRunning && shouldRun ? refreshTimeout : null
	);

	useEffect(() => {
		onChange(progressState);
	}, [onChange, progressState]);

	useEffect(() => {
		setProgressState(clamp(progress, 0, 100));
	}, [progress, setProgressState]);

	return null;
}

Progress.defaultProps = progressDefaultProps;
