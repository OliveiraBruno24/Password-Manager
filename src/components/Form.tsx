// import { useState } from 'react';

// type FormProps = {
//   cancelClick: () => void
// };

// export function Form({ cancelClick }: FormProps) {
//   const [buttonEnabled, setButtonEnabled] = useState(false);

//   return (
//     <>
//       <label htmlFor="nome">
//         Nome do Serviço
//         <input
//           id="nome"
//           type="text"
//           name="Nome do Serviço"
//         />
//       </label>
//       <label htmlFor="login">
//         Login
//         <input
//           id="login"
//           type="text"
//           name="Login"
//           required
//         />
//       </label>
//       <label htmlFor="senha">
//         Senha
//         <input
//           id="senha"
//           type="password"
//           name="Senha"
//           required
//         />
//       </label>
//       <label htmlFor="URL">
//         URL
//         <input
//           id="URL"
//           type="text"
//           name="URL"
//         />
//       </label>
//       <button>Cadastrar</button>
//       <button onClick={ cancelClick }>Cancelar</button>
//     </>
//   );
// }

import { useState } from 'react';

type FormProps = {
  cancelClick: () => void
};

export function Form({ cancelClick }: FormProps) {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [nomeServico, setNomeServico] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const verificarRequisitos = () => {
    if (
      nomeServico !== ''
      && login !== ''
      && senha !== ''
      && senha.length >= 8
      && senha.length <= 16
      && /[a-zA-Z]/.test(senha) // Verifica se a senha contém letras
      && /[0-9]/.test(senha) // Verifica se a senha contém números
      && /[!@#$%^&*]/.test(senha) // Verifica se a senha contém caracteres especiais
    ) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
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
    }

    verificarRequisitos(); // Chama a função verificarRequisitos após cada alteração nos campos de entrada.
    // se tudo estiver bem, muda os estado pra true e o botão habilita
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
      <button disabled={ !buttonEnabled }>Cadastrar</button>
      <button onClick={ cancelClick }>Cancelar</button>
    </>
  );
}
