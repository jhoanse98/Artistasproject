import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Letra = ({letra}) => {
    if(letra === "") return null;
    return(
        <Fragment>
            <h2>Letra de la canción</h2>
            <p className="letra">{letra}</p>
        </Fragment>
)};

Letra.propTypes = {
    letra : PropTypes.string.isRequired,
}
export default Letra;