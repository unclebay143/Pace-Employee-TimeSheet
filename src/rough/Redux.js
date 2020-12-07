
import { createStore } from 'redux'


//Action
const increment = () => {
  return {
    type: "INCREMENT"
  }
}

// reducer

const counter = (state=2, action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1;
      
    default: 
      return state;
    }
  }
  // store
  
  const store = createStore(counter)

  
  // print to console
  store.subscribe(()=>console.log(store.getState()))
  
  // dispatch
  store.dispatch(increment())
