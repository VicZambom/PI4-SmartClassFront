import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Credenciais:", { email, senha });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-senac-bg flex items-center justify-center p-5">
      <div className="bg-senac-card p-10 rounded-xl shadow-2xl w-full max-w-md text-center">
        
        {/* Título e Subtítulo */}
        <h1 className="text-3xl font-bold text-senac-text mb-2">
          Smart<span className="text-senac-orange">Class</span>
        </h1>
        <p className="text-senac-muted text-sm mb-8">
          Acesso Inteligente
        </p>
        
        {/* Formulário */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col text-left gap-2">
            <label htmlFor="email" className="text-xs font-medium text-senac-muted tracking-wide">
              E-mail Institucional
            </label>
            <input 
              type="email" 
              id="email"
              className="p-3 rounded-lg border border-slate-700 bg-senac-bg text-senac-text focus:outline-none focus:border-senac-orange transition-colors"
              placeholder="exemplo@edu.pe.senac.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="flex flex-col text-left gap-2">
            <label htmlFor="senha" className="text-xs font-medium text-senac-muted tracking-wide">
              Senha
            </label>
            <input 
              type="password" 
              id="senha"
              className="p-3 rounded-lg border border-slate-700 bg-senac-bg text-senac-text focus:outline-none focus:border-senac-orange transition-colors"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-senac-orange text-white p-4 rounded-lg font-semibold mt-2 hover:bg-senac-orange-hover transition-colors shadow-md"
          >
            Entrar no Sistema
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;