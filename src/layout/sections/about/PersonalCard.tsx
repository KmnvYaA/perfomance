import React from 'react';
import {CardLine} from "./CardLine.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {S} from './About_Styles.ts';

const lineData = [
    {
        category: 'Name',
        description: 'Yana',
    },
    {
        category: 'Email',
        description: 'kmnvyaa@gmail.com',
    },
    {
        category: 'Age',
        description: '22',
    },
    {
        category: 'From',
        description: 'Novosibirsk, Russia',
    }
]
export const PersonalCard: React.FC = () => {
    return (
        <S.CardWrapper>
            <S.TitleCard>
                Personal information
            </S.TitleCard>
            <FlexWrapper direction={'column'} gap={'15px'}>
                {lineData.map((l, index) => {
                    return <CardLine category={l.category} key={index}
                                     description={l.description}/>
                })}
            </FlexWrapper>
        </S.CardWrapper>
    );
};