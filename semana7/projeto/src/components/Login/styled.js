import styled from "styled-components";
import wallpaper from "../../img/wallpaper.jpg"


export const ContainerLogado = styled.div`
    display: flex;
    flex-grow: 1;
    background-image: url(${wallpaper});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
export const BlocoLogin = styled.div`

  margin: auto;
  display: flex;
  flex-direction: column;
`
export const FormContainer = styled.div`
    padding: 16px 35px;
    justify-content: center;
    align-self: center;
    text-align: center;
`
export const Submit = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 2px 7px #38d39f70;
    background: #2A2A2A;
    color: rgba(255, 255, 255, 0.8);
    width: 80px;
    transition: all 1s;
`
export const Span = styled.span`
font-weight: bold;
color: white;
font-family: sans-serif;
` 
export const Input = styled.input `
    border: none;
    border-bottom: solid rgb(143, 143, 143) 1px;
    margin-bottom: 30px;
    background: none;
    color: rgba(255, 255, 255, 0.555);
    height: 24px;
    width: 250px;
    font-size: 16px;
  `