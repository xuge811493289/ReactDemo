import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {addStudent,deleteStudent,loadStudent} from '../store/student'

class Student extends Component{
  handleAddStudent = ()=>{
    this.props.dispatch(addStudent());
  }
  handleDeleteStudent = ()=>{
    this.props.dispatch(deleteStudent());
  }
  handleLoadStudent = ()=>{
    this.props.dispatch(loadStudent());
  }

  render(){
    let {loading,list} = this.props.students;
    if(loading){
      loading = <div>正在加载...</div>
    }
    
    // 渲染
    return (
      <div>
        <h2>学生信息管理</h2>
        <div>{loading}</div>
        <div>{JSON.stringify(list)}</div>
        <button onClick={this.handleAddStudent}>新增</button>
        <button onClick={this.handleDeleteStudent}>删除</button>
        <button onClick={this.handleLoadStudent}>加载</button>
      </div>
    )
  }
}

export default connect(state=>state)(Student);