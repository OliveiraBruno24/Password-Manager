import { useState } from 'react';

type FormProps = {
  cancelClick: () => void,
  nomeServico: string,
  login: string,
  senha: string,
  handleNomeServicoChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleLoginChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSenhaChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const LiberarBotaoDeCadastro = () => {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [nomeServico, setNomeServico] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleNomeServicoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeServico(event.target.value);
  };

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const updateButtonEnabled = (nomeServico: string, login: string, senha: string) => {
    if (
      nomeServico !== ''
      && login !== ''
      && senha !== ''
      && senha.length >= 8
      && senha.length <= 16
      && /[a-zA-Z]/.test(senha) // Verificar se a senha contém letras
      && /[0-9]/.test(senha) // Verificar se a senha contém números
      && /[!@#$%^&*]/.test(senha) // Verificar se a senha contém caracteres especiais
    ) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  };

  return (
    <Form
      cancelClick={cancelClick}
      nomeServico={nomeServico}
      login={login}
      senha={senha}
      handleNomeServicoChange={handleNomeServicoChange}
      handleLoginChange={handleLoginChange}
      handleSenhaChange={handleSenhaChange}
    />
  );
};

export function Form({
  cancelClick,
  nomeServico,
  login,
  senha,
  handleNomeServicoChange,
  handleLoginChange,
  handleSenhaChange
}: FormProps) {
  return (
    <> <label htmlFor="nome">
    Nome do Serviço
    <input
      id="nome"
      type="text"
      name="Nome do Serviço"
      value={nomeServico}
      onChange={handleNomeServicoChange}
    />
  </label>
  <label htmlFor="login">
    Login
    <input
      id="login"
      type="text"
      name="Login"
      required
      value={login}
      onChange={handleLoginChange}
    />
  </label>
  <label htmlFor="senha">
    Senha
    <input
      id="senha"
      type="password"
      name="Senha"
      required
      value={senha}
      onChange={handleSenhaChange}
    />
  </label>
  <label
  </>
  )
}