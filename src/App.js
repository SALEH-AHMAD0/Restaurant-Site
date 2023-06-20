
import './App.css';
import Body from './Body';
import Nevbar from "./Components/Nevbar/Nevbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Nevbar></Nevbar>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Body/>} /> 
              <Route path='/routing' element={<Body/>} />
            </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
