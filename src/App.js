import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SearchImages from "./components/PixabayApi"
import Login from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import AboutImage from './pages/AboutImage';
import Error from './components/Error';
function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchImages/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<RegistrationForm/>}/>
        <Route path="/about" element={<AboutImage />} /> {/* Route for displaying a particular image */}
        <Route path="*" element={<Error/>}/> {/* Error route */}
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App; 