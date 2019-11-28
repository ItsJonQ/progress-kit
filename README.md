# ⏳ ProgressKit

> A Progress Component Toolkit for React

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [Installation](#installation)
-   [Usage](#usage)
    -   [Ready-made Progress Indicators](#ready-made-progress-indicators)
    -   [Creating your own](#creating-your-own)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install progress-kit
```

## Usage

### Ready-made Progress Indicators

```jsx
import React from "react";
import { ProgressBar } from "progress-kit";

function Example() {
	return <ProgressBar />;
}
```

### Creating your own

```jsx
import React from "react";
import { View } from "styled-view";
import { Progress, progressDefaultProps, useProgressState } from "progress-kit";

export const defaultProps = {
	...progressDefaultProps,
	color: "currentColor",
	height: 20,
	transition: "all 200ms ease"
};

export function MyProgressBar(props) {
	const {
		color,
		onChange,
		progress,
		transition,
		height,
		...restProps
	} = props;

	const progressStateProps = useProgressState(props);

	const barCssProps = {
		backgroundColor: color,
		height,
		transition: props.isSmooth ? null : transition
	};

	return (
		<>
			<Progress {...progressStateProps} {...restProps} />
			<View
				{...progressStateProps}
				{...barCssProps}
				style={{
					width: `${progressStateProps.progress}%`
				}}
			/>
		</>
	);
}

MyProgressBar.defaultProps = defaultProps;

export default ProgressBar;
```
