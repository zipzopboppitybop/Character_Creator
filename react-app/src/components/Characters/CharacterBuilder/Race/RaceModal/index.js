import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../../../context/Modal";
import { thunkGetAllRacialTraits } from "../../../../../store/traits";
import TraitItem from "../../Traits/TraitItem";
import "./RaceModal.css";



function ChooseRaceForm({ race }) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const traits = useSelector(state => state.traits.raceTraits);

    useEffect(() => {
        dispatch(thunkGetAllRacialTraits(race.name));
        }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const data = await dispatch(login(email, password));
        // if (data) {
        //     setErrors(data);
        // } else {
        //     closeModal()
        // }
    };

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
                        <h3 c>{race.subraces[0].name} traits</h3>
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
                <button className="confirm-button">Confirm Race</button>
            </div>
            
        </>
    );
}

export default ChooseRaceForm;