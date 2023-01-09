import { PropsTheme } from '../../../styles/theme';
import styled, { css } from "styled-components";

interface PropsSection {
    theme: PropsTheme
    bgDark: boolean
    colorLight: boolean
}

export const Section = styled.section`
margin-bottom: 50px;
    ${({ theme, bgDark, colorLight }: PropsSection) => {
        return css`
            background-color: ${bgDark ? theme.colors.mainBg : theme.colors.secondaryBg};
            color: ${colorLight ? theme.fonts.colors.secondary : theme.fonts.colors.primary};
        `
    }}
`