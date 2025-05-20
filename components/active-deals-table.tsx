import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const deals = [
  {
    id: "DEAL-1234",
    company: "TechSolutions Inc.",
    sector: "SaaS",
    stage: "Series B",
    valuation: "$45M",
    status: "Active",
    matches: 12,
  },
  {
    id: "DEAL-1235",
    company: "HealthAI Systems",
    sector: "Healthcare",
    stage: "Series A",
    valuation: "$22M",
    status: "Active",
    matches: 8,
  },
  {
    id: "DEAL-1236",
    company: "FinanceFlow",
    sector: "FinTech",
    stage: "Seed",
    valuation: "$8M",
    status: "Active",
    matches: 15,
  },
  {
    id: "DEAL-1237",
    company: "RetailConnect",
    sector: "E-commerce",
    stage: "Series C",
    valuation: "$120M",
    status: "Active",
    matches: 6,
  },
  {
    id: "DEAL-1238",
    company: "DataInsights",
    sector: "Analytics",
    stage: "Series A",
    valuation: "$18M",
    status: "Active",
    matches: 10,
  },
]

export default function ActiveDealsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Deal ID</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Sector</TableHead>
          <TableHead>Stage</TableHead>
          <TableHead>Valuation</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Matches</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deals.map((deal) => (
          <TableRow key={deal.id} className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 hover:rotate-[0.5deg] hover:bg-gray-50/50">
            <TableCell className="font-medium">{deal.id}</TableCell>
            <TableCell>{deal.company}</TableCell>
            <TableCell>{deal.sector}</TableCell>
            <TableCell>{deal.stage}</TableCell>
            <TableCell>{deal.valuation}</TableCell>
            <TableCell>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                {deal.status}
              </Badge>
            </TableCell>
            <TableCell>{deal.matches}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
