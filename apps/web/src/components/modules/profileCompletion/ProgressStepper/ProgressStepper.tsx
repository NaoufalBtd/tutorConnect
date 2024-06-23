import { BoxRow } from '@repo/ui';
import type React from 'react';
import ProgressStep from './ProgressStep';

interface ProgressStepperProps {
	steps: {
		stepNumber: number;
		label: string;
		status: "completed" | "current" | "upcoming";
	}[];
	currentStep: number;
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({steps, currentStep}) => {
  return (
    <BoxRow sx={{
      bgColor: "$backgroundDark400",
      p: 5,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <BoxRow>
        {
          steps.map((step, index)=> (
            <ProgressStep step={step} steps={steps} index={index} key={step.stepNumber} />
          ))
        }
        </BoxRow>
    </BoxRow>
		);
};

export default ProgressStepper;