import axios from 'axios';

export const fetchPostQuote = (payload) => {
  return (dispatch) => {
    axios
      .post('https://api.kanye.rest', payload)
      .then(({ data }) => {
        dispatch(setPostQuote(data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const setPostQuote = (payload) => {
  return {
    type: 'SET_QUOTE_SUCCESS',
    payload,
  };
};
