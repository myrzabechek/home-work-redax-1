import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux"
import { Provider } from 'react-redux';




const defaultState = {
  num: 0,
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NUM":
      return{...state, num: state.num + action.payload}
    case "GET_NUM":
      return{...state, num: state.num - action.payload}
    default:
      return state
  }
} 
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <App />
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//      <App />
//   </Provider>,
//   document.getElementById('root')
// );

