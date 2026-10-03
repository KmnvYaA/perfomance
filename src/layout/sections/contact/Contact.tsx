import React from 'react';
import {TitleSection} from "../../../components/TitleSection.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {ContactBlock} from "./contactBlock/ContactBlock.tsx";
import {Button} from "../../../components/Button.tsx";
import {Social} from "../../../components/Social.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <TitleSection back={" CONTACT"} front={"Get in touch with me"}/>
                <ContactWrapper  align={"flex-start"} jusify={"space-around"} gap={"15px"}>
                    <StyledData>
                        <ContactBlock idIcon={"geo"} title={"Address"} description={"Novosibirsk, Russia"} href="https://www.google.com/maps/search/?api=1&query=Novosibirsk%2C%20Russia"/>
                        <ContactBlock idIcon={"tel"} title={"Phone"} description={"+7 913 004-28-44"} href="tel:+79130042844"/>
                        <ContactBlock idIcon={"email"} title={"Email"} description={"kmnvyaa@gmail.com"} href="mailto:kmnvyaa@gmail.com"/>

                        <SocialWrapper>
                            <Social />
                        </SocialWrapper>
                    </StyledData>
                    <StyledForm>
                        <TitleForm>Send message</TitleForm>
                        <Field placeholder={"Name"}/>
                        <Field placeholder={"Email"}/>
                        <Field placeholder={"Message"} as={"textarea"}/>
                        <Button type={"submit"} width={'100%'} variant={'secondary'}>Send</Button>
                    </StyledForm>
                </ContactWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    
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
