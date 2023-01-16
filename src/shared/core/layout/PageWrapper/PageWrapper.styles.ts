// imports from 3rd party libraries
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPageWrapper = styled(Box)(({ theme }) => ({
	maxWidth: '1200px', // TODO: move to theme
	margin: '0 auto',
}));
