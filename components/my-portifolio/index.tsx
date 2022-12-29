import React from "react";
import Aside, { PropsAside } from "../aside";
import Main, { PropsMain } from "../main";
import styles from "./my-portifolio.module.css";

type PropsMyPortifolio = {
    propsmain: PropsMain
    propsaside: PropsAside
}

class MyPortifolio extends React.Component<PropsMyPortifolio> {
    constructor(props: PropsMyPortifolio) {
        super(props);
    }

    render(): React.ReactNode {
        const { propsmain, propsaside } = this.props;
        return (
            <div className={styles.myportifolio}>
                <Aside userGithub={propsaside.userGithub} />
                <Main projects={propsmain.projects} totalProject={propsmain.totalProject} featureProjects={propsmain.featureProjects} />
            </div>
        )
    }
}

export default MyPortifolio;