let _styleKeys = [];
let _didAttemptToGetStyleKeys = false;

export function noop() {
	return null;
}

export function randomNumber(low, high) {
	return Math.floor(Math.random() * (high - low) + low);
}

export function clamp(num, min, max) {
	return num <= min ? min : num >= max ? max : num;
}

export function isValidCssValue(value) {
	return typeof value === "number" || typeof value === "string";
}

export function isValidCssPropKey(key) {
	return _styleKeys.length && _styleKeys.includes(key);
}

export function transformToCssProps(props) {
	if (!_didAttemptToGetStyleKeys && document.documentElement) {
		const styles = Object.keys(document.documentElement.style);
		_styleKeys = styles;
		_didAttemptToGetStyleKeys = true;
	}

	const keys = Object.keys(props);

	return keys.reduce((nextProps, key) => {
		const value = props[key];
		if (isValidCssValue(value) && isValidCssPropKey(key)) {
			return {
				...nextProps,
				[key]: value
			};
		}
		return nextProps;
	}, {});
}
