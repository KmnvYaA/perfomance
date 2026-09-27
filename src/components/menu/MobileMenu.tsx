import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {IconBase} from "../icon/IconBase.tsx";

type MobileMenuProps = {
    menuItems: string[];
    isOpen: boolean;
}
export const MobileMenu = (props: MobileMenuProps) => {
    return (
        <StyledMenu>
            <BurgerButton isOpen={false}>
                <IconBase
                    iconId={props.isOpen ? 'closeIcon' : 'burgerIcon'}
                    width="20px"
                    height="20px"
                    viewBox={"0 0 18 10"}
                />
            </BurgerButton >
            <MobileMenuPopUp isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    })}

                </ul>
            </MobileMenuPopUp>


        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: none;

    @media ${theme.media.mobile} {
        display: block;

    }
`

const MobileMenuPopUp = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: ${theme.colors.primary200};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}> `
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
const BurgerButton = styled.button<{isOpen: boolean}>`
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

const ListItem = styled.li`

`

const Link = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.neutral200};

    &:hover {
        color: ${theme.colors.neutral100};
    }

`