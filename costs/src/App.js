import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import NewProject from './components/pages/NewProject';
import Empresa from './components/pages/Empresa';

import Container from './layout/Container';


function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Empresa">EmpresaContato</Link>
        <Link to="/Contato">Contato</Link>
        <Link to="/NewProject">Novo projeto</Link>
      </div>

      <Routes>
        <Container>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/Empresa' element={<Empresa/>}></Route>
          <Route path='/Contato' element={<Contato/>}></Route>
          <Route path='/NewProject' element={<NewProject/>}></Route>
        </Container>
      </Routes>
      <p>Footer</p>
    </Router>



  )
}

export default App
