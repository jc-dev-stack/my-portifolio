import React from "react";
import { Container } from "react-bootstrap";
import img from "../../../imgs/section-img.jpg";

export class AboutMe extends React.Component {
    render(): React.ReactNode {
        return (
            <Container className="col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={img.src} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-2 fw-bold lh-1 mb-3">Jorge Calheiros</h1>
                        <p className="lead">
                            Olá eu sou desolvolvedor web fullstack tenho 19 anos, sou apaixonado por ténologias e sempre busco aprender mais sobre a área.
                            <br />

                            <strong>jorgecalheiros.s@gmail.com</strong>
                        </p>
                    </div>
                </div>
            </Container>
        )
    }
}

/**
 * 
 *   <div>
            <Style.ContianerText>
                <Style.Title colorPrimary={false} size="huge">Jorge Calheiros</Style.Title>
                <Style.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Style.Text>
            </Style.ContianerText>
            <Style.ContainerImg>
                <Image
                    alt="image"
                    src={img.src}
                    width={500}
                    height={500}
                    className={"image-next"}
                />
            </Style.ContainerImg>
        </div>
 */