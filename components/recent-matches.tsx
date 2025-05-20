import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const matches = [
  {
    id: "MATCH-001",
    investor: "Sequoia Capital",
    dealId: "DEAL-1234",
    company: "TechSolutions Inc.",
    matchScore: 92,
    status: "Contacted",
    date: "2023-05-15",
  },
  {
    id: "MATCH-002",
    investor: "Andreessen Horowitz",
    dealId: "DEAL-1235",
    company: "HealthAI Systems",
    matchScore: 88,
    status: "Meeting Scheduled",
    date: "2023-05-14",
  },
  {
    id: "MATCH-003",
    investor: "Accel Partners",
    dealId: "DEAL-1236",
    company: "FinanceFlow",
    matchScore: 85,
    status: "Interested",
    date: "2023-05-13",
  },
  {
    id: "MATCH-004",
    investor: "Benchmark",
    dealId: "DEAL-1237",
    company: "RetailConnect",
    matchScore: 79,
    status: "Reviewing",
    date: "2023-05-12",
  },
  {
    id: "MATCH-005",
    investor: "Lightspeed",
    dealId: "DEAL-1238",
    company: "DataInsights",
    matchScore: 76,
    status: "Contacted",
    date: "2023-05-11",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Meeting Scheduled":
      return "bg-green-50 text-green-700 border-green-200"
    case "Interested":
      return "bg-blue-50 text-blue-700 border-blue-200"
    case "Contacted":
      return "bg-yellow-50 text-yellow-700 border-yellow-200"
    case "Reviewing":
      return "bg-purple-50 text-purple-700 border-purple-200"
    default:
      return "bg-gray-50 text-gray-700 border-gray-200"
  }
}

export default function RecentMatches() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Investor</TableHead>
          <TableHead>Deal</TableHead>
          <TableHead>Match Score</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {matches.map((match) => (
          <TableRow key={match.id} className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 hover:rotate-[0.5deg] hover:bg-gray-50/50">
            <TableCell className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`/abstract-geometric-shapes.png?height=32&width=32&query=${match.investor} logo`} />
                <AvatarFallback>{match.investor.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <span>{match.investor}</span>
            </TableCell>
            <TableCell>{match.company}</TableCell>
            <TableCell>
              <Badge variant="outline" className="bg-gray-50 border-gray-200">
                {match.matchScore}%
              </Badge>
            </TableCell>
            <TableCell>
              <Badge variant="outline" className={getStatusColor(match.status)}>
                {match.status}
              </Badge>
            </TableCell>
            <TableCell>{match.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
