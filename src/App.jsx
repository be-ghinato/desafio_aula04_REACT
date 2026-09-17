import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Receitas from './pages/Receitas';
import Sobre from './pages/Sobre';
import NaoEncontrada from './pages/NaoEncontrada';

function App() {
  return (
    <div className="pagina">
      <Header />

      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
