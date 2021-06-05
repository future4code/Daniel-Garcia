import styled from "styled-components"
import FavoriteIcon from '@material-ui/icons/Favorite';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export const SeparaBotao = styled.div`
    display: flex;
    justify-content: space-around;
`
export const ContainerSelectScreen = styled.div`
display: flex;
flex-direction: column;
`
export const ProfileData = styled.div`
    display: flex;
    background-position: 100%;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    margin-bottom: 30px;
    height: 420px;
    width: 300px;
    margin: 0 auto;
    animation: name duration timing-function delay iteration-count direction fill-mode;
    animation:   ${props => {
        if (props.animation === "direitaAlternada") {
            return "direitaAlternada 0.5s alternate 0s 2"
        } else if (props.animation === "esquerdaAlternada"){
            return "esquerdaAlternada 0.5s alternate 0s 2"
        }else if (props.animation === "direita"){
            return "direita 0.5s  0s"
        }else if (props.animation === "esquerda"){
            return "esquerda 0.5s 0s"
        }else {
            return ""
        }
    }};

    
    @keyframes direita {
    from{
        transform: translate(0) rotate(0);
    }
    to {
        transform: translate(200px) rotate(45deg);
    }
}
@keyframes esquerda {
    from{
        transform: translate(0) rotate(0);
    }
    to {
        transform: translate(-200px) rotate(-45deg);
    }
}
@keyframes direitaAlternada {
    from{
        transform: translate(0) rotate(0);
    }
    to {
        transform: translate(20px) rotate(15deg);
    }
}
@keyframes esquerdaAlternada {
    from{
        transform: translate(0) rotate(0);
    }
    to {
        transform: translate(-20px) rotate(-15deg);
    }
}
`

export const BottomLeft = styled.div`
    color:white;
    font-weight: 700;
    position: absolute;
    z-index:3;
    bottom: 2%;
    left: 5%;
    text-align: left;
    padding-right: 2%;
    -webkit-text-stroke-width: 0.7px;
    -webkit-text-stroke-color: black;
`
export const Like = styled(FavoriteIcon)`
    
:hover{
    transform: scale(1.15);
}
    `;

export const Dislike = styled(HighlightOffIcon)`
    
:hover{
    transform: scale(1.15);
}
    `;

export const FotoPerfil = styled.img`
    position: absolute;
    z-index:2;
    height: 420px;
    width: 300px;
    object-fit: scale-down;
`
export const FotoPerfilBorrado = styled.img`
    position:absolute;
    height: 420px;
    width: 300px;
    filter: blur(5px);
`