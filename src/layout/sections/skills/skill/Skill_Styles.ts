import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

const Skills = styled.section`
    min-height: max-content;
`
const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
    
    @media ${theme.media.tablet} {
        gap: 15px;
    }
`;

const Skill = styled.article`
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: ${theme.colors.primary200};
    border-radius: 20px;
    border: 1px solid ${theme.colors.primary300};
    padding: 25px 15px;
    
    @media ${theme.media.tablet} {
        gap: 15px;
    }
    @media ${theme.media.mobile} {
        padding: 15px 10px;
    }
`
const SkillTitle = styled.h3`
    color: ${theme.colors.neutral100};
    font-size: 20px;
    font-weight: 600 ;

    @media ${theme.media.tablet} {
        font-size: 18px;
    }
    
    @media ${theme.media.mobile} {
        font-size: 16px;
    }
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
    border: 1px solid ${theme.colors.secondary200};
    
    @media ${theme.media.tablet} {
        width: 60px;
        height: 60px;
    }
`

export const S = {
    Skills,
    SkillsGrid,
    SkillTitle,
    SkillText,
    IconWrapper,
    Skill
}