import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {helloSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(helloSaga);

export default applyMiddleware(thunk, sagaMiddleware);
