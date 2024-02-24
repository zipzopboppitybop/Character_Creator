// constants
const GET_SINGLE_CHARACTER = "character/GET_SINGLE_CHARACTER";
const GET_CURRENT_USER_CHARACTERS = "character/GET_CURRENT_USER_CHARACTERS";
const DELETE_CHARACTER = "character/DELETE_CHARACTER";

const actionGetSingleCharacter = (character) => ({
    type: GET_SINGLE_CHARACTER,
    character
});

const actionGetCurrentUserCharacters = (characters) => ({
    type: GET_CURRENT_USER_CHARACTERS,
    characters
});

const actionDeleteCharacter = (character) => ({
	type: DELETE_CHARACTER,
    character
});

export const thunkGetSingleCharacter = (id) => async dispatch => {
    const response = await fetch(`/api/characters/${id}`);

    if (response.ok) {
        const character = await response.json();
        dispatch(actionGetSingleCharacter(character));
    }
}

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
        case GET_SINGLE_CHARACTER:
            return { ...state, singleCharacter: action.character };
        case GET_CURRENT_USER_CHARACTERS:
            return { ...state, userCharacters: action.characters };
		case DELETE_CHARACTER:
			return { ...state, singleCharacter: null };
		default:
			return state;
	}
}