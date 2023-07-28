import styled from '@emotion/styled';
import {NavLink} from "react-router-dom";
import {mainContainer} from "../../../../core/constants/constants.ts";


export const NavbarContainer = styled.div`
  max-width: ${mainContainer};
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarList = styled.ul`
  &.pagesLinks {
    column-gap: 60px;
  }

  &.customizeLinks {
    column-gap: 30px;
  }

  display: flex;
  align-items: center;
`;

export const NavbarListLink = styled(NavLink)`
  display: flex;

  &.active {
    color: ${({accentprimary}) => accentprimary};
    text-shadow: 0 0 10px ${({accentprimary}) => accentprimary};
  }

  &.profile {
    font-size: 35px;
  }

  font-size: 20px;
  font-weight: 600;

  color: ${({color}) => color};
`;

export const NavbarListItem = styled.li`
  cursor: pointer;
  display: flex;
  font-size: 25px;
`;
