// constants
const DELETE_CHARACTER = "character/DELETE_CHARACTER";

const actionDeleteCharacter = (character) => ({
	type: DELETE_CHARACTER,
    character
});

export const thunkDeleteCharacter = (id) => async dispatch => {
    const response = await fetch(`/api/characters/delete/${id}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        dispatch(actionDeleteCharacter(id));
    }
}

const initialState = { singleCharacter: null };

export default function characters(state = initialState, action) {
	switch (action.type) {
		case DELETE_CHARACTER:
			return { ...state, singleCharacter: null };
		default:
			return state;
	}
}