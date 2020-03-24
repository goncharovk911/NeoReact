import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost}  from './redux/state';
import {addMessages}  from './redux/state';
import {BrowserRouter} from "react-router-dom"

export let renderEntireTree = (state) =>{ 
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost = {addPost} addMessages = {addMessages}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

