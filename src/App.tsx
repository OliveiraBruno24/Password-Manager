import './App.css';

import { useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { NewPassword } from './components/NewPassword';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [passwordsRegistered, setPasswordsRegistered] = useState(false);

  const handlePasswordRegistered = () => {
    setPasswordsRegistered(true);
  };

  return (
    <div>
      <Header passwordsRegistered={ passwordsRegistered } />
      { showForm ? (
        <Form
          cancelClick={ () => setShowForm(false) }
          onPasswordRegistered={ handlePasswordRegistered }
        />
      ) : (
        <NewPassword
          clickPassword={ () => setShowForm(true) }
          buttonName="Cadastrar nova Senha"
        />
      )}
    </div>
  );
}

export default App;
