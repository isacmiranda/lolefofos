import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Header from "./components/Header";
import Footer from "./components/Footer";


function NotFound() {
return <div className="p-6 text-center text-red-600 text-xl">Página não encontrada.</div>;
}


export default function App() {
return (
<Router>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/produtos" element={<Produtos />} />
<Route path="/contato" element={<Contato />} />
<Route path="*" element={<NotFound />} />
</Routes>
<Footer />
</Router>
);
}