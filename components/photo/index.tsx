import React from "react";
import styles from "./photo.module.css";

type PropsPhoto = {
    url: string
    titlePhoto: string
    children: any
}

class Photo extends React.Component<PropsPhoto> {

    constructor(props: PropsPhoto) {
        super(props);
    }

    render(): React.ReactNode {
        const { url, children, titlePhoto } = this.props;
        return (
            <div className={styles.box}>
                <div className={styles.containerimg}>
                    <img src={url} alt="image" className={styles.image} />
                    <p className={styles.titleimage}><strong>{titlePhoto}</strong></p>
                </div>
                <p className={styles.userdescription}>
                    {children}
                </p>
            </div>
        )
    }
}

export default Photo;