import 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => 
    location.pathname === path 
      ? "bg-senac-blue text-white shadow-md" 
      : "text-senac-muted hover:bg-senac-bg hover:text-senac-blue";

  return (
    <aside className="w-64 h-screen bg-senac-card border-r border-gray-200 flex flex-col p-5 fixed z-10">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-senac-blue">
          Smart<span className="text-senac-orange">Class</span>
        </h2>
        <p className="text-xs text-senac-muted mt-1 font-medium">Painel Administrativo</p>
      </div>

      <nav className="flex flex-col gap-3 flex-1">
        <Link to="/dashboard" className={`text-left px-4 py-3 rounded-lg font-bold transition-all ${isActive('/dashboard')}`}>
          Início (Dashboard)
        </Link>
        
        <Link to="/usuarios" className={`text-left px-4 py-3 rounded-lg font-bold transition-all ${isActive('/usuarios')}`}>
          Gerenciar Usuários
        </Link>
        
        <Link to="/salas" className={`text-left px-4 py-3 rounded-lg font-bold transition-all ${isActive('/salas')}`}>
          Salas e Horários
        </Link>

        <Link to="/relatorios" className={`text-left px-4 py-3 rounded-lg font-bold transition-all ${isActive('/relatorios')}`}>
          Relatórios / Logs
        </Link>
      </nav>

      {/* Perfil da Gestora */}
      <div className="mt-auto pt-5 border-t border-gray-200">
        <Link to="/login" className="text-red-500 text-sm font-bold hover:underline mb-4 block">
          Sair do Sistema
        </Link>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-senac-orange flex items-center justify-center text-white font-bold shadow-sm">
            MS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-senac-text">Marina Souza</span>
            <span className="text-xs text-senac-muted font-medium">Gestora</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;