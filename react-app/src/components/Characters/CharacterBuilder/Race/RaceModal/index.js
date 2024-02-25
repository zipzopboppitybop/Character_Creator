import React from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../../../context/Modal";
import "./RaceModal.css";



function ChooseRaceForm({ race }) {
    const { closeModal } = useModal();

    return (
        <>
            <div className="confirm-race">
                <div className="confirm-race-header-container">
                    <h1 className="confirm-race-header" >Confirm Race</h1>
                    <button onClick={closeModal} className="close-button">X</button>
                </div>

            </div>
            
        </>
    );
}

export default ChooseRaceForm;