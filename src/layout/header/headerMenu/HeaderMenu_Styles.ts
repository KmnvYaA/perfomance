import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const MobileMenu = styled.nav``

const MobileMenuPopUp = styled.div<{$isOpen: boolean}>`
    position: fixed;
    background-color: ${theme.colors.primary200};
    inset: 0;
    z-index: 99999;
    display: none;

    ${({$isOpen}) => $isOpen && css`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ul {
        display: flex;
        gap: 30px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
const BurgerButton = styled.button`
    position: fixed;
    width: 45px;
    height: 38px;
    top: 20px;
    right: 20px;
    z-index: 100000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid ${theme.colors.primary300}
`
const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`

export const S = {
    MobileMenu,
    MobileMenuPopUp,
    BurgerButton,
    DesktopMenu
}