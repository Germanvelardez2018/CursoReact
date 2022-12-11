import  React from "react";
import  ReactDOM  from "react-dom/client";
import {App} from './components/App.jsx';

import {Title} from './components/Title'


import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Title/>
        <App/>
    </React.StrictMode>
);