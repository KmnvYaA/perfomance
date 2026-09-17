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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ea quia! Doloremque est ipsa ipsam ipsum officia placeat reiciendis sequi. Aliquid distinctio dolorem ea excepturi hic quia quidem, soluta vel!
                    </StyledTextAbout>
                    <StyledTextAbout>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quia.
                    </StyledTextAbout>
                </TextWrapper>
                <div>
                    <PersonalCard/>
                </div>
            </PageWrapper>

        </div>
    );
};

const StyledTitleAbout = styled.h3`
    font-size: 22px;
    color: white;
    margin-bottom: 5px;
`

const StyledTextAbout = styled.p`
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