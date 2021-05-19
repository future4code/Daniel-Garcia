import styled from "styled-components"
import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

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
}
`

export const Body = styled.div `
    background-color:  transparent;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Header = styled.div`
    background-color:  #f9b24e;
    height: 20%;
`
export const Container = styled.div`
background-color: white;
flex-grow: 1;

`
export const Footer = styled.div`
    background-color: #45525b;
`
