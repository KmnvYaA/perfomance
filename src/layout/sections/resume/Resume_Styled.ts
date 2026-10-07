import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

const Resume = styled.section`
    height: fit-content;
`

const ResumeColumn = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        gap:10px;
        padding: 10px 5px;
    }
`

const ResumeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    @media ${theme.media.mobile} {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

`;

const TitleResume = styled.h3`
    color: ${theme.colors.neutral100};
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
`

const StyledResumeBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 5px;
    background: ${theme.colors.primary200};
    border: 1px solid ${theme.colors.primary300};
    border-radius: 20px;
    width: 100%;
    box-sizing: border-box;
`

const Year = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${theme.colors.secondary100};
`

const Title = styled.h4`
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.neutral100};
    margin-bottom: 10px;
`

const Subtitle = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: ${theme.colors.neutral200};
`

const Description = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: ${theme.colors.neutral200};
`

export const S = {
    Resume,
    ResumeColumn,
    ResumeGrid,
    TitleResume,
    StyledResumeBlock,
    Year,
    Title,
    Subtitle,
    Description,
}