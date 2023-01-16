// types
import { StackProps } from 'shared/core/layout/Stack/Stack.types';

// styles
import { StyledStack } from 'shared/core/layout/Stack/Stack.styles';

export const Stack = (props: StackProps) => {
	return <StyledStack {...props} />;
};
