import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

const Contacts = styled.section`
    
`

const ContactWrapper = styled(FlexWrapper)`
    flex-direction: row;
    @media ${theme.media.mobile} {
        flex-direction: column;
    }
`

const StyledData = styled.div`
    max-width: 460px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px;
    border-radius: 20px;
    background-color: ${theme.colors.primary200};
    border: 1px solid ${theme.colors.primary300};
    justify-content: flex-start;
    align-items: start;
    
    @media ${theme.media.tablet} {
        padding: 20px;
        max-width: 350px;
    }
    @media ${theme.media.mobile} {
        max-width: 100%;
    }
`

const SocialWrapper = styled.div`
    width: 100%;
    padding-top: 15px;
    border-top: 1px solid ${theme.colors.primary300};
    
    @media ${theme.media.tablet} {
        padding-top: 15px;
    }
`;

const StyledForm = styled.form`
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px;
    border-radius: 20px;
    background-color: ${theme.colors.primary200};
    border: 1px solid ${theme.colors.primary300};
    justify-content: flex-start;
    align-items: start;
    textarea {
        resize: none;
        height: 155px;

        @media ${theme.media.mobile}  {
            height: 140px;
        }
    }
    
    @media ${theme.media.tablet} {
        padding: 20px;
        max-width: none;
    }
`

const Field = styled.input`
    background-color: ${theme.colors.primary400};
    border: 1px solid ${theme.colors.primary300};
    border-radius: 12px;
    width: 100%;
    padding: 7px 15px;
    font-size: 16px;
    color: ${theme.colors.neutral100};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    &::placeholder {
        color: ${theme.colors.neutral200};
    }
    &:focus-visible {
        outline: 1px solid #8F857A;
    }
    @media ${theme.media.tablet} {
        font-size: 15px;
    }
    @media ${theme.media.mobile} {
        font-size: 14px;
    }
`

const TitleForm = styled.h3`
    color: ${theme.colors.neutral100};
    font-size: 18px;
    
    @media ${theme.media.tablet} {
        font-size: 16px;
        font-weight: 600;
    }
`

const StyledContactBlock = styled.a`
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    justify-content: center;
    
`

const TitleContact = styled.span`
    color: ${theme.colors.neutral200};
    font-size: 13px;
    font-weight: 400;
`

const DescriptionContact = styled.span`
    color: ${theme.colors.neutral100};
    font-size: 16px;
    font-weight: 600;
    
    @media ${theme.media.mobile} {
        font-size: 15px;
        font-weight: 500;
    }
`

export const S = {
    Contacts,
    ContactWrapper,
    StyledData,
    SocialWrapper,
    StyledForm,
    Field,
    TitleForm,
    TitleContact,
    DescriptionContact,
    StyledContactBlock,
}