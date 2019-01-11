import {createStore} from 'redux'
// redux 入门
// state 状态【对象】 action 动作【对象】  reducer关联状态和动作【函数（state，action）】

// 1.定义初始化状态 state
let initState = {
  isLoading:false,
  students:[]
}

// 2.定义动作产生函数action generator
let FIND_STUDENTS = 'FIND_STUDENTS'
let DELETE_STUENTSBYID = 'DELETE_STUENTSBYID'
export function findStudents(){
    return {
        type:FIND_STUDENTS,
    }
}
export function deleteStudentById(){
    return {
        type:DELETE_STUENTSBYID,
    }
}

// 3.reducer 函数:用于将动作和状态进行关联，必须返回最新的state
/* 
    1.为state 设置初始值
    2.为不同的action提供不同的操作state的方式
*/

function rootReducer(state=initState,action){
    switch(action.type){
      case FIND_STUDENTS:
      return {
        ...state,
        students:'查询学生'
      }

      case DELETE_STUENTSBYID:
      return {
          ...state,
          students:'通过Id删除学生'
      }
      default:
        return state;
    }
}

let store = createStore(rootReducer);
export default store;
/*console.log('1',store.getState());
store.dispatch(findStudents())

console.log('2',store.getState());
store.dispatch(deleteStudentById())

console.log('3',store.getState());*/


// console.log(store);