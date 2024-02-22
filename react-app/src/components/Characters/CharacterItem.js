import React from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CharacterItem = () => {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  return (
    <h1>Hello {sessionUser.username}</h1>
  )
}

export default CharacterItem;