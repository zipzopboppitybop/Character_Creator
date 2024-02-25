import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { thunkGetSingleCharacter } from '../../../store/characters';
import { thunkGetAllClasses } from '../../../store/classes';
import RaceItem from './Race/RaceItem';
import "./CharacterCreatorName.css"

const CharacterCreatorClass = () => {;
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const character = useSelector(state => state.characters.singleCharacter);
  const [name, setName] = useState(character?.name);
  const classes = useSelector(state => state.classes.allClasses);
  const sessionUser = useSelector(state => state.session.user);
  const buttonClassName = "character-builder-button" + (window.location.href.includes('class') ? " active" : "");

  useEffect(() => {
    dispatch(thunkGetAllClasses());
    dispatch(thunkGetSingleCharacter(id));
  }, [dispatch, id]);

  if (!sessionUser) {
    history.push('/login');
  }

  console.log(classes)

  return (
    <>
      {character ? (
        <>
          <h1 className='character-builder-header'>Build Your Character!</h1>
          <div className='character-builder-buttons'>
            <button className="character-builder-button"  onClick={e => history.push(`/characters/build/${character.id}/race`)}>1. Race</button>
            <button className={buttonClassName} onClick={e => history.push(`/characters/build/${character.id}/class`)}>2. Class</button>
            <button className="character-builder-button" onClick={e => history.push(`/characters/build/${character.id}/abilities`)}>3. Abilities</button>
            <button className="character-builder-button" onClick={e => history.push(`/characters/build/${character.id}/equipment`)}>4. Equipment</button>
            <button className="character-builder-button" onClick={e => history.push(`/characters/build/${character.id}/description`)}>5. Description</button>
          </div>
          {classes ? (
            <div>
              <ul className='race-list'>
                {classes?.map((characterClass, index) => (
                  <li key={index} className='race-item'>
                    <p>{characterClass.name}</p>
                    {/* <RaceItem race={race} name={name} /> */}
                  </li>
                ))}
              </ul>
             </div>
          ) :(
            <h1>No Characters</h1>
          )}

        </>
      ) : (
        <>
          <h1>No Character</h1>
        </>
      )}
        
    </>
  )
}

export default CharacterCreatorClass;