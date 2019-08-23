import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import AllReducers from './reducers/index';
import {Provider} from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import {receive_task} from './actions/index';
import thunk from 'redux-thunk';
const store = createStore(AllReducers, applyMiddleware(thunk));

// [ 'breakfast','lunch','dinner']
// .forEach((name)=>store. dispatch(add_task(name)));

store.dispatch(receive_task());

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
