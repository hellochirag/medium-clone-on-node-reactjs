import React from 'react';
import ReactDOM from 'react-dom';
import './assets/medium.css';
import { Provider } from 'react-redux';

import { Switch, Route,BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

import { store, history } from './redux/store';

import { getUser } from './redux/actions/actions'

if(localStorage.Auth) {
    console.log('first dispatch')
    //console.log(localStorage.Auth)
    // update localstorage
    store.dispatch({type: 'SET_USER', user: JSON.parse(localStorage.Auth)})

    var _id = JSON.parse(localStorage.Auth)._id
    getUser(_id).then((res)=>{
        //console.log(JSON.parse(res))
        store.dispatch({type: 'SET_USER', user: res})
    })
}

ReactDOM.render((
    <Provider store={store}>
     <BrowserRouter>
       
     <Switch>
            <Route path="/" component={App} />
        </Switch>  
    </BrowserRouter>
       
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
