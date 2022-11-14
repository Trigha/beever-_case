import axios from 'axios';

export const fetchAllQuote = () => {
  return (dispatch) => {
    axios
      .get('https://api.kanye.rest')
      .then(({ data }) => {
        dispatch(setQuote(data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const setQuote = (payload) => {
  return {
    type: 'SET_QUOTE',
    payload,
  };
};
