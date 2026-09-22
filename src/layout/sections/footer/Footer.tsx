import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Social} from "../../../components/Social.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"} gap={"15px"} >
                    <Name>Yana Lyubina</Name>
                    <Social/>
                    <Copyright>2026 Yana Lyubina, All Rights Reserved</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    border-top: 2px solid ${theme.colors.primary300};
    background-color: ${theme.colors.primary400};;
    min-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;

`
const Name = styled.span`

`
const Copyright = styled.small`

`