import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages";
import { ProductDescription } from "./sections";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductDescription />} />
    </Routes>
  );
}

export default App;
