import React from 'react';
import { Link } from 'react-router-dom';
import Rodape from '../../../rodapé';
import './styles.css';

export default function Idependentes() {

    return (
        <>
            <div className="container" id="bodyIdependentes">
                <div className="row">
                    <div className="col">
                        <Link to="/assamitas">Assamitas</Link>
                    </div>
                    <div className="col">
                        <Link to="/giovanni">Giovanni</Link>
                    </div>
                    <div className="col">
                        <Link to="/ravnos">Ravnos</Link>
                    </div>
                    <div className="col">
                        <Link to="/seguidoresdeset">Seguidores de set</Link>
                    </div>
                </div>
            </div>
            <Rodape/>
        </>
    );
}