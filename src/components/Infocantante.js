import React from 'react';

const Infocantante = ({infoartista}) => {

    if(Object.keys(infoartista).length === 0) return null;

    const {strArtistThumb, strGenre, strBiographyES } = infoartista;
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información Artista
            </div>
            <div className="card-body">
                <img src={infoartista.strArtistThumb} alt="Logo Artista" />
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">{strBiographyES}</p>
            </div>
        </div>

      );
}
 
export default Infocantante;