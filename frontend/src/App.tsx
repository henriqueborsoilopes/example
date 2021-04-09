import React, { useState, useEffect } from 'react';
import './App.css';
import { allUsers } from "./Api"
import { UserAtr } from "./types"
import { toast } from 'react-toastify';

function App() {

  const [ user, setUser ] = useState<UserAtr>();

  useEffect(() => {
    allUsers()
    .then(response => setUser(response.data))
        .catch( () => {
          toast.warning('Erro ao listar produtos');
        })
  }, [])
  console.log(user);

  return (
    <div >
      <h1>
      </h1>
    </div>
  );
}

export default App;
