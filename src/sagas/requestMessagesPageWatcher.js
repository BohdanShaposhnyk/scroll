import { call, takeEvery, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
//import { types as pagesTypes, actions as pagesActions }
 //   from '../redux/actions/pagination';
import TestApi from '../services/TestApi';

function* requestMessagesPageSaga(action) {
    const {
        payload: { pageId, header, actions }
    } = action;
    yield put({ type: actions.REQUEST, payload: { pageId } });
    const responce = yield call(TestApi.getPage, { pageId, header });
    // normalization here...or in service...
    const ids = responce.map(m => m.id);
    const messages = responce.reduce((res, message) => ({ ...res, [message.id]: message }), {});
    yield call(delay, 200);
    yield put({ type: actions.SUCCESS, payload: { pageId, ids, messages } });
};


export function* requestMessagesPageWatcher() {
    yield takeEvery('API', requestMessagesPageSaga);
};