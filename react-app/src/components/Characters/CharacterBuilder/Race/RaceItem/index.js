import React from 'react'
import OpenRaceModalButton from '../OpenRaceModalButton';
import ChooseRaceForm from '../RaceModal';
import './RaceItem.css';

const RaceItem = ({race, name}) => {;
  return (
    <>
        <div className='race-name-icon'>
            <img className='race-icon' alt={`${race.name}`} src={`../../../${race.name}.png`} />
            <div className='race-stats'>
                <h1 className='race-name'>{race.name}</h1>
                <OpenRaceModalButton
              buttonText={"Choose Race"}
              onClick={(e) => e.preventDefault()} 
              modalComponent={<ChooseRaceForm race={race} name={name} />}
             />
            </div>
        </div>
    </>
  )
}

export default RaceItem;