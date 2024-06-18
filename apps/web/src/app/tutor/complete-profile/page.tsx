"use client";

import {
	Box,
	FormControl,
	Icon,
	Input,
	InputField,
	InputIcon,
	Select,
	SelectBackdrop,
	SelectContent,
	SelectDragIndicator,
	SelectDragIndicatorWrapper,
	SelectIcon,
	SelectInput,
	SelectItem,
	SelectPortal,
	SelectTrigger,
	Text,
	VStack,
	MenuSelect,
	CheckboxIndicator,
	CheckboxIcon,
	CheckboxLabel,
	Checkbox,
	CheckIcon,
	Button,
} from "@repo/ui";
import type React from "react";
import { ChevronDownIcon } from "lucide-react-native";

// interface pageProps {}

const page: React.FC = () => {

	return (
		<Box>
			<Box $lg-w="55%" $md-w="80%" $sm-w="100%" mx="auto">
				<Text size="xl" bold my={4}>
					Sign up as a tutor
				</Text>

				<Text color="$text500" lineHeight="$xs">
					Start creating your public tutor profile. Your progress will be
					automatically saved as you complete each section. You can return at
					any time to finish your registration.
				</Text>

				<FormControl p="$4">
					<VStack space="xl">
						<VStack space="xl">
							<VStack space="xs">
								<Text color="$text500" lineHeight="$xs">
									First name
								</Text>
								<Input>
									<InputField type="text" />
								</Input>
							</VStack>
						</VStack>

						<VStack space="xs">
							<Text color="$text500" lineHeight="$xs">
								Last name
							</Text>
							<Input>
								<InputField type="text" />
							</Input>
						</VStack>

						<VStack space="xs">
							<Text color="$text500" lineHeight="$xs">
								Country of origin
							</Text>
							<MenuSelect
								showIcon={true}
								options={[{ label: "canada", value: "test" }]}
							/>
						</VStack>

						<VStack space="xs">
							<Checkbox
								value="remember_me"
								size="md"
								isInvalid={false}
								isDisabled={false}
							>
								<CheckboxIndicator mr="$2">
									<CheckboxIcon as={CheckIcon} />
								</CheckboxIndicator>
								<CheckboxLabel>Remember me</CheckboxLabel>
							</Checkbox>
						</VStack>

						<Box sx={{display: "flex", alignItems: "flex-end"}}>
							<Button variant="solid" size="lg">
								save and continue
							</Button>
						</Box>
					</VStack>
				</FormControl>
			</Box>
		</Box>
	);
};

export default page;
