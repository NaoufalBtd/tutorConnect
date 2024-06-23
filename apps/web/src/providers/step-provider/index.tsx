import { createContext, useContext, useRef } from "react";

interface ActionContextType {
	registerNextAction: (action: () => void) => void;
	triggerNextAction: () => void;
}

const StepContext = createContext<ActionContextType | undefined>(undefined);

export const StepProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const nextActionRef = useRef<(() => void) | null>(null);

	const registerNextAction = (action: () => void) => {
		nextActionRef.current = action;
	};

	const triggerNextAction = () => {
		if (nextActionRef.current) {
			nextActionRef.current();
		}
	};

	return (
		<StepContext.Provider value={{ registerNextAction, triggerNextAction }}>
			{children}
		</StepContext.Provider>
	);
};

export const useStepContext = (): ActionContextType => {
	const context = useContext(StepContext);
	if (!context) {
		throw new Error("useActionContext must be used within an ActionProvider");
	}
	return context;
};
