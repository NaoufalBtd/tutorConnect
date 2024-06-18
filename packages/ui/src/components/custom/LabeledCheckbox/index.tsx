import { CheckIcon } from "lucide-react-native";
import type React from "react";
import {
	Checkbox,
	CheckboxIndicator,
	CheckboxIcon,
	CheckboxLabel,

} from "@gluestack-ui/themed";

type CheckboxType = React.ComponentProps<typeof Checkbox>;
interface indexProps extends CheckboxType {
	label: string;
	checkIcon?: React.ReactNode;
}

const LabeledCheckbox: React.FC<indexProps> = ({label, checkIcon, ...props}) => {
	return (
		<Checkbox size="md" isInvalid={false} isDisabled={false} {...props}>
			<CheckboxIndicator mr="$2">
				<CheckboxIcon as={CheckIcon} />
			</CheckboxIndicator>
			<CheckboxLabel>{label}</CheckboxLabel>
		</Checkbox>
	);
};

export { LabeledCheckbox };
export default LabeledCheckbox;
