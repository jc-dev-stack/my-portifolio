import React from "react";

export class Footer extends React.Component {
    render(): React.ReactNode {
        return (
            <footer className="py-3" style={{
                backgroundColor: '#050629',
                color: "white"
            }}>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#inicio" className="nav-link px-2 text-muted">Inicio</a></li>
                    <li className="nav-item"><a href="#habilidades" className="nav-link px-2 text-muted">Minhas habilidades</a></li>
                    <li className="nav-item"><a href="#projetos-destaque" className="nav-link px-2 text-muted">Projetos em destaques</a></li>
                    <li className="nav-item"><a href="#projetos-git" className="nav-link px-2 text-muted">Projetos no github</a></li>
                </ul>
                <p className="text-center text-muted">© 2023 Jorge Calheiros</p>
            </footer>
        )
    }
}