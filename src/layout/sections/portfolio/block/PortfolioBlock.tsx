import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

type WorkPropsType = {
    showOverlay?: boolean;
    title: string,
    img: string,
    href?: string,
}
export const PortfolioBlock = (props: WorkPropsType) => {
    return (
        <StyledWork href={props.href} target="_blank" rel="noopener noreferrer">
            <StyledImg $showOverlay={props.showOverlay}>
                <Image src={props.img} alt={props.title}/>
            </StyledImg>
            <StyledBottom>
                <Title>{props.title}</Title>
            </StyledBottom>

        </StyledWork>
    );
};

const StyledWork = styled.a`
    border-radius: 20px;
    border: 1px solid ${theme.colors.primary300};
    background: ${theme.colors.primary200};
    max-width: 500px;
    width: 410px;
    flex-grow: 1;
`
const StyledImg = styled.div<{ $showOverlay?: boolean }>`
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 260px;
    overflow: hidden;
    border-radius: 20px 20px 0 0;

    &::after {
        content: ${({ $showOverlay }) => $showOverlay ? "'View the project'" : "none"};
        position: absolute;
        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        color: ${theme.colors.neutral100};
        font-size: 16px;
        font-weight: 600;
        background-color: rgba(0, 0, 0, 0.6);

        opacity: 0;
        transition: opacity 0.3s ease;
    }

    ${StyledWork}:hover &::after {
        opacity: 1;
    }
    
    @media ${theme.media.tablet} {
        &::after {
            opacity: 1;
        }
    }
`;
const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Title = styled.h3`
    color: ${theme.colors.neutral100};
    font-size: 16px;
    
    @media ${theme.media.mobile} {
        font-size: 14px;
        font-weight: 600;
    }
`
const StyledBottom = styled.div`
    box-sizing: border-box;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid ${theme.colors.secondary100};
`


