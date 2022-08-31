import './App.css';
import React, {useReducer} from 'react';
import reducer from './reducer/reducer';
import Header from './components/Header';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';


function App() {

const [state, dispatch] = useReducer(reducer,{
  todos:[],
  todo:''
})

const onChange = (e) => {
  dispatch({
    type : 'SET_TODO',
    payload : e.target.value
  })
}
const addTodo=(e)=>{
  if(state.todo !== ''){
    dispatch({
      type : 'ADD_TODO',
      payload : state.todo
    })
  }
}

  return (
    <div className="App bg-slate-800">
      <Header></Header>
      <Todoinput onChange={onChange} state={state} onClick={addTodo}></Todoinput>
      <Todolist state = {state.todos}></Todolist>
    </div>
  );
}

export default App;
