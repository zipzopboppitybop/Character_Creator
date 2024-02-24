import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './CharacterPage.css';

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
      <button className='character-button delete-button'>DELETE</button>
    </div>
    </>
  )
}

export default CharacterItem;