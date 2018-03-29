import { createAsyncTypes } from '../../utils';

const prefix = 'messages/';
const header = 'comments';

export const types = {
    GET_MESSAGES: `${prefix}GET_MESSAGES`,
    FETCH_MESSAGES: createAsyncTypes(`${prefix}FETCH_MESSAGES`),
};


export const actions = {
    doFetchMessages: () => ({
        type: 'API',
        payload: { ...types.FETCH_MESSAGES, header },
    }),
    doGetMessages: () => ({
        type: types.GET_MESSAGES,
    }),
};