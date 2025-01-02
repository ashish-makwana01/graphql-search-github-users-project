import { Repository } from "./types";



export const mostForkedRepos = (repositories: Repository[]):{repo: string, count: number}[] => {

if(repositories.length === 0) {return []}

const forkedRepos = repositories.map((repo) => {

return {repo: repo.name, count: repo.forkCount}

}).sort((a, b) => b.count - a.count).slice(0, 5)

return forkedRepos; 

}