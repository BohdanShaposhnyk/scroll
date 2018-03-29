import { createAsyncTypes } from '../../utils';

const prefix = 'pagination/';
export const header = 'comments';

export const types = {
    FETCH_PAGE: createAsyncTypes(`${prefix}FETCH_PAGE`),
    SET_CURRENT_PAGE: `${prefix}SET_CURRENT_PAGE`,
    MOVE_CURRENT_PAGE: `${prefix}MOVE_CURRENT_PAGE`,
    INCREMENT_CURRENT_PAGE: `${prefix}INCREMENT_CURRENT_PAGE`,
    DECREMENT_CURRENT_PAGE: `${prefix}DECREMENT_CURRENT_PAGE`,
};

export const actions = {
    fetchPage: (pageId) => ({
        type: 'API',
        payload: {
            actions: types.FETCH_PAGE,
            header,
            pageId
        }
    }),
    setCurrentPage: (pageId) => ({
        type: types.SET_CURRENT_PAGE,
        payload: { pageId },
    }),
    incrementCurrentPage: () => ({ type: types.INCREMENT_CURRENT_PAGE }),
    decrementCurrentPage: () => ({ type: types.DECREMENT_CURRENT_PAGE }),
    moveCurrentPage: (isForward) => ({ type: types.MOVE_CURRENT_PAGE, payload: { isForward } }),
};
