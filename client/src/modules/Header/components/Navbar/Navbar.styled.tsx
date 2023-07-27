import styled from '@emotion/styled';
import {NavLink} from "react-router-dom";


export const NavbarContainer = styled.div`
  display: flex;
`;

export const NavbarList = styled.ul`
  display: flex;
	align-items: center;
	gap: 60px;
`;

export const NavbarListLink = styled(NavLink)`
  &.active {
    color: ${({accentprimary}) => accentprimary};
  }

  color: ${({color}) => color};
`;

export const NavbarListItem = styled.li`

`;
