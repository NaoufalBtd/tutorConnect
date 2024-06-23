import { Button, Box, Text } from "@repo/ui";
import type { BoxProps } from "@repo/ui";


interface UploadBoxProps extends BoxProps {
  title: string;
	description: string;
	buttonText: string;
	fileFormats: string[];
	maxSize: number;
}

const UploadCard: React.FC<UploadBoxProps> = ({
	title,
	description,
	buttonText,
	fileFormats,
	maxSize,
	...props
}) => {
	return (
		<Box sx={{ p: "$5", my: 5, bgColor: "#f4f4f8" }} {...props}>
			<Text variant="h4">{title}</Text>
			<Text variant="body1">
				{description}
			</Text>

			<Text mt="$5" variant="body1">{fileFormats.join(", ")}; maximum size: {maxSize}MB</Text>

			<Box sx={{ flexDirection: "row", justifyContent: "flex-start", mt: "$5" }}>
				<Button variant="outline" text={buttonText} />
			</Box>
		</Box>
	);
};

export default UploadCard;