import React ,{Component} from 'react';
import {connect} from 'react-redux';

import {findStudents,deleteStudentById} from '../store';

class Student extends Component{
  handleFind = ()=>{
    /*let action = findStudents();
    this.props.dispatch(action);*/

    this.props.dispatch(findStudents())
  }
  handleDelete = ()=>{
    /*let action = deleteStudentById();
    this.props.dispatch(action);*/
    this.props.dispatch(deleteStudentById())
  }

  render(){
    let {students} = this.props;
    return (
      <div>
        <h1>学生管理</h1>
        <div>学生信息{JSON.stringify(students)}</div>
        <button onClick={this.handleFind} >add</button>
        <button onClick={this.handleDelete} >delete</button>
      </div>
    )
  }
}


// 将state和dispatch都拿来使用
export default connect(state=>state) (Student);