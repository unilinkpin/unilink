import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './features/auth/Login';
import Register from './features/auth/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* =========================================
            MÓDULO: AUTH & USER (DEV 1)
        ========================================= */}

        {/* Rota padrão redirecionando para o login */}
        <Route path="/" element={<Navigate to="/auth/login" />} />

        {/* Rotas de Autenticação */}
        <Route path="/auth/login" element={<Login />} />
        {/* <Route path="/perfil" element={<Perfil />} /> */}

        {/* A ROTA QUE ESTAVA FALTANDO! 👇 */}
        <Route path="/auth/register" element={<Register />} />

        {/* =========================================
            MÓDULO: DISCOVERY & CAMPUS (DEV 2)
        ========================================= */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/explorar" element={<Explorar />} /> */}
        {/* <Route path="/campus" element={<Campus />} /> */}

        {/* =========================================
            MÓDULO: INTERACTION (DEV 3)
        ========================================= */}
        {/* <Route path="/forum" element={<Forum />} /> */}
        {/* <Route path="/inscricoes" element={<Inscricoes />} /> */}

      </Routes>
    </Router>
  );
}

export default App;

/*quando cada uma for criar sua tela, 
é só descomentar a sua própria linha e
 ninguém esbarra no código da outra! */