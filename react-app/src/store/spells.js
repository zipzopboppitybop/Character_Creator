const GET_SPELLS = "spells/GET_SPELLS";

const actionGetSpells = (spells) => ({
  type: GET_SPELLS,
  spells
});

export const thunkGetSpells = (query) => async dispatch => {
  const response = await fetch(`/api/spells/search`, {
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

const initialState = { spells: null }

export default function spells(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
