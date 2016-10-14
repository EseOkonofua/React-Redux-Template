import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import Task from '../components/task.component'

import { toggleComplete } from '../actions'

class TaskList extends Component {
  render(){
    var taskList = this.props.tasks.map((task,index)=>{
      return <Task key={index}  index={index} {...task} toggleComplete={this.props.toggleComplete}/>
    });

    return(
      <div className = 'tasklist' >
        <h2 className='tasklist-header'>-TASK LIST-</h2>
          {taskList}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    tasks: state.tasks
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({toggleComplete},dispatch)
}



export default connect(mapStateToProps,matchDispatchToProps)(TaskList)
