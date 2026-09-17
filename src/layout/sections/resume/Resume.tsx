import React from 'react';
import {TitlePage} from "../../../components/TitlePage.tsx";
import styled from "styled-components";
import {ResumeBlock} from "./resumeBlock/ResumeBlock.tsx";

export const Resume = () => {
    return (
        <StyledResume>
            <TitlePage back={"РЕЗЮМЕ"} front={"Образование и опыт"}/>
            <ResumeGrid>
                <Wrapper>
                    <TitleWrapper>Образование</TitleWrapper>
                    <ResumeBlock year={'2022-2026'}
                                 title={'Специалист в области разработки и внедрения информационных систем'}
                                 subtitle={'СГУПС'} description={'Высшее образование'}/>
                    <ResumeBlock year={'2026-2027'} title={'Frontend разработчик'} subtitle={'IT-INCUBATOR'}
                                 description={'Образование по специальности frontend разработчик'}/>
                </Wrapper>
                <Wrapper>
                    <TitleWrapper>Опыт</TitleWrapper>
                    <ResumeBlock year={'04.2027 - н.в'} title={'Frontend разработчик'}
                                 subtitle={'Проектная работа / Частичная занятость'}
                                 description={'Разработка веб приложений'}/>
                    <ResumeBlock year={'03.2025 - н.в'} title={'Разработчик ПО'} subtitle={'ООО "ПТРБ"'}
                                 description={'Разработка и внедрение интернет решений'}/>
                </Wrapper>
            </ResumeGrid>
        </StyledResume>

    );
};

const StyledResume = styled.section`
   height: max-content;
`
const ResumeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: start;
    align-items: start;
    padding: 20px;
    
`
const TitleWrapper = styled.h3`
    color: #F4F4F6;
    font-size: 20px;
    font-weight: 500;
`