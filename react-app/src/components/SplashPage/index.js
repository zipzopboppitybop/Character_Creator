import React from 'react'
import { useHistory } from 'react-router-dom';

const SplashPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={e => history.push('/login')}>Login</button>
      <button onClick={e => history.push('/signup')}>signup</button>
      <button onClick={e => history.push(`/characters`)}>Users Characters</button>
    </div>
  )
}

export default SplashPage;
