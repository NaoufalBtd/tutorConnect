import { Box } from "../../primitives";

type BoxType = React.ComponentProps<typeof Box>;

interface indexProps extends BoxType{
  children: React.ReactNode;

}

export const Container: React.FC<indexProps> = ({children, ...props}) => {
  return (
  <Box $md-maxWidth={"80%"} {...props}>
    {children}
  </Box>
  );
};

export default Container;