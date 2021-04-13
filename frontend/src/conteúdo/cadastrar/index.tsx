import React from 'react';
import { useForm } from 'react-hook-form';
import Rodape from '../../rodapé';
import './styles.css';
import { PostUser } from './types';

export default function Cadastrar() {

    const { register, handleSubmit } = useForm<PostUser>()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <>
            <div className="container" id="bodyCadastrar">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name"> Nome </label>
                    <input ref={ register } id="name" name="name" type="text"  placeholder="Nome"></input>
                    <label htmlFor="email"> Email </label>
                    <input ref={ register } id="email" name="email" type="text" placeholder="email"></input>
                    <label htmlFor="password"> Senha </label>
                    <input ref={ register } id="password" name="password" type="password"  placeholder="senha"></input>
                    <button type="submit"> Salvar </button>
                </form>
            </div>
            <Rodape/>
        </>
    );
}