import {Route, Routes} from 'react-router-dom';
import {lazy} from 'react';
import {CssBaseline, GlobalStyles, ThemeProvider} from '@mui/material';
import {palette} from './theme/palette.ts';
import {Layout} from './modules';
import {useMode} from './hooks/useMode.ts';
import {community, home} from "./core/constants/routes.ts";

const HomePage = lazy(() => import('./pages/HomePage/HomePage.tsx'));
const CommunityPage = lazy(() => import('./pages/CommunityPage/CommunityPage.tsx'));

export const App = () => {
	const theme = useMode();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<GlobalStyles styles={{
				body: {
					backgroundColor: palette(theme.palette.mode).primary.DEFAULT,
					transition: `background-color, color ${theme.transitions.duration.complex}ms linear`
				}
			}}/>

			<Routes>
				<Route path={home} element={<Layout/>}>
					<Route path={home} element={<HomePage/>}/>
					<Route path={community} element={<CommunityPage/>}/>
				</Route>
			</Routes>
		</ThemeProvider>
	);
};
