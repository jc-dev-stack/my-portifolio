import React from "react";
import { Link } from "react-scroll";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

interface PropsMenuItem {
    children: any
    id: string
}

export class LinkMenu extends React.Component<PropsMenuItem> {
    constructor(props: PropsMenuItem) {
        super(props)
    }

    render(): React.ReactNode {
        const { children, id } = this.props;
        return (
            <Link
                to={id}
                spy={true}
                smooth={false}
                offset={-70}
                duration={500}
            >
                {children}
            </Link>
        )
    }
}

export class Header extends React.Component {
    render(): React.ReactNode {
        return (
            <Navbar expand="lg" fixed="top" style={{
                backgroundColor: '#090b1e'
            }}>
                <Container>
                    <Navbar.Brand className="text-white">Meu Portfólio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="text-white p-2" href="#inicio" style={{ cursor: "pointer" }}>Inicio</Nav.Link>
                            <Nav.Link className="text-white p-2" href="#habilidades" style={{ cursor: "pointer" }}>Minhas habilidades</Nav.Link>
                            <Nav.Link className="text-white p-2" href="#projetos-destaque" style={{ cursor: "pointer" }}>Projetos em destaque</Nav.Link>
                            <Nav.Link className="text-white p-2" href="#projetos-git" style={{ cursor: "pointer" }}>Projetos no github</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
