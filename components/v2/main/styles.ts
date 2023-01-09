import styled, { css } from "styled-components";
import { PropsTheme, TypeFontSize } from "../../../styles/theme";

interface PropsMain {
    theme: PropsTheme
}

interface PropsTitle {
    theme: PropsTheme
    colorPrimary: boolean
    size: TypeFontSize
    textCenter?: boolean
}

export const Main = styled.main`
    padding: 20px 0 20px 0;
    background-color: ${({ theme }: PropsMain) => theme.colors.mainBg};
`

export const Title = styled.h1`
    margin-bottom: 30px;
    margin-top: 30px;
    font-size: 64px;

    ${({ colorPrimary, size, theme, textCenter }: PropsTitle) => css`
        color: ${colorPrimary ? theme.fonts.colors.primary : theme.fonts.colors.secondary};
        font-size: ${theme.fonts[size]};
        text-align: ${textCenter ? "center" : ""};
    `}

    @media (max-width: 768px) {
        ${({ theme }: PropsMain) => {
        return css`
        font-size: ${theme.fonts.media_query.larger} ;
        `
    }}
    }

`

export const Text = styled.p`
    line-height: 40px;
    ${({ theme }: PropsMain) => {
        return css`
            font-size: ${theme.fonts.min} ;
        `
    }}

    @media (max-width: 768px) {
        ${({ theme }: PropsMain) => {
        return css`
            font-size: ${theme.fonts.media_query.medium} ;
        `
    }}
        line-height:25px;
    }
`

export const ContainerImg = styled.div`
    text-align: center;
    height: 50%;
    @media (max-width: 768px) {
        height: 100%;
    }
`

export const ContianerText = styled.div`
    
`