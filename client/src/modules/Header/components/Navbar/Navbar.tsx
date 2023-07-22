import {NavLink} from "react-router-dom";
import {community, home} from "../../../../shared/constants/routes.ts";

export const Navbar = () => {
	return (
		<div>
			<NavLink to={home}>Головна</NavLink>
			<NavLink to={community}>Суспільство</NavLink>
		</div>
	);
};
