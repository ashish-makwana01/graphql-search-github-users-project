import { Repository } from "@/types"
import { mostStarredRepos } from "@/utils"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";


function StarReposChart({repositories}: {repositories: Repository[]}) {
    
 const starredRepoArray = mostStarredRepos(repositories)
  
 const chartConfig = {
  repo: {
    label: 'Repository',
    color: '#f2f2f2'
  }
 } satisfies ChartConfig; 

  return (
    <div>
      <h3 className="mb-6">Most Starred Repos</h3>
      <ChartContainer config={chartConfig} className="w-full h-96">
      <BarChart accessibilityLayer data={starredRepoArray}>
      <XAxis dataKey='repo' tickLine={false} tickMargin={10} tickFormatter={(value)=> value.slice(0, 10)} />
      <YAxis dataKey='stars' />
      <CartesianGrid vertical={false} />
      <ChartTooltip content={<ChartTooltipContent />}/>
      <Bar dataKey='stars' fill="#6671e5" />
      </BarChart>
      </ChartContainer>
    </div>
  )
}

export default StarReposChart;