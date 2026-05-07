import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota Inicial: Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Rota do Painel Administrativo */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Redirecionamento padrão: Se a rota não existir, vai para o Login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;