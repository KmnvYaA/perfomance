import React from 'react';
import {TitlePage} from "../../../components/TitlePage.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <TitlePage back={"НАВЫКИ"} front={"Чем я владею"}/>
            <FlexWrapper wrap={"wrap"}>
                <Skill iconId={'react'} title={'React'} text={'JavaScript-библиотека для создания пользовательских интерфейсов'}></Skill>
                <Skill iconId={'ts '} title={'TypeScript'} text={'Cтрого типизированный язык программирования, основанный на JavaScript'}></Skill>
                <Skill iconId={'js'} title={'JavaScript'} text={'Язык программирования для описания поведения элементов на странице в браузере'}></Skill>
                <Skill iconId={'html'} title={'HTML/HTML5'} text={'Язык гипертекстовой разметки документов для просмотра веб-страниц в браузере'}></Skill>
                <Skill iconId={'css'} title={'CSS/CSS3'} text={'Язык описания стилей документов (веб-страниц) в браузере'}></Skill>
                <Skill iconId={'scss'} title={'SCSS/SASS'} text={'Метаязык на основе CSS, предназначенный для упрощения файлов каскадных таблиц стилей'}></Skill>
                <Skill iconId={'git'} title={'Git'} text={'Cистема управления версиями приложений'}></Skill>

            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
`
