import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Building, LineChart, PieChart, Users } from "lucide-react"
import DealMatchingMetrics from "@/components/deal-matching-metrics"
import ActiveDealsTable from "@/components/active-deals-table"
import InvestorCriteriaChart from "@/components/investor-criteria-chart"
import RecentMatches from "@/components/recent-matches"

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">BankerAI Dashboard</h1>
          <p className="text-gray-500">Monitor your deals, matches, and performance metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Import Data</Button>
          <Button>New Deal</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="investmatch">InvestMatch</TabsTrigger>
          <TabsTrigger value="bankerai">BankerAI</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
                <Building className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-gray-500">+2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Potential Matches</CardTitle>
                <Users className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-gray-500">+43 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Match Rate</CardTitle>
                <PieChart className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68%</div>
                <p className="text-xs text-gray-500">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
                <LineChart className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">124 hrs</div>
                <p className="text-xs text-gray-500">+28 hrs from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Deal Matching Metrics</CardTitle>
                <CardDescription>Performance over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <DealMatchingMetrics />
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Investor Criteria Distribution</CardTitle>
                <CardDescription>Top investment criteria by category</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <InvestorCriteriaChart />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Card className="col-span-1">
              <CardHeader className="flex flex-row items-center justify-between transition-all duration-300 hover:bg-gray-50/50 hover:shadow-md">
                <div>
                  <CardTitle className="transition-all duration-300 hover:scale-105">Active Deals</CardTitle>
                  <CardDescription className="transition-all duration-300 hover:translate-x-1">Your current deal pipeline</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-1 transition-all duration-300 hover:scale-110 hover:bg-gray-100">
                  <span>View All</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardHeader>
              <CardContent className="transition-all duration-300 hover:bg-gray-50/50">
                <ActiveDealsTable />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Matches</CardTitle>
                  <CardDescription>Latest investor matches for your deals</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <span>View All</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <RecentMatches />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="investmatch">
          <Card>
            <CardHeader>
              <CardTitle>InvestMatch</CardTitle>
              <CardDescription>Match your deals with the right investors based on their criteria</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                This tab would contain the InvestMatch specific features and metrics.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bankerai">
          <Card>
            <CardHeader>
              <CardTitle>BankerAI</CardTitle>
              <CardDescription>
                Automated financial modeling, valuation analysis, and document preparation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">This tab would contain the BankerAI specific features and tools.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed performance metrics and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">This tab would contain detailed analytics and reporting features.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
