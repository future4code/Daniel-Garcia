import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToHomePage, goToLastPage } from "../routes/coordinator";
import { GetListTrips, applyToTrip } from "../services/requests"
import useForm from "../hooks/useForm";
import Button from '@material-ui/core/Button';


function ApplicationFormPage() {

  const history = useHistory()

  const listTrips =  GetListTrips()

  const { form, onChange, cleanFields } = useForm({
   id:"", name: "", age:"", candidateText:"", profession:"", country:""
  });

  const cadastrar = (event) => {
    event.preventDefault();
    applyToTrip(form)
   
    cleanFields();
  };

  return (
    <div>
      <h1>ApplicationFormPage</h1>
      <Button variant="contained" color="primary" onClick={history.goBack} >Voltar</Button>

      <form onSubmit={cadastrar}>
      <select
        name={"id"} 
        value={form.id}
        onChange={onChange}
        required
        >
          <option value="" disabled selected>Escolha uma viagem</option>
          {listTrips && listTrips.map((list)=>{
      return(
        <option key={list.id} value={list.id}>{list.name}</option>
      )
      })}
        </select>
        <input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"[a-z]{3,}$"}
          title={"O Nome deve ter pelo menos 3 caracteres"}
        />
        <input
          name={"age"}
          value={form.age}
          onChange={onChange}
          placeholder="Idade"
          type={"number"}
          pattern={"[0-9]{2,}$"}
          min={18}
          title={"Maiores de 18 apenas"}
        />
        <input
          name={"candidateText"}
          value={form.candidateText}
          onChange={onChange}
          placeholder="Texto de Candidatura"
          required
          pattern={"^.{30,}"}
          title={"Justifique sua candidatura em pelo menos 30 caracteres"}
        />
          <input
          name={"profession"}
          value={form.profession}
          onChange={onChange}
          placeholder="Profissão"
          required
          pattern={"^.{10,}"}
          title={"Sua profissão em pelo menos 10 caracteres"}
        />
        <select 
        placeholder="Países" 
        name="country"
        value={form.country}
        onChange={onChange} 
        required
        >
        <option value="" disabled selected>Escolha um país</option>
        <option value="Afeganistão">AF - Afeganistão</option>
<option value="África do Sul">ZA - África do Sul</option>
<option value="Albânia">AL - Albânia</option>
<option value="Alemanha">DE - Alemanha</option>
<option value="Andorra">AD - Andorra</option>
<option value="Angola">AO - Angola</option>
<option value="Anguilla">AI - Anguilla</option>
<option value="Antártica">AQ - Antártica</option>
<option value="Antígua e Barbuda">AG - Antígua e Barbuda</option>
<option value="Arábia Saudita">SA - Arábia Saudita</option>
<option value="Argélia">DZ - Argélia</option>
<option value="Argentina">AR - Argentina</option>
<option value="Armênia">AM - Armênia</option>
<option value="Aruba">AW - Aruba</option>
<option value="Austrália">AU - Austrália</option>
<option value="Áustria">AT - Áustria</option>
<option value="Azerbaijão">AZ - Azerbaijão</option>
<option value="Bahamas">BS - Bahamas</option>
<option value="Bangladesh">BD - Bangladesh</option>
<option value="Barbados">BB - Barbados</option>
<option value="Barém">BH - Barém</option>
<option value="Belarus">BY - Belarus</option>
<option value="Bélgica">BE - Bélgica</option>
<option value="Belize">BZ - Belize</option>
<option value="Benin">BJ - Benin</option>
<option value="Bermuda">BM - Bermuda</option>
<option value="Birmânia">MM - Birmânia</option>
<option value="Bolívia">BO - Bolívia</option>
<option value="Bósnia e Herzegovina">BA - Bósnia e Herzegovina</option>
<option value="Botswana">BW - Botswana</option>
<option value="Brasil">BR - Brasil</option>
<option value="Brunei">BN - Brunei</option>
<option value="Bulgária">BG - Bulgária</option>
<option value="Burkina Faso">BF - Burkina Faso</option>
<option value="Burundi">BI - Burundi</option>
<option value="Butão">BT - Butão</option>
<option value="Cabo Verde">CV - Cabo Verde</option>
<option value="Camarões">CM - Camarões</option>
<option value="Camboja">KH - Camboja</option>
<option value="Canadá">CA - Canadá</option>
<option value="Cazaquistão">KZ - Cazaquistão</option>
<option value="Chad">TD - Chad</option>
<option value="Chile">CL - Chile</option>
<option value="China">CN - China</option>
<option value="Chipre">CY - Chipre</option>
<option value="Cingapura">SG - Cingapura</option>
<option value="Cisjordânia">PS - Cisjordânia</option>
<option value="Colômbia">CO - Colômbia</option>
<option value="Cômoros">KM - Cômoros</option>
<option value="Coreia do Norte">KP - Coreia do Norte</option>
<option value="Coreia do Sul">KR - Coreia do Sul</option>
<option value="Costa do Marfim">CI - Costa do Marfim</option>
<option value="Costa Rica">CR - Costa Rica</option>
<option value="Croácia">HR - Croácia</option>
<option value="Cuba">CU - Cuba</option>
<option value="Curaçao">CW - Curaçao</option>
<option value="Dinamarca">DK - Dinamarca</option>
<option value="Djibuti">DJ - Djibuti</option>
<option value="Dominica">DM - Dominica</option>
<option value="Egito">EG - Egito</option>
<option value="El Salvador">SV - El Salvador</option>
<option value="Emirados Árabes Unidos">AE - Emirados Árabes Unidos</option>
<option value="Equador">EC - Equador</option>
<option value="Eritréia">ER - Eritréia</option>
<option value="Eslováquia">SK - Eslováquia</option>
<option value="Eslovênia">SI - Eslovênia</option>
<option value="Espanha">ES - Espanha</option>
<option value="Estados Unidos">US - Estados Unidos</option>
<option value="Estônia">EE - Estônia</option>
<option value="Etiópia">ET - Etiópia</option>
<option value="Faixa de Gaza">PS - Faixa de Gaza</option>
<option value="Fiji">FJ - Fiji</option>
<option value="Filipinas">PH - Filipinas</option>
<option value="Finlândia">FI - Finlândia</option>
<option value="França Metropolitana">FX - França Metropolitana</option>
<option value="França">FR - França</option>
<option value="Gabão">GA - Gabão</option>
<option value="Gâmbia">GM - Gâmbia</option>
<option value="Gana">GH - Gana</option>
<option value="Geórgia do Sul e Ilhas">GS - Geórgia do Sul e Ilhas</option>
<option value="Geórgia">GE - Geórgia</option>
<option value="Gibraltar">GI - Gibraltar</option>
<option value="Grécia">GR - Grécia</option>
<option value="Greenland">GL - Greenland</option>
<option value="Grenada">GD - Grenada</option>
<option value="Guadelupe">GP - Guadelupe</option>
<option value="Guam">GU - Guam</option>
<option value="Guatemala">GT - Guatemala</option>
<option value="Guernsey">GG - Guernsey</option>
<option value="Guiana Francesa">GF - Guiana Francesa</option>
<option value="Guiana">GY - Guiana</option>
<option value="Guiné Equatorial">GQ - Guiné Equatorial</option>
<option value="Guiné">GN - Guiné</option>
<option value="Guiné-Bissau">GW - Guiné-Bissau</option>
<option value="Haiti">HT - Haiti</option>
<option value="Holanda">NL - Holanda</option>
<option value="Honduras">HN - Honduras</option>
<option value="Hong Kong">HK - Hong Kong</option>
<option value="Hungria">HU - Hungria</option>
<option value="Iêmen">YE - Iêmen</option>
<option value="Ilha Bouvet">BV - Ilha Bouvet</option>
<option value="Ilha Christmas">CX - Ilha Christmas</option>
<option value="Ilha de Man">IM - Ilha de Man</option>
<option value="Ilha Norfolk">NF - Ilha Norfolk</option>
<option value="Ilhas Caiman">KY - Ilhas Caiman</option>
<option value="Ilhas Cocos (Keeling)">CC - Ilhas Cocos (Keeling)</option>
<option value="Ilhas Cook">CK - Ilhas Cook</option>
<option value="Ilhas Falkland (Malvinas)">FK - Ilhas Falkland (Malvinas)</option>
<option value="Ilhas Feroe">FO - Ilhas Feroe</option>
<option value="Ilhas Heard and McDonald">HM - Ilhas Heard and McDonald</option>
<option value="Ilhas Marianas do Norte">MP - Ilhas Marianas do Norte</option>
<option value="Ilhas Marshall">MH - Ilhas Marshall</option>
<option value="Ilhas Maurício">mu – Ilhas Maurício</option>
<option value="Ilhas Menores Distantes dos Estados Unidos">UM - Ilhas Menores Distantes dos Estados Unidos</option>
<option value="Ilhas Pitcairn">PN - Ilhas Pitcairn</option>
<option value="Ilhas Salomão">SB - Ilhas Salomão</option>
<option value="Ilhas Turks e Caicos">TC - Ilhas Turks e Caicos</option>
<option value="Ilhas Virgens Americanas">VI - Ilhas Virgens Americanas</option>
<option value="Ilhas Virgens Britânicas">VG - Ilhas Virgens Britânicas</option>
<option value="Ilhas Wallis e Futuna">WF - Ilhas Wallis e Futuna</option>
<option value="Índia">IN - Índia</option>
<option value="Indonésia">ID - Indonésia</option>
<option value="Irã">IR - Irã</option>
<option value="Iraque">IQ - Iraque</option>
<option value="Irlanda">IE - Irlanda</option>
<option value="Islândia">IS - Islândia</option>
<option value="Israel">IL - Israel</option>
<option value="Itália">IT - Itália</option>
<option value="Jamaica">JM - Jamaica</option>
<option value="Japão">JP - Japão</option>
<option value="Jersey">JE - Jersey</option>
<option value="Jordânia">JO - Jordânia</option>
<option value="Kiribati">KI - Kiribati</option>
<option value="Kosovo">XK - Kosovo</option>
<option value="Kuwait">KW - Kuwait</option>
<option value="Laos">LA - Laos</option>
<option value="Lesoto">LS - Lesoto</option>
<option value="Letônia">LV - Letônia</option>
<option value="Líbano">LB - Líbano</option>
<option value="Libéria">LR - Libéria</option>
<option value="Líbia">LY - Líbia</option>
<option value="Liechtenstein">LI - Liechtenstein</option>
<option value="Lituânia">LT - Lituânia</option>
<option value="Luxemburgo">LU - Luxemburgo</option>
<option value="Macao">MO - Macao</option>
<option value="Macedônia">MK - Macedônia</option>
<option value="Madagascar">MG - Madagascar</option>
<option value="Maiote">YT - Maiote</option>
<option value="Malásia">MY - Malásia</option>
<option value="Malawi">MW - Malawi</option>
<option value="Maldivas">MV - Maldivas</option>
<option value="Mali">ML - Mali</option>
<option value="Malta">MT - Malta</option>
<option value="Marrocos">MA - Marrocos</option>
<option value="Martinica">MQ - Martinica</option>
<option value="Mauritânia">MR - Mauritânia</option>
<option value="México">MX - México</option>
<option value="Micronésia, Estados Federados da">FM - Micronésia, Estados Federados da</option>
<option value="Moçambique">MZ - Moçambique</option>
<option value="Moldova">MD - Moldova</option>
<option value="Mônaco">MC - Mônaco</option>
<option value="Mongólia">MN - Mongólia</option>
<option value="Montenegro">ME - Montenegro</option>
<option value="Montserrat">MS - Montserrat</option>
<option value="Namíbia">NA - Namíbia</option>
<option value="Nauru">NR - Nauru</option>
<option value="Nepal">NP - Nepal</option>
<option value="Nicarágua">NI - Nicarágua</option>
<option value="Níger">NE - Níger</option>
<option value="Nigéria">NG - Nigéria</option>
<option value="Niue">NU - Niue</option>
<option value="Noruega">NO - Noruega</option>
<option value="Nova Caledônia">NC - Nova Caledônia</option>
<option value="Nova Zelândia">NZ - Nova Zelândia</option>
<option value="Omã">OM - Omã</option>
<option value="Outros">Outros ...</option>
<option value="Palau">PW - Palau</option>
<option value="Panamá">PA - Panamá</option>
<option value="Papua Nova Guiné">PG - Papua Nova Guiné</option>
<option value="Paquistão">PK - Paquistão</option>
<option value="Paraguai">PY - Paraguai</option>
<option value="Peru">PE - Peru</option>
<option value="Polinésia Francesa">PF - Polinésia Francesa</option>
<option value="Polônia">PL - Polônia</option>
<option value="Porto Rico">PR - Porto Rico</option>
<option value="Portugal">PT - Portugal</option>
<option value="Qatar">QA - Qatar</option>
<option value="Quênia">KE - Quênia</option>
<option value="Quirguistão">KG - Quirguistão</option>
<option value="Reino Unido">GB - Reino Unido</option>
<option value="República Centro-Africana">CF - República Centro-Africana</option>
<option value="República Democrática do Congo">CD - República Democrática do Congo</option>
<option value="República do Congo">CG - República do Congo</option>
<option value="República Dominicana">DO - República Dominicana</option>
<option value="República Tcheca">CZ - República Tcheca</option>
<option value="Reunião">RE - Reunião</option>
<option value="Romênia">RO - Romênia</option>
<option value="Ruanda">RW - Ruanda</option>
<option value="Rússia">RU - Rússia</option>
<option value="Saara Ocidental">EH - Saara Ocidental</option>
<option value="Saint Martin">MF - Saint Martin</option>
<option value="Saint Pierre e Miquelon">PM - Saint Pierre e Miquelon</option>
<option value="Samoa Americana">AS - Samoa Americana</option>
<option value="Samoa">WS - Samoa</option>
<option value="San Marino">SM - San Marino</option>
<option value="Santa Helena, Ascensão e Tristão da Cunha">SH - Santa Helena, Ascensão e Tristão da Cunha</option>
<option value="Santa Lúcia">LC - Santa Lúcia</option>
<option value="Santa Sé (Cidade do Vaticano)">VA - Santa Sé (Cidade do Vaticano)</option>
<option value="São Bartolomeu">BL - São Bartolomeu</option>
<option value="São Cristóvão e Nevis">KN - São Cristóvão e Nevis</option>
<option value="São Martinho">SX - São Martinho</option>
<option value="São Tomé e Prín">ST - São Tomé e Príncipe</option>
<option value="São Vicente e Granadinas">VC - São Vicente e Granadinas</option>
<option value="Seicheles">SC - Seicheles</option>
<option value="Senegal">SN - Senegal</option>
<option value="Serra Leoa">SL - Serra Leoa</option>
<option value="Sérvia">RS - Sérvia</option>
<option value="Síria">SY - Síria</option>
<option value="Somália">SO - Somália</option>
<option value="Sri Lanka">LK - Sri Lanka</option>
<option value="Suazilândia">SZ - Suazilândia</option>
<option value="Sudão do Sul">SS - Sudão do Sul</option>
<option value="Sudão">SD - Sudão</option>
<option value="Suécia">SE - Suécia</option>
<option value="Suíça">CH - Suíça</option>
<option value="Sul da França e Antártica">TF - Sul da França e Antártica</option>
<option value="Suriname">SR - Suriname</option>
<option value="Svalbard">SJ - Svalbard</option>
<option value="Tadjiquistão">TJ - Tadjiquistão</option>
<option value="Tailândia">TH - Tailândia</option>
<option value="Taiwan">TW - Taiwan</option>
<option value="Tanzânia">TZ - Tanzânia</option>
<option value="Território Britânico do Oceano Índico">IO - Território Britânico do Oceano Índico</option>
<option value="Timor-Leste">TL - Timor-Leste</option>
<option value="Togo">TG - Togo</option>
<option value="Tonga">TO - Tonga</option>
<option value="Toquelau">TK - Toquelau</option>
<option value="Trinidad e Tobago">TT - Trinidad e Tobago</option>
<option value="Tunísia">TN - Tunísia</option>
<option value="Turcomenistão">TM - Turcomenistão</option>
<option value="Turquia">TR - Turquia</option>
<option value="Tuvalu">TV - Tuvalu</option>
<option value="Ucrânia">UA - Ucrânia</option>
<option value="Uganda">UG - Uganda</option>
<option value="Uruguai">UY - Uruguai</option>
<option value="Uzbequistão">UZ - Uzbequistão</option>
<option value="Vanuatu">VU - Vanuatu</option>
<option value="Venezuela">VE - Venezuela</option>
<option value="Vietnã">VN - Vietnã</option>
<option value="Zâmbia">ZM - Zâmbia</option>
<option value="Zimbábue">ZW - Zimbábue</option>
        </select>
        <button>Enviar</button>
        </form>
    </div>
  );
}

export default ApplicationFormPage;
