import { types as messagesTypes } from '../actions/messages';
import { types as paginationTypes } from '../actions/pagination';

const initialState = {};
const messages = (state = initialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case messagesTypes.FETCH_MESSAGES.REQUEST:
            return state;
        case messagesTypes.FETCH_MESSAGES.SUCCESS:
        case paginationTypes.FETCH_PAGE.SUCCESS:
            return { ...state, ...payload.messages };
        case messagesTypes.FETCH_MESSAGES.ERROR:
        default:
            return state;
    }
};

// selectors 
export const getMessagesByIds = (state, ids) => ids.map(id => state.messages[id]);

export default messages;