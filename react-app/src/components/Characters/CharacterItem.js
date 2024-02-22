import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import './CharacterPage.css';

const CharacterItem = ({character}) => {;
  return (
    <>
    <FontAwesomeIcon icon={faHouse} />
    <p>{character.name}</p>
    </>
  )
}

export default CharacterItem;