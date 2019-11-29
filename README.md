# ⏳ ProgressKit

[![Build Status](https://travis-ci.org/ItsJonQ/progress-kit.svg?branch=master)](https://travis-ci.org/ItsJonQ/progress-kit)

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

The `useProgressState` hook is inspired by the patterns from [Reakit](https://reakit.io/).

```jsx
import React from "react";
import { View } from "styled-view";
import { progressDefaultProps, useProgressState } from "progress-kit";

export const defaultProps = {
	...progressDefaultProps,
	color: "currentColor",
	height: 20,
	transition: "all 200ms ease"
};

export function MyProgressBar(props) {
	const { color, transition, height, ...restProps } = props;

	const { progress, progressProps } = useProgressState(props);

	const barCssProps = {
		backgroundColor: color,
		height,
		transition
	};

	return (
		<View
			{...progressProps}
			{...barCssProps}
			style={{
				width: `${progressStateProps.progress}%`
			}}
		/>
	);
}

MyProgressBar.defaultProps = defaultProps;

export default ProgressBar;
```
