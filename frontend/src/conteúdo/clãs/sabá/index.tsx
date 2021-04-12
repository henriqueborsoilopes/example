import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Saba() {

    return (
        <>
            <div className="container" id="bodySaba">
                <div className="row">
                    <div className="col">
                        <Link to="/lasombra">Lasombra</Link>
                    </div>
                    <div className="col">
                        <Link to="/tzimisce">Tzimisce</Link>
                    </div>
                </div>
            </div>
        </>
    );
}