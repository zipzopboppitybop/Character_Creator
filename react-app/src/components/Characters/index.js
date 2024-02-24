import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CharacterItem from './CharacterItem';
import { thunkGetCurrentUserCharacters } from '../../store/characters';
import './CharacterPage.css';

const UserCharacters = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const characters = useSelector(state => state.characters.userCharacters);

  useEffect(() => {
    dispatch(thunkGetCurrentUserCharacters());
  }, [dispatch]);

  return (
    <>
        <div className='character-page-header'> 
            <h1>My Characters</h1>
            <button className='create-character-button' onClick={() => history.push('/characters/new')}>Create New Character</button>
        </div>
        
        {characters ? (
            <div>
                <ul className='user-character-list'>
                    {characters.map(character => (
                        <li className='character-item' key={character.id}>
                            <CharacterItem character={character} />
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <h1>No Characters</h1>
        )}
    </>
  )
}

export default UserCharacters;
