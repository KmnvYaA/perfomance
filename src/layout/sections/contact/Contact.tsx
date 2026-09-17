import React from 'react';
import {TitlePage} from "../../../components/TitlePage.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {ContactBlock} from "./contactBlock/ContactBlock.tsx";
import {Button} from "../../../components/Button.tsx";
import {Social} from "../../../components/Social.tsx";

export const Contact = () => {
    return (
    <StyledContacts>
        <TitlePage back={"КОНТАКТЫ"} front={"Связаться со мной"}/>
        <FlexWrapper direction={"row"} align={"center"} jusify={"space-around"}>
            <StyledForm>
                <ContactBlock idIcon={"geo"} title={"Адрес"} description={"Новосибирск, Россия"}/>
                <ContactBlock idIcon={"tel"} title={"Телефон"} description={"+7 913 004-28-44"}/>
                <ContactBlock idIcon={"email"} title={"Email"} description={"kmnvyaa@gmail.com"}/>
                <Social/>
            </StyledForm>
            <StyledForm>
                <TitleForm>Отправить сообщение</TitleForm>
                <Field placeholder={"Name"}/>
                <Field placeholder={"Email"}/>
                <Field placeholder={"Message"} as={"textarea"}/>
                <Button type={"submit"}>Отправить</Button>
            </StyledForm>
        </FlexWrapper>
    </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px;
    border-radius: 20px;
    background: #2B2D34;
    justify-content: flex-start;
    align-items: start;
`
const Field = styled.input`
    background: #25272E;
    border: 1px solid #3B3F49;
    border-radius: 12px;
    width: 100%;
   
`
const TitleForm = styled.h3`
    color: white;
    
`
