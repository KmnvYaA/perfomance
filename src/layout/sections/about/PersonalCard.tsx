import React from 'react';
import {CardLine} from "./CardLine.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const PersonalCard = () => {
    return (
        <CardWrapper>
            <TitleCard>
                Личная информация
            </TitleCard>
            <FlexWrapper direction={'column'} gap={'30px'}>
                <CardLine category={'Имя'} description={'Яна'}/>
                <CardLine category={'Email'} description={'kmnvyaa@gmail.com'}/>
                <CardLine category={'Возраст'} description={'22'}/>
                <CardLine category={'Откуда'} description={'Новосибирск, Россия'}/>
            </FlexWrapper>
        </CardWrapper>
    );
};

const TitleCard = styled.h3`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #2B2D34;
    border-radius: 30px;
    border: 2px solid #3A3D46;
    height: max-content;
    padding: 20px 30px;
`