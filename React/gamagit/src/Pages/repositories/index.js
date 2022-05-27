import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

//export default function Repositories(){
  //  return(
    //    <h1>Repositories</h1>
    //)
//}

//export default Repositories;

//ou posso fazer da seguinte forma:
//export default function Repositories(){
  //  return(
    //    <h1>Repositories</h1>
    //)
//}


export default function Repositories(){
  const navigate = useNavigate()
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName')
    console.log(repositoriesName)
    if (repositoriesName !== null) { //não entra se houver algo dentro da variável que não seja false ( 0, [], null e undefined)
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear()
      } else {
        navigate ("/")
      }
    }, [navigate]);
  
    return(
    <S.Container>
    <S.Title>Repositórios</S.Title>
    <S.List>
      { repositories.map((repository, index) => 
      <S.ListItem key={index}>{repository}</S.ListItem>)}

{/*<S.ListItem> Repositório {repository}</S.ListItem>*/}
      
    </S.List>
    <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
   ) 
  }
