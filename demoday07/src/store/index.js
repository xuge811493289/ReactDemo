import {createStore,combineReducers,applyMiddleware} from 'redux'
import createSagaMiddleware from 'resux-saga';
import rootSaga from './rootSaga'
import studentReducer from './student'

// 创建saga中间件
let saggaMiddleware = createSaggaMiddleware(rootSaga);



let rootReducer = combineReducers({
  students:studentReducer
})

let store = createStore(rootReducer,applyMiddleware(saggaMiddleware))

// 执行
saggaMiddleware.run(rootSaga);
export default store;