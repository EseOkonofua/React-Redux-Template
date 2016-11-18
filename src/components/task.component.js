import React, { Component } from 'react'

export default class Task extends Component {
  constructor(){
    super();
    this.animationTimeout = null;
  }
  
  handleToggle(){
    this.props.toggleComplete(this.props.index)
  }

  componentDidMount(){
    this.animationTimeout = setTimeout(()=>{
      this.refs.wrapper.className += ' animation-enter-active';
    },100+ (50*this.props.index))
  }

  componentWillUnmount(){
    clearTimeout(this.animationTimeout);
  }

  render(){
    return(
      <div ref='wrapper' className='task animation-enter'>
        <h3>
          <span className='task-message'>{this.props.task}</span>
          <i onClick = {this.handleToggle.bind(this)} className = { this.props.completed ? 'fa fa-check-circle fa-lg task-check green' : 'fa fa-times-circle fa-lg task-check red'}></i>
        </h3>
      </div>


    )
  }
}

Task.propTypes = {
  task: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired
}
