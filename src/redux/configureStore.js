import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';


export const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({ collapsed: true });

const confugureStore = (initialState = {}) => {
    return createStore(
        rootReducer,
        applyMiddleware(logger, sagaMiddleware)
    );
};


export default confugureStore;