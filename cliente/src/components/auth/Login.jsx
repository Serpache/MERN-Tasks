import React, {useState} from "react";
import {Link} from 'react-router-dom'

const Login = () => {

    const [usuario,guardarUsuario] = useState({
        email:"",
        password:""
    });

    const {email,password} = usuario;

  const onChangeLogin = e => {
    guardarUsuario({
        ...usuario,
        [e.target.name]: e.target.value
    })
  };

  const onSubmitLogin = e => {
    e.preventDefault();
    //validar

    //pasarlo al action

  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Login</h1>
        <form
            onSubmit={onSubmitLogin}
        >
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={email}
              onChange={onChangeLogin}
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
              onChange={onChangeLogin}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Login"
            />
          </div>
        </form>
        <Link to={"/new-account"} className="enlace-cuenta">
            Create account
        </Link>
      </div>
    </div>
  );
};

export default Login;
