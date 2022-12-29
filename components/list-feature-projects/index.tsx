import React from "react";
import styles from "./list-feature-projects.module.css";
import { FeatureProject as TypeFeatureProject } from "../../@types/featureproject";
import Image from "next/image";


type PropsListFeatureProject = {
    listFeatureProject: TypeFeatureProject[]
}


class FeatureProject extends React.Component<TypeFeatureProject> {
    constructor(props: TypeFeatureProject) {
        super(props);
    }

    render(): React.ReactNode {
        const { title, description, imagesrc, languages, link } = this.props;
        return (
            <div className={styles.featureproject}>
                <div className={styles.containerimage}>
                    <Image
                        src={imagesrc}
                        alt={"image"}
                        width={300}
                        height={300}
                        priority
                    />
                </div>
                <div className={styles.content}>
                    <h1>{title}</h1>
                    <p>
                        {description}
                    </p>
                    <nav className={styles.listlanguages}>
                        <ul>
                            {languages.map((language, index) =>
                                <li key={index}>
                                    {language}
                                </li>
                            )}
                        </ul>
                    </nav>
                    <div className={styles.containerlink}>
                        <a href={link} target={"_blank"} rel="noreferrer">{link}</a>
                    </div>
                </div>
            </div>
        )
    }
}

class ListFeatureProjects extends React.Component<PropsListFeatureProject> {
    constructor(props: PropsListFeatureProject) {
        super(props);
    }
    render(): React.ReactNode {
        const { listFeatureProject } = this.props;
        return (
            <div>
                {listFeatureProject.map((project, index) => <FeatureProject title={project.title} description={project.description} imagesrc={project.imagesrc} languages={project.languages} link={project.link} key={index} />)}
            </div>
        )
    }
}

export default ListFeatureProjects;