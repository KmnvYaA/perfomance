import React from 'react';
// import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {TitleSection} from "../../../components/TitleSection.tsx";
import styled from "styled-components";
import {PersonalCard} from "./PersonalCard.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>

                <TitleSection back={"ABOUT ME"} front={"Know me better"}/>
                <PageWrapper>
                    <FlexWrapper gap={'10px'} direction={'column'}>
                        <StyledTitleAbout>
                            From design to programming
                        </StyledTitleAbout>
                        <StyledTextAbout>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ea quia! Doloremque est
                            ipsa ipsam ipsum officia placeat reiciendis sequi. Aliquid distinctio dolorem ea excepturi
                            ipsa ipsam ipsum officia placeat reiciendis sequi. Aliquid distinctio dolorem ea excepturi
                            ipsa ipsam ipsum officia placeat reiciendis sequi. Aliquid distinctio dolorem ea excepturi
                            ipsa ipsams ipsum officia placeat reiciendis sequi. Aliquid distinctio dolorem ea excepturi

                        </StyledTextAbout>
                        <StyledTextAbout>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quia.
                        </StyledTextAbout>
                    </FlexWrapper>
                    <PersonalCard/>
                </PageWrapper>
            </Container>

        </StyledAboutMe>
    );
};
const StyledAboutMe = styled.section`
    min-height: max-content;
`
const StyledTitleAbout = styled.h3`
    font-size: 24px;
    color: ${theme.colors.neutral100};
    margin-bottom: 10px;
    font-weight: 600;
`

const StyledTextAbout = styled.p`
    font-size: 15px;
    color: ${theme.colors.neutral200};
    line-height: 1.8;
`
const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
`