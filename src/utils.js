export const FPS = (1000 / 60) * 1;
export const START_VALUE = 0;
export const NEAR_COMPLETION_VALUE = 90;
export const COMPLETION_VALUE = 100;

export function noop() {
	return null;
}

export function isFunction(value) {
	return typeof value === "function";
}

export function randomNumber(low, high) {
	return Math.floor(Math.random() * (high - low) + low);
}

export function clamp(num = 0, min = START_VALUE, max = COMPLETION_VALUE) {
	return num <= min ? min : num >= max ? max : num;
}
