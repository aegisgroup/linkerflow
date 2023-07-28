import {Navbar} from "./components/Navbar/Navbar.tsx";
import {HeaderContainer} from "./Header.styled.tsx";
import {useMode} from "../../hooks/useMode.ts";

export const Header = () => {
	const [themePalette] = useMode();

	return (
		<HeaderContainer color={themePalette.primary[400]}>
			<Navbar/>
		</HeaderContainer>
	);
};
