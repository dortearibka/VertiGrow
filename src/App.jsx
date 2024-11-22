import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./Pages/Beranda";
import Tentang from "./Pages/Tentang";
import Layanan from "./Pages/Layanan";
import Masuk from "./Pages/Masuk";
import Daftar from "./Pages/Daftar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda/>} />
        <Route path="/tentang" element={<Tentang/>} />
        <Route path="/layanan" element={<Layanan/>} />
        <Route path="/masuk" element={<Masuk/>} />
        <Route path="/daftar" element={<Daftar/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
