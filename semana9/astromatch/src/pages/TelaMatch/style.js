import styled from "styled-components"

export const RoundedImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
`
export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: center;
    align-items: center;
    margin: 20px;
`
export const ListName = styled.p`
    justify-self: start;
`
export const DivOverFlow = styled.div`
overflow-y: auto;
box-sizing: border-box;
height: 520px;
`