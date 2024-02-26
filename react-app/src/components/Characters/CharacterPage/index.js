import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { thunkGetSingleCharacter } from '../../../store/characters';
import CharacterSheet from '../../CharacterSheet';
import './CharacterPage.css';

const CharacterPage = () => {
    ;
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const character = useSelector(state => state.characters.singleCharacter);

    useEffect(() => {
        dispatch(thunkGetSingleCharacter(id));
    }, [dispatch, id]);

    return (
        <>
            <CharacterSheet character={character} />
        </>
    )
}

export default CharacterPage;
