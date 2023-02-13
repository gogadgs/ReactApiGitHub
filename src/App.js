import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile';
import NadaProcurado from './NadaProcurado'
import Repositorios from './components/repositorios/index';

import useGithub from './hooks/githooks';

const  App = ()=> {
  const {gitHubState} = useGithub();
  return (
        <Layout>
          {gitHubState.hasUser ? 
              <>
              {gitHubState.loading ? (
              <p>Carregando...</p>
              ):(
                <>
                <Profile/>
                <Repositorios/>
                </>
      
              )}
              </>:
              <NadaProcurado/>
              
              }
          
      
            </Layout>
        
      )
}

export default App;
