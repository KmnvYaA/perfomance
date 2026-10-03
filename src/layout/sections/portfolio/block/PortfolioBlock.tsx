import React from 'react';
import {S} from './../Portfolio_Styles.ts'

type WorkPropsType = {
    showOverlay?: boolean;
    title: string,
    img: string,
    href?: string,
}
export const PortfolioBlock: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work href={props.href} target="_blank" rel="noopener noreferrer">
            <S.StyledImg $showOverlay={props.showOverlay}>
                <S.Image src={props.img} alt={props.title}/>
            </S.StyledImg>
            <S.StyledBottom>
                <S.Title>{props.title}</S.Title>
            </S.StyledBottom>

        </S.Work>
    );
};

