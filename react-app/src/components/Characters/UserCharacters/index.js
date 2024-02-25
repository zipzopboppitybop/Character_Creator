import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CharacterItem from '../CharacterItem';
import { thunkGetCurrentUserCharacters, thunkCreateCharacter } from '../../../store/characters';
import './UserCharacters.css';

const UserCharacters = () => {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.userCharacters);

  useEffect(() => {
    dispatch(thunkGetCurrentUserCharacters());
  }, [dispatch]);

  if (!sessionUser) {
    history.push('/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(thunkCreateCharacter({name: `${sessionUser.username} 's Character`, userId: sessionUser.id,}));
    if (data) {
      history.push(`/characters/build/${data.id}/race`);
    }
  };

  return (
    <>
        <div className='character-page-header'> 
            <h1>My Characters</h1>
            <button className='create-character-button' onClick={handleSubmit}>Create New Character</button>
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
