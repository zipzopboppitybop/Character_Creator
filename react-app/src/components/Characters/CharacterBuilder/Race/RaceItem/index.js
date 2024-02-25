import React from 'react'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './RaceItem.css';

const RaceItem = ({race}) => {;
  const history = useHistory();

  return (
    <>
        <div className='race-name-icon'>
            <img className='race-icon' alt='DND_SCHOOL_ABJURATION' src='../../../dwarf.png' />
            <div className='race-stats'>
                <h1 className='race-name'>{race.name}</h1>
            </div>
        </div>
        
        
    </>
  )
}

export default RaceItem;