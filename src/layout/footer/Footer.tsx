import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Social} from "../../components/social/Social.tsx";
import {Container} from "../../components/Container.ts";
import {S} from './Footer_Styles.ts';

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={"column"} align={"center"} gap={"15px"} >
                    <S.Name>Yana Lyubina</S.Name>
                    <Social/>
                    <S.Copyright>2026 Yana Lyubina, All Rights Reserved</S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};