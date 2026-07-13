import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './features/auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* =========================================
            MÓDULO: AUTH & USER (DEV 1)
        ========================================= */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/perfil" element={<Perfil />} /> */}

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