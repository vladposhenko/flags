import './App.css';
import { Header } from "./components/Header";
import {Main} from "./components/Main";
import {useEffect, useState} from "react";
import {ALL_COUNTRIES} from "./config";
import axios from "axios";
import { Routes, Route } from 'react-router-dom'
import {HomePage} from "./pages/HomePage";
import {Details} from "./pages/Details";
import {NotFound} from "./pages/NotFound";

function App() {
  const [countries, setCountries] = useState([])
  return (
    <div className="App">
      <Header/>
        <Main>
            <Routes>
                <Route path='/' element={<HomePage countries={countries} setCountries={setCountries}  />} />
                <Route path='/country/:name' element={<Details/>} />
                <Route path='*'  element={<NotFound  />} />
            </Routes>
        </Main>
    </div>
  );
}

export default App;
