import React from 'react';
// import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {TitleSection} from "../../../components/TitleSection.tsx";
import styled from "styled-components";
import {PersonalCard} from "./PersonalCard.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <TitleSection back={"ОБО МНЕ"} front={"Узнайте меня получше"}/>
            <PageWrapper>
                <FlexWrapper gap={'10px'} direction={'column'}  >
                    <StyledTitleAbout>
                        Из проектирования в программирование
                    </StyledTitleAbout>
                    <StyledTextAbout>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ea quia! Doloremque est ipsa ipsam ipsum officia placeat reiciendis sequi. Aliquid distinctio dolorem ea excepturi hic quia quidem, soluta vel!
                    </StyledTextAbout>
                    <StyledTextAbout>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quia.
                    </StyledTextAbout>
                </FlexWrapper>
                <PersonalCard/>
            </PageWrapper>

        </StyledAboutMe>
    );
};
const StyledAboutMe = styled.section`
    width:fit-content;
`
const StyledTitleAbout = styled.h3`
    font-size: 22px;
    color: white;
    margin-bottom: 5px;
`

const StyledTextAbout = styled.p`
    font-size: 15px;
    color: #AEB1B9;
`
const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
`