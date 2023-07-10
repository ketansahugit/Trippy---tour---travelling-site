import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import './App.css';
import {Routes} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className='App'>
        <Navbar />
    </div>
  )
}

export default App
