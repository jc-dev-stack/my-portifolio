import React from "react";
import styles from "./porcent-bar.module.css";

type PropsPorcentBar = {
    title: string,
    nivel: "Básico" | "Intermediario" | "Avançado" | "Intermediario - Avançado"
}

class PorcentBar extends React.Component<PropsPorcentBar> {
    constructor(props: PropsPorcentBar) {
        super(props);
    }
    render(): React.ReactNode {
        const { title, nivel } = this.props;
        const porcent = nivel == "Básico" ? 20 : nivel == "Intermediario" ? 50 : nivel == "Avançado" ? 100 : nivel == "Intermediario - Avançado" ? 75 : 0;
        return (
            <div className={styles.porcentbar}>
                <p className={styles.porcentbartitle}><strong>{title}</strong> <span className={styles.porcentbarnumber}>{nivel}</span></p>
                <div className={styles.porcentbarbar}>
                    <div className={styles.porcentbarfill} style={{ width: `${porcent}%` }}></div>
                </div>
            </div>
        )
    }
}

export default PorcentBar;