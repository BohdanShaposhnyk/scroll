import { types as paginationTypes } from '../actions/pagination';
import { combineReducers } from 'redux';

const initialState = {};

const pages = (state = initialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case paginationTypes.FETCH_PAGE.REQUEST:
            return {
                ...state, [payload.pageId]: {
                    id: payload.pageId,
                    ids: [],
                    isFetching: true,
                }
            };
        case paginationTypes.FETCH_PAGE.SUCCESS:
            return {
                ...state, [payload.pageId]: {
                    id: payload.pageId,
                    ids: payload.ids,
                    isFetching: false,
                }
            };
        case paginationTypes.FETCH_PAGE.ERROR:
        default:
            return state;
    }
};

const currentPage = (state = 0, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case paginationTypes.INCREMENT_CURRENT_PAGE:
            return state + 1;
        case paginationTypes.DECREMENT_CURRENT_PAGE:
            if (state <= 1) return state;
            return state - 1;
        // case paginationTypes.SET_CURRENT_PAGE:
        //     return payload.pageId;
        default:
            return state;
    }
};

const pagination = combineReducers({ pages, currentPage });

// selectors
export const getPages = (state) => state.pagination.pages;
export const getIsEmpty = (state) => Object.keys(getPages(state)).length === 0;
export const getPage = (state, pageId) => state.pagination.pages[pageId];
export const getCurrentPage = (state) => state.pagination.currentPage;
// export const getStaredTwo = (state) => {
//     const current = getPage(state, getCurrentPage(state));
//     const next = getPage(state, getCurrentPage(state) + 1);
//     return [current, next].filter(p => p);
// };
// export const getStaredTwo = (state) => {
//     const current = getPage(state, getCurrentPage(state));
//     const prev = getPage(state, getCurrentPage(state) - 1);
//     return [prev, current].filter(p => p);
// };
export const getStaredThree = (state) => {
    const current = getPage(state, getCurrentPage(state));
    const prev = getPage(state, getCurrentPage(state) - 1);
    const next = getPage(state, getCurrentPage(state) + 1);
    return [prev, current, next].filter(p => p);
};
// export const getStaredAsMessagesIdsArray = (state) => {
//     const stared = getStaredTwo(state);
//     return stared.length === 0 ? [] : stared.reduce((res, page) => res.concat(page.ids), []);
// };
export const getStaredAsMessagesIdsArray = (state) => {
    const stared = getStaredThree(state);
    return stared.length === 0 ? [] : stared.reduce((res, page) => res.concat(page.ids), []);
};
export const getIsPageInState = (state, pageId) => getPages(state).hasOwnProperty(pageId);
export const getIsSmthFetching = (state) =>
    Object.values(getPages(state))
        .some(page => page.isFetching);

export default pagination;