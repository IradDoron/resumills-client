// imports from 3rd party libraries
import { styled } from '@mui/material/styles';

// components
import { Card } from 'shared/core/surfaces';

export const StyledCard = styled(Card)(({ theme }) => ({
	padding: theme.spacing(2),
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
}));
