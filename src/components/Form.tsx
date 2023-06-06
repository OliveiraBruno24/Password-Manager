import { useState } from 'react';

type FormProps = {
  cancelClick: () => void
};

export function Form({ cancelClick }: FormProps) {
  const [nomeServico, setNomeServico] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const tamanhoMinimo = senha.length >= 8;
  const tamanhoMaximo = senha.length <= 16;
  const letrasENumeros = /[a-zA-Z]/.test(senha) && /[0-9]/.test(senha);
  const caracteresEspeciais = /[!@#$%^&*]/.test(senha);

  //  estado derivado -- pesquisar
  const buttonEnabled = nomeServico !== ''
      && login !== ''
      && senha !== ''
      && tamanhoMinimo
      && tamanhoMaximo
      && letrasENumeros
      && caracteresEspeciais;

  const validacaoDaSenha = (condition: boolean) => {
    return condition ? 'valid-password-check' : 'invalid-password-check';
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'Nome do Serviço') {
      setNomeServico(value);
    } else if (name === 'Login') {
      setLogin(value);
    } else if (name === 'Senha') {
      setSenha(value);
    }
  };

  return (
    <>
      <label htmlFor="nome">
        Nome do Serviço
        <input
          id="nome"
          type="text"
          name="Nome do Serviço"
          onChange={ handleInputChange }
        />
      </label>
      <label htmlFor="login">
        Login
        <input
          id="login"
          type="text"
          name="Login"
          required
          onChange={ handleInputChange }
        />
      </label>
      <label htmlFor="senha">
        Senha
        <input
          id="senha"
          type="password"
          name="Senha"
          required
          onChange={ handleInputChange }
        />
      </label>
      <label htmlFor="URL">
        URL
        <input
          id="URL"
          type="text"
          name="URL"
        />
      </label>
      <div className={ validacaoDaSenha(senha.length >= 8) }>
        Possuir 8 ou mais caracteres
      </div>
      <div className={ validacaoDaSenha(senha.length <= 16) }>
        Possuir até 16 caracteres
      </div>
      <div className={ validacaoDaSenha(/[a-zA-Z]/.test(senha) && /[0-9]/.test(senha)) }>
        Possuir letras e números
      </div>
      <div className={ validacaoDaSenha(/[!@#$%^&*]/.test(senha)) }>
        Possuir algum caractere especial
      </div>
      <button disabled={ !buttonEnabled }>Cadastrar</button>
      <button onClick={ cancelClick }>Cancelar</button>
    </>
  );
}
