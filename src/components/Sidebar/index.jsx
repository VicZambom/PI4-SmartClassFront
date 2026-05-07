import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "bg-purple-primary text-white" : "text-text-muted hover:bg-dark-bg hover:text-white";

  return (
    <aside className="w-64 h-screen bg-card-bg border-r border-slate-800 flex flex-col p-5 fixed">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-white">
          Smart<span className="text-purple-primary">Class</span>
        </h2>
        <p className="text-xs text-text-muted mt-1">Painel Administrativo</p>
      </div>

      <nav className="flex flex-col gap-4 flex-1">
        <Link to="/dashboard">
          <button className={`text-left px-4 py-3 rounded-lg font-medium shadow-md transition-colors ${isActive('/dashboard')}`}>
            Início (Dashboard)
          </button>
        </Link>
        <Link to="/users">
          <button className={`text-left px-4 py-3 rounded-lg font-medium shadow-md transition-colors ${isActive('/users')}`}>
            Gerenciar Usuários
          </button>
        </Link>
        <Link to="/rooms">
          <button className={`text-left px-4 py-3 rounded-lg font-medium shadow-md transition-colors ${isActive('/rooms')}`}>
            Salas e Horários
          </button>
        </Link>
        <Link to="/reports">
          <button className={`text-left px-4 py-3 rounded-lg font-medium shadow-md transition-colors ${isActive('/reports')}`}>
            Relatórios / Logs
          </button>
        </Link>
      </nav>

    {/* Botão de Sair (Logout) */}
      <div className="mt-auto pt-5 border-t border-slate-800">
        <Link to="/login" className="text-red-400 text-sm hover:underline">Sair do Sistema</Link>
      </div>
      
      <div className="mt-auto pt-5 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-primary flex items-center justify-center text-white font-bold">
            MS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">Marina Souza</span>
            <span className="text-xs text-text-muted">Gestora</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;