import React, { useState } from "react";
import { View } from "styled-view";
import ProgressBar from "../src/ProgressBar";

export default {
	title: "ProgressBar"
};

export const _default = () => <ProgressBar color="blue" />;

export const withoutStaggering = () => <ProgressBar color="blue" isSmooth />;

export const styled = () => (
	<div>
		<View
			minHeight="90vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			margin="auto"
		>
			<View width="25%" padding={4} border="2px solid currentColor">
				<ProgressBar color="blue" height={10} />
			</View>
		</View>
	</div>
);

const WithNumberExample = () => {
	const [value, setValue] = useState(0);

	return (
		<div>
			<View
				minHeight="90vh"
				display="flex"
				alignItems="center"
				justifyContent="center"
				margin="auto"
			>
				{value === 100 ? (
					<View>Complete!</View>
				) : (
					<>
						<View
							width="25%"
							padding={4}
							border="2px solid currentColor"
						>
							<ProgressBar
								color="blue"
								height={10}
								onChange={setValue}
							/>
						</View>
						<View width={30} textAlign="center" fontSize={12}>
							{value}%
						</View>
					</>
				)}
			</View>
		</div>
	);
};
export const withNumber = () => <WithNumberExample />;
