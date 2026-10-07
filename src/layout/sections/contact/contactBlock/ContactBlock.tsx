import React from 'react';
import {IconBase} from "../../../../components/icon/IconBase.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {S} from './../Contact_Styles.ts';

type ContactBlockProps = {
    idIcon: string;
    title: string;
    description: string;
    href: string;
}
export const ContactBlock: React.FC< ContactBlockProps> = (props: ContactBlockProps) => {
    return (
        <S.StyledContactBlock href={props.href}>
            <IconBase iconId={props.idIcon} viewBox={'0 0 50 50'} />
            <FlexWrapper direction="column" align={'flex-start'}>
                <S.TitleContact>{props.title}</S.TitleContact>
                <S.DescriptionContact>{props.description}</S.DescriptionContact>
            </FlexWrapper>
        </S.StyledContactBlock>
    );
};