import React from "react";
import Photo from "../photo";
import styles from "./aside.module.css";
import ContainerAside from "../container-aside";
import Informations from "../informations";
import { userGithub } from "../../@types/usergithub";
import MenuAside from "../menu-aside";
import { MenuItem } from "../../@types/menuitem";

export type PropsAside = {
    userGithub: userGithub;
}

class Aside extends React.Component<PropsAside> {
    constructor(props: PropsAside) {
        super(props)
    }
    render(): React.ReactNode {
        const { userGithub } = this.props;
        const menu: MenuItem[] = [
            {
                id: "section-1",
                title: "Minhas habilidades"
            },
            {
                id: "section-2",
                title: "Projetos em destaque"
            },
            {
                id: "section-3",
                title: "Projetos no github"
            }
        ]

        return (
            <aside className={styles.aside}>
                <Photo url={userGithub.avatar_url} titlePhoto={userGithub.name} >
                    FullStack Web Developer
                </Photo>
                <ContainerAside>
                    <Informations
                        email={userGithub.email}
                    />
                </ContainerAside>
                <ContainerAside>
                    <MenuAside items={menu} />
                </ContainerAside>
            </aside>
        )
    }
}

export default Aside;