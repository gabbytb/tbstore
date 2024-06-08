import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages";
import { ShoeDetails, HatDetails } from "./components";




function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/shoe/:linkURI" element={<ShoeDetails />} />
        <Route path="/product/hat/:linkURI" element={<HatDetails />} />
    </Routes>
  );
}

export default App;
