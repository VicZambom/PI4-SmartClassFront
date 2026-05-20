import 'react';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-senac-bg flex">
      {/* Menu Lateral Fixo */}
      <Sidebar />

      {/* Área Principal de Conteúdo */}
      <main className="flex-1 ml-64 p-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-senac-blue">Visão Geral</h1>
          <p className="text-senac-muted mt-2 font-medium">
            Acompanhe o status do claviculário inteligente em tempo real.
          </p>
        </header>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-senac-card p-6 rounded-xl border border-gray-200 shadow-sm transition-transform hover:-translate-y-1">
            <h3 className="text-senac-muted text-xs font-bold uppercase tracking-wider">Chaves em Uso</h3>
            <p className="text-4xl font-black text-senac-orange mt-2">04</p>
          </div>
          
          <div className="bg-senac-card p-6 rounded-xl border border-gray-200 shadow-sm transition-transform hover:-translate-y-1">
            <h3 className="text-senac-muted text-xs font-bold uppercase tracking-wider">Salas Disponíveis</h3>
            <p className="text-4xl font-black text-senac-blue mt-2">12</p>
          </div>

          <div className="bg-senac-card p-6 rounded-xl border border-gray-200 shadow-sm transition-transform hover:-translate-y-1">
            <h3 className="text-senac-muted text-xs font-bold uppercase tracking-wider">Atrasos de Devolução</h3>
            <p className="text-4xl font-black text-red-500 mt-2">01</p>
          </div>
        </div>

        {/* Espaço para atividade recente (Logs) */}
        <section className="bg-senac-card p-8 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-senac-blue mb-6">Movimentações Recentes</h2>
          <div className="text-senac-text text-sm flex flex-col gap-4">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <p>🔑 <strong>Prof. Carlos Eduardo</strong> retirou a chave da <span className="font-bold text-senac-orange">Sala 101</span></p>
              <span className="text-senac-muted font-medium text-xs bg-senac-bg py-1 px-3 rounded-full">08:15</span>
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <p>✔️ <strong>Roberto Alves (Limpeza)</strong> devolveu a chave da <span className="font-bold text-senac-blue">Sala 102</span></p>
              <span className="text-senac-muted font-medium text-xs bg-senac-bg py-1 px-3 rounded-full">07:30</span>
            </div>

            <button className="text-center mt-4 text-sm font-bold text-senac-orange hover:text-senac-orange-hover transition-colors">
              Ver histórico completo &rarr;
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;