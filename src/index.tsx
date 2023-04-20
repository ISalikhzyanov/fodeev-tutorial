import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from "./redux/sagas";

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk, saga
    )
))

saga.run(sagaWatcher)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <Provider store={store}>
     <BrowserRouter>
         <App />
     </BrowserRouter>
 </Provider>
);

