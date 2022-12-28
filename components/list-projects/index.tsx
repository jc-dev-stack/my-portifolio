import React from "react";
import { ProjectGithub } from "../../@types/projectgithub";
import Card from "../card";

type PropsListProjects = {
    projects: ProjectGithub[]
}

class ListProjects extends React.Component<PropsListProjects>{
    constructor(props: PropsListProjects) {
        super(props);
    }

    render(): React.ReactNode {
        const { projects } = this.props;
        return (
            <>
                {projects.map((project, index) => <Card title={project.name} description={project.description} url={project.html_url} key={index} />)}
            </>
        )
    }
}

export default ListProjects;