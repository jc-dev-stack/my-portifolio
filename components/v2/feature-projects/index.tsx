import { Button, Card } from "react-bootstrap";
import React from "react";
import Image from "next/image";
import { FeatureProject } from "../../../@types/featureproject";

interface PropsFeatureProjects {
    projects: FeatureProject[]
}

export class CardFeatureProject extends React.Component<FeatureProject> {
    constructor(props: FeatureProject) {
        super(props);
    }

    render(): React.ReactNode {
        const { imagesrc, description, title, link, languages } = this.props;
        return (
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={imagesrc} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
                    <p className="lead">{description}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        {languages.map((lan, index) => <p key={index} className={'ml-2'}>{lan}</p>)}
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a className="btn btn-primary btn-lg px-4 me-md-2" href={link} target={"_blank"}>Ver</a>
                    </div>
                </div>
            </div>
        )
    }
}

export class FeatureProjetcs extends React.Component<PropsFeatureProjects> {
    constructor(props: PropsFeatureProjects) {
        super(props);
    }
    render(): React.ReactNode {
        const { projects } = this.props;
        return (
            <div className="container col-xxl-8 px-4 py-5">
                {projects.map((project, index) => <CardFeatureProject
                    description={project.description}
                    imagesrc={project.imagesrc}
                    languages={project.languages}
                    link={project.link}
                    title={project.title}
                    key={index} />)}
            </div>
        )
    }
}