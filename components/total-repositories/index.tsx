import React from "react";
import styles from "./totalrepositories.module.css";

type PropsTotalRepositories = {
    total: number
}
class TotalRepositories extends React.Component<PropsTotalRepositories> {
    constructor(props: PropsTotalRepositories) {
        super(props);
    }

    render(): React.ReactNode {
        const { total } = this.props;
        return (
            <div className={styles.totalrepositories}>
                <p className={styles.totalrepositoriesnumber}>{total}</p>
                <span className={styles.totalrepositoriestitle}>Total de repositorios no github</span>
            </div>
        )
    }
}

export default TotalRepositories;