import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './LoginForm.css';

function LoginFormPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  return (
    <div id="login-form-background" style={{ backgroundImage: 'url(/DND_LOGIN_BACKGROUND.jpg)' }}>
      {/* <div id="login-form-container"> */}
      <div id="form-container">
        <div id="form-home-button" onClick={() => history.push('/')}>
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <form onSubmit={handleSubmit} id="login-form">
          <h1 id="login-form-title">Login</h1>
          {/* <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul> */}

          <div className="login-info-container">
            <label>Email</label>
            <div className="login-info-input-container">
              <div><FontAwesomeIcon icon={faEnvelope} /></div>
              <input
                className="login-info-input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={`Type your email`}
              />
            </div>
          </div>

          <div className="login-info-container">
            <label>Password</label>
            <div className="login-info-input-container">
              <div><FontAwesomeIcon icon={faLock} /></div>
              <input
                className="login-info-input"
                type={seePassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder={`Type your password`}
              />
              <button onClick={() => setSeePassword(!seePassword)} className="see-password-button" type="button">
                {seePassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
              </button>
            </div>
          </div>

          <button className="form-submit-button" type="submit">LOGIN</button>
          <button className="form-signup-button" type="button" onClick={() => history.push('/signup')}>SIGN UP</button>
        </form>
      </div>
    </div >
  );
}

export default LoginFormPage;
