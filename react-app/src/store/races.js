// constants
const GET_ALL_RACES = "race/GET_ALL_RACES";

const actionGetAllRaces = (races) => ({
    type: GET_ALL_RACES,
    races
});

export const thunkGetAllRaces = () => async dispatch => {
    const response = await fetch(`/api/races`);

    if (response.ok) {
        const races= await response.json();
        dispatch(actionGetAllRaces(races));
    }
}

const initialState = { allRaces: null};

export default function races(state = initialState, action) {
	switch (action.type) {
        case GET_ALL_RACES:
            return { ...state, allRaces: action.races };
		default:
			return state;
	}
}