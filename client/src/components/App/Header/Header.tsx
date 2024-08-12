import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.svg";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { logout } from "../../../store/userReducer";

function Header() {
  const auth = useSelector<RootState, boolean>((state) => state.user.auth);
  const dispatch = useDispatch()

  return (
    <div className="header">
      <div className="header__left">
        <img className="header__left-logo" src={Logo} alt="" />
        <div className="header__left-descr">Simple authorization</div>
      </div>
      <div className="header__right">
        {!auth && (
          <button className="header__right-btn btn-reset">
            <Link to="/login">Войти</Link>
          </button>
        )}
        {!auth && (
          <button className="header__right-btn btn-reset">
            <Link to="/registration">Регистрация</Link>
          </button>
        )}
        {auth && (
          <button
            className="header__right-btn btn-reset"
            onClick={() => dispatch(logout())}
          >
            Выход
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
