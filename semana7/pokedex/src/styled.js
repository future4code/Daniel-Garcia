import styled from "styled-components"
import {createGlobalStyle} from "styled-components"
export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Arial', sans-serif;
}
html, #root {
    max-width: 100vw;
    min-height: 100vh;
body {
    width: 100%;
    height: 100%;
}
iframe {
    height: 80px;
}
}
`

export const Body = styled.div `
    background-color:  transparent;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
`
export const Header = styled.div`
    background-color: #F5F5F5;
    height: 50px;
    display: flex;
    align-items: center;
`
export const Container = styled.div`
display: flex;
flex-direction: column;
background-color: white;
flex-grow: 1;

`
export const Footer = styled.div`
    background-color: #1F1F1F;
    height: 100px;
`
export const Imagem = styled.img`
height: 80%;
margin: 0px 16px;
`
export const Mensagem = styled.div`
background-color: #E3E8EB;
display: flex;
justify-content: space-between;
height: 50px;
align-items: center;
padding: 0px 24px;
`

export const SelectPokemon = styled.select`
     padding: 5px;
     font-size: 16px;
     border-width: 1px;
     border-color: #CCCCCC;
     background-color: #ffffff;
     color: #000000;
     border-style: solid;
     border-radius: 24px;
     box-shadow: 0px 0px 5px rgba(66,66,66,.75);
     cursor: pointer;
:focus {
     outline:none;
}
`
export const Pokedex = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
flex-grow: 1;
vertical-align: center;
`
export const PokedexImg = styled.img`
height: 650px;
`
export const PokemonImg = styled.img`
position: absolute;
z-index: 1;
top: 32%;
left: 16%;
height: 180px;
`
export const DivSobrepoeImg = styled.div`
position: relative;
`