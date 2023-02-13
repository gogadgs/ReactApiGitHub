
import React, { useEffect,useState } from 'react';
import * as S from './style';
import RepositoriosItems from '../repositorios-items';
import useGithub from './../../hooks/githooks';


const Repositorios = () =>{
        const {gitHubState,getUserRepos,getUserReposStarred} = useGithub();
        const [hasUserForSearchRepos, setHasUserForSearchRepos,] = useState();




        useEffect(() => {

            if(!!gitHubState.user.login){
               
                getUserRepos(gitHubState.user.login);
                getUserReposStarred(gitHubState.user.login);
            }
            setHasUserForSearchRepos(!!gitHubState.repositories)
             // eslint-disable-next-line react-hooks/exhaustive-deps
             }, [gitHubState.user.login]);

  

    return(
        <>
        
        {hasUserForSearchRepos ? (
        <S.ConteudoTabs 
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        >
            <S.ConteudoTabList>
                <S.ConteudoTab>Repositorios</S.ConteudoTab>
                <S.ConteudoTab>Em destaque</S.ConteudoTab>
            </S.ConteudoTabList>
            <S.ConteudoTabPanel>
                <S.ListaEstilizadaRepositorios>
                {gitHubState.repositories.map((item)=>(
                    <RepositoriosItems
                    key={item.id}
                    name={item.name}
                    linkToRepo={item.html_url}
                     fullName={item.full_name}/>
                ))}
                </S.ListaEstilizadaRepositorios>
                
            
            </S.ConteudoTabPanel>
            <S.ConteudoTabPanel>
            <S.ListaEstilizadaRepositorios>
                {gitHubState.starred.map((item)=>(
                    <RepositoriosItems
                    key={item.id}
                    name={item.name}
                    linkToRepo={item.html_url}
                     fullName={item.full_name}/>
                ))}
                </S.ListaEstilizadaRepositorios>
                
            
            </S.ConteudoTabPanel>
            
            
            
            


        </S.ConteudoTabs>
            ):( <> </> )       }
        </>
    )

}

export default Repositorios;