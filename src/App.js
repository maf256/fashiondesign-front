import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home"
import Aboutme from "./components/pages/Aboutme"
import Collection from "./components/pages/Collection"
import Contactus from "./components/pages/Contactus"

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutme" element={<Aboutme />} />
        <Route path="collection" element={<Collection />} />
        <Route path="contactus" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
