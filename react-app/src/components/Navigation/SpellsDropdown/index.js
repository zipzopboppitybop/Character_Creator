import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SpellsDropdown.css';

const SpellsDropdown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const ulClassName = "spell-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <div id='spell-dropdown-container'>
      <button onClick={openMenu}>Spells</button>
      <ul className={ulClassName} ref={ulRef}>
        <li onClick={closeMenu} ><NavLink to='/spells'>Find all</NavLink></li>
        <li onClick={closeMenu} ><NavLink to='/spells/Abjuration'>Abjuration</NavLink></li>
        <li onClick={closeMenu} ><NavLink to='/spells/Conjuration'>Conjuration</NavLink></li>
        <li onClick={closeMenu} ><NavLink to='/spells/Divination'>Divination</NavLink></li>
        <li onClick={closeMenu} ><NavLink to='/spells/Enchantment'>Enchantment</NavLink></li>
        <li onClick={closeMenu} ><NavLink to='/spells/Evocation'>Evocation</NavLink></li>
        <li onClick={closeMenu} ><NavLink to='/spells/Illusion'>Illusion</NavLink></li>
        <li onClick={closeMenu} ><NavLink to='/spells/Necromancy'>Necromancy</NavLink></li>
        <li onClick={closeMenu} ><NavLink to='/spells/Transmutation'>Transmutation</NavLink></li>
      </ul>
    </div>
  )
};

export default SpellsDropdown;
