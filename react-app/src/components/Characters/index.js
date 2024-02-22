import React from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CharacterItem from './CharacterItem';

const UserCharacters = () => {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const characters = sessionUser.characters;

  console.log(characters)

  return (
    <>
        <div className='character-page-header'> 
            <h1>Hello {sessionUser.username}</h1>
            <button onClick={() => history.push('/characters/new')}>Create New Character</button>
        </div>
        
        {characters ? (
            <div>
                <ul>
                    {characters.map(character => (
                        <li key={character.id}>
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
