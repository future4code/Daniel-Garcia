import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToPage } from "../routes/coordinator";
import { getTripDetail} from "../services/requests";



function TripDetailsPage() {

  const history = useHistory()
  const params = useParams().id
  const [dados, setDados] = useState({})

  useEffect(() => {
getTripDetail(params, setDados)
  }, []);

  return (
    <div>
      {console.log(dados)}

      <button onClick={history.goBack} >Voltar</button>
      <h1>Viagem:</h1>
        <p>Nome: {dados.name}</p>
        <p>Descrição: {dados.description}</p>
        <p>Planeta: {dados.planet}</p>
        <p>Duração: {dados.durationInDays}</p>
        <p>Data: {dados.date}</p>
        <h2>Lista de Candidatos</h2>
        {dados && dados.candidates && dados.candidates.map((cand)=>{
          return(
            <div>
          <p key={cand.id}>{cand.name}</p>
          <p key={cand.id}>{cand.name}</p>
          <p key={cand.id}>{cand.name}</p>
          <p key={cand.id}>{cand.name}</p>

            </div>
          )
        })}
      <h2>Lista de Aprovados</h2>
      {dados && dados.approved && dados.approved.map((cand)=>{
          return<p key={cand.id}>{cand.name}</p>
        })}
    </div>
  );
}

export default TripDetailsPage;
