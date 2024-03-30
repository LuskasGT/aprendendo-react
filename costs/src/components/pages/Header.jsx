import Contato from '../../Contatos/Pages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Header() {

    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Contato />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Header