import {theme} from "../../styles/Theme.ts";
import styled from "styled-components";

const Link = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.neutral200};
    &:hover {
        color: ${theme.colors.neutral100};
    }
    
`

export const S = {
    Link
}