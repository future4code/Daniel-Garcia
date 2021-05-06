import React from 'react';
import {AlinhaP, CardPequenoContainer} from "./styled"

function CardPequeno(props) {
    return (
        <CardPequenoContainer>
            <h4>{props.titulo}</h4>
            <br/>
            <AlinhaP>{ props.texto }</AlinhaP>
        </CardPequenoContainer>

    )
}

export default CardPequeno;

