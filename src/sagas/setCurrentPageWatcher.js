// import { call, takeEvery, put, select } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
// import { types as pagestTypes, actions as pagesActions }
//     from '../redux/actions/pagination';
// import TestApi from '../services/TestApi';
// import { getIsPageInState } from '../redux/reducers/pagination';

// function* setCurrentPageSaga(action) {
//     const {
//         payload: { pageId }
//     } = action;
//     const shouldFetch = !(yield select(getIsPageInState, pageId));
//     if (shouldFetch) {
//         yield put(pagesActions.fetchPage(pageId));
//     }
// };


// export function* setCurrentPageWatcher() {
//     yield takeEvery(pagestTypes.SET_CURRENT_PAGE, setCurrentPageSaga);
// };