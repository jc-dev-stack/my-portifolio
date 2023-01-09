
export type TypeFontSize = "min" | "medium" | "xmedium" | "larger" | "xlarger" | "huge" | "xhuge"

export interface PropsTheme {
    colors: {
        mainBg: string
        secondaryBg: string
        headerFontColor: string
        thirdBg: string
        fourBg: string
    },
    fonts: {
        colors: {
            primary: string
            secondary: string
        }
        min: string
        medium: string
        xmedium: string
        larger: string
        xlarger: string
        huge: string
        xhuge: string
        media_query: {
            medium: string
            xmedium: string
            larger: string
        }
    }
}

export const theme: PropsTheme = {
    colors: {
        mainBg: '#050629',
        secondaryBg: 'white',
        headerFontColor: '#555555',
        thirdBg: '#002247',
        fourBg: 'cornflowerblue'
    },
    fonts: {
        colors: {
            primary: "#302E3A",
            secondary: "white"
        },
        min: "18px",
        medium: "30px",
        xmedium: "40px",
        larger: "50px",
        xlarger: "60px",
        huge: "64px",
        xhuge: "68px",
        media_query: {
            medium: "16px",
            xmedium: "18px",
            larger: "25px",
        }
    }
}