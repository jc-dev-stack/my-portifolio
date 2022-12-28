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
                    <PorcentBar title="HTML" nivel="Intermediario - Avançado" />
                    <PorcentBar title="CSS" nivel="Intermediario - Avançado" />
                    <PorcentBar title="PHP" nivel="Avançado" />
                    <PorcentBar title="Javascript" nivel="Intermediario - Avançado" />
                    <PorcentBar title="Typescript" nivel="Intermediario - Avançado" />
                    <PorcentBar title="SQL" nivel="Básico" />
                    <PorcentBar title="Docker" nivel="Básico" />
                    <PorcentBar title="Python" nivel="Básico" />
                </ContainerAside>
            </aside>
        )
    }
}

export default Aside;