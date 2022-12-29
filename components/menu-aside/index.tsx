import React from "react";
import styles from "./menu-aside.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { MenuItem } from "../../@types/menuitem";

type PropsMenuAside = {
    items: MenuItem[]
}

class Item extends React.Component<MenuItem>{
    constructor(props: MenuItem) {
        super(props)
    }

    render(): React.ReactNode {
        const { title, id } = this.props;
        return (
            <Link
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <li>
                    {title}
                </li>
            </Link>
        )
    }
}

class MenuAside extends React.Component<PropsMenuAside> {
    constructor(props: PropsMenuAside) {
        super(props);
    }

    render(): React.ReactNode {
        const { items } = this.props;
        return (
            <nav className={styles.menuaside}>
                <ul>
                    {items.map((item, index) => <Item id={item.id} title={item.title} key={index} />)}
                </ul>
            </nav>
        )
    }
}

export default MenuAside;