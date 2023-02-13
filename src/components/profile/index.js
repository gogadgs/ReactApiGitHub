import React from 'react';
import * as S from './style';
import useGitHub from '../../hooks/githooks';


const Profile = () => {

  const {gitHubState}  = useGitHub();


 


    return (
       <S.Conteudo>
        <S.ConteudoImg src={gitHubState.user.avatar} 
        alt="imagem do usuário"/>
    <S.ConteudoInfoUser>
        <div>
        <h1>{gitHubState.user.name}</h1>
        <S.UserNameGeneric>
            <h3>Empresa:</h3>
            <span>{gitHubState.user.company}</span> 
        </S.UserNameGeneric>
        <S.UserNameGeneric>
            <h3>Localização:</h3>
            <span>{gitHubState.user.location}</span> 
        </S.UserNameGeneric>
        <S.UserNameGeneric>
            <h3>Site/Blog:</h3>
            <a href={gitHubState.user.blog} target="_blank" rel="noreferrer">{gitHubState.user.blog}</a>
        </S.UserNameGeneric>
        <S.UserName>
            <h3>Usuário:</h3>
            <a href={gitHubState.user.html_url} target="_blank" rel="noreferrer">{gitHubState.user.login}</a>
        </S.UserName>
    </div>
        <S.Status>
        <div>
          <div>
          <h4>Seguidores</h4>
          <span>{gitHubState.user.followers}</span>
          </div>
        </div>
        <div>
          <div>
          <h4>Favoritos</h4>
          <span>{gitHubState.user.public_gists}</span>
          </div>
        </div>
        <div>
          <div>
          <h4>Seguindo</h4>
          <span>{gitHubState.user.following}</span>
          </div>
        </div>
        <div>
          <div>
          <h4>Repositorios</h4>
          <span>{gitHubState.user.public_repos}</span>
          </div>
        </div>
       
        </S.Status>
        </S.ConteudoInfoUser>
       </S.Conteudo>
    );
}

export default Profile;
