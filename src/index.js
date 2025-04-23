import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import Card from './components/Card';
import CardList from './components/CardList';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import { robots } from './robots';



ReactDOM.render(    
    <CardList robots={robots}/>
, document.getElementById('root'));

registerServiceWorker();