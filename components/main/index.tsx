import React from "react";
import { FeatureProject } from "../../@types/featureproject";
import { ProjectGithub } from "../../@types/projectgithub";
import ContainerMain from "../container-main";
import ListFeatureProjects from "../list-feature-projects";
import ListProjects from "../list-projects";
import PorcentBar from "../porcent-bar";
import ScrollToTop from "../scroll-to-top";
import Section from "../section";
import TotalRepositories from "../total-repositories";
import styles from "./main.module.css";

export type PropsMain = {
    projects: ProjectGithub[]
    totalProject: number
    featureProjects: FeatureProject[]
}

class Main extends React.Component<PropsMain> {
    constructor(props: PropsMain) {
        super(props)
    }

    render(): React.ReactNode {
        const { projects, totalProject, featureProjects } = this.props;
        return (
            <main className={styles.main}>
                <Section title="Minhas habilidades" id="section-1">
                    <ContainerMain>
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
                    </ContainerMain>
                </Section>
                <Section title="Projetos em destaque" id="section-2">
                    <ListFeatureProjects listFeatureProject={featureProjects} />
                </Section>
                <Section title="Projetos no github" id="section-3">
                    <TotalRepositories total={totalProject} />
                    <ContainerMain>
                        <ListProjects projects={projects} />
                    </ContainerMain>
                    <div className={styles.vermais}>
                        <a href="https://github.com/jc-dev-stack?tab=repositories" rel="noreferrer" target={"_blank"}>
                            Ver mais
                        </a>
                    </div>
                </Section>
                <ScrollToTop />
            </main>
        )
    }
}

export default Main;