import { useState } from "react";
import "./Registration.scss";
import { Registr } from "../../../Requests/User";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration">
      <div className="registration__title">Регистрация</div>
      <input
        className="registration__input registration__input-email"
        type="text"
        placeholder="Введите email..."
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="registration__input registration__input-password"
        type="password"
        placeholder="Введите пароль..."
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        className="registration__btn btn-reset"
        onClick={() => Registr(email, password)}
      >
        Зарегистрироваться
      </button>
    </div>
  );
}

export default Registration;
