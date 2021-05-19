import React from "react"
import axios from "axios"
import {GlobalStyle, Body, Header, Container, Footer} from "./styled"

export default class App extends React.Component {
  state = {

  }
  render() {

    return (
      <Body>
        <GlobalStyle />
        <Header>
        <h1>Labenusers</h1>
        </Header>
        <Container>oi, eu sou o conteúdo</Container>
        <Footer>
          oi, eu sou o footer
        </Footer>
        </Body>
    )
  }
}