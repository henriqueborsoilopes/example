import React, { useState, useEffect } from 'react';
import './App.css';
import { allUsers } from "./Api"
import { UserAtr } from "./types"
import { toast } from 'react-toastify';

export default function App() {

  const [ user, setUser ] = useState<UserAtr[]>([]);

  useEffect(() => {
    allUsers()
    .then(response => setUser(response.data))
        .catch( () => {
          toast.warning('Erro ao listar users');
        })
  }, [])
  console.log(user);

  return (
    <div>
    </div>
  );
}
