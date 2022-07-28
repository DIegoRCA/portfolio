import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from '../header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App (){
  return(
    <div className="App">
      <Router>
        <Header></Header>
      </Router>
    </div>
  )
}
export default App;