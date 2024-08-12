import { useState } from "react";
import "./Login.scss";
import { Log } from "../../../Requests/User";
import { useDispatch } from "react-redux";



function Login() {
  const dispatch = useDispatch<any>()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(Log(email, password))
  }

  return (
    <div className="login">
      <div className="login__title">Вход</div>
      <input
        className="login__input login__input-email"
        type="text"
        placeholder="Введите email..."
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="login__input login__input-password"
        type="password"
        placeholder="Введите пароль..."
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        className="login__btn btn-reset"
        onClick={() => handleLogin()}
      >
        Войти
      </button>
    </div>
  );
}

export default Login;
