import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Navbar from "./Components/Navbar"
import Detail from "./Pages/Detail";
import Favs from "./Pages/Favs";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>Page not found - Error 404</h1>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
