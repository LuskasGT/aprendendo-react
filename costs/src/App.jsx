import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home/Pages';
import NewProject from './components/pages/NewProject/Pages';
import Empresa from './components/pages/Empresa/Pages';
import Contato from './components/pages/Contatos/Pages';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';


import Project from './components/pages/Projects/Pages';

function App() {
  return (
    
    <Router>
      <Navbar/>

      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/Empresa' element={<Empresa/>}></Route>
          <Route path='/Contato' element={<Contato/>}></Route>
          <Route path='/Projetos' element={<Project/>}></Route>
          <Route path='/NewProject' element={<NewProject/>}></Route>
      </Routes>

      <Footer />
    </Router>



  )
}

export default App