import { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const Salas = () => {
  // Dados simulados baseados nos INSERTS do seu script SQL
  const [salas, setSalas] = useState([
    { id: 1, identificacao: 'Sala 101 - Bloco A' },
    { id: 2, identificacao: 'Sala 102 - Bloco A' },
    { id: 3, identificacao: 'Sala 103 - Bloco A' },
    { id: 4, identificacao: 'Sala 104 - Bloco A' },
  ]);

  const [regras, setRegras] = useState([
    { id: 1, usuario: 'Carlos Eduardo Silva', sala: 'Sala 101 - Bloco A', inicio: '08:00', fim: '22:00' },
    { id: 2, usuario: 'Roberto Alves Gomes', sala: 'Sala 101 - Bloco A', inicio: '05:00', fim: '07:30' },
    { id: 3, usuario: 'Fernanda Lima Santos', sala: 'Sala 104 - Bloco A', inicio: '08:00', fim: '18:00' },
  ]);

  const [novaSala, setNovaSala] = useState('');
  
  const [novaRegra, setNovaRegra] = useState({
    usuarioId: '',
    salaId: '',
    inicio: '',
    fim: ''
  });

  // Função para lidar com a digitação nos campos do formulário
  const handleNovaRegraChange = (e) => {
    const { name, value } = e.target;
    setNovaRegra(prev => ({ ...prev, [name]: value }));
  };

  // Função para salvar a nova regra na tabela (usando o setRegras)
  const handleAddRegra = (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!novaRegra.usuarioId || !novaRegra.salaId || !novaRegra.inicio || !novaRegra.fim) {
      alert("Por favor, preencha todos os campos da regra.");
      return;
    }

    // Simulando o nome do usuário e da sala para exibir na tabela
    const nomeUsuario = novaRegra.usuarioId === '1' ? 'Carlos Eduardo Silva' : 'Roberto Alves Gomes';
    const nomeSala = salas.find(s => s.id === parseInt(novaRegra.salaId))?.identificacao || 'Sala Desconhecida';

    const nova = {
      id: regras.length + 1,
      usuario: nomeUsuario,
      sala: nomeSala,
      inicio: novaRegra.inicio,
      fim: novaRegra.fim
    };

    // Aqui resolvemos o erro do "setRegras" não utilizado!
    setRegras([...regras, nova]); 
    
    // Limpando o formulário
    setNovaRegra({ usuarioId: '', salaId: '', inicio: '', fim: '' });
    alert("Regra de acesso vinculada com sucesso!");
  };

  const handleAddSala = (e) => {
    e.preventDefault();
    if (!novaSala) return;
    const nova = { id: salas.length + 1, identificacao: novaSala };
    setSalas([...salas, nova]);
    setNovaSala('');
    alert("Nova sala adicionada com sucesso!");
  };

  return (
    <div className="min-h-screen bg-senac-bg flex">
      <Sidebar />

      <main className="flex-1 ml-64 p-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-senac-blue">Salas e Horários</h1>
          <p className="text-senac-muted mt-2 font-medium">
            Gerencie os ambientes cadastrados e defina as regras de permissão de acesso [RF003].
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUNA 1: Cadastro e Lista de Salas */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Form Nova Sala */}
            <section className="bg-senac-card p-6 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-lg font-bold text-senac-blue mb-4">Cadastrar Nova Sala</h2>
              <form onSubmit={handleAddSala} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-senac-text uppercase tracking-wide">Identificação</label>
                  <input 
                    type="text" 
                    value={novaSala} 
                    onChange={(e) => setNovaSala(e.target.value)}
                    className="p-3 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:border-senac-orange" 
                    placeholder="Ex: Laboratório 202 - Bloco B"
                    required
                  />
                </div>
                <button type="submit" className="bg-senac-blue text-white p-3 rounded-lg font-bold text-sm hover:bg-senac-blue-hover transition-colors">
                  Adicionar Sala
                </button>
              </form>
            </section>

            {/* Lista de Salas Existentes */}
            <section className="bg-senac-card p-6 rounded-xl border border-gray-200 shadow-sm flex-1">
              <h2 className="text-lg font-bold text-senac-blue mb-4">Salas Cadastradas ({salas.length})</h2>
              <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1">
                {salas.map(sala => (
                  <div key={sala.id} className="p-3 bg-senac-bg rounded-lg border border-gray-100 flex justify-between items-center">
                    <span className="text-sm font-semibold text-senac-text">{sala.identificacao}</span>
                    <span className="text-xs font-bold text-senac-muted">ID: {sala.id}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* COLUNA 2 e 3: Regras de Uso (Horários) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Vincular Regra de Uso */}
            <section className="bg-senac-card p-6 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-lg font-bold text-senac-blue mb-4">Vincular Regra de Acesso</h2>
              <form onSubmit={handleAddRegra} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-senac-text uppercase tracking-wide">Selecione o Usuário</label>
                  <select
                    name="usuarioId"
                    value={novaRegra.usuarioId}
                    onChange={handleNovaRegraChange}
                    className="p-3 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none text-senac-text"
                  >
                    <option value="">Selecione...</option>
                    <option value="1">Carlos Eduardo Silva (Professor)</option>
                    <option value="3">Roberto Alves Gomes (Limpeza)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-senac-text uppercase tracking-wide">Selecione a Sala</label>
                  <select
                    name="salaId"
                    value={novaRegra.salaId}
                    onChange={handleNovaRegraChange}
                    className="p-3 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none text-senac-text"
                  >
                    <option value="">Selecione...</option>
                    {salas.map(s => (
                      <option key={s.id} value={s.id}>{s.identificacao}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-senac-text uppercase tracking-wide">Horário de Início</label>
                  <input
                    type="time"
                    name="inicio"
                    value={novaRegra.inicio}
                    onChange={handleNovaRegraChange}
                    className="p-3 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none text-senac-text"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-senac-text uppercase tracking-wide">Horário de Fim</label>
                  <input
                    type="time"
                    name="fim"
                    value={novaRegra.fim}
                    onChange={handleNovaRegraChange}
                    className="p-3 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none text-senac-text"
                  />
                </div>

                <div className="md:col-span-2 flex justify-end mt-2">
                  <button type="submit" className="bg-senac-orange text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-senac-orange-hover transition-colors shadow-md">
                    Permitir Acesso
                  </button>
                </div>
              </form>
            </section>

            {/* Tabela de Regras Ativas */}
            <section className="bg-senac-card p-6 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-lg font-bold text-senac-blue mb-4">Regras de Uso Ativas</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-xs font-bold text-senac-muted uppercase tracking-wider">
                      <th className="pb-3">Usuário</th>
                      <th className="pb-3">Ambiente</th>
                      <th className="pb-3 text-center">Horário Permitido</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm text-senac-text">
                    {regras.map(regra => (
                      <tr key={regra.id} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 font-semibold">{regra.usuario}</td>
                        <td className="py-3 text-senac-muted">{regra.sala}</td>
                        <td className="py-3 text-center">
                          <span className="bg-blue-50 text-senac-blue font-bold px-3 py-1 rounded-full text-xs">
                            {regra.inicio} às {regra.fim}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Salas;