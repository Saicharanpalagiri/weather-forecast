import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './components/Details';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="container">
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/details/:city" element={<Details/>} />
          
        </Routes>
      </div>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
