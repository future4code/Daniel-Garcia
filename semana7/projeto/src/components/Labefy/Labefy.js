import axios from "axios";
import React from "react";
import {ContainerGrid, CriaPlaylist, Playlist, NomePlaylist, ListaDeMusica, Busca, Controls, Morcego, MorcegoImg, H3, Button, Span, Input, Audio, BatMusicas, BatPlaylists, NomeAlbum} from "./styled"
import morcego from "../../img/morcego.png"
export default class Labefy extends React.Component {

    state = {
        novaPlaylist:"",
        playlists:this.props.playlists,
        playListId:"",
        playlistTracks:[],
        nomeDoAlbum:"",
        nomeDaMusica:"",
        artist:"",
        url:"",
        player:""
    }
    playSong = (url) =>{
        console.log(url)
        this.setState({player: url})
    }
    handlenovaPLaylist = (e) =>{
        this.setState({novaPlaylist: e.target.value})
    }
    handleNomeDaMusica = (e) =>{
        this.setState({nomeDaMusica: e.target.value})
    }
    handleArtist = (e) =>{
        this.setState({artist: e.target.value})
    }
    handleUrl = (e) =>{
        this.setState({url: e.target.value})
    }
    createPlaylist = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const header = {
            headers: {
               Authorization: this.props.authorization
            }
        }
        const body ={
            name: this.state.novaPlaylist
        }
        axios.post(url, body, header)
        .then(() => {
            this.getPlaylist()
            this.setState({novaPlaylist:""})
          })
        .catch((err) => {
            alert("Erro ao criar a batList, tente novamente");
        })
    }
    getPlaylist = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const header = {
            headers: {
               Authorization: this.props.authorization
            }
        }
        axios.get(url, header)
        .then((res) => {
            this.setState({ playlists: res.data.result.list});
            localStorage.setItem("playlists", JSON.stringify(this.state.playlists));
          })
        .catch((err) => {
            alert("Erro, tente novamente");
        })
    }
    deleteList = (deletedId) =>{
        const header = {
            headers: {
              Authorization: this.props.authorization
            }
          };
       const BASE_URL =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${deletedId}`
       if (window.confirm("Tem certeza? Isso é um adeus")) {
          axios
            .delete(BASE_URL, header)
            .then(() => {
              alert("Sayonara");
              this.getPlaylist()
              if(deletedId ===this.state.playListId){
                this.setState({playlistTracks:[]})
              }
            })
            .catch((err) => {
                alert("Batlist bandida não quer sair da lista! Algo deu ruim");
            });
          }
    }
    getPlaylistTracks =  (playListId, nomeDoAlbum) =>{
        const id = playListId
        const album = nomeDoAlbum

            const header = {
            headers: {
              Authorization: this.props.authorization
            }
          };
       const BASE_URL =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playListId}/tracks`
          axios
            .get(BASE_URL, header)
            .then((res) => {
              this.setState({playlistTracks: res.data.result.tracks, playListId: id, nomeDoAlbum: album, player:""})
                
            })
            .catch(() => {
                alert("nao rolou pegar musicas");
            });
            
    }
    addTrackToPlayList =  () =>{
            if (this.state.nomeDaMusica !== "") {
                const header = {
                    headers: {
                      Authorization: this.props.authorization
                    }
                  };
                 const body = {
                      name: this.state.nomeDaMusica,
                      artist: this.state.artist,
                      url: this.state.url  
                  }
               const BASE_URL =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playListId}/tracks`
                  axios
                    .post(BASE_URL, body, header)
                    .then(() => {
                    this.getPlaylistTracks(this.state.playListId,this.state.nomeDoAlbum)
                    this.setState({nomeDaMusica:"", artist:"", url:""})   
                    })
                    .catch(() => {
                        alert("Erro ao adicionar a música");
                    });
                    
 }    
    }
    deleteTrack = (trackId) =>{
        const header = {
            headers: {
              Authorization: this.props.authorization
            }
          };
       const BASE_URL =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playListId}/tracks/${trackId}`
       if (window.confirm("Você removerá a musica badass da lista com esta ação")) {
          axios
            .delete(BASE_URL, header)
            .then(() => {
              alert("Para sempre na memória");
              this.getPlaylistTracks(this.state.playListId, this.state.nomeDoAlbum)
            })
            .catch((err) => {
                alert("Continua na memória, digo, no banco de dados");
            });
          }
    }
    render(){
        const batLista = this.state.playlists.map((lista)=>{
            return (

            <BatPlaylists>
              <Span key={lista.id} onClick={()=>this.getPlaylistTracks(lista.id, lista.name)} >{lista.name}</Span>
              <Button onClick={() => this.deleteList(lista.id)}>X</Button>
            </BatPlaylists>
              )})
        const batMusicas = this.state.playlistTracks.map((lista)=>{
                return (
                <BatMusicas key={lista.id}>
                  <Span onClick={()=>this.playSong(lista.url)} >{lista.artist}</Span>
                  <Span onClick={()=>this.playSong(lista.url)} >{lista.name}</Span>
                  <div style={{textAlign:"right"}} >
                  <Button onClick={()=>this.playSong(lista.url)} >Play</Button>
                  <Button onClick={()=>this.deleteTrack(lista.id)} >Delete</Button>
                  </div>
                </BatMusicas>
                )})
        return(
                <ContainerGrid>
                    <CriaPlaylist>
                        <H3>Adicionar Playlist</H3>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Input type="text"
                        placeholder="Digite sua Nova Bat-list"
                        value={this.state.novaPlaylist}
                        onChange={this.handlenovaPLaylist}
                        style={{borderBottom: "solid 1px white"}}
                        />
                        <br/>
                        <Button onClick={this.createPlaylist}>Criar playlist</Button></div>
                    </CriaPlaylist>
                    <Playlist>
                        <H3>Playlists</H3>
                        {batLista}
                    </Playlist>
                    <NomePlaylist>
                        <NomeAlbum>{this.state.nomeDoAlbum ==="" ? "Selecione uma Playlist" : this.state.nomeDoAlbum}</NomeAlbum>
                    </NomePlaylist>
                    <ListaDeMusica>
                    <H3>Sua Lista de Músicas</H3>
                    <BatMusicas>
                        <h4>Artista</h4>
                        <h4>Nome da Música</h4>
                        <h4 style={{textAlign:"right"}}>Controles</h4>
                    </BatMusicas>
                    {batMusicas}
                    </ListaDeMusica>
                    <Morcego>
                        <MorcegoImg src={morcego} alt="logo"/>
                    </Morcego>
                    <Busca>
                    <H3>PlayList Selecionada:</H3>
                    <br/>
                    <H3>{this.state.nomeDoAlbum}</H3>
                    <br/>
                    <Input type="text"
                        placeholder="nome da melhor música"
                        value={this.state.nomeDaMusica}
                        onChange={this.handleNomeDaMusica}
                    />
                    <Input type="text"
                        placeholder="nome do artista badass"
                        value={this.state.artist}
                        onChange={this.handleArtist}                    
                    />
                    <Input type="text"
                        placeholder="url da melhor música"
                        value={this.state.url}
                        onChange={this.handleUrl}                    
                    />
                    <br/>
                    <Button style={{display: "block", margin: "0 auto"}} onClick={this.addTrackToPlayList} >Adicionar</Button>
                    </Busca>
                    <Controls>
                    {this.state.player && <Audio src={this.state.player} controls autoPlay></Audio>}
                    </Controls>
                </ContainerGrid>
        )
    }
}