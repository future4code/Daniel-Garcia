import React from "react"
import {GlobalStyle, Body, Header, Container, Footer, Imagem, Mensagem, SelectPokemon, Pokedex, PokedexImg, PokemonImg, DivSobrepoeImg} from "./styled"
import pokedexImg from "./img/pokedex.png"
import axios from "axios"
import pokeDiv from "./img/pokedex div.png"

export default class App extends React.Component {
  state = {
    pokemons: [],
    poke:"",
    picture:""
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }
  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
      );
      this.setState({ pokemons: response.data.results });
    } catch (err) {
      console.log(err);
    }
  };
  getPokePicture = async (event) => {
    console.log(event.target.value);
    try {
      const url = event.target.value;
      const response = await axios.get(`${url}`);
      this.setState({ picture: response.data.sprites.front_default });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
      const pokeList = this.state.pokemons.map((poke) => {
        return (
          <option key={poke.name} value={poke.url}>
            {poke.name}
          </option>
        );
      });
    return (
      <Body>
        <GlobalStyle /> 
        <Header>
          <Imagem src={pokedexImg}/>
          <h1>Pokedex!</h1>
        </Header>
        <Container>
          <Mensagem>
          <h2>Sejam Bem vindos! Escolha um Pokemon para ver em sua Pokedex!</h2>
          <div>
            <SelectPokemon onChange={this.getPokePicture}>  
            <option>Selecione um pokemon</option>
            {pokeList}
          </SelectPokemon>
          </div>
          </Mensagem>
          <Pokedex>
          {this.state.picture && (
          <DivSobrepoeImg>
          <PokedexImg src={pokeDiv} alt="pokedex"/>
          <PokemonImg src={this.state.picture} alt="foto do pokemon"/>
          </DivSobrepoeImg>
        )}
          </Pokedex>
        
          </Container>
        <Footer>
         <div></div>
        </Footer>
      </Body>
    )
  }
}