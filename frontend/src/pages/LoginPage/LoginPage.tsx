import "./LoginPage.css";
import {useState} from "react";

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="login-page">
      <div className="login-popup">
        <h1>{isRegister ? "Зареєструватися" : "Увійти"}</h1>
        <div className="register-toggle">
          <div className={`register-toggle-item ${!isRegister ? "active" : ""}`} onClick={() => setIsRegister(false)}>login</div>
          <div className={`register-toggle-item ${isRegister ? "active" : ""}`} onClick={() => setIsRegister(true)}>sign up</div>
        </div>
        <form className="login-form">
          {isRegister && (
            <>
              <div className="input-shell">
                <p>ПІБ</p>
                <input/>
              </div>
            </>
          )}
          <div className="input-shell">
            <p>Пошта</p>
            <input/>
          </div>
          <div className="input-shell">
            <p>Пароль</p>
            <input/>
          </div>
          {isRegister && (
            <>
              <div className="input-shell">
                <p>Повторити пароль</p>
                <input/>
              </div>
            </>
          )}
          <button className="login-submit-but">{isRegister ? "Зареєструватися" : "Увійти"}</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
