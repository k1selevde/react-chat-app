import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers'

import mySaga from './sagas'


const sagaMiddleware = createSagaMiddleware()


const middleware: any[] = [sagaMiddleware]

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(
        applyMiddleware(...middleware),
    ),
)


sagaMiddleware.run(mySaga)

export default store;