import React from "react";
import { Container } from "react-bootstrap";
import { PorcentBar } from "../porcent-bar";
import * as Style from "./styles";

export class Skills extends React.Component {
    render(): React.ReactNode {
        return (
            <Container className="col-xxl-8 px-4 py-5">
                <Style.ContainerGrid>
                    <PorcentBar title="HTML" nivel="Intermediario - Avançado" />
                    <PorcentBar title="CSS" nivel="Intermediario - Avançado" />
                    <PorcentBar title="PHP" nivel="Avançado" />
                    <PorcentBar title="Javascript" nivel="Intermediario - Avançado" />
                    <PorcentBar title="Typescript" nivel="Intermediario - Avançado" />
                    <PorcentBar title="SQL" nivel="Básico" />
                    <PorcentBar title="Docker" nivel="Básico" />
                    <PorcentBar title="Python" nivel="Básico" />
                    <PorcentBar title="Laravel" nivel="Intermediario" />
                    <PorcentBar title="React.Js" nivel="Intermediario" />
                    <PorcentBar title="Next.Js" nivel="Intermediario" />
                    <PorcentBar title="Nest.Js" nivel="Básico" />
                    <PorcentBar title="Vue" nivel="Básico" />
                    <PorcentBar title="Angular" nivel="Básico" />
                    <PorcentBar title="Bootstrap" nivel="Intermediario" />
                    <PorcentBar title="TailwindCSS" nivel="Intermediario" />
                    <PorcentBar title="MySQL" nivel="Básico" />
                    <PorcentBar title="PostgreeSQL" nivel="Básico" />
                </Style.ContainerGrid>
            </Container>
        )
    }
}