import React, {useState} from "react";
import {Link} from 'react-router-dom'

const NewAccount = () => {

    const [usuario,guardarUsuario] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const {name,email,password,confirmPassword} = usuario;

  const onChangeNewAccount = e => {
    guardarUsuario({
        ...usuario,
        [e.target.name]: e.target.value
    })
  };

  const onSubmitNewAccount = e => {
    e.preventDefault();
    //validar campos no vacios

    //password mínimo de 6 caracteres

    //coinciden password

    //pasarlo al action

  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>New account</h1>
        <form
            onSubmit={onSubmitNewAccount}
        >
            <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Sergio Pacheco"
              value={name}
              onChange={onChangeNewAccount}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={email}
              onChange={onChangeNewAccount}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChangeNewAccount}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Password again"
              value={confirmPassword}
              onChange={onChangeNewAccount}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Create"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
            Login
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;