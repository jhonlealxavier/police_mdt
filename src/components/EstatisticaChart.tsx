"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "Jan", value: 18 },
  { month: "Fev", value: 7 },
  { month: "Mar", value: 20 },
  { month: "Abr", value: 13 },
  { month: "Mai", value: 7 },
  { month: "Jun", value: 2 },
  { month: "Jul", value: 18 },
  { month: "Ago", value: 7 },
  { month: "Set", value: 15 },
  { month: "Out", value: 5 },
];

const chartConfig = {
  value: {
    label: "Quantidade",
    color: "hsl(var(--primary))",
  },
};

export function EstatisticasChart() {
  return (
    <Card className="bg-card border-border border rounded-lg ">
      <CardHeader>
        <CardTitle>Gráfico de Estatísticas</CardTitle>
      </CardHeader>

      <CardContent className="h-[180px] p-4">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart data={data}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#FF204E" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
