import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const activeClassName = "active";

export const StyledNav = styled.nav`
    padding: 20px;
`;

export const StyledUl = styled.ul`
    background: green;
    padding: 30px;
    display: grid;
    list-style: none;
    grid-template-columns: 90px 90px;
    justify-content:center;
`;

export const StyledLi = styled.li`
    text-decoration: none;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName} {
        color: blue;
    }

    text-decoration: none;
    font-size: 20px;
`;