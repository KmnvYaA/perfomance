import {theme} from "./Theme.ts";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number,
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) =>  `
    font-family: ${family || "Montserrat"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.neutral100};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vh - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`

