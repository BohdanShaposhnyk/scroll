import { all } from 'redux-saga/effects';

import { requestMessagesPageWatcher } from './requestMessagesPageWatcher';
import { setCurrentPageWatcher } from './setCurrentPageWatcher';
import { moveCurrentPageWatcher } from './moveCurrentPageWatcher';


export default function* rootSaga() {
    yield all([
        requestMessagesPageWatcher(),
  //      setCurrentPageWatcher(),
        moveCurrentPageWatcher(),
    ]);
}