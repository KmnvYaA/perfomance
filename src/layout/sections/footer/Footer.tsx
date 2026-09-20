import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Social} from "../../../components/Social.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Yana Lyubina</Name>
                <Social/>
                <Copyright>2026 Yana Lyubina, All Rights Reserved</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background: #453438;
    min-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Name = styled.span`

`
const Copyright = styled.small`

`