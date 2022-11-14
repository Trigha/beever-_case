const initialState = [];

const getQuoteReducer = (state = initialState, action) => {
  if (action.type === 'SET_QUOTE') {
    return {
      ...state,
      quote: action.payload.quote,
    };
  }

  return state;
};

export default getQuoteReducer;
