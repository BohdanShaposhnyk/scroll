import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';

import configureStore, { sagaMiddleware } from './redux/configureStore';
import rootSaga from './sagas';

// test
// import { actions } from './redux/actions/pagination';
// import * as paginationSelectors from './redux/reducers/pagination';
// import * as messagesSelectors from './redux/reducers/messages';
// import * as selectors from './redux/reducers/commonSelectors';

const store = configureStore();
sagaMiddleware.run(rootSaga);


// store.dispatch(actions.setCurrentPage(1));
// store.dispatch(actions.setCurrentPage(2));
// store.dispatch(actions.setCurrentPage(1));
// store.dispatch(actions.moveCurrentPage(true));
// store.dispatch(actions.moveCurrentPage(true));
//  store.dispatch(actions.moveCurrentPage(false));

// setTimeout(() => {
//     const staredMessages = selectors.getStaredMessages(store.getState());
//     console.log(staredMessages);
// }, 2000);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);