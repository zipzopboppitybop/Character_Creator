import React from 'react'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './CharacterPage.css';
import OpenCharacterDeleteButton from './OpenCharacterDeleteButton';
import DeleteCharacterForm from './DeleteCharacterForm';

const CharacterItem = ({character}) => {;
  const history = useHistory();

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
      <button onClick={e => history.push(`/characters/${character.id}`)} className='character-button'>VIEW</button>
      <button className='character-button'>EDIT</button>
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