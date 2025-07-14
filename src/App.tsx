import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

function App() {


  return (
      <Routes>
          <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/coin/:coinId' element={<Coin/>}/>
          </Route>
      </Routes>
  )
}

export default App
