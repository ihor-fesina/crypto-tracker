import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import store from './app/store'
import {Provider} from "react-redux";
import NotFound from "./pages/NotFound.tsx";
function App() {


    return (
        <Provider store={store}>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/coin/:coinId' element={<Coin/>}/>
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
        </Provider>
    )
}

export default App
