import React from 'react';
import {S} from './About_Styles.ts';

type LinePropsType = {
    category: string;
    description: string;
}

export const CardLine: React.FC<LinePropsType> = (props: LinePropsType) => {
    return (
        <S.StyledCardLine direction={'row'} jusify={'space-between'} align={'center'}>
            <S.StyledCategory>{props.category}</S.StyledCategory>
            <S.StyledDescription>{props.description}</S.StyledDescription>
        </S.StyledCardLine>
    );
};
