import {theme} from "../../styles/Theme.ts";
import styled from "styled-components";
import {Link} from "react-scroll";

const NavLink = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.neutral200};
    &:hover, &.active {
        color: ${theme.colors.neutral100};
        font-weight: 600;
       transition: ${theme.animations.transition};
    }
    
`

export const S = {
    NavLink
}