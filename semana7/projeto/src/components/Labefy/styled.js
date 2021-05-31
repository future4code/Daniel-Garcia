import styled from "styled-components"

export const NomeAlbum= styled.h1`
font-style: oblique;
font-size: 50px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const ContainerGrid = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 250px 1fr 60px;
    grid-template-columns: 300px 2fr 1fr;
`
export const CriaPlaylist = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
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
justify-content: center;
padding: 24px;
grid-row: 1/2;
grid-column: 2/3;
background-image: linear-gradient(to left, rgb(94, 94, 104), rgb(161, 161, 173));
`
export const ListaDeMusica = styled.div`
display: flex;
flex-direction: column;
height: 100%;
grid-row: 2/3;
grid-column: 2/3;
background-image: linear-gradient(to left, rgb(94, 94, 104), rgb(161, 161, 173));
overflow-y: auto;
::-webkit-scrollbar {
  width: 1em;
  border: none;
  :active {
    border: none;
}
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(56, 56, 56);
  outline: none;
  border-radius: 8px;
  }
`
export const BatMusicas= styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 8px 8px;
`
export const BatPlaylists= styled.div`
display: flex;
padding: 8px 24px;
justify-content: space-between;
`
export const Busca = styled.div`
padding-left: 16px;
display: flex;
flex-direction: column;
align-items: center;
grid-row: 2/4;
grid-column: 3/4;
background-color: rgb(94, 94, 104);
`
export const Controls = styled.div`
grid-row: 3/4;
grid-column: 2/3;
background-image: linear-gradient(to left, rgb(94, 94, 104), rgb(161, 161, 173));
`
export const H3 = styled.h3`
font-size: 30px ;
padding: 24px 24px;
display: block;
margin: 0 auto;
`
export const Morcego = styled.div`
grid-row: 1/2;
grid-column: 3/4;
background-color: rgb(94, 94, 104);
`
export const MorcegoImg = styled.img`
display: block;
margin: 0 auto;
padding: 0;
max-width: 100%;
height: auto;

`
export const Button = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 2px 7px #38d39f70;
    background: #2A2A2A;
    color: rgba(255, 255, 255, 0.8);
    padding: 0 8px;
    height: 20px;
    transition: all 1s;
`
export const Span = styled.span`
font-weight: bold;
color: rgb(56, 44, 44);
font-family: sans-serif;
cursor: pointer;
` 
export const Input = styled.input `
    border: none;
    border-bottom: solid rgb(143, 143, 143) 1px;
    margin-bottom: 30px;
    background: none;
    color: rgb(224, 222, 222);
    height: 24px;
    width: 250px;
    font-size: 16px;
    ::placeholder {
        color:rgb(224, 222, 222);
    }
  `
  export const Audio = styled.audio`
    display: block;
    height: 100%;
    width: 100%;
    margin:0;
    ::-webkit-media-controls-panel, video::-webkit-media-controls-panel {
                background-color: #2A2A2A;
}
  `