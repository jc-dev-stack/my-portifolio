import React from "react";
import * as Style from "./styles"

type PropsPorcentBar = {
    title: string,
    nivel: "Básico" | "Intermediario" | "Avançado" | "Intermediario - Avançado"
}

export class PorcentBar extends React.Component<PropsPorcentBar> {
    constructor(props: PropsPorcentBar) {
        super(props);
    }
    render(): React.ReactNode {
        const { title, nivel } = this.props;
        const porcent = nivel == "Básico" ? 20 : nivel == "Intermediario" ? 50 : nivel == "Avançado" ? 100 : nivel == "Intermediario - Avançado" ? 75 : 0;
        return (
            <Style.ContainerPorcentbar>
                <Style.TextBar ><strong>{title}</strong> <Style.SpanPorcentBarNivel>{nivel}</Style.SpanPorcentBarNivel></Style.TextBar>
                <Style.PorcentBar>
                    <Style.PorcentBarFill porcent={porcent} ></Style.PorcentBarFill>
                </Style.PorcentBar>
            </Style.ContainerPorcentbar>
        )
    }
}