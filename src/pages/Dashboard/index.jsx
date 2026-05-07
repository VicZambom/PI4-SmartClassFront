import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-dark-bg flex">
      {/* Menu Lateral Fixo */}
      <Sidebar />

      {/* Área Principal de Conteúdo */}
      <main className="flex-1 ml-64 p-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-white">Visão Geral</h1>
          <p className="text-text-muted mt-2">Acompanhe o status do claviculário inteligente.</p>
        </header>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-card-bg p-6 rounded-xl border border-slate-800 shadow-lg">
            <h3 className="text-text-muted text-sm font-medium">Chaves em Uso</h3>
            <p className="text-4xl font-bold text-purple-primary mt-2">04</p>
          </div>
          
          <div className="bg-card-bg p-6 rounded-xl border border-slate-800 shadow-lg">
            <h3 className="text-text-muted text-sm font-medium">Salas Disponíveis</h3>
            <p className="text-4xl font-bold text-emerald-400 mt-2">12</p>
          </div>

          <div className="bg-card-bg p-6 rounded-xl border border-slate-800 shadow-lg">
            <h3 className="text-text-muted text-sm font-medium">Atrasos de Devolução</h3>
            <p className="text-4xl font-bold text-red-400 mt-2">01</p>
          </div>
        </div>

        {/* Espaço para atividade recente (Log) */}
        <section className="bg-card-bg p-6 rounded-xl border border-slate-800 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Movimentações Recentes</h2>
          <div className="text-text-muted text-sm">
            <p className="py-3 border-b border-slate-800">🔑 Prof. Carlos Eduardo retirou a chave da <strong>Sala 101</strong> às 08:15.</p>
            <p className="py-3 border-b border-slate-800">🔑 Roberto Alves (Limpeza) devolveu a chave da <strong>Sala 102</strong> às 07:30.</p>
            <p className="py-3 text-center mt-4 text-purple-primary cursor-pointer hover:underline">Ver histórico completo</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;