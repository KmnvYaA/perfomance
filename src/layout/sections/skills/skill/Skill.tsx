import React from 'react';
import {IconBase} from "../../../../components/icon/IconBase.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {S} from './Skill_Styles.ts';

type styledPropsSkillType = {
    iconId: string,
    title: string,
    text: string,
}
export const Skill = (props: styledPropsSkillType) => {
    return (
        <S.Skill>
            <S.IconWrapper>
                <IconBase iconId={props.iconId} width={'25'} height={'25'} viewBox={ '0 0 20 20'}/>
            </S.IconWrapper>
            <FlexWrapper direction={'column'} gap={'10px'}>
                <S.SkillTitle>
                    {props.title}
                </S.SkillTitle>
                <S.SkillText>{props.text}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};

