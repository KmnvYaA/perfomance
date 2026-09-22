import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

type ResumeBlockProps = {
    year: string;
    title: string;
    subtitle: string;
    description: string;
}
export const ResumeBlock = (props: ResumeBlockProps) => {
    return (
        <StyledResumeBlock>
            <Year>{props.year}</Year>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
            <Description>{props.description}</Description>
        </StyledResumeBlock>
    );
};

const StyledResumeBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 5px;
    background: ${theme.colors.primary200};
    border: 1px solid ${theme.colors.primary300};
    border-radius: 20px;
    width: 100%;
    box-sizing: border-box;
`
const Year = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${theme.colors.secondary100};
`
const Title = styled.h4`
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.neutral100};
    margin-bottom: 10px;
`
const Subtitle = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: ${theme.colors.neutral200};
`
const Description = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: ${theme.colors.neutral200};
`