import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {TransitionMotion , spring} from 'react-motion'


import { toggleComplete, removeTask } from '../actions'

class TaskList extends Component {


  constructor(){
    super();
    this.getStyles = this.getStyles.bind(this)
  }

  willLeave(){
    return {
      height: spring(0),
      opacity: spring(0),
    }
  }

  getStyles(){
    console.log(this.props.tasks)
    return this.props.tasks.map((task,index)=>{
      return {
        data:task,
        key:task.task,
        style:{
          height:spring(30),
          opacity:spring(1),
        }
      };
    });
  }

  render(){
    let stylesMap = this.getStyles();
    console.log(stylesMap);
    return(
          <div className = 'tasklist' >
            <h2 className='tasklist-header'>-TASK LIST-</h2>
            <TransitionMotion willEnter={this.willEnter} willLeave = {this.willLeave} styles={stylesMap}>
              {s=>
                <span>
                  {s.map((info,index)=>
                    <div key={info.key} style={info.style}>
                      <a href="#" onClick = {()=>this.props.removeTask(index)}> X </a>{info.data.task}
                      <i onClick ={()=>this.props.toggleComplete(index)} className={info.data.completed ? 'fa fa-check-circle fa-lg task-check green':'fa fa-times-circle fa-lg task-check red'}></i>
                    </div>
                  )}
                </span>
              }
            </TransitionMotion>
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
  return bindActionCreators({toggleComplete, removeTask},dispatch)
}



export default connect(mapStateToProps,matchDispatchToProps)(TaskList)
