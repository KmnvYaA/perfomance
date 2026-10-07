import React from 'react';
import {S} from './../Resume_Styled.ts';

type ResumeBlockProps = {
    year: string;
    title: string;
    subtitle: string;
    description: string;
}
export const ResumeBlock: React.FC<ResumeBlockProps> = (props: ResumeBlockProps) => {
    return (
        <S.StyledResumeBlock>
            <S.Year>{props.year}</S.Year>
            <S.Title>{props.title}</S.Title>
            <S.Subtitle>{props.subtitle}</S.Subtitle>
            <S.Description>{props.description}</S.Description>
        </S.StyledResumeBlock>
    );
};