import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"

import Conocenos from "./pages/Conocenos"
import Eventos from "./pages/Eventos"
import Home from "./pages/Home"
import LayoutMain from "./layout/LayoutMain"
import Login from "./pages/Login"
import Miembros from "./pages/Miembros"
import Noticias from "./pages/Noticias"
import Page_404 from "./pages/Page_404"
import Preloader from "./layout/Preloader"
import Register from "./pages/Register"
import RegisterMember from "./pages/RegisterMember"
import Ubicacion from "./pages/Ubicacion"

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 700)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {loading && <Preloader />}
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/autoridades" element={<Miembros />} />
          <Route path="/ubicanos" element={<Ubicacion />} />
          <Route path="*" element={<Page_404 />} />
        </Route>
        {/* <Route path="/admin/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/registerMember" element={<RegisterMember />} /> */}
      </Routes>
    </>
  )
}
export default App
