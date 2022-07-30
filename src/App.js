import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from '../components/layout/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

function App (){
  return(
    <div className="App">
      <Router>
        <Header/>

        <Routes>
          <Route exact path="/" element={Home}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;