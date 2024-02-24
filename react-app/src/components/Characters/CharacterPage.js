import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { thunkGetSingleCharacter } from '../../store/characters';

const CharacterPage = () => {;
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const character = useSelector(state => state.characters.singleCharacter);
  
  useEffect(() => {
        dispatch(thunkGetSingleCharacter(id));
        }, [dispatch, id]);

  return (
    <>
        {character ? (
            <div>
                <h1>{character.name}</h1>
            </div>
        ) : (
            <>
                <h1>No Character</h1>
            </>
            
        )}
    </>
  )
}

export default CharacterPage;