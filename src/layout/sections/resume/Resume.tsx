import React from 'react';
import {TitleSection} from "../../../components/TitleSection.tsx";
import styled from "styled-components";
import {ResumeBlock} from "./resumeBlock/ResumeBlock.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Resume = () => {
    return (
        <StyledResume>
            <Container>
                <TitleSection back={"RESUME"} front={"My background"}/>
                <ResumeGrid>
                    <FlexWrapper direction={"column"} padding={'20px'} gap={'15px'}>
                        <Title>Education</Title>
                        <ResumeBlock year={'2026-2027'} title={'Frontend developer'} subtitle={'IT-INCUBATOR'}
                                     description={'Education in Front-End Development'}/>
                        <ResumeBlock year={'2022-2026'}
                                     title={'Specialist in the development and implementation of information systems'}
                                     subtitle={'СГУПС'} description={'Higher education'}/>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"} padding={'20px'} gap={'15px'}>
                        <Title>Experience</Title>
                        <ResumeBlock year={'04.2027 - ...'} title={'Frontend developer'}
                                     subtitle={'Project-Based Work / Part-Time Employment'}
                                     description={'Web Application Development'}/>
                        <ResumeBlock year={'03.2025 - ...'} title={'Software Developer'} subtitle={'"PTRB"'}
                                     description={'Development and Implementation of Internet Solutions'}/>
                    </FlexWrapper>
                </ResumeGrid>
            </Container>
        </StyledResume>

    );
};

const StyledResume = styled.section`
    height: fit-content;
`
const ResumeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

`;

const Title = styled.h3`
    color: ${theme.colors.neutral100};
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
`