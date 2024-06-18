import React from "react";
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
} from "@gluestack-ui/themed";
import { ChevronDownIcon } from "lucide-react-native";

interface indexProps {
	showIcon?: boolean;
	options: {
		label: string;
		value: string;
	}[];
  _selectProps?: typeof Select;
  _selectTriggerProps?: typeof SelectTrigger;
  _selectInputProps?: typeof SelectInput;
}

const index: React.FC<indexProps> = ({ showIcon, options, _selectProps, _selectInputProps, _selectTriggerProps   }) => {
	return (
		<Select {..._selectProps}>
			<SelectTrigger variant="outline">
				<SelectInput placeholder="Select option" {..._selectInputProps} />
				{showIcon && (
					<SelectIcon>
						<Icon as={ChevronDownIcon} />
					</SelectIcon>
				)}
			</SelectTrigger>
			<SelectPortal>
				<SelectBackdrop />
				<SelectContent>
					<SelectDragIndicatorWrapper>
						<SelectDragIndicator />
					</SelectDragIndicatorWrapper>
					{options.map((option) => (
						<SelectItem label={option.label} value={option.value} />
					))}
				</SelectContent>
			</SelectPortal>
		</Select>
	);
};

export const MenuSelect = index;
export default index;
