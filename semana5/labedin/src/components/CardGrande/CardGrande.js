import React from 'react';
import {BigCardContainer, BigCardDiv2, BigCardH4, BigCardImg} from "./styled"

function CardGrande(props) {
    return (
        <BigCardContainer>
            <BigCardImg src={ props.imagem } />
            <BigCardDiv2>
                <BigCardH4>{ props.nome }</BigCardH4>
                <p>{ props.descricao }</p>
            </BigCardDiv2>
        </BigCardContainer>
    )
}

export default CardGrande;