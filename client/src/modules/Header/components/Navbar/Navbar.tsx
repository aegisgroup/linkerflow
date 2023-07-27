import {NavbarContainer, NavbarList, NavbarListItem, NavbarListLink} from "./Navbar.styled.tsx";
import {BiMoon, BiSun, BiUserCircle} from "react-icons/bi";
import {SvgSelector} from "../../../SvgSelector/SvgSelector.tsx";
import {useEffect, useState} from "react";
import {palette} from "../../../../theme/palette.ts";
import {useMode} from "../../../../hooks/useMode.ts";
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {Theme} from "../../../../core/enum/theme.ts";
import {changeTheme} from "../../../../store/slices/theme/theme.slice.ts";

export const Navbar = () => {
	const theme = useMode();
	const themeMode = useSelector(state => state.theme.theme)
	const dispatch = useDispatch();

	const [feature, setFeature] = useState(false);
	useEffect(() => {
		const data = new Date;
		const parts = data.toLocaleTimeString().split(" ")[0];
		// if (parts > "00:00:00") {
		// 	setFeature(true);
		// }
	}, [])

	const themePalette = palette(theme.palette.mode);

	const navbarLinks = {
		"/": "Головна",
		community: "Суспільство",
		links: "Лінки",
		contacts: "Контакти",
	}

	return (
		<NavbarContainer>
			<NavbarList>
				{Object.entries(navbarLinks).map(link =>
					<NavbarListLink
						key={uuidv4()}
						accentprimary={themePalette.accentPrimary}
						color={themePalette.primary[500]}
						to={link[0]}>{link[1]}</NavbarListLink>)}
			</NavbarList>

			<NavbarList>
				<NavbarListItem onClick={() => dispatch(changeTheme(themeMode))}>
					{themeMode === Theme.LIGHT ? <BiMoon/> : <BiSun/>}
				</NavbarListItem>
				<NavbarListItem><BiUserCircle/></NavbarListItem>
			</NavbarList>

			<NavbarList>
				<NavbarListItem><SvgSelector data="brush"/></NavbarListItem>
				<NavbarListItem><SvgSelector data="ua-flag" feature={feature}/></NavbarListItem>
				<NavbarListItem><SvgSelector data="uk-flag"/></NavbarListItem>
			</NavbarList>
		</NavbarContainer>
	);
};
