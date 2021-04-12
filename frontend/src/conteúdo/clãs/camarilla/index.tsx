import React from 'react';
import { Link } from 'react-router-dom';
import Rodape from '../../../rodapé';
import './styles.css';

export default function Camarilla() {

    return (
        <>
            <div className="container" id="bodyCamarilla">
                <div className="row">
                    <div className="col">
                        <Link to="/brujah">Brujah</Link>
                    </div>
                    <div className="col">
                        <Link to="/gangrel">Gangrel</Link>
                    </div>
                    <div className="col">
                        <Link to="/malkavian">Malkavian</Link>
                    </div>
                    <div className="col">
                        <Link to="/nosferatu">Nosferatu</Link>
                    </div>
                    <div className="col">
                        <Link to="/toreador">Toreador</Link>
                    </div>
                    <div className="col">
                        <Link to="/tremere">Tremere</Link>
                    </div>
                    <div className="col">
                        <Link to="/ventrue">Ventrue</Link>
                    </div>
                </div>
            </div>
            <Rodape/>
        </>
    );
}