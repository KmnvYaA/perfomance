import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {TitlePage} from "../../../components/TitlePage.tsx";
import styled from "styled-components";
import {PersonalCard} from "./PersonalCard.tsx";

export const AboutMe = () => {
    return (
        <div>
            <FlexWrapper align={'center'} jusify={'center'}>
                <TitlePage back={"ОБО МНЕ"} front={"Узнайте меня получше"}/>
            </FlexWrapper>
            <PageWrapper>
                <TextWrapper>
                    <StyledTitleAbout>
                        Из проектирования в программирование
                    </StyledTitleAbout>
                    <StyledTextAbout>
                        Свой карьерный путь я начал в 2014 году в должности инженера-проектировщика медицинских и радиационных объектов, будучи студентом 6 курса Международного Государственного Экологического Университета им. А.Д.Сахарова. Получив диплом о высшем образовани по специальности инженер по ядерной и радиационной безопасности, я продолжил проектировать медицинские и радиационные объекты на протяжении 4 лет. За 4 года я хорошо изучил нормы проектирования таких объектов, а ПО для проектирования "AutoCAD" освоил в совершенстве.
                        Однако жизнь сложилась так, что пришлось менять сферу проектирования с медицинской на торговую, а вместе с этим пришлось с нуля изучать нормы проектирования торговых объектов. Было сложно, но исполнимо. На протяжении еще 4 лет я занимался проектированием торговых объектов, 3 из которых в должности руководителя этого направления. Я добился хороших результатов, однако результаты не были пределом мечтаний и я все больше понимал, что необходимо двигаться дальше.
                    </StyledTextAbout>
                    <StyledTextAbout>
                        И вот теперь я frontend разработчик. Позади много часов учебы и столько же часов практики. Много чего еще предстоит изучить. Я уверен, что добьюсь успеха и в этом направлении, ведь я трудолюбив, усидчив и в меру педантичен.
                    </StyledTextAbout>
                </TextWrapper>
                <div>
                    <PersonalCard/>
                </div>
            </PageWrapper>

        </div>
    );
};

const StyledTitleAbout = styled.div`
    font-size: 22px;
    color: white;
    margin-bottom: 5px;
`

const StyledTextAbout = styled.div`
    font-size: 15px;
    color: #AEB1B9;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    gap: 10px;
`
const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
`