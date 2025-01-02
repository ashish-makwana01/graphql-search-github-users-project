import { Repository } from "@/types"
import { popularLanguageRepos } from "@/utils"


function LanguageReposChart({repositories}: {repositories: Repository[]}) {
   
  const languageRepoArray = popularLanguageRepos(repositories)
  
  console.log(languageRepoArray);
  
  return (
    <div>LanguageReposChart</div>
  )
}

export default LanguageReposChart