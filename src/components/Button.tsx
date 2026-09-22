import styled, {css} from "styled-components";
import {theme} from "../styles/Theme.ts";
type ButtonPropsType = {
    variant?: 'default' | 'secondary'
    width?: string;
}

export const Button = styled.button<ButtonPropsType>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width || "auto"};
    border-radius: 15px;
    height: 30px;
    background-color: transparent;
    border: 2px solid ${theme.colors.secondary200};
    color: ${theme.colors.secondary200};
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600; 
    padding: 10px 20px;
    ${({ variant }) =>
            variant === 'secondary' && css`
                color: ${theme.colors.primary400};
                background: linear-gradient(90deg, ${theme.colors.secondary100}, ${theme.colors.secondary200});
            `}
}
`