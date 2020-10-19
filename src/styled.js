import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const activeClassName = "active";

export const StyledNav = styled.nav`

`;

export const StyledUl = styled.ul`
    background: hsl(180,100%,25%);
    padding: 30px;
    margin: 0;
    display: grid;
    list-style: none;
    grid-template-columns: 90px 90px;
    justify-content:center;
    box-shadow: 0 0 20px 20px #CCCCCC;
`;

export const StyledLi = styled.li`
    text-decoration: none;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName} {
        color: white;
    }

    text-decoration: none;
    font-size: 20px;
`;