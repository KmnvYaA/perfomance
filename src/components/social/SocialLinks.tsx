import React from 'react';
import {IconBase} from "../icon/IconBase.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type SocialLinkProps = {
    idIcon: string;
    href: string;
}
 export const SocialLinks: React.FC<SocialLinkProps> = (props: SocialLinkProps) => {
    return (
            <SocialList>
                <SocialItem>
                    <SocialLink href={props.href} target="_blank" rel="noopener noreferrer">
                        <IconBase  viewBox={"0 0 40 40"} width={"21px"} height={"21px"} iconId={props.idIcon}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
    );
};
const SocialList = styled.ul`
    
`

const SocialItem = styled.li`
    display: flex;
`
const SocialLink = styled.a`
    transition: ${theme.animations.transition};
    &:hover {
        transform: translateY(-4px);
    }
`
