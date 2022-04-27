import React from 'react';

import './LoginBody.css'

import { useState } from 'react'

const LoginBody = () => {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário: ${email} cadastrado com a senha ${senha}`)
        window.alert('Login efetuado com sucesso')
    }

    const [email, SetEmail] = useState();
    const [senha, SetSenha] = useState();

    return (
        <div className="LoginBodyContainer">
            <h1>Entrar</h1>
            <form>
                <div className="EmailSenha">
                    <input type="email" name="Email" id="Email" placeholder='Email' onChange={(e) => SetEmail(e.target.value)} />
                    <input type="password" name="senha" id="Senha" placeholder='Digite sua senha' onChange={(e) => SetSenha(e.target.value)} />
                </div>
                <div className="EsqueciLembrar">
                    <div className="Remember">
                        <input type="checkbox" name="check" id="Check" />
                        <span>Lembrar de mim</span>
                    </div>
                    <a href="#">Esqueceu sua senha?</a>
                </div>
                <button onClick={cadastrarUsuario}>Entrar</button>
            </form>
        </div>
    )
}

export default LoginBody;