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
        <FlexWrapper direction={'row'} jusify={'space-between'} align={'center'}>
            <StyledCategory>{props.category}</StyledCategory>
            <StyledDescription>{props.description}</StyledDescription>
        </FlexWrapper>
    );
};

const StyledCategory = styled.span`
    font-size: 14px;
    color: ${theme.colors.neutral200};
    font-weight: 400;
`
const StyledDescription = styled.span`
    font-size: 15px;
    color: ${theme.colors.neutral200};
    font-weight: 600;
`
