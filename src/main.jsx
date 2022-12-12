import  React from "react";
import  ReactDOM  from "react-dom/client";
import {App} from './components/App.jsx';
import { CounterApp } from "./components/CounterApp.jsx";



import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value= {255}/>
        <App/>
    </React.StrictMode>
);