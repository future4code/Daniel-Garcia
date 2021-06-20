import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import { getTripDetail, decideCandidate} from "../services/requests";
import useProtectedPage from "../hooks/useProtectedPage";

function TripDetailsPage() {
  useProtectedPage();
  const history = useHistory()
  const params = useParams().id
  const [dados, setDados] = useState({})

  useEffect(() => {
    getTripDetail(params, setDados)
  }, []);

  return (
    <div>
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
          <div key={cand.id}>
            <p>Nome:{cand.name}</p>
            <p>Idade:{cand.age}</p>
            <p>País:{cand.country}</p>
            <p>Profissão:{cand.profession}</p>
            <button onClick={()=>decideCandidate(params, cand.id, true, setDados)} >Aprovar</button>
            <button onClick={()=>decideCandidate(params, cand.id, false, setDados)}>Reprovar</button>
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
