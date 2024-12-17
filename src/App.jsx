import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./Pages/Beranda";
import Tentang from "./Pages/Tentang";
import Layanan from "./Pages/Layanan";
import Masuk from "./Pages/Masuk";
import Daftar from "./Pages/Daftar";
import "bootstrap/dist/css/bootstrap.min.css";
import Edukasi from "./Pages/Edukasi";
import Limbah from "./Pages/Limbah";
import Chatbot from "./Pages/Chatbot";
import EdukasiPakcoy from "./Pages/EdukasiPakcoy"





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/tentang-kami" element={<Tentang/>} />
        <Route path="/layanan-kami" element={<Layanan />} />
        <Route path="/verti-guide" element={<Edukasi />} />
        <Route path="/pakcoy" element={<EdukasiPakcoy />} />
        <Route path="/eco-limbah" element={<Limbah />} />
        <Route path="/chatbot-mr-grow" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
