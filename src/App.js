// import logo from './logo.svg';
// import './App.css';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Layout from "./pages/Layout/Layout";
import Quizes from "./pages/Quizes/Quizes";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<HomePage/>}></Route>
            <Route path="quizes" element={<Quizes/>}></Route>
            <Route path="*" element={<HomePage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    




    // <div className="App">
    //   <HomePage></HomePage>
    // </div>
  );
}

export default App;
