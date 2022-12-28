import React from "react";
import { ProjectGithub } from "../../@types/projectgithub";
import ContainerMain from "../container-main";
import ListProjects from "../list-projects";
import Section from "../section";
import TotalRepositories from "../total-repositories";
import styles from "./main.module.css";

export type PropsMain = {
    projects: ProjectGithub[]
    totalProject: number
}

class Main extends React.Component<PropsMain> {
    constructor(props: PropsMain) {
        super(props)
    }

    render(): React.ReactNode {
        const { projects, totalProject } = this.props;
        return (
            <main className={styles.main}>
                <Section title="Meus projetos">
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
                <Section title=""></Section>
            </main>
        )
    }
}

export default Main;