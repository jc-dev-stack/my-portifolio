import React from "react";
import styles from "./container-main.module.css";


type PropsContainerMain = {
    children: any
}

class ContainerMain extends React.Component<PropsContainerMain> {
    constructor(props: PropsContainerMain) {
        super(props);
    }

    render(): React.ReactNode {
        const { children } = this.props;
        return (
            <div className={styles.containermain}>
                {children}
            </div>
        )
    }
}

export default ContainerMain;