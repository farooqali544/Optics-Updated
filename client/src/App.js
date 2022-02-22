import React from "react";
import Form from "./Components/Form/Form";
import Preview from "./Components/Preview/Preview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Temp from "./Components/Preview/Temp";
import Revenue from "./Components/Revenue/Revenue";
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Form />} />
          <Route path='/preview' element={<Preview />} />
          <Route path='/revenue' element={<Revenue />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
