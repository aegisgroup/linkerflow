import {community, contacts, home, links} from "../../../../shared/constants/routes.ts";
import {NavbarList, NavbarListItem, NavbarListLink} from "./Navbar.styled.tsx";
import {BiMoon, BiSun, BiUserCircle} from "react-icons/bi";
import {SvgSelector} from "../../../SvgSelector/SvgSelector.tsx";
import {useEffect, useState} from "react";

export const Navbar = () => {
	const [feature, setFeature] = useState(false);

	useEffect(() => {
		const data = new Date;
		const parts = data.toLocaleTimeString().split(" ")[0];

		// if (parts > "00:00:00") {
		// 	setFeature(true);
		// }
	}, [])

	return (
		<div>
			<NavbarList>
				<NavbarListLink to={home}>Головна</NavbarListLink>
				<NavbarListLink to={community}>Суспільство</NavbarListLink>
				<NavbarListLink to={links}>Лінки</NavbarListLink>
				<NavbarListLink to={contacts}>Контакти</NavbarListLink>
			</NavbarList>

			<NavbarList>
				<NavbarListItem><BiSun/></NavbarListItem>
				<NavbarListItem><BiMoon/></NavbarListItem>
				<NavbarListItem><BiUserCircle/></NavbarListItem>
			</NavbarList>

			<NavbarList>
				<NavbarListItem><SvgSelector data="brush"/></NavbarListItem>
				<NavbarListItem><SvgSelector data="ua-flag" feature={feature}/></NavbarListItem>
				<NavbarListItem><SvgSelector data="uk-flag"/></NavbarListItem>
			</NavbarList>

		</div>

	);
};
