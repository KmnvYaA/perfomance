import React from 'react';
import {TitleSection} from "../../../components/TitleSection.tsx";
import styled from "styled-components";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <TitleSection back={"SKILLS"} front={"What i can"}/>
                <SkillsGrid>
                    {/*<Skill iconId={'react'} title={'React'}*/}
                    {/*       text={'JavaScript-библиотека для создания пользовательских интерфейсов'}></Skill>*/}
                    {/*<Skill iconId={'ts '} title={'TypeScript'}*/}
                    {/*       text={'Cтрого типизированный язык программирования, основанный на JavaScript'}></Skill>*/}
                    {/*<Skill iconId={'js'} title={'JavaScript'}*/}
                    {/*       text={'Язык программирования для описания поведения элементов на странице в браузере'}></Skill>*/}
                    {/*<Skill iconId={'html'} title={'HTML/HTML5'}*/}
                    {/*       text={'Язык гипертекстовой разметки документов для просмотра веб-страниц в браузере'}></Skill>*/}
                    {/*<Skill iconId={'css'} title={'CSS/CSS3'}*/}
                    {/*       text={'Язык описания стилей документов (веб-страниц) в браузере'}></Skill>*/}
                    {/*<Skill iconId={'scss'} title={'SCSS/SASS'}*/}
                    {/*       text={'Метаязык на основе CSS, предназначенный для упрощения файлов каскадных таблиц стилей'}></Skill>*/}
                    {/*<Skill iconId={'git'} title={'Git'} text={'Cистема управления версиями приложений'}></Skill>*/}
                    <Skill iconId={'react'} title={'React'}
                           text={'A JavaScript library for building user interfaces'}></Skill>
                    <Skill iconId={'ts '} title={'TypeScript'}
                           text={'Is a strongly typed programming language that builds on JavaScript'}></Skill>
                    <Skill iconId={'js'} title={'JavaScript'}
                           text={'A programming language for describing the behavior of elements on a page in a browser'}></Skill>
                    <Skill iconId={'html'} title={'HTML/HTML5'}
                           text={'Document hypertext markup language for viewing web pages in a browser'}></Skill>
                    <Skill iconId={'css'} title={'CSS/CSS3'}
                           text={'Style description language for documents (web pages) in a browser'}></Skill>
                    <Skill iconId={'scss'} title={'SCSS/SASS'}
                           text={'A CSS-based metalanguage designed to simplify cascading style sheet files'}></Skill>
                    <Skill iconId={'git'} title={'Git'} text={'Application version control system'}></Skill>
                </SkillsGrid>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: max-content;
`
const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
`;
