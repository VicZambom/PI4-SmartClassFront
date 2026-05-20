import { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const Usuarios = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    categoria: '',
    senha: ''
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Lógica de formatação do CPF
    if (name === 'cpf') {
      // 1. Remove tudo o que NÃO for número
      value = value.replace(/\D/g, ''); 
      
      // 2. Limita a quantidade máxima para 11 números puros
      if (value.length > 11) value = value.slice(0, 11); 

      // 3. Aplica o formato (000.000.000-00)
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados prontos para o Backend (Node.js):", formData);
    alert("Usuário cadastrado com sucesso! (Simulação)");
  };

  return (
    <div className="min-h-screen bg-senac-bg flex">
      <Sidebar />

      <main className="flex-1 ml-64 p-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-senac-blue">Gerenciar Usuários</h1>
          <p className="text-senac-muted mt-2 font-medium">
            Cadastre novos professores, funcionários ou gestores no sistema.
          </p>
        </header>

        <section className="bg-senac-card p-8 rounded-xl border border-gray-200 shadow-sm max-w-4xl">
          <h2 className="text-xl font-bold text-senac-blue mb-6 border-b border-gray-100 pb-4">
            Novo Cadastro
          </h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Nome Completo */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-bold text-senac-text uppercase tracking-wide">Nome Completo</label>
              <input 
                type="text" name="nome" value={formData.nome} onChange={handleChange} required
                className="p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-senac-orange focus:ring-1 focus:ring-senac-orange transition-all"
                placeholder="Ex: Carlos Eduardo Silva"
              />
            </div>

            {/* E-mail Institucional */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-senac-text uppercase tracking-wide">E-mail Institucional</label>
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange} required
                className="p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-senac-orange focus:ring-1 focus:ring-senac-orange transition-all"
                placeholder="exemplo@edu.pe.senac.br"
              />
            </div>

            {/* CPF */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-senac-text uppercase tracking-wide">CPF</label>
              <input 
                type="text" name="cpf" value={formData.cpf} onChange={handleChange} required
                className="p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-senac-orange focus:ring-1 focus:ring-senac-orange transition-all"
                placeholder="000.000.000-00"
              />
            </div>

            {/* Categoria */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-senac-text uppercase tracking-wide">Categoria</label>
              <select 
                name="categoria" value={formData.categoria} onChange={handleChange} required
                className="p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-senac-orange focus:ring-1 focus:ring-senac-orange transition-all text-senac-text"
              >
                <option value="" disabled>Selecione o perfil...</option>
                <option value="Professor">Professor(a)</option>
                <option value="Gestor">Equipe de Gestão</option>
                <option value="Funcionario">Funcionário (Limpeza/TI)</option>
              </select>
            </div>

            {/* Senha */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-senac-text uppercase tracking-wide">Senha de Acesso</label>
              <input 
                type="password" name="senha" value={formData.senha} onChange={handleChange} required
                className="p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-senac-orange focus:ring-1 focus:ring-senac-orange transition-all"
                placeholder="Defina uma senha"
              />
            </div>

            {/* Botão de Submit */}
            <div className="md:col-span-2 flex justify-end mt-4">
              <button 
                type="submit" 
                className="bg-senac-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-senac-orange-hover transition-colors shadow-md"
              >
                Salvar Cadastro
              </button>
            </div>

          </form>
        </section>
      </main>
    </div>
  );
};

export default Usuarios;