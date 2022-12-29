import React from "react";
import styles from "./scroll-to-top.module.css";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";


class ScrollToTop extends React.Component {

    handleScrollToTop = () => {
        scroll.scrollToTop({
            duration: 300
        });
    }

    render(): React.ReactNode {
        return (
            <div className={styles.scrollcontainer} onClick={this.handleScrollToTop}>
                <FaArrowUp size={30} />
            </div>
        )
    }
}

export default ScrollToTop;