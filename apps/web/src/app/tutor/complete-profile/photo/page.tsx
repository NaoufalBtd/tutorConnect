"use client";
import { Box, Button, Divider, HStack, Icon, Image, Text, VStack } from "@repo/ui";
import { CheckIcon } from "lucide-react-native";
import type React from "react";

interface pageProps {}

const page: React.FC<pageProps> = () => {
	return (
		<Box>
			<Text fontWeight={"bold"} size="xl">
				Profile photo
			</Text>
			<Text>
				Upload a photo of yourself to help students get to know you better. This
				photo will be displayed on your public tutor profile.
			</Text>
			<Divider my={"$4"} />
			<Box>
				<HStack space="xl">
					<Box
						sx={{
							border: "1px dashed",
							borderColor: "gray",
							borderRadius: "$md",
							p: 4,
							width: "200px",
							height: "200px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							bgColor: "$blueGray300",
						}}
					>
						<Text>Upload a photo</Text>
						<Text color="gray">JPG or PNG</Text>
						<Text color="gray">Max file size: 5MB</Text>
					</Box>
					<Box>
						<Text>Naoufal B.</Text>
						<HStack>
							<Text>job title</Text>
						</HStack>
					</Box>
				</HStack>
			</Box>
			<Divider my={"$4"} />

			<Button
				variant="outline"
				size="lg"
				sx={{
					width: "100%",
          mx: 5
				}}
			>
				Upload new photo
			</Button>

			<Box my="$4">
				<Text color="gray">What your photo should look like</Text>
				<HStack space="sm">
					<Box>
						<Image
							source={{
								uri: "https://via.placeholder.com/150",
							}}
							alt="placeholder"
						/>
					</Box>
				</HStack>

				<VStack space="sm" my={"$5"}>
					<HStack space="md" alignItems="center">
						<Icon as={CheckIcon} />
						<Text>Face the camera</Text>
					</HStack>
					<HStack>
						<Icon as={CheckIcon} />
						<Text>Use a neutral background</Text>
					</HStack>
					<HStack>
						<Icon as={CheckIcon} />
						<Text>Use good lighting</Text>
					</HStack>
					<HStack>
						<Icon as={CheckIcon} />
						<Text>Wear professional attire</Text>
					</HStack>
				</VStack>
			</Box>
		</Box>
	);
};

export default page;
