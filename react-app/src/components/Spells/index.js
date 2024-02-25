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

            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_ABJURATION' src='DND_SCHOOL_ABJURATION.PNG' />
              <div>Abjuration</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_CONJURATION' src='DND_SCHOOL_CONJURATION.PNG' />
              <div>Conjuration</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_DIVINATION' src='DND_SCHOOL_DIVINATION.PNG' />
              <div>Divination</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_ENCHANTMENT' src='DND_SCHOOL_ENCHANTMENT.PNG' />
              <div>Enchantment</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_EVOCATION' src='DND_SCHOOL_EVOCATION.PNG' />
              <div>Evocation</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_ILLUSION' src='DND_SCHOOL_ILLUSION.PNG' />
              <div>Illusion</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_NECROMANCY' src='DND_SCHOOL_NECROMANCY.PNG' />
              <div>Necromancy</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_TRANSMUTATION' src='DND_SCHOOL_TRANSMUTATION.PNG' />
              <div>Transmutation</div>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
};

export default Spells;
