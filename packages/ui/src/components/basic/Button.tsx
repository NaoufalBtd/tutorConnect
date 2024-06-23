import { ButtonSpinner, ButtonText, Button as GButton } from "@gluestack-ui/themed";
import type { ButtonProps as GButtonProps } from "../../types";
import { ConditionalRenderer } from "../custom";

interface ButtonProps extends GButtonProps {
	text?: string;
	children?: React.ReactNode;
	isLoading?: boolean;
	_textSx?: React.ComponentProps<typeof ButtonText>["sx"];
}

export const Button: React.FC<ButtonProps> = ({
	children,
	text,
	_textSx,
	isLoading,
	...props
}) => {
	return (
		<GButton {...props}>
			<ConditionalRenderer condition={Boolean(isLoading)}>
				<ButtonSpinner mr="$1" />
			</ConditionalRenderer>
			<ButtonText sx={_textSx}>{text}</ButtonText>
			{children}
		</GButton>
	);
};

export default Button;
