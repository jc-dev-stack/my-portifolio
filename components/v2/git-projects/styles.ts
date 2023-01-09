import styled from "styled-components";

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    
`