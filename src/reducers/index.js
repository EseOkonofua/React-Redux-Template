import {combineReducers} from 'redux'

var initialTasks = [
  {
    task: "Wash the dishes",
    completed: false
  },
  {
    task: "Do your laundry",
    completed: true
  },
  {
    task: "Walk the dog",
    completed: false
  },
  {
    task: "Clean your room",
    completed: true
    },
    {
        task: "Play some damn Path of Exile",
        completed: true
    },
    {
        task: "Learn react-redux",
        completed: false
    },
    {
        task: "Learn mongodb and other nosql databases",
        completed: true
    },
    {
        task: "Make a smash hit app",
        completed:false
    },
    {
        task: "Get $$$ rich and live happily ever after ",
        completed: false
    }
];

const allReducers = combineReducers({
    tasks :(state=initialTasks, action) =>{
      switch(action.type){
        case "TOGGLE_COMPLETE":
          return state.map((task,index)=>{
            if(index === action.index){
                var obj = Object.assign({},task,{
                  completed:!task.completed
                });
                return obj;
            }
            return task
          });
      }
      return state
    }
});

export default allReducers
