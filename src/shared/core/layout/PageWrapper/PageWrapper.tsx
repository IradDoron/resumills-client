// components
import { StyledPageWrapper } from 'shared/core/layout/PageWrapper/PageWrapper.styles';

// types
import { PageWrapperProps } from 'shared/core/layout/PageWrapper/PageWrapper.types';

export const PageWrapper = ({ children }: PageWrapperProps) => {
	return <StyledPageWrapper>{children}</StyledPageWrapper>;
};
