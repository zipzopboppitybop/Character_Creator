import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './CharacterPage.css';
import OpenCharacterDeleteButton from './OpenCharacterDeleteButton';

const CharacterItem = ({character}) => {;
  return (
    <>
    <div className='character-name-icon'>
      <FontAwesomeIcon className='character-icon' icon={faUser} size="3x" />
      <div className='character-stats'>
        <p className='character-name'>{character.name}</p>
        <p className='character-descriptors'>Level 1 | Human | Fighter</p>
      </div>

    </div>
    <div className='character-buttons'>
      <button className='character-button'>VIEW</button>
      <button className='character-button'>EDIT</button>
      <button className='character-button'>DUPLICATE</button>
      <OpenCharacterDeleteButton 
      buttonText={"DELETE"} 
      onClick={(e) => e.preventDefault()} 
      />
    </div>
    </>
  )
}

export default CharacterItem;