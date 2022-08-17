import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logoVolante from '../../assets/imgs/VolanteLogin.png'

import './Login.css'

export const Login = () => {
    let navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [messageError, setMessageError] = useState('noError')

    const eliminarVocales = (str) => {
        let resultado = str.replace(/[aeiou]/g, '')
        return resultado
    }

    const validar = () => {
        if (username && password) {
            if (password === eliminarVocales(username)) {
                navigate('/home')
            } else {
                setMessageError('The passwords are not equal')
            }
        } else {
            setMessageError('It is necessary to fill all the fields')
        }
    }

    return (
        <div className='contenedor'>
            <div className='contenedor-img'>
                <img className='img' src={logoVolante} alt='Logo de Volante Technologies' />
            </div>
            <div className='contenedor-formulario'>
                <div className='contenedor-fields'>
                    <h2>Volante QuickConnect </h2>
                    <p className='text-top'> Please Login to your platform</p>
                    <input
                        key='input-username'
                        className='input-style'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        key='input-password'
                        type='password'
                        className='input-style'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={validar} className='button-style'> LOGIN</button>
                    <p className='text-subrayado'>
                        Forgot your password?
                    </p>
                    <br />
                    <p className='text-validation' style={messageError !== 'noError' ? { color: 'red' } : { color: 'white' }}>
                        {messageError}
                    </p>
                </div>
                <div>
                    <p className='text-footer'>
                        2022 © Volante Quick Connect, Volante Technologies Inc.
                    </p>
                </div>
            </div>
        </div >
    )
}
