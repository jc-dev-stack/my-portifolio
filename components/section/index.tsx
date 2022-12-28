import React from "react";

type PropsSection = {
    title: string
    children?: any
}

class Section extends React.Component<PropsSection>{
    constructor(props: PropsSection) {
        super(props);
    }

    render(): React.ReactNode {
        const { title, children } = this.props;
        return (
            <section>
                <h1>{title}</h1>
                {children}
            </section>
        )
    }
}

export default Section;