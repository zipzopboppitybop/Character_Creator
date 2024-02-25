import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { thunkGetSpells } from '../../store/spells';
import SpellContainer from '../SpellContainer';
import './Spells.css';

const Spells = () => {
  const dispatch = useDispatch();
  const spell_list = useSelector(state => state.spells.spell_list?.spells);
  const [active, setActive] = useState('');
  const [spellName, setSpellName] = useState(null);
  const [spellLevel, setSpellLevel] = useState(null);
  const [spellSchool, setSpellSchool] = useState(null);
  const { school } = useParams();

  useEffect(() => {
    if (school) {
      dispatch(thunkGetSpells({ school: school }))
    }

  }, [school, dispatch])

  const dispatchSpells = () => {
    dispatch(thunkGetSpells({ name: spellName, level: spellLevel, school: spellSchool }))
  };

  const renderSpellList = (spells) => {
    console.log("rendering spell list")
    return (
      <ul>
        {spells.map(spell => {
          return <SpellContainer spell={spell} key={spell.index} />
        })}
      </ul>
    )
  }

  return (
    <div id='spells-page'>
      <div id='spell-filter-container'>
        <h1 id='spell-filter-title'>Spells</h1>
        <div id='spell-filter'>
          <div id='filter-school-button-container'>

            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_ABJURATION' src='/DND_SCHOOL_ABJURATION.PNG' />
              <div className='filter-school-img-title'>Abjuration</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_CONJURATION' src='/DND_SCHOOL_CONJURATION.PNG' />
              <div className='filter-school-img-title'>Conjuration</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_DIVINATION' src='/DND_SCHOOL_DIVINATION.PNG' />
              <div className='filter-school-img-title'>Divination</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_ENCHANTMENT' src='/DND_SCHOOL_ENCHANTMENT.PNG' />
              <div className='filter-school-img-title'>Enchantment</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_EVOCATION' src='/DND_SCHOOL_EVOCATION.PNG' />
              <div className='filter-school-img-title'>Evocation</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_ILLUSION' src='/DND_SCHOOL_ILLUSION.PNG' />
              <div className='filter-school-img-title'>Illusion</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_NECROMANCY' src='/DND_SCHOOL_NECROMANCY.PNG' />
              <div className='filter-school-img-title'>Necromancy</div>
            </div>
            <div>
              <img className='filter-school-img' alt='DND_SCHOOL_TRANSMUTATION' src='/DND_SCHOOL_TRANSMUTATION.PNG' />
              <div className='filter-school-img-title'>Transmutation</div>
            </div>

          </div>

          <div id='spell-filter-query'>

            <div className='spell-filter-input-container'>
              <label>SPELL NAME</label>
              <input type='text' onChange={e => setSpellName(e.target.value)} className='spell-filter-input' placeholder='Search Spell Names' />
            </div>

            <div className='spell-filter-input-container'>
              <label>SPELL LEVEL</label>
              <input type='number' onChange={e => setSpellLevel(e.target.value)} className='spell-filter-input' placeholder='Search Spell Level' />
            </div>

            <div className='spell-filter-input-container'>
              <label>SPELL SCHOOL</label>
              <input type='text' onChange={e => setSpellSchool(e.target.value)} className='spell-filter-input' placeholder='Search Spell School' />
            </div>

            {/* <div className='spell-filter-input-container'>
              <label>COMPONENTS</label>
              <button>V</button>
              <button>S</button>
              <button>M</button>
            </div> */}

            <button id='filter-submit-button' onClick={dispatchSpells}>FILTER SPELLS</button>
          </div>

        </div>
      </div>

      <div id='spell-list-container'>
        {spell_list ? renderSpellList(spell_list) : <div></div>}
      </div>
    </div>
  )
};

export default Spells;
