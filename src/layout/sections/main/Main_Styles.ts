import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const Main = styled.section`
    font-weight: 700;
    min-height: 100vh;
    display: flex;
    
`

const HeroContent = styled.div`
    margin-top: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    @media ${theme.media.tablet} {
        margin-top: 100px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    @media ${theme.media.mobile} {
        margin-top: 60px;
    }
`;

const HeroCopy = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;

    @media ${theme.media.tablet} {
        width: 100%;
        align-items: center;
    }
`;
const HeroHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    line-height: 1.2;

    @media ${theme.media.tablet} {
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;
        gap: 10px;
        flex-wrap: wrap;
        font-size: clamp(20px, 5vw, 40px);
       
    }
    @media ${theme.media.mobileMini} {
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const CodeImg = styled.img`
    display: block;
    width: 520px;
    height: 296px;
    border-radius: 16px;
    
    @media ${theme.media.mobileMini} {
        width: 100%;
    }
`


const Welcome = styled.span`
    font-size: 12px;
    background-color: ${theme.colors.primary200};
    padding: 5px 15px;
    border-radius: 20px;
    width: fit-content;
    border: 1px solid ${theme.colors.primary300};
    display: inline-flex;
    align-items: center;
    gap: 10px;
    &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${theme.colors.secondary300};
    }
`

const Greeting = styled.span`
    font-size: 48px;
    color: ${theme.colors.neutral100};
    font-weight: 700;
    
    @media ${theme.media.tablet} {
        font-size: 40px;
        color: ${theme.colors.secondary100};
    }
    @media ${theme.media.mobileMini} {
        font-size: 30px;
    }
`
const MainTitle = styled.h1`
    font-size: 48px;
    background: linear-gradient(90deg, ${theme.colors.secondary100}, ${theme.colors.secondary200});
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    
    @media ${theme.media.tablet} {
        font-size: 40px;
    }
    @media ${theme.media.mobileMini} {
        font-size: 30px;
    }
`
export const S = {
    Main,
    HeroContent,
    HeroCopy,
    HeroHeading,
    CodeImg,
    Welcome,
    Greeting,
    MainTitle,
}