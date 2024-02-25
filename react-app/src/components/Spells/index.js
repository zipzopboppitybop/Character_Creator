import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { thunkGetSpells } from '../../store/spells';
import SpellContainer from '../SpellContainer';
import './Spells.css';

const Spells = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const spell_list = useSelector(state => state.spells.spell_list?.spells);
  // const [active, setActive] = useState('');
  const [spellName, setSpellName] = useState(null);
  const [spellLevel, setSpellLevel] = useState(null);
  const [spellSchool, setSpellSchool] = useState(null);
  const [currentSchool, setCurrentSchool] = useState(useParams().school);

  useEffect(() => {
      dispatch(thunkGetSpells({ school: currentSchool }))

  }, [currentSchool, dispatch])

  const dispatchSpells = () => {
    dispatch(thunkGetSpells({ name: spellName, level: spellLevel, school: spellSchool }))
  };

  const renderSpellList = (spells) => {
    console.log("rendering spell list")
    return (
      <ul>
        {spells.map((spell, index) => {
          return <SpellContainer spell={spell} index={index} />
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
              <img onClick={e => setCurrentSchool("Abjuration")} className={`filter-school-img ${currentSchool === 'Abjuration' ? 'active-img' : ''}`} alt='DND_SCHOOL_ABJURATION' src='/DND_SCHOOL_ABJURATION.PNG' />
              <div className='filter-school-img-title'>Abjuration</div>
            </div>
            <div>
              <img onClick={e => setCurrentSchool("Conjuration")} className={`filter-school-img ${currentSchool === 'Conjuration' ? 'active-img' : ''}`} alt='DND_SCHOOL_CONJURATION' src='/DND_SCHOOL_CONJURATION.PNG' />
              <div className='filter-school-img-title'>Conjuration</div>
            </div>
            <div>
              <img onClick={e => setCurrentSchool("Divination")} className={`filter-school-img ${currentSchool === 'Divination' ? 'active-img' : ''}`} alt='DND_SCHOOL_DIVINATION' src='/DND_SCHOOL_DIVINATION.PNG' />
              <div className='filter-school-img-title'>Divination</div>
            </div>
            <div>
              <img onClick={e => setCurrentSchool("Enchantment")} className={`filter-school-img ${currentSchool === 'Enchantment' ? 'active-img' : ''}`} alt='DND_SCHOOL_ENCHANTMENT' src='/DND_SCHOOL_ENCHANTMENT.PNG' />
              <div className='filter-school-img-title'>Enchantment</div>
            </div>
            <div>
              <img onClick={e => setCurrentSchool("Evocation")} className={`filter-school-img ${currentSchool === 'Evocation' ? 'active-img' : ''}`} alt='DND_SCHOOL_EVOCATION' src='/DND_SCHOOL_EVOCATION.PNG' />
              <div className='filter-school-img-title'>Evocation</div>
            </div>
            <div>
              <img onClick={e => setCurrentSchool("Illusion")} className={`filter-school-img ${currentSchool === 'Illusion' ? 'active-img' : ''}`} alt='DND_SCHOOL_ILLUSION' src='/DND_SCHOOL_ILLUSION.PNG' />
              <div className='filter-school-img-title'>Illusion</div>
            </div>
            <div>
              <img onClick={e => setCurrentSchool("Necromancy")} className={`filter-school-img ${currentSchool === 'Necromancy' ? 'active-img' : ''}`} alt='DND_SCHOOL_NECROMANCY' src='/DND_SCHOOL_NECROMANCY.PNG' />
              <div className='filter-school-img-title'>Necromancy</div>
            </div>
            <div>
              <img onClick={e => setCurrentSchool("Transmutation")} className={`filter-school-img ${currentSchool === 'Transmutation' ? 'active-img' : ''}`} alt='DND_SCHOOL_TRANSMUTATION' src='/DND_SCHOOL_TRANSMUTATION.PNG' />
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
        <div id='spell-list-header'>
          <div className='spell-list-header-placeholder'></div>
          <div className='spell-list-header-level'>
            LEVEL
          </div>
          <div className='spell-list-header-name'>
            NAME
          </div>
          <div className='spell-list-header-cast-time'>
            CASTING TIME
          </div>
          <div className='spell-list-header-duration'>
            DURATION
          </div>
          <div className='spell-list-header-range'>
            RANGE
          </div>
          <div className='spell-list-header-damage'>
            DAMAGE
          </div>
        </div>
        {spell_list ? renderSpellList(spell_list) : <div></div>}
      </div>
    </div>
  )
};

export default Spells;
