import { Repository } from "@/types"
import { popularLanguageRepos } from "@/utils"
import { Bar, XAxis, YAxis, BarChart, CartesianGrid } from "recharts";
import { ChartContainer, ChartConfig, ChartTooltip, ChartTooltipContent } from "../ui/chart";

function LanguageReposChart({repositories}: {repositories: Repository[]}) {
   
  const languageRepoArray = popularLanguageRepos(repositories)
  
  console.log(languageRepoArray);
  
  const chartConfig = {
    language: {
      label: 'Language',
      color: '#f2f2f2'
    }
  } satisfies ChartConfig; 

  return (
    <div>
      <h3 className="mb-6">Popular Languages</h3>
      <ChartContainer config={chartConfig} className="w-full h-96" >
      <BarChart accessibilityLayer data={languageRepoArray}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey='language' tickLine={false} tickMargin={10} axisLine={false} />
      <YAxis dataKey='count' />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Bar dataKey='count' fill="#6671e5" />
      </BarChart>
      </ChartContainer>
    </div>
  )
}

export default LanguageReposChart