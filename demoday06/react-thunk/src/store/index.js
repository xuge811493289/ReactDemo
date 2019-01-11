import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import studentReducer from './student.js';
// 更多的reducer

let rootReducer = combineReducers({
  students:studentReducer
  // 更多的键值对
})

let store = createStore(rootReducer,applyMiddleware(thunk));
export default store;