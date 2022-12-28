import React from "react";
import styles from "./porcent-bar.module.css";

type PropsPorcentBar = {
    title: string,
    porcent: number,
}

class PorcentBar extends React.Component<PropsPorcentBar> {
    constructor(props: PropsPorcentBar) {
        super(props);
    }
    render(): React.ReactNode {
        const { title, porcent } = this.props;
        return (
            <div className={styles.porcentbar}>
                <p className={styles.porcentbartitle}><strong>{title}</strong> <span className={styles.porcentbarnumber}>{porcent}%</span></p>
                <div className={styles.porcentbarbar}>
                    <div className={styles.porcentbarfill} style={{ width: `${porcent}%` }}></div>
                </div>
            </div>
        )
    }
}

export default PorcentBar;