import styled, { css } from "styled-components";
import { PropsTheme } from "../../../styles/theme";

interface PropsPorcentBar {
    theme: PropsTheme
}

interface PropsPorcentBarFill {
    porcent: number
    theme: PropsTheme
}

export const ContainerPorcentbar = styled.div`
    ${({ theme }: PropsPorcentBar) => css`
        color: ${theme.fonts.colors.primary};
    `}
    margin-bottom: 20px;
`

export const TextBar = styled.p`
    margin: 0;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
`

export const SpanPorcentBarNivel = styled.span`
.porcentbarnumber {
    color: black;
}
`

export const PorcentBar = styled.div`
    ${({ theme }: PropsPorcentBar) => css`
        background-color: ${theme.colors.fourBg};
    `}
    width: 100%;
    border-radius: 5px;
    height: 10px;
`

export const PorcentBarFill = styled.div`
    ${({ porcent, theme }: PropsPorcentBarFill) => css`
        width: ${porcent}%;
        background-color:${theme.colors.thirdBg} ;
    `}
    height: 100%;
    border-radius: 5px;
    transition: all 100ms linear;

`