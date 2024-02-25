// constants
const GET_ALL_CLASSES = "class/GET_ALL_CLASSES";

const actionGetAllClasses = (classes) => ({
    type: GET_ALL_CLASSES,
    classes
});

export const thunkGetAllClasses = () => async dispatch => {
    const response = await fetch(`/api/classes`);

    if (response.ok) {
        const classes = await response.json();
        dispatch(actionGetAllClasses(classes));
    }
}

const initialState = { allClasses: null};

export default function classes(state = initialState, action) {
	switch (action.type) {
        case GET_ALL_CLASSES:
            return { ...state, allClasses: action.classes };
		default:
			return state;
	}
}