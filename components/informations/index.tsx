import React from "react";
import styles from "./information.module.css";

type PropsInformations = {
    email: string
}

class Informations extends React.Component<PropsInformations> {
    constructor(props: PropsInformations) {
        super(props);
    }
    render(): React.ReactNode {
        const { email } = this.props;
        return (
            <div className={styles.informations}>
                <nav>
                    <ul className={styles.informationslist}>
                        <li>
                            <strong>Email: </strong><span>{email ?? "-"}</span>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Informations;