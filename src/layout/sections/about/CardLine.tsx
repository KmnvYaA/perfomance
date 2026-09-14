import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

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

const StyledCategory = styled.div`
    font-size: 14px;
    color: #7D818A;
    font-weight: 400;
`
const StyledDescription = styled.div`
    font-size: 15px;
    color: #FFFFFF;
    font-weight: 600;
`
