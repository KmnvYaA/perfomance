import React from 'react';
import {SocialLinks} from "./SocialLinks.tsx";
import {FlexWrapper} from "../FlexWrapper.tsx";

export const Social: React.FC = () => {
    return (
        <FlexWrapper direction={'row'} gap={'20px'} >
            <SocialLinks idIcon={'instagram'} href={'https://www.instagram.com/llyu__a?srtk=ems4bmJudzZrNTZ1&utm_source=qr'}/>
            <SocialLinks idIcon={'telegram'} href={'https://t.me/llyu_a'}/>
            <SocialLinks idIcon={'gitHub'} href={'https://github.com/KmnvYaA'}/>
        </FlexWrapper>
    );
};