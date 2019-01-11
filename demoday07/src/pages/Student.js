import React , {Component} from 'react'
import {connect} from 'react-redux'
import {
  showMsg,
  closeMsg,
  beginLoadingStudent,
  setStudent
} from '../store/student'
import './Student.css'

class Student extends Component {
  handleShowMsg = ()=>{
    this.props.dispatch(showMsg('hello world'))
  }
  handleCloseMsg = (event)=>{
    this.props.dispatch(closeMsg());
    event.preventDefault();
  }
  handleLoading = ()=>{
    this.props.dispatch(beginLoadingStudent())
    setTimeout(()=>{
      this.props.dispatch(setStudent(['模拟数据']))
    },1000);
  }

  render(){
    console.log(this.props);
    let {isLoading,list,message} = this.props.students;

    let loadingBox;
    if(isLoading){
      loadingBox = <div className='loading'>正在加载中,请稍后...</div>
    }
    let msgBox ;
    if(message){
      msgBox = <div>{message} <a href="/a" onClick={this.handleCloseMsg}>关闭</a> </div>
    }


    return (
      <div>
        <h2>学生信息管理</h2>
        <div>
          <button onClick={this.handleShowMsg}>提示</button>
          <button>修改</button>
          <button onClick={this.handleLoading}>加载</button>
        </div>
        <div>{loadingBox}</div>
        <div>{msgBox}</div>
        <div>
          {JSON.stringify(list)}
        </div>
      </div>
    )
  }
}
export default connect(state=>state)(Student);