import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    title: string,
    img: string,
}
export const PortfolioBlock = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.img} alt=""></Image>
            <Title>{props.title}</Title>
        </StyledWork>
    );
};

const StyledWork = styled.article`
    width: 50%;
    
`

const Image = styled.img`
    width: 100%;
    max-width: 500px;
    height: 260px;
    object-fit: cover;
`
const Title = styled.h3`
    color: white;
`


