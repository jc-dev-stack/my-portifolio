import React from "react";
import * as Style from "./styles";

interface PropsSectionProjects {
    children: any
    bgDark?: boolean
    colorLight?: boolean
    id: string
}

export class Section extends React.Component<PropsSectionProjects> {
    constructor(props: PropsSectionProjects) {
        super(props);
    }

    render(): React.ReactNode {
        const { children, bgDark, colorLight, id } = this.props;
        return (
            <Style.Section id={id} colorLight={colorLight ?? false} bgDark={bgDark ?? false} >
                {children}
            </Style.Section>
        )
    }
}