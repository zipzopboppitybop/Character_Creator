import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { thunkGetSingleCharacter } from '../../store/characters';

const CharacterPage = () => {;
  const dispatch = useDispatch();
  const history = useHistory();
  const character = useSelector(state => state.characters.singleCharacter);
  
  useEffect(() => {
        dispatch(thunkGetSingleCharacter());
        }, [dispatch]);

  return (
    <>
        <h1>Hello {}</h1>
    </>
  )
}

export default CharacterPage;