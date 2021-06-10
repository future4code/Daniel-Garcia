import styled from "styled-components"

export const Delete = styled.button`
    position: absolute;
    bottom: 4px;
    right: 4px;
`

export const DivHeader = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);  
    justify-items: center; 
    align-items: center;

h2{
    grid-column: 2;
}
`
export const TrocaPagina = styled.button` 
    cursor: pointer;
    border: none;
    background-color: transparent;
`