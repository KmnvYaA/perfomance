import React from 'react';
import codeImg from '../../../assets/images/CodeCard.svg'
import codeImgMobile from '../../../assets/images/CodeCardMobile.svg'
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {Button} from "../../../components/Button.tsx";
import {S} from './Main_Styles.ts'

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <S.HeroContent>
                    <S.HeroCopy>
                        <S.Welcome>Welcome</S.Welcome>

                        <S.HeroHeading>
                            <S.Greeting>Hi! I’m —</S.Greeting>
                            <S.MainTitle>Frontend developer</S.MainTitle>
                        </S.HeroHeading>

                        <Button variant="default">Hire me</Button>
                    </S.HeroCopy>

                    <picture>
                        <source
                            media={theme.media.mobileMini}
                            srcSet={codeImgMobile}
                        />
                        <S.CodeImg src={codeImg} alt="Карточка с кодом" />
                    </picture>
                </S.HeroContent>
            </Container>
        </S.Main>
    );
};