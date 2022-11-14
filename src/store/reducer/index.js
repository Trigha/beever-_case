import { combineReducers } from 'redux';

import ListQuote from './getQuoteReducer';
import AddQuote from './addQuoteReducer';

const rootReducer = combineReducers({
  ListQuote,
  AddQuote,
});

export default rootReducer;
