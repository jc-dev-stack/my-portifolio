import * as Style from "./styles";
import React from "react";
import { Section } from "../section";
import Image from "next/image";
import img from "../../../imgs/section-img.jpg";
import { PorcentBar } from "../porcent-bar";

interface PropsMain {
    children: any
}

export class Main extends React.Component<PropsMain> {
    constructor(props: PropsMain) {
        super(props);
    }
    render(): React.ReactNode {
        const { children } = this.props;
        return (
            <Style.Main>
                {children}
            </Style.Main>
        )
    }
}
