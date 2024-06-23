"use client";;
import { useState } from "react";
import {
	Text,
	Box,
	FormControl,
	VStack,
	Input,
	Button,
	InputSlot,
	InputIcon,
	InputField,
	Checkbox,
	CheckboxIndicator,
	CheckboxIcon,
	CheckboxLabel,
} from "@repo/ui";
import { EyeIcon, EyeOffIcon, CheckIcon } from "lucide-react-native";

export default function TutorSignup() {
    const [showPassword, setShowPassword] = useState(false);
				const handleState = () => {
					setShowPassword((showState) => {
						return !showState;
					});
				};
				return (
					<Box>
						<Box $lg-w="55%" $md-w="80%" $sm-w="100%" mx="auto">
							<Text size="xl" bold>
								Sign up as a tutor
							</Text>

							<FormControl p="$4">
								<VStack space="xl">
									<VStack space="xs">
										<Text color="$text500" lineHeight="$xs">
											Email
										</Text>
										<Input>
											<InputField type="text" />
										</Input>
									</VStack>
									<VStack space="xs">
										<Text color="$text500" lineHeight="$xs">
											Password
										</Text>
										<Input>
											<InputField type={showPassword ? "text" : "password"} />
											<InputSlot pr="$3" onPress={handleState}>
												{/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
												<InputIcon
													as={showPassword ? EyeIcon : EyeOffIcon}
													color="$darkBlue500"
												/>
											</InputSlot>
										</Input>
									</VStack>

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

									<Button
										ml="auto"
										width="100%"
										onPress={() => {
											//todo: handle the submit
										}}
										text="Get started"
										_textSx={{ color: "$white" }}
									/>
								</VStack>
							</FormControl>
						</Box>
					</Box>
				);
}
