import React from 'react';
import * as S from './style';

const RepositoriosItems = ({name,linkToRepo,fullName}) => {
    return (
        <S.Conteudo>
        <S.TituloRepositorio>{name}</S.TituloRepositorio>
        <S.NomeRepositorio>full-name:</S.NomeRepositorio>
        <S.RepositorioLink href={linkToRepo} target="_blank" rel="noreferrer">{fullName}</S.RepositorioLink>
        
        
        </S.Conteudo>
    );
}

export default RepositoriosItems;
