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
            <StyledImg>
                <Image src={props.img} alt="Title"></Image>
                {props.showOverlay && (
                    <Overlay>
                        <Title>View the project</Title>
                    </Overlay>
                )}
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
`
const StyledImg = styled.div`
    position: relative;
    display: block;
    width: 100%;
    max-width: 500px;
    height: 260px;
    overflow: hidden;
    text-decoration: none;
    border-radius: 20px 20px 0 0 ;
    
`
const Overlay = styled.div`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);;
    opacity: 0;
    transition: opacity 0.3s ease;

    ${StyledWork}:hover & {
        opacity: 1;
    }

`
const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Title = styled.h3`
    color: ${theme.colors.neutral100};
    padding: 0 0 0 20px;
    font-size: 16px;
`
const StyledBottom = styled.div`
    box-sizing: border-box;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid ${theme.colors.secondary100};
`


