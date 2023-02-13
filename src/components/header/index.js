import React from 'react';
import * as S from './style';
import useGithub from './../../hooks/githooks';
import { useState } from 'react';


const Header = () => {

    const {getUser} = useGithub();
    const [usernameForSearch,setUserNameForSearch] = useState();

    const submitGetUser = ()=>{
        if(!usernameForSearch) return;
         return getUser(usernameForSearch);
    }
    
    
    return (
        <header>
            <S.Input>
                <input type="text"
                 placeholder="pesquise por usuário no github"
                 onChange={(event)=>{setUserNameForSearch(event.target.value)}}
                 />
                <button type="submit" onClick={submitGetUser}><span>PESQUISAR</span></button>
            </S.Input>
        </header>
    );
}

export default Header;
