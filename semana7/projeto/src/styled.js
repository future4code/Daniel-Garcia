import styled from "styled-components"
import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Arial', sans-serif;
    
    }`;

export const Body = styled.div `
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: ${props => {
        if(props.logado ==="logado") {
            return "50px 1fr"
        } else {
            return "50px 1fr 100px"
        }
    }
    };
`
export const Header = styled.div`
    background-color:  #f9b24e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 16px;
`
export const Container = styled.div`
    overflow-y: auto;
    height: 100%;
`
export const Footer = styled.div`
    display: flex;
    background-color: #45525b;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
`
export const Logo = styled.div`
display: flex;
height: 100%;
align-items: center;
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