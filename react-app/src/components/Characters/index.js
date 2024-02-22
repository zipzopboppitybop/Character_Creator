import React from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserCharacters = () => {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const characters = sessionUser.characters;

  console.log(characters)

  return (
    <>
        <h1>Hello {sessionUser.username}</h1>
        {characters ? (
            <div>
                <ul>
                    {characters.map(character => (
                        <li key={character.id}>{character.name}</li>
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
