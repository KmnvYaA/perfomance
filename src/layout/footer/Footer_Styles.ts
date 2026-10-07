import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Footer = styled.footer`
    border-top: 2px solid ${theme.colors.primary300};
    background-color: ${theme.colors.primary400};;
    min-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    
    @media ${theme.media.tablet} {
        min-height: 15vh;
    }

`

const Name = styled.span`
    @media ${theme.media.tablet} {
        font-size: 15px;
    }
`

const Copyright = styled.small``

export const S = {
    Footer,
    Name,
    Copyright
}