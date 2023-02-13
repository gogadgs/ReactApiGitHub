import React,{createContext , useState} from 'react';
import api from './../services/api';
import { useCallback } from 'react';

export const GitHubContext = createContext({
    loading:false,
    user:{},
    repositories:[],
    starred:[],
})


const GithubProviders = ({children}) => {

    const [gitHubState,setGitHubState] = useState({
        hasUser :false,
        
        loading:false,
        
        user:{
            id:undefined,
            avatar:undefined,
            login:undefined,
            name:undefined,
            html_url:undefined,
            blog:undefined,
            location:undefined,
            company:undefined,
            followers:0,
            following:0,
            public_gists:0,
            public_repos:0,


        },
        repositories:[],
        starred:[],
    })

    const getUser =  (userName)=>{

        setGitHubState((prevState)=>({
            ...prevState,
            
            loading:!prevState.loading
        }));



        api.get(`users/${userName}`).then(({data})=>{
            setGitHubState(prevState=>({
                ...prevState,
                hasUser:true,
                 user:{
                id:data.id,
                avatar:data.avatar_url,
                login:data.login,
                name:data.name,
                html_url:data.html_url,
                blog:data.blog,
                location:data.location,
                company:data.company,
                followers:data.followers,
                following:data.following,
                public_gists:data.public_gists,
                public_repos:data.public_repos,
            },
     }));
    }).finally(()=>{
        setGitHubState((prevState)=>({
            ...prevState,
            loading:!prevState.loading
        }));
    })
}
    const getUserRepos =  (username)=>{

       



        api.get(`users/${username}/repos`).then(({data})=>{
            
            setGitHubState(prevState=>({
                ...prevState,
                repositories:data,
     }));
    }).finally(()=>{
        setGitHubState((prevState)=>({
            ...prevState,
            loading:!prevState.loading
        }));
    })
}
    const getUserReposStarred =  (username)=>{

       



        api.get(`users/${username}/starred`).then(({data})=>{
            console.log(data)
            setGitHubState(prevState=>({
                ...prevState,
                starred:data,
     }));
    }).finally(()=>{
        setGitHubState((prevState)=>({
            ...prevState,
            loading:!prevState.loading
        }));
    })
}

    const contextValue = {
        gitHubState,
        getUser:useCallback((username)=>getUser(username),[]),
        getUserRepos:useCallback((username)=>getUserRepos(username),[]),
        getUserReposStarred:useCallback((username)=>getUserReposStarred(username),[]),
    }
    return (
        <GitHubContext.Provider value={contextValue}>
            {children}
        </GitHubContext.Provider>
    );
}

export default GithubProviders;
