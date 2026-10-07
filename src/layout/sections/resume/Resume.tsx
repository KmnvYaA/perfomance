import React from 'react';
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import {ResumeBlock} from "./resumeBlock/ResumeBlock.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from './Resume_Styled.ts';

const resumeEducationData = [
    {
        year: '2026-2027',
        title: 'Frontend developer',
        subtitle: 'IT-INCUBATOR',
        description: 'Education in Front-End Development',
    },
    {
        year: '2022-2026',
        title: 'Specialist in the development and implementation of information systems',
        subtitle: 'СГУПС',
        description: 'Higher education',
    },
]

const resumeExperienceData = [
    {
        year: '04.2027 - ...',
        title: 'Frontend developer',
        subtitle: 'Project-Based Work / Part-Time Employment',
        description: 'Web Application Development',
    },
    {
        year: '03.2025 - ...',
        title: 'Software Developer',
        subtitle: '"PTRB"',
        description: 'Development and Implementation of Internet Solutions',
    }
]
export const Resume: React.FC = () => {
    return (
        <S.Resume>
            <Container>
                <TitleSection back={"RESUME"} front={"My background"}/>
                <S.ResumeGrid>
                    <S.ResumeColumn direction={"column"} padding={'20px'} gap={'15px'}>
                        <S.TitleResume>Education</S.TitleResume>
                        {resumeEducationData.map((r, index) => {
                            return <ResumeBlock year={r.year} key={index}
                                                title={r.title}
                                                subtitle={r.subtitle}
                                                description={r.description}/>
                        })}
                    </S.ResumeColumn>
                    <S.ResumeColumn direction={"column"} padding={'20px'} gap={'15px'}>
                        <S.TitleResume>Experience</S.TitleResume>
                        {resumeExperienceData.map((r, index) => {
                            return <ResumeBlock year={r.year} key={index}
                                                title={r.title}
                                                subtitle={r.subtitle}
                                                description={r.description}/>
                        })}
                    </S.ResumeColumn>
                </S.ResumeGrid>
            </Container>
        </S.Resume>

    );
};