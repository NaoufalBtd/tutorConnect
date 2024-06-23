"use client";
import { Box, BoxRow, Icon, Text, useMedia } from "@repo/ui";
import type React from "react";

import { CheckIcon, ChevronRight } from "lucide-react-native";

interface ProgressStepProps {
	step: {
		stepNumber: number;
		label: string;
		status: "completed" | "current" | "upcoming";
	};
	index: number;
	steps: {
		stepNumber: number;
		label: string;
		status: "completed" | "current" | "upcoming";
	}[];
}

const ProgressStep: React.FC<ProgressStepProps> = ({
	step,
	index,
	steps,
	...props
}) => {
	const media = useMedia();
	console.log(media);
	const currentStepIndex = steps.findIndex((el) => el.status === "current");
	return (
		<BoxRow sx={{ alignItems: "center" }} {...props}>
			<BoxRow sx={{ alignItems: "center" }} ml={5} mr={5}>
			<Box
				sx={{
					justifyContent: "center",
					alignItems: "center",
					width: 30,
					height: 30,
					borderRadius: "$lg",
					backgroundColor:
						step.status === "completed"
							? "#4caf50"
							: step.status === "current"
								? "#2196f3"
								: "#e0e0e0",
					// color: step.status === "upcoming" ? "#000000" : "#ffffff",
				}}
			>
					{step.status === "completed" ? (
						<Icon as={CheckIcon} size="md" color="#ffffff" />
					) : (
						<Text>{step.stepNumber}</Text>
					)}
				</Box>
				{media.lg && (
					<Text
						sx={{
							ml: 5,
							color: "#333333",
						}}
					>
						{step.label}
					</Text>
				)}
			</BoxRow>

			{currentStepIndex < steps.length - 1 && media.sm && (
				<Icon
					as={ChevronRight}
					sx={{
						ml: 8,
						mr: 8,
						color: "#999999",
					}}
				/>
			)}
		</BoxRow>
	);
};

export default ProgressStep;
