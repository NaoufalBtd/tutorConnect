import UploadCard from "@components/composites/UploadCard/UploadCard";
import {
	Box,
	FormControl,
	FormControlLabel,
	FormControlLabelText,
	HStack,
	InputField,
	LabeledCheckbox,
	MenuSelect,
	Text,
	Input,
} from "@repo/ui";
import type React from "react";

interface indexProps {}

const index: React.FC<indexProps> = () => {
	return (
		<Box>
			<Text variant="h4">Teaching Certification</Text>

			<Text variant="body1">
				Upload a photo of yourself to help students get to know you better. This
				photo will be displayed on your public tutor profile.
			</Text>

			<Box my={5}>
				<LabeledCheckbox
					label="I don’t have a highre education degree"
					value="checked"
				/>
			</Box>

			<Box>
				<FormControl>
					<FormControlLabel>
						<FormControlLabelText>Univirsity</FormControlLabelText>
					</FormControlLabel>
					<Input>
						<InputField placeholder="E.g Cadii Ayaad" />
					</Input>
				</FormControl>
			</Box>

			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Degree</FormControlLabelText>
				</FormControlLabel>
				<Input>
					<InputField placeholder="E.g. Master degree" />
				</Input>
			</FormControl>

			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Field of study</FormControlLabelText>
				</FormControlLabel>
				<Input>
					<InputField placeholder="E.g. Computer Science" />
				</Input>
			</FormControl>

			<FormControl>
				<FormControlLabel>
					<FormControlLabelText>Years of study</FormControlLabelText>
				</FormControlLabel>

				<HStack space="md">
					<MenuSelect
						placeholder="Select year"
						options={[
							{
								label: "2010",
								value: "2010",
							},
							{
								label: "2011",
								value: "2011",
							},
						]}
					/>

					<MenuSelect
						label="Select year"
						options={[
							{
								label: "2010",
								value: "2010",
							},
							{
								label: "2011",
								value: "2011",
							},
						]}
					/>
				</HStack>
			</FormControl>

			<UploadCard
				title="Get a “Diploma verified” badge"
				description="Upload your diploma to boost your credibility! Our team will review it and add the badge to your profile. Once reviewed, your files will be deleted."
				buttonText="Upload"
				fileFormats={["jPG", "PNG"]}
				maxSize={5}
				mt="$10"
			/>
		</Box>
	);
};

export default index;
