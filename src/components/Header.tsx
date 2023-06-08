import { useState } from 'react';
import PropTypes from 'prop-types';

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

// context api

// tenho que fazer a msg sumir quando clico no botão e cadastro um novo serviço
