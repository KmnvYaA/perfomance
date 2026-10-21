import React, {ElementRef, useRef} from 'react';
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import {ContactBlock} from "./contactBlock/ContactBlock.tsx";
import {Button} from "../../../components/Button.tsx";
import {Social} from "../../../components/social/Social.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from './Contact_Styles.ts';
import { Fade } from "react-awesome-reveal";
import emailjs from '@emailjs/browser';


const contactData = [
    {
        idIcon: 'geo',
        title: 'Address',
        description: 'Novosibirsk, Russia',
        href: 'https://www.google.com/maps/search/?api=1&query=Novosibirsk%2C%20Russia',
    },
    {
        idIcon: 'tel',
        title: 'Phone',
        description: '+7 913 004-28-44',
        href: 'tel:+79130042844',
    },
    {
        idIcon: 'email',
        title: 'Email',
        description: 'kmnvyaa@gmail.com',
        href: 'mailto:kmnvyaa@gmail.com',
    }
]
export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_ummuqjf', 'template_vlhtsd7', form.current, {
                publicKey: 'eHYwDZpes9EvHaDXX',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };
    return (
        <S.Contacts id={"contacts"}>
            <Container>
                <TitleSection back={" CONTACT"} front={"Get in touch with me"}/>
                <Fade cascade={true} damping={0.3}>
                    <S.ContactWrapper align={"flex-start"} jusify={"space-around"} gap={"15px"}>
                        <S.StyledData>
                            {contactData.map((c, index) => {
                                return <ContactBlock idIcon={c.idIcon} key={index}
                                                     title={c.title}
                                                     description={c.description}
                                                     href={c.href}/>
                            })}
                            <S.SocialWrapper>
                                <Social/>
                            </S.SocialWrapper>
                        </S.StyledData>
                        <S.StyledForm ref={form} onSubmit={sendEmail}>
                            <S.TitleForm>Send message</S.TitleForm>
                            <S.Field required placeholder={"Name"} name={'user_name'}/>
                            <S.Field required placeholder={"Email"} name={'email'}/>
                            <S.Field required placeholder={"Message"} as={"textarea"} name={'message'}/>
                            <Button type={"submit"} width={'100%'} variant={'secondary'}>Send</Button>
                        </S.StyledForm>
                    </S.ContactWrapper>
                </Fade>
            </Container>
        </S.Contacts>
    );
};
