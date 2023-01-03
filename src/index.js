import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './Todo/index'
import { Provider } from 'react-redux'
import reducer from './store/reducers/index'
import { createStore } from 'redux';
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Todo />
</Provider>
);



