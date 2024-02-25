import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { thunkGetAllRaces } from '../../../store/races';
import { thunkGetSingleCharacter } from '../../../store/characters';
import "./CharacterCreatorName.css"

const CharacterCreatorName = () => {;
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const character = useSelector(state => state.characters.singleCharacter);
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const races = useSelector(state => state.races.allRaces);
  const sessionUser = useSelector(state => state.session.user);
  const buttonClassName = "character-builder-button" + (window.location.href.includes('race') ? " active" : "");

  useEffect(() => {
    dispatch(thunkGetAllRaces());
    dispatch(thunkGetSingleCharacter(id));
  }, [dispatch]);

  return (
    <>
      {character ? (
        <>
          <h1 className='character-builder-header'>Build Your Character!</h1>
          <div className='character-builder-buttons'>
            <button className={buttonClassName} onClick={e => history.push(`/characters/build/${character.id}/race`)}>1. Race</button>
            <button className="character-builder-button" onClick={e => history.push(`/characters/build/${character.id}/class`)}>2. Class</button>
            <button className="character-builder-button" onClick={e => history.push(`/characters/build/${character.id}/abilities`)}>3. Abilities</button>
            <button className="character-builder-button" onClick={e => history.push(`/characters/build/${character.id}/equipment`)}>4. Equipment</button>
            <button className="character-builder-button" onClick={e => history.push(`/characters/build/${character.id}/description`)}>5. Description</button>
          </div>
          <div className='character-builder-form'>
            <form>
              <label className='character-builder-label'>Character Name</label>
              <input 
              className='character-builder-input' 
              type='text' 
              defaultValue={character.name}
              onChange={e => setName(e.target.value)} 
              />
              <button className='character-builder-submit' type='submit'>Save</button>
            </form>
          </div>
        </>
      ) : (
        <>
          <h1>No Character</h1>
        </>
      )}
        
    </>
  )
}

export default CharacterCreatorName;