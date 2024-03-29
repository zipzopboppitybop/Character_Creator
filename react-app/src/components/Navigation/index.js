import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import SpellsDropdown from './SpellsDropdown';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul id='nav-bar'>
			<li>
				<NavLink exact to="/">Home</NavLink>
			</li>
			<li>
				<div id='spells-dropdown'>
					<SpellsDropdown />
				</div>
			</li>
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</ul>
	);
}

export default Navigation;
