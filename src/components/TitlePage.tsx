import React from 'react';
import styled from "styled-components";

type TitlePropsType = {
    back: string;
    front: string;
}
export const TitlePage = (props: TitlePropsType) => {
    return (
        <StyledTitleWrapper>
            <StyledBackgroundTitle>
                {props.back}
            </StyledBackgroundTitle>
            <StyledForegroundTitle>
                {props.front}
                <StyledUnderLine/>
            </StyledForegroundTitle>

        </StyledTitleWrapper>
    );
};

const StyledTitleWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledBackgroundTitle = styled.div`
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
    font-weight: 600;
    color: rgb(108, 117, 125);
    font-size: clamp(40px, 10vw, 120px);
    white-space: nowrap;
    z-index: 1;
`;

const StyledForegroundTitle = styled.div`
    position: relative;
    font-weight: 700;
    color: white;
    font-size: clamp(24px, 3vw, 30px);
    z-index: 2;
    padding: 20px;
    white-space: nowrap;
    text-align: center;
`;

const StyledUnderLine = styled.div`
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #E7717D, #B183A2);
    border-radius: 2px;
    margin: 0 auto;
`