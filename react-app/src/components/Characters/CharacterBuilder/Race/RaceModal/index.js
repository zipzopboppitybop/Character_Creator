import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../../../context/Modal";
import { thunkGetAllRacialTraits } from "../../../../../store/traits";
import "./RaceModal.css";



function ChooseRaceForm({ race }) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const traits = useSelector(state => state.traits.raceTraits);

    useEffect(() => {
        dispatch(thunkGetAllRacialTraits(race.name));
        }, [dispatch]);

    console.log(traits)
    return (
        <>
            <div className="confirm-race">
                <div className="confirm-race-header-container">
                    <h1 className="confirm-race-header" >Confirm Race</h1>
                    <button onClick={closeModal} className="close-button">X</button>
                </div>
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
                        <h3 c>{race.subraces[0].name} traits</h3>
                    ) : (
                        <h3>{race.name} traits</h3>
                    )}
                </div>
            </div>
            
        </>
    );
}

export default ChooseRaceForm;