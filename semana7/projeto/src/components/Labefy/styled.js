import styled from "styled-components"


export const ContainerLogado = styled.div`
    display: flex;
    flex-grow: 1; 
`
export const ContainerGrid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 3fr 100px;
    grid-template-columns: 1fr 2fr 1fr;
`
export const CriaPlaylist = styled.div`
grid-row: 1/2;
grid-column: 1/2;
background-image: linear-gradient(to right, rgb(94, 94, 104) , rgb(161, 161, 173));
`
export const Playlist = styled.div`
grid-row: 2/4;
grid-column: 1/2;
background-image: linear-gradient(to right, rgb(94, 94, 104), rgb(161, 161, 173));
`
export const NomePlaylist = styled.div`
display: flex;
flex-direction: column;
text-align: center;
padding: 24px;
grid-row: 1/2;
grid-column: 2/3;
background-image: linear-gradient(to left, rgb(94, 94, 104), rgb(161, 161, 173));
`
export const ListaDeMusica = styled.div`
grid-row: 2/3;
grid-column: 2/3;
background-image: linear-gradient(to left, rgb(94, 94, 104), rgb(161, 161, 173));
`
export const Busca = styled.div`
grid-row: 1/4;
grid-column: 3/4;
background-color: rgb(94, 94, 104);
`
export const Controls = styled.div`
grid-row: 3/4;
grid-column: 2/3;
background-image: linear-gradient(to left, rgb(94, 94, 104), rgb(161, 161, 173));
`
export const H3 = styled.h3`
padding: 24px;
`