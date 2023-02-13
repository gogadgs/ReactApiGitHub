import React from 'react';
import { ResetCss } from '../global/reset';
import GithubProviders from '../providers/gitProvider'
import App from '../App';

const Provider = () => {
    return (
        <main>
        <GithubProviders>
        <ResetCss/>
        <App/>
            
        </GithubProviders>
       
        </main>
    );
}

export default Provider;
