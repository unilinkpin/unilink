import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Campus from './features/discovery/Campus';
import Home from './features/discovery/views/Home';
import Perfil from './features/user/view/Perfil';

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
        <Route path="/perfil" element={<Perfil />} /> 

        {/* =========================================
            MÓDULO: DISCOVERY & CAMPUS 
        ========================================= */}
        <Route path="/home" element={<Home />} />
        { <Route path="/campus" element={<Campus />} /> }

       
      </Routes>
    </Router>
  );
}

export default App;
