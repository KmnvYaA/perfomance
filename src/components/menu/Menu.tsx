import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Main</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Resume</a>
                </li>
                <li>
                    <a href="">Portfolio</a>
                </li>
                <li>
                    <a href="">Contacts</a>
                </li>
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