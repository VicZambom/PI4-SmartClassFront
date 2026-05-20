import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Usuarios from './pages/Usuarios';
import Salas from './pages/Salas';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota Inicial: Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Rota do Painel Administrativo */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/custom-salas" element={<Navigate to="/salas" />} /> {/* Fallback ou ajuste */}
        <Route path="/salas" element={<Salas />} />

        {/* Redirecionamento padrão: Se a rota não existir, vai para o Login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;