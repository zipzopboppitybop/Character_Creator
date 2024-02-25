import React from 'react'

const SpellContainer = ({ spell, key }) => {

  return (
    <li>
      <h1>{spell.name}</h1>
      <h2>{spell.school.name}</h2>
    </li>
  )
};

export default SpellContainer;
