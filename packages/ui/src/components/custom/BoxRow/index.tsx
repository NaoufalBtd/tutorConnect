import { Box } from "@gluestack-ui/themed";
import type React from "react";

type BoxType = React.ComponentProps<typeof Box>;
interface indexProps extends BoxType {
	children: React.ReactNode;
}

const BoxRow: React.FC<indexProps> = ({ children, ...props }) => {
	return (
		<Box flexDirection="row" {...props}>
			{children}
		</Box>
	);
};

export { BoxRow };

export default BoxRow;
