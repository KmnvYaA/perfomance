import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

const AboutMe = styled.section`
    min-height: max-content;
`
const StyledTitleAbout = styled.h3`
    font-size: 24px;
    color: ${theme.colors.neutral100};
    margin-bottom: 10px;
    font-weight: 600;
    @media ${theme.media.tablet} {
        font-size: 18px;
    }
    @media ${theme.media.mobile} {
        font-size: 16px;
    }
`

const StyledTextAbout = styled.p`
    font-size: 15px;
    color: ${theme.colors.neutral200};
    line-height: 1.8;
    @media ${theme.media.tablet} {
        font-size: 14px;
    }
`

const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 50px;
    @media ${theme.media.mobile} {
        grid-template-columns: repeat(1, minmax(0, 1fr)); 
    }
`

const TitleCard = styled.h3`
    color: ${theme.colors.neutral100};
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 15px;
    @media ${theme.media.tablet} {
        font-size: 18px;
    }
    @media ${theme.media.mobile} {
        font-size: 16px;
    }
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background:  ${theme.colors.primary200};
    border-radius: 30px;
    border: 1px solid ${theme.colors.primary300};
    height: max-content;
    padding: 30px;
`

const StyledCardLine = styled(FlexWrapper)`
    position: relative;

    &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1px;
        opacity: 0.3;
        background-color: ${theme.colors.neutral200};
    }
`

const StyledCategory = styled.span`
    font-size: 14px;
    color: ${theme.colors.neutral200};
    font-weight: 400;
`

const StyledDescription = styled.span`
    font-size: 14px;
    color: ${theme.colors.neutral200};
    font-weight: 600;
`

export const S = {
    AboutMe,
    StyledTextAbout,
    PageWrapper,
    TitleCard,
    CardWrapper,
    StyledCardLine,
    StyledTitleAbout,
    StyledCategory,
    StyledDescription
}