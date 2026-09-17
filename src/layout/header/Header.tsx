import React from 'react';

import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

const items = ["Main","About","Skills","Resume","Portfolio","Contacts"]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>


        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    
    display: flex;
    justify-content: space-between;
`