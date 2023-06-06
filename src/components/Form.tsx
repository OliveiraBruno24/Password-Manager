type FormProps = {
  cancelClick: () => void
};

export function Form({ cancelClick }: FormProps) {
  return (
    <>
      <label htmlFor="nome">
        Nome do Serviço
        <input
          id="nome"
          type="text"
          name="Nome do Serviço"
        />
      </label>
      <label htmlFor="login">
        Login
        <input
          id="login"
          type="text"
          name="Login"
          required
        />
      </label>
      <label htmlFor="senha">
        Senha
        <input
          id="senha"
          type="password"
          name="Senha"
          required
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
      <button>Cadastrar</button>
      <button onClick={ cancelClick }>Cancelar</button>
    </>
  );
}
