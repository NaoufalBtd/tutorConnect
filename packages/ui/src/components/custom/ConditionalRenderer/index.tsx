interface indexProps {
	condition: boolean;
	children: React.ReactNode;
}

export const ConditionalRenderer: React.FC<indexProps> = ({ children, condition }) => {
	return condition ? <>{children}</> : null;
};

export default ConditionalRenderer;
