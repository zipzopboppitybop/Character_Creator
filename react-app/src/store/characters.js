// constants
const GET_SINGLE_CHARACTER = "character/GET_SINGLE_CHARACTER";
const GET_CURRENT_USER_CHARACTERS = "character/GET_CURRENT_USER_CHARACTERS";
const CREATE_CHARACTER = "character/CREATE_CHARACTER";
const UPDATE_CHARACTER = "character/UPDATE_CHARACTER";
const DELETE_CHARACTER = "character/DELETE_CHARACTER";

const actionGetSingleCharacter = (character) => ({
    type: GET_SINGLE_CHARACTER,
    character
});

const actionGetCurrentUserCharacters = (characters) => ({
    type: GET_CURRENT_USER_CHARACTERS,
    characters
});

const actionCreateCharacter = (character) => ({
    type: CREATE_CHARACTER,
    character
});

const actionUpdateCharacter = (character) => ({
    type: UPDATE_CHARACTER,
    character
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

export const thunkCreateCharacter = (character) => async dispatch => {
    const response = await fetch(`/api/characters/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(character)
    });

    if (response.ok) {
        const character = await response.json();
        dispatch(actionCreateCharacter(character));
        return character;
    }
}

export const thunkUpdateCharacter = (characterId, character) => async dispatch => {
    const response = await fetch(`/api/characters/edit/${characterId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(character)
    });

    if (response.ok) {
        const updatedCharacter = await response.json();
        dispatch(actionUpdateCharacter(updatedCharacter));
        return updatedCharacter;
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
        case CREATE_CHARACTER:
            return { ...state, singleCharacter: action.character, userCharacters: [...state.userCharacters, action.character]};
        case UPDATE_CHARACTER:
            return { ...state, singleCharacter: action.character };
		case DELETE_CHARACTER:
			return { ...state, singleCharacter: null };
		default:
			return state;
	}
}