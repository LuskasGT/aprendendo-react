import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home/Pages';
import NewProject from './components/pages/NewProject/Pages';
import Empresa from './components/pages/Empresa/Pages';
import Contato from './components/pages/Contatos/Pages';


function App() {
  return (
    
    <Router>
      <div>
        <Link to='/Contato'></Link>
        <Link to="/">Home</Link>
        <Link to="/Empresa">Empresa</Link>
        <Link to="/Contato">Contato</Link>
        <Link to="/NewProject">Novo projeto</Link>
      </div>

      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/Empresa' element={<Empresa/>}></Route>
          <Route path='/Contato' element={<Contato/>}></Route>
          <Route path='/NewProject' element={<NewProject/>}></Route>
      </Routes>
      <p>Footer</p>
    </Router>



  )
}

export default App