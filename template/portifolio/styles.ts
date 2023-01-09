import styled, { css } from "styled-components";
import { PropsTheme, TypeFontSize } from "../../styles/theme";

interface PropsMain {
    theme: PropsTheme
}

interface PropsTitle {
    theme: PropsTheme
    colorPrimary: boolean
    size: TypeFontSize
    textCenter?: boolean
}

export const Title = styled.h1`
    ${({ colorPrimary, size, theme, textCenter }: PropsTitle) => css`
        color: ${colorPrimary ? theme.fonts.colors.primary : theme.fonts.colors.secondary};
        font-size: ${theme.fonts[size]};
        text-align: ${textCenter ? "center" : ""};
    `}

    margin-top:10px;
    margin-bottom:10px;

    @media (max-width: 768px) {
        ${({ theme }: PropsMain) => {
        return css`
        font-size: ${theme.fonts.media_query.larger} ;
        `
    }}
    }

`

export const ContentSection = styled.div`
    padding: 50px;

    @media (max-width: 768px) {
        padding: 5px;
    }
`