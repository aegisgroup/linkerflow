import {Route, Routes} from 'react-router-dom';
import {lazy} from 'react';
import {CssBaseline, GlobalStyles, ThemeProvider} from '@mui/material';
import {useMode} from './hooks/useMode.ts';
import {community, home} from "./core/constants/routes.ts";
import {Layout} from "./shared";

const HomePage = lazy(() => import('./pages/HomePage/HomePage.tsx'));
const CommunityPage = lazy(() => import('./pages/CommunityPage/CommunityPage.tsx'));

export const App = () => {
	const [themePalette, themeMode] = useMode();

	return (
		<ThemeProvider theme={themeMode}>
			<CssBaseline/>
			<GlobalStyles styles={{
				body: {
					backgroundColor: themePalette.primary.DEFAULT,
					transition: `background-color, color ${themeMode.transitions.duration.complex}ms linear`
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
