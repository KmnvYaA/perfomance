import React from 'react';
import {TitleSection} from "../../../components/TitleSection.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {PortfolioBlock} from "./block/PortfolioBlock.tsx";
import support from "../../../assets/images/support.png"
import wait from "../../../assets/images/waiting.png"
import {Container} from "../../../components/Container.ts";

const workData = [
    {
        title: "Waiting:)",
        img: wait,
        showOverlay: false,
    },
    {
        title: "Content Automation and Management Service",
        img: support,
        showOverlay: true,
        href: 'https://github.com/KmnvYaA/perfomance',
    }
]

export const Portfolio: React.FC = () => {
    return (
        <StyledWorks>
            <Container>
                <TitleSection back={"PORTFOLIO"} front={"My works"}/>
                <FlexWrapper jusify={'space-around'} align={'center'} gap={'15px'} wrap={'wrap'}>
                    {workData.map((p, index)=> {
                        return <PortfolioBlock title={p.title} key={index}
                                               img={p.img}
                                               showOverlay={p.showOverlay}
                                               href={p.href}/>
                    })}
                </FlexWrapper>
            </Container>
        </StyledWorks>

    );
};

const StyledWorks = styled.section``