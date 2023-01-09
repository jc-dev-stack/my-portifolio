import { Header } from "../../components/v2/header";
import { Main } from "../../components/v2/main";
import React from "react";
import * as Style from "./styles";
import { FeatureProjetcs } from "../../components/v2/feature-projects";
import { GitProjects } from "../../components/v2/git-projects";
import { Section } from "../../components/v2/section";
import { AboutMe } from "../../components/v2/about-me";
import { Skills } from "../../components/v2/skills";
import { ProjectGithub } from "../../@types/projectgithub";
import { userGithub } from "../../@types/usergithub";
import { FeatureProject } from "../../@types/featureproject";
import { Footer } from "../../components/v2/footer";

interface PropsPortifolio {
    projects: ProjectGithub[]
    user: userGithub,
    featureProjects: FeatureProject[]
}

export class Portifolio extends React.Component<PropsPortifolio> {
    constructor(props: PropsPortifolio) {
        super(props);
    }
    render(): React.ReactNode {
        const { featureProjects, projects } = this.props;
        return (
            <>
                <Header />
                <Main>
                    <Section id={"inicio"} bgDark={true} colorLight={true}>
                        <AboutMe />
                    </Section>
                    <Section id={"habilidades"}>
                        <Style.ContentSection>
                            <Style.Title colorPrimary={true} size="medium" textCenter={true} >Minhas habilidades</Style.Title>
                            <Skills />
                        </Style.ContentSection>
                    </Section>
                    <Section id={"projetos-destaque"}>
                        <Style.ContentSection>
                            <Style.Title colorPrimary={true} size="medium" textCenter={true} >Projetos em destaque</Style.Title>
                            <FeatureProjetcs projects={featureProjects} />
                        </Style.ContentSection>
                    </Section>
                    <Section id={"projetos-git"}>
                        <Style.ContentSection>
                            <Style.Title colorPrimary={true} size="medium" textCenter={true} >Projetos no github</Style.Title>
                            <GitProjects projects={projects} />
                        </Style.ContentSection>
                    </Section>
                </Main>
                <Footer />
            </>
        )
    }
}