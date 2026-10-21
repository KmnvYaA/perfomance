import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const MobileMenu = styled.nav``

const MobileMenuPopUp = styled.div<{$isOpen: boolean}>`
    position: fixed;
    background-color: ${theme.colors.primary200};
    inset: 0;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 0.6s ease-in-out;
    
    ul {
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 1s ease-in-out;
    }
    
    ${({$isOpen}) => $isOpen && css`
        transform: translateY(0);
        
        & ul {
            gap: 30px;
        }
    `}

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