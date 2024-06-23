"use client"
import { useStepContext } from "@providers/step-provider";
import { Box, Button, HStack } from "@repo/ui";

interface templateProps {
  children: React.ReactNode;
}

const Template: React.FC<templateProps> = ({children}) => {
	const { triggerNextAction } = useStepContext();

  return (
			<>
				{children}

				<Box flexDirection="row" justifyContent="flex-end" mt="$10">
					<HStack space="md">
						<Button variant="outline" size="lg" text="Back" />
						<Button onPress={() => {
              console.log(triggerNextAction);
              triggerNextAction();
            }} variant="solid" size="lg" text="Save and Continue" />
					</HStack>
				</Box>
			</>
		);
};

export default Template;