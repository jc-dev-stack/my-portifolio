import React from "react";
import styles from "./section.module.css";

type PropsSection = {
    title: string
    children?: any
    id: string
}

class Section extends React.Component<PropsSection>{
    constructor(props: PropsSection) {
        super(props);
    }

    render(): React.ReactNode {
        const { title, children, id } = this.props;
        return (
            <section className={styles.section} id={id}>
                <h1 style={{ marginBottom: 30 }}>{title}</h1>
                {children}
            </section>
        )
    }
}

export default Section;