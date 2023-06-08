import { useState } from 'react';
import { ServicoTypes } from './type';

import '../App.css';

type FormProps = {
  cancelClick: () => void,
  onPasswordRegistered: () => void
};

export function Form({ cancelClick, onPasswordRegistered }: FormProps) {
  const [nomeServico, setNomeServico] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [exibirSenha, setExibirSenha] = useState(false);
  const [URL, setUrl] = useState('');
  const [servicosCadastrados, setServicosCadastrados] = useState<Array<ServicoTypes>>([]);

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

  // const handleMostrarSenha = () => {
  //   setExibirSenha(!exibirSenha);
  // };

  const handleCadastrarClick = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nomeServico !== '') {
      const novoServico = {
        nome: nomeServico,
        login,
        senha,
        url: URL,
      };
      setServicosCadastrados([...servicosCadastrados, novoServico]);

      setLogin('');
      setNomeServico('');
      setSenha('');
      setUrl('');

      onPasswordRegistered(); // muda para true, pq agr tem cadastro ativo
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'Nome do Serviço') {
      setNomeServico(value);
    } else if (name === 'Login') {
      setLogin(value);
    } else if (name === 'Senha') {
      setSenha(value);
    } else if (name === 'URL') {
      setUrl(value);
    }
  };

  return (
    <form className="form-container" onSubmit={ handleCadastrarClick }>
      <label htmlFor="nome">
        Nome do Serviço
        <input
          id="nome"
          type="text"
          name="Nome do Serviço"
          onChange={ handleInputChange }
          value={ nomeServico }
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
          value={ login }
        />
      </label>
      <label htmlFor="senha">
        Senha
        <input
          id="senha"
          type={ exibirSenha ? 'text' : 'password' }
          name="Senha"
          required
          onChange={ handleInputChange }
          value={ senha }
        />
      </label>
      <label htmlFor="URL">
        URL
        <input
          id="URL"
          type="text"
          name="URL"
          onChange={ handleInputChange }
          value={ URL }
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
      <button
        type="submit"
        disabled={ !buttonEnabled }
      >
        Cadastrar nova senha
      </button>

      <button onClick={ cancelClick }>Cancelar</button>
      <div className="container">
        { servicosCadastrados.length > 0 ? (
          <>
            <div>
              {servicosCadastrados.map((servico, index) => (
                <div className="card" key={ index }>
                  <div>{servico.login}</div>
                  <div>{servico.senha}</div>
                  <a href={ servico.url ?? '' } target="_blank" rel="noopener noreferrer">
                    {servico.nome}
                  </a>
                </div>
              )) }
            </div>
            <div />
          </>
        )
          : null}
      </div>
    </form>
  );
}
