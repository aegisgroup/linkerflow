import {Header} from "../Header/Header.tsx";
import {Container} from "../../shared/styles/Common.styled.tsx";
import {Suspense, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {Footer} from "../Footer/Footer.tsx";
import {Loader} from "../Loader/Loader.tsx";

export const Layout = () => {
	const [isLoad, setIsLoad] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoad(true);
		}, 500)
	}, [])

	return (
		<>
			{isLoad ?
				<>
				<Header/>
				<Container>
					<Suspense fallback={<Loader/>}>
						<Outlet/>
					</Suspense>
				</Container>
				<Footer/>
				</>
				: <Loader/>
			}

		</>
	);
};
