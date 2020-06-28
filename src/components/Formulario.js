import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Formulario = ({guardarConsulta}) => {

    const [busqueda, actualizarBusqueda] = useState({
        artista: '',
        cancion: '',
    });

    const [error, actualizarError] = useState(false);

    const {artista, cancion} = busqueda;

    //funcion a cada input leer su contenido

    const actualizarState = e => {
        actualizarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    } 

    const realizarBusqueda = e => {
        e.preventDefault();

        //validar campos
        if(artista.trim() === "" || cancion.trim() === ""){
            actualizarError(true)
            return;
        }

        actualizarError(false)

        //pasar datos al componente principal
        guardarConsulta(busqueda);



    }


    return (
        <div className="bg-info">
            <div className="container">
            {error ? 
                <p className="alert  text-center alert-danger p-2">Todos los campos son obligatorios</p>
                : null}
                <div className="row">
                    <form
                        onSubmit={realizarBusqueda}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador de canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre del artista"
                                            value={artista}
                                            onChange={actualizarState}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canciones</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Cancion del artista"
                                            value={cancion}
                                            onChange={actualizarState}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar
                            </button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
      );
}

Formulario.propTypes = {
    guardarConsulta : PropTypes.func.isRequired,
}
 
export default Formulario;