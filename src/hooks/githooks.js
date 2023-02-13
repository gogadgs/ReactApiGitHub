import {useContext} from 'react';
import { GitHubContext  } from '../providers/gitProvider';

const useGithub = ()=>{
    const {gitHubState,getUser,getUserRepos,getUserReposStarred} = useContext(GitHubContext);
    return {gitHubState,getUser,getUserRepos,getUserReposStarred};

}






export default useGithub;
