// constants
const GET_CURRENT_USER_CHARACTERS = "character/GET_CURRENT_USER_CHARACTERS";
const DELETE_CHARACTER = "character/DELETE_CHARACTER";

const actionGetCurrentUserCharacters = (characters) => ({
    type: GET_CURRENT_USER_CHARACTERS,
    characters
});

const actionDeleteCharacter = (character) => ({
	type: DELETE_CHARACTER,
    character
});

export const thunkGetCurrentUserCharacters = () => async dispatch => {
    const response = await fetch(`/api/characters/current_user`);

    if (response.ok) {
        const characters = await response.json();
        dispatch(actionGetCurrentUserCharacters(characters));
    }
}

export const thunkDeleteCharacter = (id) => async dispatch => {
    const response = await fetch(`/api/characters/delete/${id}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        dispatch(actionDeleteCharacter(id));
    }
}

const initialState = { singleCharacter: null, userCharacters: null};

export default function characters(state = initialState, action) {
	switch (action.type) {
        case GET_CURRENT_USER_CHARACTERS:
            return { ...state, userCharacters: action.characters };
		case DELETE_CHARACTER:
			return { ...state, singleCharacter: null };
		default:
			return state;
	}
}