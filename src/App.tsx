import './App.css';

import { useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { NewPassword } from './components/NewPassword';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Header />
      { showForm
        ? <Form cancelClick={ () => setShowForm(false) } />
        : <NewPassword
            clickPassword={ () => setShowForm(true) }
            buttonName="Cadastrar nova Senha"
        />}
    </div>
  );
}

export default App;
