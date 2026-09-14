import React from 'react';
import codeImg from '../../../assets/images/CodeCard.svg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} jusify={"space-around"} >
                <div>
                    <Welcome>
                        Добро пожаловать
                    </Welcome>
                    <Greeting>
                        Привет! Я -
                    </Greeting>
                    <MainTitle>
                        Фронтенд-разработчик
                    </MainTitle>
                </div>
                    <CodeImg src={codeImg}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const CodeImg = styled.img`
    width: 520px;
    height: 296px;
    border-radius: 18px;

`

const StyledMain = styled.div`
    margin-top: 80px;
    color: white;
`
const Welcome = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 50px
`
const Greeting = styled.div`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: -50px;
`
const MainTitle = styled.h1`
    margin-top: 80px;
    color: white;
`