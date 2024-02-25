import React from 'react'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './CharacterItem.css';
import OpenCharacterDeleteButton from '../CharacterDeleteModal';
import DeleteCharacterForm from '../DeleteCharacterForm/';

const CharacterItem = ({character}) => {;
  const history = useHistory();

  const handleEdit = (e) => {
    e.preventDefault();
    if (character.race === null) history.push(`/characters/build/${character.id}/class`);
    else if (character.class_one_name === null) history.push(`/characters/build/${character.id}/class`) 
    // else if (character.abilities === null) history.push(`/characters/build/${character.id}/abilities`); 
    // else if (character.equipment === null) history.push(`/characters/build/${character.id}/equipment`); 
  }

  return (
    <>
    <div className='character-name-icon'>
      <FontAwesomeIcon className='character-icon' icon={faUser} size="3x" />
      <div className='character-stats'>
        <p className='character-name'>{character.name}</p>
        <p className='character-descriptors'>Level 1 | {character.race} | Fighter</p>
      </div>

    </div>
    <div className='character-buttons'>
      <button onClick={e => history.push(`/characters/${character.id}`)} className='character-button'>VIEW</button>
      <button onClick={handleEdit} className='character-button'>EDIT</button>
      <button className='character-button'>DUPLICATE</button>
      <OpenCharacterDeleteButton 
      buttonText={"DELETE"} 
      onClick={(e) => e.preventDefault()} 
      modalComponent={<DeleteCharacterForm character={character} />}
      />
    </div>
    </>
  )
}

export default CharacterItem;