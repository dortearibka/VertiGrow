import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Pages/About'
import Layanan from './Pages/Layanan'
import Login from './Pages/Login'
import Daftar from './Pages/Daftar'
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/layanan' element={<Layanan/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/daftar' element={<Daftar/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App