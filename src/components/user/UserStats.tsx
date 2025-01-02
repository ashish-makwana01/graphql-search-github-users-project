import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";

type StatsProps = {
  title: string;
  count: number;
};

function UserStats({ title, count }: StatsProps) {
  return (
    <Card>
     <div className="flex flex-row justify-between items-center p-6">
      <CardTitle className="capitalize text-lg tracking-wide">{title}</CardTitle>
      <CardDescription className="font-medium text-base">{count}</CardDescription>
     </div>
    </Card>
  );
}

export default UserStats;
