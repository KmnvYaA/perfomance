import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
             
            </ul>


        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
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