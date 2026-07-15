import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Campus from './features/discovery/Campus';
import Home from './features/discovery/views/Home';
import Explorar from './features/discovery/views/Explorar';

function App() {
  return (
    <Router>
      <Routes>
        {/* =========================================
            MÓDULO: AUTH & USER 
        ========================================= */}

        <Route path="/" element={<Navigate to="/auth/login" />} />

        {/* Rotas de Autenticação */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />


        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/home" element={<Home />} />
        { <Route path="/campus" element={<Campus />} /> }

       
      </Routes>
    </Router>
  );
}

export default App;
