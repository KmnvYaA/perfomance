import React from 'react';
import {IconBase} from "./icon/IconBase.tsx";
import styled from "styled-components";

type SocialLinkProps = {
    idIcon: string;
}
 export const SocialLinks = (props: SocialLinkProps) => {
    return (
            <SocialList>
                <SocialItem>
                    <SocialLink>
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

`
