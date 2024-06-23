
"use client"
import ProgressStepper from "@components/modules/profileCompletion/ProgressStepper/ProgressStepper";
import { StepProvider } from "@providers/step-provider";
import { Box, BoxRow, HStack, HelpCircleIcon, Image } from "@repo/ui";
import type React from "react";

interface layoutProps {
	children: React.ReactNode;
}

const CompleteProfileLayout: React.FC<layoutProps> = ({ children }) => {

	return (
		<StepProvider>
			<Box>
				<BoxRow
					sx={{
						justifyContent: "space-between",
						alignItems: "center",
						py: 10,
						px: 5,
					}}
				>
					<Image source={{ uri: "https://via.placeholder.com/150" }} />

					<HStack space="md" alignItems="center">
						<HelpCircleIcon size="xl" />
						<Image source={{ uri: "https://via.placeholder.com/150" }} />
					</HStack>
				</BoxRow>

				<ProgressStepper
					steps={[
						{ label: "About", status: "completed", stepNumber: 1 },
						{ label: "Photo", status: "completed", stepNumber: 2 },
						{ label: "Certification", status: "current", stepNumber: 3 },
						{ label: "Education", status: "upcoming", stepNumber: 4 },
						{ label: "Description", status: "upcoming", stepNumber: 5 },
						{ label: "Video", status: "upcoming", stepNumber: 6 },
						{ label: "Availability", status: "upcoming", stepNumber: 7 },
						{ label: "Pricing", status: "upcoming", stepNumber: 8 },
					]}
				/>
				<Box $md-maxWidth={"80%"} $lg-maxWidth={"50%"} mx={"auto"} mt={"$9"}>
					{children}
				</Box>
			</Box>
		</StepProvider>
	);
};

export default CompleteProfileLayout;
