import {community, contacts, home, links} from "../../../../shared/constants/routes.ts";
import {NavbarList, NavbarListItem, NavbarListLink} from "./Navbar.styled.tsx";
import {BiMoon, BiSun, BiUserCircle} from "react-icons/bi";

export const Navbar = () => {
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
		</div>
	);
};
