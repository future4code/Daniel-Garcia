import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { getListTrips, applyToTrip } from "../services/requests"
import useForm from "../hooks/useForm";
import Button from '@material-ui/core/Button';


function ApplicationFormPage() {

  const history = useHistory()
  const [listTrips, setListTrips] = useState([])

 
  useEffect(() => {
    getListTrips(setListTrips)
  }, []);

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
          pattern={"^.{3,}"}
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
          placeholder="Profiss??o"
          required
          pattern={"^.{10,}"}
          title={"Sua profiss??o em pelo menos 10 caracteres"}
        />
        <select 
        placeholder="Pa??ses" 
        name="country"
        value={form.country}
        onChange={onChange} 
        required
        >
        <option value="" disabled selected>Escolha um pa??s</option>
        <option value="Afeganist??o">AF - Afeganist??o</option>
<option value="??frica do Sul">ZA - ??frica do Sul</option>
<option value="Alb??nia">AL - Alb??nia</option>
<option value="Alemanha">DE - Alemanha</option>
<option value="Andorra">AD - Andorra</option>
<option value="Angola">AO - Angola</option>
<option value="Anguilla">AI - Anguilla</option>
<option value="Ant??rtica">AQ - Ant??rtica</option>
<option value="Ant??gua e Barbuda">AG - Ant??gua e Barbuda</option>
<option value="Ar??bia Saudita">SA - Ar??bia Saudita</option>
<option value="Arg??lia">DZ - Arg??lia</option>
<option value="Argentina">AR - Argentina</option>
<option value="Arm??nia">AM - Arm??nia</option>
<option value="Aruba">AW - Aruba</option>
<option value="Austr??lia">AU - Austr??lia</option>
<option value="??ustria">AT - ??ustria</option>
<option value="Azerbaij??o">AZ - Azerbaij??o</option>
<option value="Bahamas">BS - Bahamas</option>
<option value="Bangladesh">BD - Bangladesh</option>
<option value="Barbados">BB - Barbados</option>
<option value="Bar??m">BH - Bar??m</option>
<option value="Belarus">BY - Belarus</option>
<option value="B??lgica">BE - B??lgica</option>
<option value="Belize">BZ - Belize</option>
<option value="Benin">BJ - Benin</option>
<option value="Bermuda">BM - Bermuda</option>
<option value="Birm??nia">MM - Birm??nia</option>
<option value="Bol??via">BO - Bol??via</option>
<option value="B??snia e Herzegovina">BA - B??snia e Herzegovina</option>
<option value="Botswana">BW - Botswana</option>
<option value="Brasil">BR - Brasil</option>
<option value="Brunei">BN - Brunei</option>
<option value="Bulg??ria">BG - Bulg??ria</option>
<option value="Burkina Faso">BF - Burkina Faso</option>
<option value="Burundi">BI - Burundi</option>
<option value="But??o">BT - But??o</option>
<option value="Cabo Verde">CV - Cabo Verde</option>
<option value="Camar??es">CM - Camar??es</option>
<option value="Camboja">KH - Camboja</option>
<option value="Canad??">CA - Canad??</option>
<option value="Cazaquist??o">KZ - Cazaquist??o</option>
<option value="Chad">TD - Chad</option>
<option value="Chile">CL - Chile</option>
<option value="China">CN - China</option>
<option value="Chipre">CY - Chipre</option>
<option value="Cingapura">SG - Cingapura</option>
<option value="Cisjord??nia">PS - Cisjord??nia</option>
<option value="Col??mbia">CO - Col??mbia</option>
<option value="C??moros">KM - C??moros</option>
<option value="Coreia do Norte">KP - Coreia do Norte</option>
<option value="Coreia do Sul">KR - Coreia do Sul</option>
<option value="Costa do Marfim">CI - Costa do Marfim</option>
<option value="Costa Rica">CR - Costa Rica</option>
<option value="Cro??cia">HR - Cro??cia</option>
<option value="Cuba">CU - Cuba</option>
<option value="Cura??ao">CW - Cura??ao</option>
<option value="Dinamarca">DK - Dinamarca</option>
<option value="Djibuti">DJ - Djibuti</option>
<option value="Dominica">DM - Dominica</option>
<option value="Egito">EG - Egito</option>
<option value="El Salvador">SV - El Salvador</option>
<option value="Emirados ??rabes Unidos">AE - Emirados ??rabes Unidos</option>
<option value="Equador">EC - Equador</option>
<option value="Eritr??ia">ER - Eritr??ia</option>
<option value="Eslov??quia">SK - Eslov??quia</option>
<option value="Eslov??nia">SI - Eslov??nia</option>
<option value="Espanha">ES - Espanha</option>
<option value="Estados Unidos">US - Estados Unidos</option>
<option value="Est??nia">EE - Est??nia</option>
<option value="Eti??pia">ET - Eti??pia</option>
<option value="Faixa de Gaza">PS - Faixa de Gaza</option>
<option value="Fiji">FJ - Fiji</option>
<option value="Filipinas">PH - Filipinas</option>
<option value="Finl??ndia">FI - Finl??ndia</option>
<option value="Fran??a Metropolitana">FX - Fran??a Metropolitana</option>
<option value="Fran??a">FR - Fran??a</option>
<option value="Gab??o">GA - Gab??o</option>
<option value="G??mbia">GM - G??mbia</option>
<option value="Gana">GH - Gana</option>
<option value="Ge??rgia do Sul e Ilhas">GS - Ge??rgia do Sul e Ilhas</option>
<option value="Ge??rgia">GE - Ge??rgia</option>
<option value="Gibraltar">GI - Gibraltar</option>
<option value="Gr??cia">GR - Gr??cia</option>
<option value="Greenland">GL - Greenland</option>
<option value="Grenada">GD - Grenada</option>
<option value="Guadelupe">GP - Guadelupe</option>
<option value="Guam">GU - Guam</option>
<option value="Guatemala">GT - Guatemala</option>
<option value="Guernsey">GG - Guernsey</option>
<option value="Guiana Francesa">GF - Guiana Francesa</option>
<option value="Guiana">GY - Guiana</option>
<option value="Guin?? Equatorial">GQ - Guin?? Equatorial</option>
<option value="Guin??">GN - Guin??</option>
<option value="Guin??-Bissau">GW - Guin??-Bissau</option>
<option value="Haiti">HT - Haiti</option>
<option value="Holanda">NL - Holanda</option>
<option value="Honduras">HN - Honduras</option>
<option value="Hong Kong">HK - Hong Kong</option>
<option value="Hungria">HU - Hungria</option>
<option value="I??men">YE - I??men</option>
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
<option value="Ilhas Maur??cio">mu ??? Ilhas Maur??cio</option>
<option value="Ilhas Menores Distantes dos Estados Unidos">UM - Ilhas Menores Distantes dos Estados Unidos</option>
<option value="Ilhas Pitcairn">PN - Ilhas Pitcairn</option>
<option value="Ilhas Salom??o">SB - Ilhas Salom??o</option>
<option value="Ilhas Turks e Caicos">TC - Ilhas Turks e Caicos</option>
<option value="Ilhas Virgens Americanas">VI - Ilhas Virgens Americanas</option>
<option value="Ilhas Virgens Brit??nicas">VG - Ilhas Virgens Brit??nicas</option>
<option value="Ilhas Wallis e Futuna">WF - Ilhas Wallis e Futuna</option>
<option value="??ndia">IN - ??ndia</option>
<option value="Indon??sia">ID - Indon??sia</option>
<option value="Ir??">IR - Ir??</option>
<option value="Iraque">IQ - Iraque</option>
<option value="Irlanda">IE - Irlanda</option>
<option value="Isl??ndia">IS - Isl??ndia</option>
<option value="Israel">IL - Israel</option>
<option value="It??lia">IT - It??lia</option>
<option value="Jamaica">JM - Jamaica</option>
<option value="Jap??o">JP - Jap??o</option>
<option value="Jersey">JE - Jersey</option>
<option value="Jord??nia">JO - Jord??nia</option>
<option value="Kiribati">KI - Kiribati</option>
<option value="Kosovo">XK - Kosovo</option>
<option value="Kuwait">KW - Kuwait</option>
<option value="Laos">LA - Laos</option>
<option value="Lesoto">LS - Lesoto</option>
<option value="Let??nia">LV - Let??nia</option>
<option value="L??bano">LB - L??bano</option>
<option value="Lib??ria">LR - Lib??ria</option>
<option value="L??bia">LY - L??bia</option>
<option value="Liechtenstein">LI - Liechtenstein</option>
<option value="Litu??nia">LT - Litu??nia</option>
<option value="Luxemburgo">LU - Luxemburgo</option>
<option value="Macao">MO - Macao</option>
<option value="Maced??nia">MK - Maced??nia</option>
<option value="Madagascar">MG - Madagascar</option>
<option value="Maiote">YT - Maiote</option>
<option value="Mal??sia">MY - Mal??sia</option>
<option value="Malawi">MW - Malawi</option>
<option value="Maldivas">MV - Maldivas</option>
<option value="Mali">ML - Mali</option>
<option value="Malta">MT - Malta</option>
<option value="Marrocos">MA - Marrocos</option>
<option value="Martinica">MQ - Martinica</option>
<option value="Maurit??nia">MR - Maurit??nia</option>
<option value="M??xico">MX - M??xico</option>
<option value="Micron??sia, Estados Federados da">FM - Micron??sia, Estados Federados da</option>
<option value="Mo??ambique">MZ - Mo??ambique</option>
<option value="Moldova">MD - Moldova</option>
<option value="M??naco">MC - M??naco</option>
<option value="Mong??lia">MN - Mong??lia</option>
<option value="Montenegro">ME - Montenegro</option>
<option value="Montserrat">MS - Montserrat</option>
<option value="Nam??bia">NA - Nam??bia</option>
<option value="Nauru">NR - Nauru</option>
<option value="Nepal">NP - Nepal</option>
<option value="Nicar??gua">NI - Nicar??gua</option>
<option value="N??ger">NE - N??ger</option>
<option value="Nig??ria">NG - Nig??ria</option>
<option value="Niue">NU - Niue</option>
<option value="Noruega">NO - Noruega</option>
<option value="Nova Caled??nia">NC - Nova Caled??nia</option>
<option value="Nova Zel??ndia">NZ - Nova Zel??ndia</option>
<option value="Om??">OM - Om??</option>
<option value="Outros">Outros ...</option>
<option value="Palau">PW - Palau</option>
<option value="Panam??">PA - Panam??</option>
<option value="Papua Nova Guin??">PG - Papua Nova Guin??</option>
<option value="Paquist??o">PK - Paquist??o</option>
<option value="Paraguai">PY - Paraguai</option>
<option value="Peru">PE - Peru</option>
<option value="Polin??sia Francesa">PF - Polin??sia Francesa</option>
<option value="Pol??nia">PL - Pol??nia</option>
<option value="Porto Rico">PR - Porto Rico</option>
<option value="Portugal">PT - Portugal</option>
<option value="Qatar">QA - Qatar</option>
<option value="Qu??nia">KE - Qu??nia</option>
<option value="Quirguist??o">KG - Quirguist??o</option>
<option value="Reino Unido">GB - Reino Unido</option>
<option value="Rep??blica Centro-Africana">CF - Rep??blica Centro-Africana</option>
<option value="Rep??blica Democr??tica do Congo">CD - Rep??blica Democr??tica do Congo</option>
<option value="Rep??blica do Congo">CG - Rep??blica do Congo</option>
<option value="Rep??blica Dominicana">DO - Rep??blica Dominicana</option>
<option value="Rep??blica Tcheca">CZ - Rep??blica Tcheca</option>
<option value="Reuni??o">RE - Reuni??o</option>
<option value="Rom??nia">RO - Rom??nia</option>
<option value="Ruanda">RW - Ruanda</option>
<option value="R??ssia">RU - R??ssia</option>
<option value="Saara Ocidental">EH - Saara Ocidental</option>
<option value="Saint Martin">MF - Saint Martin</option>
<option value="Saint Pierre e Miquelon">PM - Saint Pierre e Miquelon</option>
<option value="Samoa Americana">AS - Samoa Americana</option>
<option value="Samoa">WS - Samoa</option>
<option value="San Marino">SM - San Marino</option>
<option value="Santa Helena, Ascens??o e Trist??o da Cunha">SH - Santa Helena, Ascens??o e Trist??o da Cunha</option>
<option value="Santa L??cia">LC - Santa L??cia</option>
<option value="Santa S?? (Cidade do Vaticano)">VA - Santa S?? (Cidade do Vaticano)</option>
<option value="S??o Bartolomeu">BL - S??o Bartolomeu</option>
<option value="S??o Crist??v??o e Nevis">KN - S??o Crist??v??o e Nevis</option>
<option value="S??o Martinho">SX - S??o Martinho</option>
<option value="S??o Tom?? e Pr??n">ST - S??o Tom?? e Pr??ncipe</option>
<option value="S??o Vicente e Granadinas">VC - S??o Vicente e Granadinas</option>
<option value="Seicheles">SC - Seicheles</option>
<option value="Senegal">SN - Senegal</option>
<option value="Serra Leoa">SL - Serra Leoa</option>
<option value="S??rvia">RS - S??rvia</option>
<option value="S??ria">SY - S??ria</option>
<option value="Som??lia">SO - Som??lia</option>
<option value="Sri Lanka">LK - Sri Lanka</option>
<option value="Suazil??ndia">SZ - Suazil??ndia</option>
<option value="Sud??o do Sul">SS - Sud??o do Sul</option>
<option value="Sud??o">SD - Sud??o</option>
<option value="Su??cia">SE - Su??cia</option>
<option value="Su????a">CH - Su????a</option>
<option value="Sul da Fran??a e Ant??rtica">TF - Sul da Fran??a e Ant??rtica</option>
<option value="Suriname">SR - Suriname</option>
<option value="Svalbard">SJ - Svalbard</option>
<option value="Tadjiquist??o">TJ - Tadjiquist??o</option>
<option value="Tail??ndia">TH - Tail??ndia</option>
<option value="Taiwan">TW - Taiwan</option>
<option value="Tanz??nia">TZ - Tanz??nia</option>
<option value="Territ??rio Brit??nico do Oceano ??ndico">IO - Territ??rio Brit??nico do Oceano ??ndico</option>
<option value="Timor-Leste">TL - Timor-Leste</option>
<option value="Togo">TG - Togo</option>
<option value="Tonga">TO - Tonga</option>
<option value="Toquelau">TK - Toquelau</option>
<option value="Trinidad e Tobago">TT - Trinidad e Tobago</option>
<option value="Tun??sia">TN - Tun??sia</option>
<option value="Turcomenist??o">TM - Turcomenist??o</option>
<option value="Turquia">TR - Turquia</option>
<option value="Tuvalu">TV - Tuvalu</option>
<option value="Ucr??nia">UA - Ucr??nia</option>
<option value="Uganda">UG - Uganda</option>
<option value="Uruguai">UY - Uruguai</option>
<option value="Uzbequist??o">UZ - Uzbequist??o</option>
<option value="Vanuatu">VU - Vanuatu</option>
<option value="Venezuela">VE - Venezuela</option>
<option value="Vietn??">VN - Vietn??</option>
<option value="Z??mbia">ZM - Z??mbia</option>
<option value="Zimb??bue">ZW - Zimb??bue</option>
        </select>
        <button>Enviar</button>
        </form>
    </div>
  );
}

export default ApplicationFormPage;
