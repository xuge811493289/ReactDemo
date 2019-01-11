import axios from 'axios';

// state
let initState = {
  loading:false,
  list:[],
  message:''
}
// reducer
function studentReducer(state=initState,action){
  switch(action.type){
    case 'ADD_STDUENT':
      let result = {...state,list:[...state.list,{}]}
      return result;
    case 'DELETE_STDUENT':
      let result1 = {...state,list:state.list}
      return result1;
    case 'LOAD_STDUENT':
      let result2 = {...state,loading:true,list:action.payload}
      return result2;
    case 'BEGIN_LOADING':
      return {
        ...state,
        loading:true,
      };
    default:
      return state;
  }
}

// action generator   前两个是同步
export function addStudent(){
  // action
  return {
    type:'ADD_STDUENT'
  }
}
export function deleteStudent(){
  // action
  return {
    type:'DELETE_STDUENT'
  }
}


// 加载
export function loading(){
  // action
  return {
    type:'BEGIN_LOADING'
  }
}

export function setStudent(payload){
  return {
    type:'LOAD_STDUENT',
    payload:payload
  }
}

//查询 异步操作
export function loadStudent(dispatch){
  return (dispatch) => {
    dispatch(loading());
    let url = 'http://134.175.154.93:8099/index/findAllCategory'
    setTimeout(()=>{
      axios.get(url).then((result)=>{
        // 拿到返回结果后，将返回结果设置到state中，分发动作
        dispatch(setStudent(result.data.data))
      })
    },2000)
  }
}


export default studentReducer;