import React from 'react';
import codeImg from '../../../assets/images/CodeCard.svg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {Button} from "../../../components/Button.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} jusify={"space-between"} >
                    <FlexWrapper direction={'column'} gap={'30px'} align={'flex-start'} jusify={'center'}>
                        <Welcome>
                            Welcome
                        </Welcome>
                        <Greeting>
                            Hi! I`m  -
                        </Greeting>
                        <MainTitle>
                            Frontend developer
                        </MainTitle>
                        <Button variant={'default'}>Hire me</Button>
                    </FlexWrapper>
                    <CodeImg src={codeImg}/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const CodeImg = styled.img`
    width: 520px;
    height: 296px;
    border-radius: 18px;

`

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    
`
const Welcome = styled.h3`
    font-size: 12px;
    background-color: ${theme.colors.primary200};
    padding: 5px 15px;
    border-radius: 20px;
    width: fit-content;
    border: 1px solid ${theme.colors.primary300};
    display: inline-flex;
    align-items: center;
    gap: 10px;
    &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${theme.colors.secondary300};
    }
`
const Greeting = styled.h2`
    font-size: 48px;
    color: ${theme.colors.neutral100};
`
const MainTitle = styled.h1`
    font-size: 48px;
    background: linear-gradient(90deg, ${theme.colors.secondary100}, ${theme.colors.secondary200});
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`