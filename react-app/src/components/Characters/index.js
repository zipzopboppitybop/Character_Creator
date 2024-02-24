import React from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CharacterItem from './CharacterItem';
import './CharacterPage.css';

const UserCharacters = () => {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const characters = sessionUser.characters;

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
