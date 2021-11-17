import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  const url= 'https://io2.convertiez.com.br/m/lojasmel/shop/products/images/2028189/medium/energeticomonsterultralata473mlmonsterenergy_195631.jpg'

  return (
      <>
      <Router>      
        <ul>
          <img src={url} alt="Monster" />
          <p>Melhores Alunos do Vem Ser DBC de Todos os Tempos</p>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>

      <Router>      
        <ul>
          <img src={url} alt="Monster" />
          <p>Melhores Alunos do Vem Ser DBC de Todos os Tempos</p>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/sobre" element={<Sobre />} /> */}
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
