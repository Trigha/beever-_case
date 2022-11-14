const initialState = [];

const addQuoteReducer = (state = initialState, action) => {
  if (action.type === 'SET_QUOTE_SUCCESS') {
    return {
      ...state,
      data: action.payload.data,
    };
  }

  return state;
};

export default addQuoteReducer;
