"use client";
import {
	Box,
	Button,
	ButtonIcon,
	FormControl,
	FormControlLabel,
	FormControlLabelText,
	HStack,
	Input,
	InputField,
	LabeledCheckbox,
	MenuSelect,
	Text,
} from "@repo/ui";
import type React from "react";

import { Trash2 } from "lucide-react-native";

interface pageProps {}

const page: React.FC<pageProps> = () => {
	return (
		<Box>
			<Text variant="h4">Teaching Certification</Text>

			<Text variant="body1">
				Upload a photo of yourself to help students get to know you better. This
				photo will be displayed on your public tutor profile.
			</Text>

			<Box my={5}>
				<LabeledCheckbox
					label="I don’t have a teaching certificate"
					value="checked"
				/>
			</Box>

			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Subject</FormControlLabelText>
				</FormControlLabel>
				<HStack space={"md"} alignItems="center">
					<MenuSelect
						label="Country"
						placeholder="Select country"
						showIcon
						options={[
							{
								label: "English",
								value: "english",
							},
							{
								label: "French",
								value: "french",
							},
						]}
					/>
					<Button variant="link">
						<ButtonIcon as={Trash2} />
					</Button>
				</HStack>
			</FormControl>

			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Certificate</FormControlLabelText>
				</FormControlLabel>
				<MenuSelect
					placeholder="Choose certificate"
					showIcon
					options={[
						{
							label: "English",
							value: "english",
						},
						{
							label: "French",
							value: "french",
						},
					]}
				/>
			</FormControl>

			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Description</FormControlLabelText>
				</FormControlLabel>

				<Input>
					<InputField placeholder="Write a short description of your certificate" />
				</Input>
			</FormControl>

			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Issued By</FormControlLabelText>
				</FormControlLabel>

				<Input>
					<InputField placeholder="Write a short description of your certificate" />
				</Input>
			</FormControl>

			<Box sx={{ p: 5, my: 5, bgColor: "#f4f4f8" }}>
				<Text variant="h4">Get a "Certificate verified" badge</Text>
				<Text variant="body1">
					Upload your certificate to boost your credibility! Our team will
					review it and add the badge to your profile. Once reviewed, your files
					will be deleted.
				</Text>
				<Text variant="body1">JPG or PNG format; maximum size of 20MB.</Text>

				<Box sx={{flexDirection: "row", justifyContent: "flex-start"}}>
					<Button variant="outline">Upload certificate</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default page;
