import { Repository } from "@/types"
import { mostStarredRepos } from "@/utils"


function StarReposChart({repositories}: {repositories: Repository[]}) {
    
 const starredRepoArray = mostStarredRepos(repositories)
  
  return (
    <div>StarReposChart</div>
  )
}

export default StarReposChart