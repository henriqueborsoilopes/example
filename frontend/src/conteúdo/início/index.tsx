import React from 'react';
import Rodape from '../../rodapé';
import { ReactComponent as ImgBody } from './imagens/vampiro.svg';
import './styles.css';

export default function Inicio() {

    return (
        <>
            <div className="container" id="bodyInicio">
                {/* <ImgBody/> */}
            </div>
            <Rodape/>
        </>
    );
}