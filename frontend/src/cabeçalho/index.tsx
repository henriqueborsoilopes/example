
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Cabecalho() {

    return (
        <>
            <div className="container" id="bodyCabecalho">
                <div className="row">
                    <div className="col">
                        <h2>Vampiro à Máscara</h2>
                    </div>
                    <div className="col">
                        <h2>Role-Playing</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/inicio" className="">Início</Link>
                    </div>
                    <div className="col">
                        <Link to="/rpg" className="">RPG</Link>
                    </div>
                    <div className="col">
                        <Link to="/clans" className="">Clãs</Link>
                    </div>
                    <div className="col">
                        <Link to="/cadastrar" className="">Cadastrar</Link>
                    </div>
                    <div className="col">
                        <Link to="/logar" className="">Logar</Link>
                    </div>
                </div>
            </div>
        </>
    );
}