import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../../../redux/features/userSlice'
import logo_365 from "../../../assets/images/kerja365.png";
import logo_main from "../../../assets/images/login-image.png";
import "./login.css";
function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="container__login">
      <div className="wrapper__login">
        <div className="wrapper__login-left">
          <div className="logo__top-left">
            <img src={logo_365} alt="" />
          </div>
          <div className="logo__main-left">
            <img src={logo_main} alt="" />
          </div>
        </div>
        <div className="wrapper__login-right">
          <div className="text__login-right">
            <span style={{ fontSize: 32, fontWeight: 400 }}>Login</span>
          </div>
          <div className="wrapper__login-card">
            <form
              action=""
              className="login__form-right"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="form__control">
                <span> Username</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form__control">
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form__control-button">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
