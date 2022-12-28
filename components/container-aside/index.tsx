import React from "react";
import styles from "./container-aside.module.css";

type PropsContainerSide = {
    children: any
}

class ContainerAside extends React.Component<PropsContainerSide>{
    constructor(props: PropsContainerSide) {
        super(props);
    }
    render(): React.ReactNode {
        return (
            <div className={styles.containeraside}>
                {this.props.children}
            </div>
        )
    }
}

export default ContainerAside;