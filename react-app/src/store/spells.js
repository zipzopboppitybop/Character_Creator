const GET_SPELLS = "spells/GET_SPELLS";

const actionGetSpells = (spells) => ({
  type: GET_SPELLS,
  spells
});

export const thunkGetSpells = (query) => async dispatch => {
  const response = await fetch(`/api/spells/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(query)
  })

  if (response.ok) {
    const spells = await response.json();
    dispatch(actionGetSpells(spells));
  }

  return response;
}

const initialState = { spells_list: null }

export default function spells(state = initialState, action) {
  switch (action.type) {
    case GET_SPELLS:
      return { ...state, spells_list: action.spells }
    default:
      return state;
  }
}
