import { useRef, useEffect, useState } from "react";
import { clamp, isFunction } from "./utils";

export function useProgressState({ progress, onChange }) {
	const progressRef = useRef(progress);
	const [progressState, setProgressState] = useState(progress);

	useEffect(() => {
		if (progressRef.current !== progress) {
			progressRef.current = progress;
			setProgressState(clamp(progress));
		}
	}, [progressRef, progress, setProgressState]);

	const handleOnChange = nextProgress => {
		setProgressState(nextProgress);
		if (isFunction(onChange)) {
			onChange(nextProgress);
		}
	};

	return {
		onChange: handleOnChange,
		progress: progressState,
		role: "progressbar",
		"aria-valuenow": progressState,
		"aria-valuemin": "0",
		"aria-valuemax": "100"
	};
}

export default useProgressState;
