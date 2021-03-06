import './index.css';
import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state"
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"

let renderEntireTree = () =>{ 
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} 
            dispatch={store.dispatch.bind(store)}
            store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
}


renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
