import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToHomePage, goToLastPage } from "../routes/coordinator";
import useForm from "../hooks/useForm";
import { Today } from "@material-ui/icons";
import { createTrip} from "../services/requests"

function CreateTripPage() {
  const history = useHistory()
  
  const { form, onChange, cleanFields } = useForm({
    name: "", planet:"", durationInDays: "", date:"", description:""
   });

 const data = () =>{
  const dateobj = new Date(Date.now()).toLocaleString().slice(0, 10);
  const day = dateobj.slice(0,2)
  const month = dateobj.slice(3,5)
  const year = dateobj.slice(6,10)
  const dataRefeita = `${year}-${month}-${day}`
  return dataRefeita
  }

   const cadastrar = (event) => {
     event.preventDefault();
     const year = form.date.slice(0,4)
     const month = form.date.slice(5,7)
     const day = form.date.slice(8,10)
     const dataRefeita = `${day}/${month}/${year}`
     const body ={
       name: form.name,
       planet: form.planet,
       date: dataRefeita,
       durationInDays: form.durationInDays,
       description: form.description
     }
    createTrip(body);     
    cleanFields();
   };
  return (
    <div>
      <h1>CreateTripPage</h1>
      <form onSubmit={cadastrar}>
      <input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"^.{5,}"}
          title={"O Nome deve ter pelo menos 5 caracteres"}
        />
      <select
        name={"planet"} 
        value={form.planet}
        onChange={onChange}
        required
        >
          <option value="" disabled selected>Escolha um Planeta</option>
          <option value ="Mercúrio">Mercúrio</option>
          <option value ="Vênus">Vênus</option>
          <option value ="Terra">Terra</option>
          <option value ="Marte">Marte</option>
          <option value ="Júpiter">Júpiter</option>
          <option value ="Saturno">Saturno</option>
          <option value ="Urano">Urano</option>
          <option value ="Netuno">Netuno</option>
          <option value ="Plutão">Plutão - Não é! Mas continua em nossos ❤️</option>


        </select>
        <input
          name={"date"}
          value={form.date}
          onChange={onChange}
          type={"date"}
          min={data()}
          required
        />
        <input
          name={"durationInDays"}
          value={form.durationInDays}
          onChange={onChange}
          placeholder="Duração em dias"
          type={"number"}
          min={50}
          title={"Viagens acima de 50 dias"}
        />
        <input
          name={"description"}
          value={form.description}
          onChange={onChange}
          placeholder="Descrição"
          required
          pattern={"^.{15,}"}
          title={"Descrição da Viagem em 15 caracteres"}
        />
        <button>Criar Viagem</button>
        </form>
        <button onClick={history.goBack} >Voltar</button>

    </div>
  );
}

export default CreateTripPage;
