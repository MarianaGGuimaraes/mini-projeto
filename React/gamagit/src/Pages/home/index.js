import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import {useNavigate} from 'react-router-dom';

//useState para citar e modificar estados

export default function App()  {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data; //retorna um objeto com as informações solicitadas
      
      const repositoriesName =[];
      repositories.map((repository) => {
        return repositoriesName.push(repository.name); //itera dentro de repositories
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      setErro(false)
      navigate('/repositories') //nos envia para repositories
    })
      .catch(err => {
      setErro(true);
      });
  }

  return (
   <S.HomeContainer>
    <S.Content>
     <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} 
                  onChange= {e => {setUsuario(e.target.value); setErro(false) }} />
     <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
     <p></p>
    </S.Content>

    {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente!</S.ErrorMsg>: ''}
    {/*se erro for V me exiba ;... caso contrário não exiba nada*/}
  </S.HomeContainer>
 );
}
