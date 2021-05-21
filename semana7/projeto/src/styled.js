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
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
`
export const Header = styled.div`
    background-color:  #f9b24e;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 16px;
`
export const Logo = styled.div`
display: flex;
height: 100%;
align-items: center;
`
export const Container = styled.div`
display: flex;
flex-grow: 1;

`
export const Footer = styled.div`
    display: flex;
    background-color: #45525b;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
`
export const Batman = styled.img`
height: 80%;
margin: 0px 16px;
`
export const Botao = styled.button`
    margin-left: 16px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 2px 7px #38d39f70;
    background: #2A2A2A;
    color: rgba(255, 255, 255, 0.8);
    width: 80px;
    transition: all 1s;
`