import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Confirm Password field must be the same as the Password field']);
    }
  };

  return (
    <div id="signup-form-background" style={{ backgroundImage: 'url(/DND_SIGNUP_BACKGROUND.jpg)' }}>
      <div id="form-container">
        <div id="form-home-button" onClick={() => history.push('/')}>
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <form onSubmit={handleSubmit} id="signup-form">
          <h1 id="signup-form-title">Sign up</h1>
          {/* <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul> */}

          <div className="signup-info-container">
            <label>Email</label>
            <div className="signup-info-input-container">
              <div><FontAwesomeIcon icon={faEnvelope} /></div>
              <input
                className="signup-info-input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={`Type your email`}
              />
            </div>
          </div>

          <div className="signup-info-container">
            <label>Username</label>
            <div className="signup-info-input-container">
              <div><FontAwesomeIcon icon={faEnvelope} /></div>
              <input
                className="signup-info-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder={`Type your email`}
              />
            </div>
          </div>

          <div className="signup-info-container">
            <label>Password</label>
            <div className="signup-info-input-container">
              <div><FontAwesomeIcon icon={faLock} /></div>
              <input
                className="signup-info-input"
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

          <div className="signup-info-container">
            <label>Confirm Password</label>
            <div className="signup-info-input-container">
              <div><FontAwesomeIcon icon={faLock} /></div>
              <input
                className="signup-info-input"
                type={seePassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder={`Type your password`}
              />
            </div>
          </div>

          <button className="form-submit-button" type="submit">SIGN UP</button>

          <div id="signup-login-container">
            <div>Already have an account?</div>
            <button onClick={() => history.push('/login')} className="form-login-button" type="button">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupFormPage;
