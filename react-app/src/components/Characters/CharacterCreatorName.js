import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const CharacterCreatorName = () => {;
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const character = useSelector(state => state.characters.singleCharacter);

  return (
    <>
        <h1>Hello {character.name}</h1>
    </>
  )
}

export default CharacterCreatorName;