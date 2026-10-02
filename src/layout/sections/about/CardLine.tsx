import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";

type LinePropsType = {
    category: string;
    description: string;
}

export const CardLine = (props: LinePropsType) => {
    return (
        <StyledCardLine direction={'row'} jusify={'space-between'} align={'center'}>
            <StyledCategory>{props.category}</StyledCategory>
            <StyledDescription>{props.description}</StyledDescription>
        </StyledCardLine>
    );
};
const StyledCardLine = styled(FlexWrapper)`
    position: relative;

    &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1px;
        opacity: 0.3;
        background-color: ${theme.colors.neutral200};
    }
`
const StyledCategory = styled.span`
    font-size: 14px;
    color: ${theme.colors.neutral200};
    font-weight: 400;
`
const StyledDescription = styled.span`
    font-size: 14px;
    color: ${theme.colors.neutral200};
    font-weight: 600;
`
