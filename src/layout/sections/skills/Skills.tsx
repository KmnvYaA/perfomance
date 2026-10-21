import React from 'react';
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from './skill/Skill_Styles.ts';
import { Fade } from "react-awesome-reveal";

const skillData = [
    {
        iconId: 'react',
        title: 'React',
        text:'A JavaScript library for building user interfaces',
        // 'JavaScript-библиотека для создания пользовательских интерфейсов'
    },
    {
        iconId: 'ts',
        title: 'TypeScript',
        text: 'Is a strongly typed programming language that builds on JavaScript',
        // 'Cтрого типизированный язык программирования, основанный на JavaScript'
    },
    {
        iconId: 'js',
        title: 'JavaScript',
        text: 'A programming language for describing the behavior of elements on a page in a browser',
        // 'Язык программирования для описания поведения элементов на странице в браузере'
    },
    {
        iconId: 'html',
        title: 'HTML/HTML5',
        text: 'Document hypertext markup language for viewing web pages in a browser',
        // 'Язык гипертекстовой разметки документов для просмотра веб-страниц в браузере'
    },
    {
        iconId: 'css',
        title: 'CSS/CSS3',
        text: 'Style description language for documents (web pages) in a browser',
        // 'Язык описания стилей документов (веб-страниц) в браузере'
    },
    {
        iconId: 'scss',
        title: 'SCSS/SASS',
        text: 'A CSS-based metalanguage designed to simplify cascading style sheet files',
        // 'Метаязык на основе CSS, предназначенный для упрощения файлов каскадных таблиц стилей'
    },
    {
        iconId: 'git',
        title: 'Git',
        text: 'Application version control system',
        // 'Cистема управления версиями приложений'
    }
]
export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <TitleSection back={"SKILLS"} front={"What i can"}/>
                <S.SkillsGrid>
                    <Fade cascade={true} damping={0.2}>
                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index}
                                          title={s.title}
                                          text={s.text}></Skill>
                        })}

                    </Fade>
                </S.SkillsGrid>
            </Container>
        </S.Skills>
    );
};
