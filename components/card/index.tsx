import React from "react";
import styles from "./card.module.css";

type PropsCard = {
    title: string
    description: string | null
    url?: string
    language: string
}

class Card extends React.Component<PropsCard>{
    constructor(props: PropsCard) {
        super(props);
    }

    render(): React.ReactNode {
        const { title, description, url, language } = this.props;
        return (
            <a href={url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <div className={styles.card}>
                    <h2>{title}</h2>
                    <p className={styles.carddescription}>
                        {description}
                    </p>
                    <div className={styles.language}>
                        <p>{language}</p>
                    </div>
                </div>
            </a>
        )
    }
}

export default Card;