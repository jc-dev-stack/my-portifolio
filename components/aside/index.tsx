import React from "react";
import Photo from "../photo";
import styles from "./aside.module.css";
import image from "../../imgs/perfil.png";
import ContainerAside from "../container-aside";
import Informations from "../informations";
import PorcentBar from "../porcent-bar";
import { userGithub } from "../../@types/usergithub";

export type PropsAside = {
    userGithub: userGithub;
}

class Aside extends React.Component<PropsAside> {
    constructor(props: PropsAside) {
        super(props)
    }
    render(): React.ReactNode {
        const { userGithub } = this.props;
        return (
            <aside className={styles.aside}>
                <Photo url={userGithub.avatar_url} titlePhoto={userGithub.name} >
                    FullStack Web Developer
                </Photo>
                <ContainerAside>
                    <Informations email={userGithub.email} />
                </ContainerAside>
                <ContainerAside>
                    <PorcentBar title="HTML" porcent={90} />
                    <PorcentBar title="CSS" porcent={80} />
                    <PorcentBar title="PHP" porcent={99} />
                    <PorcentBar title="Javascript" porcent={80} />
                    <PorcentBar title="Typescript" porcent={80} />
                    <PorcentBar title="SQL" porcent={75} />
                    <PorcentBar title="Docker" porcent={60} />
                    <PorcentBar title="Python" porcent={50} />
                </ContainerAside>
            </aside>
        )
    }
}

export default Aside;