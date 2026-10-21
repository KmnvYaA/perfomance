import React from 'react';
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {PortfolioBlock} from "./block/PortfolioBlock.tsx";
import support from "../../../assets/images/support.png"
import wait from "../../../assets/images/waiting.png"
import {Container} from "../../../components/Container.ts";
import { Fade } from "react-awesome-reveal";
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
        <StyledWorks id={"portfolio"}>
            <Container>
                <TitleSection back={"PORTFOLIO"} front={"My works"}/>
                <FlexWrapper jusify={'space-around'} align={'center'} gap={'15px'} wrap={'wrap'}><Fade
                    cascade={true}
                    damping={0.2}
                    style={{flexGrow: 1, flexBasis: "410px", maxWidth: "500px"}}
                >
                    {workData.map((p, index) => (
                        <PortfolioBlock
                            key={index}
                            title={p.title}
                            img={p.img}
                            showOverlay={p.showOverlay}
                            href={p.href}
                        />
                    ))}
                </Fade>
                </FlexWrapper>
            </Container>
        </StyledWorks>

    );
};

const StyledWorks = styled.section``