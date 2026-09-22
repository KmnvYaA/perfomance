import React from 'react';
import {TitleSection} from "../../../components/TitleSection.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {PortfolioBlock} from "./block/PortfolioBlock.tsx";
import support from "../../../assets/images/support.png"
import wait from "../../../assets/images/waiting.png"
import {Container} from "../../../components/Container.ts";

export const Portfolio = () => {
    return (
        <StyledWorks>
            <Container>
                <TitleSection back={"PORTFOLIO"} front={"My works"}/>
                <FlexWrapper jusify={'space-around'} align={'center'}>
                    <PortfolioBlock title={"Waiting:)"} img={wait} showOverlay={false}/>
                    <PortfolioBlock title={"Content Automation and Management Service"} img={support} href={'https://github.com/KmnvYaA/perfomance'} showOverlay={true}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>

    );
};

const StyledWorks = styled.section`
    min-height: max-content;
`