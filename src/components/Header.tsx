type HeaderProps = {
  passwordsRegistered: boolean;
};

export function Header({ passwordsRegistered }: HeaderProps) {
  return (
    <>

      <h1>
        Gerenciador de senhas
      </h1>
      {passwordsRegistered ? '' : <p>nenhuma senha cadastrada</p>}
      {/* passwordsRegistered === false? então renderiza o <p>nenhuma senha cadastrada</p> */}
    </>
  );
}

// context api -- pesquisar
