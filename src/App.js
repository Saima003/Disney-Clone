import './App.css';
// import { Routes ,Route } from 'react-router-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/Login'
import About from './components/About';
// import './tailwind.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          {/* <Login/>/ */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
