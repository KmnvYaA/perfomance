import React from 'react';
import styled from "styled-components";
import {IconBase} from "../../../../components/icon/IconBase.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type ContactBlockProps = {
    idIcon: string;
    title: string;
    description: string;
}
export const ContactBlock = (props: ContactBlockProps) => {
    return (
        <StyledContactBlock>
            <IconBase iconId={props.idIcon} viewBox={'0 0 50 50'} />
            <FlexWrapper direction="column" align={'flex-start'}>
                <TitleContact>{props.title}</TitleContact>
                <DescriptionContact>{props.description}</DescriptionContact>
            </FlexWrapper>
        </StyledContactBlock>
    );
};

const StyledContactBlock = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    justify-content: center;
    
`
const TitleContact = styled.span`
    color: #7D818A;
    font-size: 13px;
    font-weight: 400;
`
const DescriptionContact = styled.span`
    color: #F4F4F6;
    font-size: 16px;
    font-weight: 600;
`
