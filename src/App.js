import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Here from './components/Here';
import Wait from "./components/Wait";
import Come from './components/Come';
import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const MainContext = createContext();
function App() {
  const [item, setItem] = useState([])
  return (
    <div className="App ">
      <MainContext.Provider value={{item , setItem }}>
        <NavBar  />
        <Routes>
          <Route path="/" element={<Here  />} />
          <Route path="/Wait" element={<Wait  />} />
          <Route path="/Come" element={<Come  />} />
        </Routes>
        <ToastContainer />
      </MainContext.Provider>
    </div>
  );
}

export default App;
