import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/Tentang";
import Layanan from "./Pages/Layanan";
import Masuk from "./Pages/Masuk";
import Daftar from "./Pages/Daftar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tentang" element={<About/>} />
        <Route path="/layanan" element={<Layanan/>} />
        <Route path="/masuk" element={<Masuk/>} />
        <Route path="/daftar" element={<Daftar/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
