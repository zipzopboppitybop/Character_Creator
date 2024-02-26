import React from 'react'
import './SpellContainer.css'

const SpellContainer = ({ spell, key }) => {

  return (
    <li key={key} className='spell-container'>
      <img className='spell-container-img' alt={`DND_SCHOOL_${spell.school.name} list`} src={`/DND_SCHOOL_${spell.school.name.toUpperCase()}.PNG`} />
      <div className='spell-containter-spell-level'>
        {spell.level === 0 ? "Cantrip" : spell.level === 1 ? "1st" : spell.level === 2 ? "2nd" : spell.level === 3 ? "3rd" : `${spell.level}th`}
      </div>
      <div id='spell-name-school-container'>
        <h1 className='spell-container-spell-name'>{spell.name}</h1>
        <h2 className='spell-container-spell-school'>{spell.school.name}</h2>
      </div>
      <div className='spell-container-spell-cast-time'>{spell.casting_time}</div>
      <div className='spell-container-spell-duration'>{spell.duration}</div>
      <div className='spell-container-spell-range'>{spell.range}</div>
      <div className='spell-container-spell-damage'>{spell.damage?.damage_type?.name}</div>
    </li>
  )
};

export default SpellContainer;
