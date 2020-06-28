import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Letra from './components/Letra';
import Infocantante from './components/Infocantante';
import axios from 'axios';


function App() {

  //state que guarda lo que hay en el formulario
  const [consulta, guardarConsulta] = useState({});
  const [letra, guardarLetra] = useState("");
  const [infoartista, actualizarInfoArtista] = useState({})
  const [errorconsulta, actualizaErrorConsulta] = useState(false);

  //useEffect para consultar la api

  
  

  useEffect(() => {
    if(Object.keys(consulta).length === 0) return;


    
    const consultarApi=  async () => {
      const {artista, cancion} = consulta;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;


    
      
      
      //const resultado1 = await axios.get(url); manera no optima con 2 axios
      //const resultado2 = await axios.get(url2);

      try{
        const [resultado1, resultado2] = await Promise.all([
          axios(url),
          axios(url2)
        ])
        guardarLetra(resultado1.data.lyrics);
        actualizarInfoArtista(resultado2.data.artists[0]);
        actualizaErrorConsulta(false);
      } catch(e) {
        actualizaErrorConsulta(true);
      }
      
      

      
      
      //guardarLetra(resultado.data.lyrics);
    }
    consultarApi();
  }, [consulta]);

  return (
    <Fragment>
      <Formulario guardarConsulta={guardarConsulta}
      />

      <div className="container mt-5">
        {errorconsulta 
        ? <p className="alert  text-center alert-danger p-2"> No se encuentran resultados</p> 
        :
        <div className="row">
          <div className="col-md-6">
            <Infocantante infoartista={infoartista} />            
          </div>
          <div className="col-md-6">
            <Letra letra={letra} />
          </div>
        </div>
        }
        
      </div>
    </Fragment>
  );
}

export default App;
