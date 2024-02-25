import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useModal } from "../../../../../context/Modal";
import { thunkGetAllRacialTraits } from "../../../../../store/traits";
import { thunkUpdateCharacter } from "../../../../../store/characters";
import TraitItem from "../../Traits/TraitItem";
import "./RaceModal.css";



function ChooseRaceForm({ race, name }) {
    const { closeModal } = useModal();
    const history = useHistory();
    const dispatch = useDispatch();
    const traits = useSelector(state => state.traits.raceTraits);
    const character = useSelector(state => state.characters.singleCharacter);
    const id = character.id;

    useEffect(() => {
        dispatch(thunkGetAllRacialTraits(race.name));
        }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const updatedCharacter = {"race": race.name, "name": name};
        const data = await dispatch(thunkUpdateCharacter(id, updatedCharacter));
        if (data) {
            history.push(`/characters/build/${id}/class`);
            // setErrors(data);
            closeModal()
        } else {
            closeModal()
        }
    };

    console.log(race)

    return (
        <>
            <div className="confirm-race-header-container">
                <h1 className="confirm-race-header" >Confirm Race</h1>
                <button onClick={closeModal} className="close-button">X</button>
            </div>
            <div className="confirm-race">

                <div className="race-info">
                    {race.subraces.length > 0 ? (
                        <h2>{race.subraces[0].name}</h2>
                    ) : (
                        <h2>{race.name}</h2>
                    )}
                    <p>{race.flavor}</p>
                </div>
                <div className="race-info">
                    {race.subraces.length > 0 ? (
                        <h3>{race.subraces[0].name} traits</h3>
                    ) : (
                        <h3>{race.name} traits</h3>
                    )}
                </div>
                {traits ? (
                    <div className="trait-list race-info">
                        {traits.map(trait => (
                            <TraitItem  trait={trait} />
                        ))}
                    </div>
                ) : (
                    <h1>No Traits</h1>
                )}
            </div>
            <div className="confirm-race-header-container confirm-container">
                <button onClick={closeModal} className="close-button cancel">Cancel</button>
                <button onClick={handleSubmit} className="confirm-button">Confirm Race</button>
            </div>
            
        </>
    );
}

export default ChooseRaceForm;