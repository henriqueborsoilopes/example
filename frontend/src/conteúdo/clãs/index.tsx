import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Clans() {

    return (
        <>
            <div className="container" id="bodyClans">
                <div className="row">
                    <div className="col">
                        <Link to="/camarilla">Camarilla</Link>
                    </div>
                    <div className="col">
                        <Link to="/idependentes">Idependentes</Link>
                    </div>
                    <div className="col">
                        <Link to="/saba">Sabá</Link>
                    </div>
                </div>
            </div>
        </>
    );
}