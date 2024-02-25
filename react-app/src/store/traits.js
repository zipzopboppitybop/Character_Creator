// constants
const GET_ALL_RACIAL_TRAITS = "traits/GET_ALL_RACIAL_TRAITS";

const actionGetAllRacialTraits = (traits) => ({
    type: GET_ALL_RACIAL_TRAITS,
    traits
});

export const thunkGetAllRacialTraits = (race) => async dispatch => {
    const response = await fetch(`/api/traits/${race}`);

    if (response.ok) {
        const traits = await response.json();
        dispatch(actionGetAllRacialTraits(traits));
    }
}

const initialState = { raceTraits: null};

export default function traits(state = initialState, action) {
	switch (action.type) {
        case GET_ALL_RACIAL_TRAITS:
            return { ...state, raceTraits: action.traits };
		default:
			return state;
	}
}