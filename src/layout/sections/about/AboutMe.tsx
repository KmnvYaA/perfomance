import React from 'react';
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import {PersonalCard} from "./PersonalCard.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from './About_Styles.ts';

export const AboutMe: React.FC = () => {
    return (
        <S.AboutMe>
            <Container>

                <TitleSection back={"ABOUT ME"} front={"Know me better"}/>
                <S.PageWrapper>
                    <FlexWrapper gap={'10px'} direction={'column'} jusify={'space-between'}>
                        <S.StyledTitleAbout>
                            From design to programming
                        </S.StyledTitleAbout>
                        <S.StyledTextAbout>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ea quia! Doloremque est
                            ipsa ipsam ipsum officia placeat reiciendis sequi. Aliquid distinctio dolorem ea excepturi
                            ipsa ipsam ipsum officia placeat reiciendis sequi. Aliquid distinctio dolorem ea excepturi
                            ipsa ipsam ipsum officia placeat reiciendis sequi. Aliquid distinctio dolorem ea excepturi
                            ipsa ipsams ipsum officia placeat reiciendis sequi. Aliquid distinctio dolorem ea excepturi

                        </S.StyledTextAbout>
                        <S.StyledTextAbout>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quia.
                        </S.StyledTextAbout>
                    </FlexWrapper>
                    <PersonalCard/>
                </S.PageWrapper>
            </Container>
        </S.AboutMe>
    );
};