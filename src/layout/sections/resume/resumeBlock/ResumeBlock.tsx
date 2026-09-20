import React from 'react';
import styled from "styled-components";

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
    background: #2B2D34;
    border: 1px solid #3A3D46;
    border-radius: 15px;
    width: 100%;
    box-sizing: border-box;
`
const Year = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: #E2A7BE
`
const Title = styled.h4`
    font-size: 16px;
    font-weight: 500;
    color: #F4F4F6
`
const Subtitle = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: #AEB1B9
`
const Description = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: #AEB1B9
`