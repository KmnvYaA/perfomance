import React from 'react';
import {S} from './TitileSection_Styles.ts';

type TitlePropsType = {
    back: string;
    front: string;
}
export const TitleSection: React.FC<TitlePropsType> = (props: TitlePropsType) => {
    return (
        <S.TitleWrapper>
            <S.BackgroundTitle>
                {props.back}
            </S.BackgroundTitle>
            <S.ForegroundTitle>
                {props.front}
            </S.ForegroundTitle>
        </S.TitleWrapper>
    );
};