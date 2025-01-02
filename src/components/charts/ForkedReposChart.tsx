import { Repository } from "@/types";
import { mostForkedRepos } from "@/utils";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";

function ForkedReposChart({ repositories }: { repositories: Repository[] }) {
  const forkedReposArray = mostForkedRepos(repositories);
  console.log(forkedReposArray);

  const chartConfig = {
    repo: {
      label: "Repository",
      color: "#f2f2f2",
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h3 className="mb-4">Forked Repos</h3>
      <ChartContainer config={chartConfig} className='w-full h-100'>
        <BarChart accessibilityLayer data={forkedReposArray}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='repo'
            tickLine={true}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 10)}
          />
          <YAxis dataKey='count' />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey='count' fill="#323232" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

export default ForkedReposChart;
