import React from 'react';
import {IconBase} from "../../../../components/icon/IconBase.tsx";
import {Menu} from "../../../../components/menu/Menu.tsx";
import {S} from './../HeaderMenu_Styles.ts';

export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    const [isOpen, setOpen] = React.useState(false)

    return (
        <S.MobileMenu>
            <S.BurgerButton type='button' onClick={() => setOpen(!isOpen)}>
                <IconBase
                    iconId={isOpen ? 'closeIcon' : 'burgerIcon'}
                    width="20px"
                    height="20px"
                    viewBox={"0 0 18 10"}
                />
            </S.BurgerButton >
            <S.MobileMenuPopUp $isOpen={isOpen}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopUp>


        </S.MobileMenu>
    );
};
