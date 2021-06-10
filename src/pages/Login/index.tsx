import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const controlShowPassword = () => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  };

  return (
    <div className="life__login__bg">
      <form className="life__card__login fadeIn">
        <span id="logo" className="life__card__logo">
          Life
        </span>
        <h1 className="life__card__title"> Controle de Caixa </h1>

        <div className="life__form__control">
          <label className="life__form__label">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="User Login"
          />
        </div>

        <div className="life__form__control">
          <label className="life__form__label">
            <FontAwesomeIcon icon={faLock} size="lg" />
          </label>
          {showPassword ? (
            <input
              type="text"
              name="password"
              placeholder="User Password"
              id="password"
            />
          ) : (
            <input
              type="password"
              name="password"
              placeholder="User Password"
              id="password"
            />
          )}
          <label
            className="life__show__password"
            onClick={() => {
              controlShowPassword();
            }}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faEye} size="lg" />
            )}
          </label>
        </div>

        <input
          type="button"
          id="login__btn"
          value="Log In"
          className="life__btn__login"
        />
      </form>
    </div>
  );
}

export default Login;
