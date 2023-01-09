import { Card, Container } from "react-bootstrap";
import React from "react";
import * as Style from "./styles";
import { ProjectGithub } from "../../../@types/projectgithub";

interface PropsGitProjects {
    projects: ProjectGithub[]
}

export class CardGitProject extends React.Component<ProjectGithub> {
    constructor(props: ProjectGithub) {
        super(props);
    }
    render(): React.ReactNode {
        const { name, description, html_url, language } = this.props;
        return (
            <Card className="w-full">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{language}</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Link href={html_url} target={"_blank"}>{html_url}</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}

export class GitProjects extends React.Component<PropsGitProjects> {
    constructor(props: PropsGitProjects) {
        super(props);
    }
    render(): React.ReactNode {
        const { projects } = this.props;
        return (
            <Container>
                <Style.ContainerGrid>
                    {projects.map((project, index) => <CardGitProject
                        description={project.description}
                        html_url={project.html_url}
                        language={project.language}
                        name={project.name}
                        private={project.private}
                        key={index}
                    />)}
                </Style.ContainerGrid>
            </Container>
        )
    }
}