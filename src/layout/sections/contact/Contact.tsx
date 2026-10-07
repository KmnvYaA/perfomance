import React from 'react';
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import {ContactBlock} from "./contactBlock/ContactBlock.tsx";
import {Button} from "../../../components/Button.tsx";
import {Social} from "../../../components/social/Social.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from './Contact_Styles.ts';

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
    return (
        <S.Contacts>
            <Container>
                <TitleSection back={" CONTACT"} front={"Get in touch with me"}/>
                <S.ContactWrapper  align={"flex-start"} jusify={"space-around"} gap={"15px"}>
                    <S.StyledData>
                        {contactData.map((c, index) => {
                            return <ContactBlock idIcon={c.idIcon} key={index}
                                                 title={c.title}
                                                 description={c.description}
                                                 href={c.href}/>
                        })}
                        <S.SocialWrapper>
                            <Social />
                        </S.SocialWrapper>
                    </S.StyledData>
                    <S.StyledForm>
                        <S.TitleForm>Send message</S.TitleForm>
                        <S.Field placeholder={"Name"}/>
                        <S.Field placeholder={"Email"}/>
                        <S.Field placeholder={"Message"} as={"textarea"}/>
                        <Button type={"submit"} width={'100%'} variant={'secondary'}>Send</Button>
                    </S.StyledForm>
                </S.ContactWrapper>
            </Container>
        </S.Contacts>
    );
};
