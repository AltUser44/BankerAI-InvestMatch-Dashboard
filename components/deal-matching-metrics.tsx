"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Week 1", matches: 12, meetings: 5 },
  { name: "Week 2", matches: 18, meetings: 8 },
  { name: "Week 3", matches: 29, meetings: 15 },
  { name: "Week 4", matches: 32, meetings: 20 },
]

export default function DealMatchingMetrics() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip />
        <Bar dataKey="matches" name="Potential Matches" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="meetings" name="Meetings Scheduled" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
