import React from 'react';
import ReactDOM from 'react-dom/client';
// import {FirstApp} from './FirstApp';
// import {HelloWorldApp} from './HelloWorldApp'
import './global_styles.css';
import {CounterApp} from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={23}/>
        {/* < FirstApp title="Hello, i'm Vegeta"/> */}
    </React.StrictMode>
);