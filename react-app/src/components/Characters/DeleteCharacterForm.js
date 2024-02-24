import React from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkDeleteCharacter } from "../../store/characters";
import "./CharacterPage.css";


function DeleteCharacterForm({ character }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleSubmit = async (e) => {
        e.preventDefault();
        closeModal()
        return await dispatch(thunkDeleteCharacter(character.id));
    };

    return (
        <>
            <form className="delete-form" onSubmit={handleSubmit}>
                <h1 className="delete-header">Are you sure you want to delete {character.name}?</h1>
                <button className="delete-button" type="submit">Yes (Delete Character) </button>
                <button className="dont-delete-button" onClick={closeModal}>No (Keep Character)</button>
            </form>
        </>
    );
}

export default DeleteCharacterForm;