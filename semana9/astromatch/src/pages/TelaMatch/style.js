import styled from "styled-components"

export const Redondo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
`
export const Lista = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: center;
    align-items: center;
    margin: 20px;
`
export const ListaNome = styled.p`
    justify-self: start;
`