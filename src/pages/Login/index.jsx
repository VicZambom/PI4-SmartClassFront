import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Enviando para o backend:", { email, senha });
  };

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-5">
      <div className="bg-card-bg p-10 rounded-xl shadow-2xl w-full max-w-md text-center">
        
        {/* Título e Subtítulo */}
        <h1 className="text-3xl font-bold text-white mb-2">
          Smart<span className="text-purple-primary">Class</span>
        </h1>
        <p className="text-text-muted text-sm mb-8">
          Acesso Inteligente
        </p>
        
        {/* Formulário */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col text-left gap-2">
            <label htmlFor="email" className="text-xs font-medium text-text-muted tracking-wide">
              E-mail Institucional
            </label>
            <input 
              type="email" 
              id="email"
              className="p-3 rounded-lg border border-slate-700 bg-dark-bg text-white focus:outline-none focus:border-purple-primary transition-colors"
              placeholder="exemplo@edu.pe.senac.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="flex flex-col text-left gap-2">
            <label htmlFor="senha" className="text-xs font-medium text-text-muted tracking-wide">
              Senha
            </label>
            <input 
              type="password" 
              id="senha"
              className="p-3 rounded-lg border border-slate-700 bg-dark-bg text-white focus:outline-none focus:border-purple-primary transition-colors"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-purple-primary text-white p-4 rounded-lg font-semibold mt-2 hover:bg-purple-hover transition-colors shadow-md"
          >
            Entrar no Sistema
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;