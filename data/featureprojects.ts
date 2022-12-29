import { FeatureProject } from "../@types/featureproject";
import project1Image from "../imgs/feature-project-1.png";
import project2Image from "../imgs/feature-project-2.png"

export const data: FeatureProject[] = [
    {
        title: "Crud com Next.JS(SSG) e Firabase",
        description: "Crud de usuários usando Next.Js com interação do banco de dados em nuvem do firebase.",
        imagesrc: project1Image.src,
        languages: [
            "Next.Js",
            "TailwindCSS",
            "Firebase"
        ],
        link: "https://github.com/jc-dev-stack/crud-nextjs-firebase-ssg"
    },
    {
        title: "Login e cadastro com NextJs e Laravel",
        description: "Um aplicação de login e cadastro de usuário normal e usuário admin, usando uma api em laravel que faz login e retorna o token de autenticação do usuário para o front.",
        imagesrc: project2Image.src,
        languages: [
            "Next.Js",
            "TailwinCSS",
            "Laravel"
        ],
        link: "https://github.com/jc-dev-stack/nextjs-authenticate-nookies"
    }
]