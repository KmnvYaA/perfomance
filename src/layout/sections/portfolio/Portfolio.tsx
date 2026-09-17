import React from 'react';
import {TitlePage} from "../../../components/TitlePage.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {PortfolioBlock} from "./block/PortfolioBlock.tsx";
import support from "../../../assets/images/support.png"
import wait from "../../../assets/images/waiting.jpg"
export const Portfolio = () => {
    return (
        <StyledWorks>
            <TitlePage back={"ПОРТФОЛИО"} front={"Мои работы"}/>
            <FlexWrapper jusify={'space-around'} align={'center'} >
                <PortfolioBlock title={"Ожидается:)"} img={wait}/>
                <PortfolioBlock title={"Support:)"} img={support}/>
            </FlexWrapper>
        </StyledWorks>

    );
};

const StyledWorks = styled.section`
    min-height: max-content;
`