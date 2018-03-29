import { call, takeEvery, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { types as pagestTypes, actions as pagesActions }
    from '../redux/actions/pagination';
import TestApi from '../services/TestApi';
import { getIsPageInState, getCurrentPage } from '../redux/reducers/pagination';

function* moveCurrentPageSaga(action) {
    const {
        payload: { isForward }
    } =  action;
    if (isForward) {
        yield put(pagesActions.incrementCurrentPage());
    } else {
        yield put(pagesActions.decrementCurrentPage());
    }
    const current = yield select(getCurrentPage);
    const shouldFetch = !(yield select(getIsPageInState, current));
    if (shouldFetch) {
        yield put(pagesActions.fetchPage(current));
   //      yield put(pagesActions.fetchPage(current + 1));
    //     yield put(pagesActions.fetchPage(current + 2));
    }
};


export function* moveCurrentPageWatcher() {
    yield takeEvery(pagestTypes.MOVE_CURRENT_PAGE, moveCurrentPageSaga);
};