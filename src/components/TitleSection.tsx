import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

type TitlePropsType = {
    back: string;
    front: string;
}
export const TitleSection = (props: TitlePropsType) => {
    return (
        <StyledTitleWrapper>
            <StyledBackgroundTitle>
                {props.back}
            </StyledBackgroundTitle>
            <StyledForegroundTitle>
                {props.front}
            </StyledForegroundTitle>
        </StyledTitleWrapper>
    );
};

const StyledTitleWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
`;

const StyledBackgroundTitle = styled.h2`
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.08;
    font-weight: 600;
    color: ${theme.colors.secondary100};
    font-size: clamp(40px, 10vw, 120px);
    white-space: nowrap;
    z-index: 1;
    margin: 0;
`;

const StyledForegroundTitle = styled.span`
    position: relative;
    font-weight: 700;
    color: ${theme.colors.neutral100};
    font-size: clamp(24px, 3vw, 30px);
    z-index: 2;
    padding: 20px;
    white-space: nowrap;
    text-align: center;

    &::after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        margin: 0 auto;
        border-radius: 2px;
        background: linear-gradient(90deg, ${theme.colors.secondary100}, ${theme.colors.secondary200});
    }
`;
