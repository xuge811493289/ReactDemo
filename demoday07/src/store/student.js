// state
let initState = {
  isLoading:false,
  list:[],
  message:''
}
// action generator
// 将学生信息设置到state中
export function setStudent(payload){
  return {
    type:'SET_STUDENT',
    payload
  }
}
// 开始加载学生信息
export function beginLoadingStudent() {
  return {
    type:'BEGIN_LOADING_STUDENT'
  }
}
// 显示消息
export function showMsg(payload) {
  return {
    type:'SHOW_MESSAGE',
    payload
  }
}
// 关闭小时显示
export function closeMsg(){
  return {
    type:'CLOSE_MESSAGE'
  }
}

// reducers
function studentReducer(state = initState, action) {
  switch(action.type) {
    case 'SET_STUDENT': 
      return {
        ...state,
        isLoading:false,
        list:action.payload
      }
    case 'BEGIN_LOADING_STUDENT':
      return {
        ...state,
        isLoading:true
      }
    case 'SHOW_MESSAGE':
      return {
        ...state,
        message:action.payload
      }
    case 'CLOSE_MESSAGE':
      return {
        ...state,
        message:''
      }
    default:
      return state;
  }
}

export default studentReducer;