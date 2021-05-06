import React from 'react';
import {ImgButtonContainer, ImgButtonImg} from "./styled"

function ImagemButton(props) {
    return (
        <ImgButtonContainer>
            <ImgButtonImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImgButtonContainer>

    )
}

export default ImagemButton;