import { } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";



const App = () => {

  return (<>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Container>
  </>
  )
}

export default App
