import React from 'react';
import codeImg from '../../../assets/images/CodeCard.svg'
import codeImgMobile from '../../../assets/images/CodeCardMobile.svg'
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {Button} from "../../../components/Button.tsx";
import {S} from './Main_Styles.ts'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import {scroller} from "react-scroll";

export const Main: React.FC = () => {
    return (
        <S.Main id={"main"}>
            <Container>
                <S.HeroContent>
                    <S.HeroCopy>
                        <S.Welcome>Welcome</S.Welcome>

                        <S.HeroHeading>
                            <S.Greeting>Hi! I’m —</S.Greeting>
                            {/*<S.MainTitle>Frontend developer</S.MainTitle>*/}
                            <S.MainTitle>
                                <p>Frontend developer</p>
                                <Typewriter
                                    options={{
                                        strings: ['Frontend developer', 'Lyubina Yana'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 100,
                                    }}
                                />
                            </S.MainTitle>
                        </S.HeroHeading>

                        <Button variant="default" onClick={() => scroller.scrollTo("contacts", {
                            smooth: true,
                            duration: 1000,
                            offset: -40,
                        })}>
                            Hire me
                        </Button>
                    </S.HeroCopy>
                    <Tilt className="background-stripes parallax-effect" perspective={500}>
                        <picture>
                            <source
                                media={theme.media.mobileMini}
                                srcSet={codeImgMobile}
                            />
                            <S.CodeImg src={codeImg} alt="Карточка с кодом"/>
                        </picture>
                    </Tilt>
                </S.HeroContent>
            </Container>
        </S.Main>
    );
};