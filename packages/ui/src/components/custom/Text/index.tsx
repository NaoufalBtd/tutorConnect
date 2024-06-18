import type { SxProps } from "@gluestack-style/react/lib/typescript/types";
import { Text as GText } from "@gluestack-ui/themed";
import type React from "react";

type GTextProps = React.ComponentProps<typeof GText>;
interface TextProps extends GTextProps {
	children: React.ReactNode;
	sx?: SxProps;
	variant?:
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "subtitle1"
		| "subtitle2"
		| "body1"
		| "body2"
		| "caption"
		| "overline";
}

const Text: React.FC<TextProps> = ({ children, variant, sx, ...props }) => {
	let additionalSx = {};
	switch (variant) {
		case "h1":
			additionalSx = { fontSize: 32, fontWeight: 700 };
			break;
		case "h2":
			additionalSx = { fontSize: 24, fontWeight: 700 };
			break;
		case "h3":
			additionalSx = { fontSize: 20, fontWeight: 700 };
			break;
		case "h4":
			additionalSx = { fontSize: 18, fontWeight: 700 };
			break;
		case "h5":
			additionalSx = { fontSize: 16, fontWeight: 700 };
			break;
		case "subtitle1":
			additionalSx = { fontSize: 14, fontWeight: 600 };
			break;
		case "subtitle2":
			additionalSx = { fontSize: 12, fontWeight: 600 };
			break;
		case "body1":
			additionalSx = { fontSize: 16, fontWeight: 400 };
			break;
		case "body2":
			additionalSx = { fontSize: 14, fontWeight: 400 };
			break;
		case "caption":
			additionalSx = { fontSize: 12, fontWeight: 400 };
			break;
		case "overline":
			additionalSx = { fontSize: 10, fontWeight: 400 };
			break;
	}

	sx = { ...sx, ...additionalSx };
	return (
		<GText sx={sx} {...props}>
			{children}
		</GText>
	);
};

export { Text };
export default Text;