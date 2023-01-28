// imports from 3rd party libraries
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

// components
import { NavBar } from 'components/NavBar';
import { PageWrapper } from 'shared/core/layout/PageWrapper';
import { MySkills } from 'views/MySkills/MySkills';

// helpers
import { getDesignTokens } from 'utils/helpers/themeHelpers';

// store
import { skillsState, themeState } from 'store';

// data
import { mySkills } from 'data/mySkills';

export const App = () => {
	const theme = useRecoilValue(themeState);
	const setSkills = useSetRecoilState(skillsState);

	useEffect(() => {
		setSkills(mySkills);
	}, [setSkills]);

	return (
		<>
			<ThemeProvider theme={createTheme(getDesignTokens(theme))}>
				<CssBaseline />

				<NavBar />
				<PageWrapper>
					<MySkills />
				</PageWrapper>
			</ThemeProvider>
		</>
	);
};
