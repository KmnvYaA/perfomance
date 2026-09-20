import React from 'react';
import {IconBase} from "../../../../components/icon/IconBase.tsx";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type styledPropsSkillType = {
    iconId: string,
    title: string,
    text: string,
}
export const Skill = (props: styledPropsSkillType) => {
    return (
        <StyledSkill>
            <IconWrapper>
                <IconBase iconId={props.iconId} width={'30'} height={'30'} viewBox={ '0 0 20 20'}/>
            </IconWrapper>
            <FlexWrapper direction={'column'} gap={'10px'}>
                <SkillTitle>
                    {props.title}
                </SkillTitle>
                <SkillText>{props.text}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};
const StyledSkill = styled.article`
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: ${theme.colors.primary200};
    border-radius: 20px;
    border: 1px solid ${theme.colors.primary300};
    padding: 25px 15px;
`
const SkillTitle = styled.h3`
    color: ${theme.colors.neutral100};
    font-size: 20px;
`
const SkillText = styled.div`
    color: ${theme.colors.neutral200};
    font-size: 15px;
`
const IconWrapper = styled.div`
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: 15px;
    border: 1px solid ${theme.colors.secondary200}
`