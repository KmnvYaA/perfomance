import React from 'react';
import {SocialLinks} from "./SocialLinks.tsx";
import {FlexWrapper} from "./FlexWrapper.tsx";

export const Social = () => {
    return (
        <FlexWrapper direction={'row'}>
            <SocialLinks idIcon={'instagram'}/>
            <SocialLinks idIcon={'telegram'}/>
            <SocialLinks idIcon={'gitHub'}/>
        </FlexWrapper>
    );
};