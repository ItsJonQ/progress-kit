export function noop() {
	return null;
}

export function randomNumber(low, high) {
	return Math.floor(Math.random() * (high - low) + low);
}

export function clamp(num, min, max) {
	return num <= min ? min : num >= max ? max : num;
}
