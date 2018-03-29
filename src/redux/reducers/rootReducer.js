import { combineReducers } from 'redux';
import messages from './messages';
import pagination from './pagination';

const rootReducer = combineReducers({ 
    messages, 
    pagination,
});

export default rootReducer;