import React from 'react';
import {CardLine} from "./CardLine.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";

export const PersonalCard = () => {
    return (
        <CardWrapper>
            <TitleCard>
                Personal information
            </TitleCard>
            <FlexWrapper direction={'column'} gap={'30px'}>
                <CardLine category={'Name'} description={'Yana'}/>
                <CardLine category={'Email'} description={'kmnvyaa@gmail.com'}/>
                <CardLine category={'Age'} description={'22'}/>
                <CardLine category={'From'} description={'Novosibirsk, Russia'}/>
            </FlexWrapper>
        </CardWrapper>
    );
};

const TitleCard = styled.h3`
    color: ${theme.colors.neutral100};
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 15px;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background:  ${theme.colors.primary200};
    border-radius: 30px;
    border: 1px solid ${theme.colors.primary300};
    height: max-content;
    padding: 20px 30px;
`