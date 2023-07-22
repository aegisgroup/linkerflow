import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
import {community, home} from "./shared/constants/routes.ts";
import {Layout} from "./modules/Layout/Layout.tsx";

const HomePage = lazy(() => import('./pages/HomePage/HomePage.tsx'));
const CommunityPage = lazy(() => import('./pages/CommunityPage/CommunityPage.tsx'));

export const App = () => {
	return (
		<Routes>
			<Route path={home} element={<Layout/>}>
				<Route path={home} element={<HomePage/>}/>
				<Route path={community} element={<CommunityPage/>}/>
			</Route>
		</Routes>
	);
};
