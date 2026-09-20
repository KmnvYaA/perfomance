import React from 'react';
import {IconBase} from "../../../../components/icon/IconBase.tsx";
import styled from "styled-components";

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
            <TextWrapper>
                <SkillTitle>
                    {props.title}
                </SkillTitle>
                <SkillText>{props.text}</SkillText>
            </TextWrapper>
        </StyledSkill>
    );
};
const StyledSkill = styled.article`
    width: 33%;
    display: flex;
    align-items: flex-start;
    gap: 20px;
`
const SkillTitle = styled.h3`
    color: #F4F4F6
`
const SkillText = styled.div`
    color: #7D818A;
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
    border: 1px solid #AC3B61
`
const TextWrapper = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: flex-start;
    min-width: 0;
`
