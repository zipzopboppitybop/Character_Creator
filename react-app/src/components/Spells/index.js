import React from 'react';
import './Spells.css';
import { useParams } from 'react-router-dom';

const Spells = () => {
  const { school } = useParams()

  return (
    <div id='spells-page'>
      <div id='spell-filter-container'>
        <h1 id='spell-filter-title'>Spells</h1>
        <div id='spell-filter'>
          <div id='filter-school-button-container'>
            <img src='DND_SCHOOL_ABJURATION.PNG' />
            <img src='DND_SCHOOL_CONJURATION.PNG' />
            <img src='DND_SCHOOL_DIVINATION.PNG' />
            <img src='DND_SCHOOL_ENCHANTMENT.PNG' />
            <img src='DND_SCHOOL_EVOCATION.PNG' />
            <img src='DND_SCHOOL_ILLUSION.PNG' />
            <img src='DND_SCHOOL_NECROMANCY.PNG' />
            <img src='DND_SCHOOL_TRANSMUTATION.PNG' />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Spells;
