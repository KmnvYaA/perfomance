import {theme} from "../../styles/Theme.ts";
import styled from "styled-components";

const Header = styled.header`
    background-color: ${theme.colors.primary100};
    padding: 15px 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

export const S = {
    Header
}