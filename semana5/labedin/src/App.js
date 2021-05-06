import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          
          nome="Daniel Ueno" 
          descricao="Sou Daniel Ueno, formado em engenharia de minas pela escola politécnica da USP.
          Gosto de ouvir música nas horas vagas e me de organizar coisas no excel (rs), e quem sabe no futuro montar minhas próprias aplicações de organização conforme aprender desenvolvimento de software."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2020/02/mobly-logo-0-2048x2048.png" 
          nome="Mobly: Estagiário de Marketing Performance" 
          descricao="Análise de custos por margens de contribuição e estudos em Search Engine Optimization (SEO), como análise de backlinks, keywords, title tag e meta description." 
        />
        
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/1082324851757596674/1MrQKorF_400x400.jpg" 
          nome="LACASEMIN USP: Bolsista em Iniciação Científica" 
          descricao="Tutoria em disciplinas dos cursos de pós-graduação e aplicação de aulas de laboratório. Revisão do material fornecido aos cursos e ajustes no banco de dados do laboratório de pesquisa" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
      <div className="page-section-container">
        <h2>Informações para Contato</h2>
        <CardPequeno
        titulo="E-mail:"
        texto="ueno2005@gmail.com"
        />
        <CardPequeno
        titulo="Endereço:"
        texto="Se me der chocolate eu te envio =)"
        />
      </div>
    </div>
  );
}

export default App;
