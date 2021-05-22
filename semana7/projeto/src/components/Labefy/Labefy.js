// import axios from "axios";
import React from "react";
import {ContainerLogado, ContainerGrid, CriaPlaylist, Playlist, NomePlaylist, ListaDeMusica, Busca, Controls, H3} from "./styled"

export default class Labefy extends React.Component {
    render(){

        return(
            <ContainerLogado>
                <ContainerGrid>
                    <CriaPlaylist>
                        <H3>Adicionar Playlist</H3>
                    </CriaPlaylist>
                    <Playlist>
                        <H3>Playlists</H3>
                    </Playlist>
                    <NomePlaylist>
                        <h2>Nome PlayList</h2>
                        <br/><br/>
                        <h4>algumas musicas</h4>
                    </NomePlaylist>
                    <ListaDeMusica>
                    <H3>Sua Lista de Músicas</H3>
                    </ListaDeMusica>
                    <Busca>
                    <H3>Procurando Musicas?</H3>
                    </Busca>
                    <Controls>Controle</Controls>
                </ContainerGrid>
            </ContainerLogado>

        )
    }
}