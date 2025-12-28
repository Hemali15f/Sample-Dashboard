"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Star, TrendingUp, Filter, Download, Share2, ChevronDown, X } from "lucide-react"
import { SalesDynamicChart } from "@/components/charts/sales-dynamic-chart"
import { PlatformStats } from "@/components/platform-stats"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DashboardPage() {
  const [selectedMember, setSelectedMember] = useState<any>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("revenue")
  const [timeframe, setTimeframe] = useState("current")

  const teamMembers = [
    {
      name: "Armin Arlert",
      amount: "$209,633",
      percentage: "39.63%",
      deals: 118,
      kpi: 0.84,
      color: "bg-brand-blue",
    },
    {
      name: "Eren Yeager",
      amount: "$156,841",
      percentage: "29.65%",
      deals: 103,
      kpi: 0.89,
      color: "bg-brand-red",
    },
    {
      name: "Mikasa Ackerman",
      amount: "$117,115",
      percentage: "22.14%",
      deals: 84,
      kpi: 0.79,
      color: "bg-brand-violet",
    },
    {
      name: "Levi Ackerman",
      amount: "$45,386",
      percentage: "8.58%",
      deals: 42,
      kpi: 0.92,
      color: "bg-brand-green",
    },
  ]

  const tableData = [
    {
      name: "Armin Arlert",
      sales: 441,
      revenue: "$209,633",
      leads: 118,
      kpi: 0.84,
      wl: "31% / 12",
      performance: 29,
      color: "bg-brand-blue",
    },
    {
      name: "Mikasa Ackerman",
      sales: 574,
      revenue: "$156,841",
      leads: 103,
      kpi: 0.89,
      wl: "39% / 21",
      performance: 33,
      color: "bg-brand-violet",
    },
    {
      name: "Eren Yeager",
      sales: 122,
      revenue: "$117,115",
      leads: 84,
      kpi: 0.79,
      wl: "32% / 6",
      performance: 15,
      color: "bg-brand-red",
    },
    {
      name: "Levi Ackerman",
      sales: 98,
      revenue: "$45,386",
      leads: 42,
      kpi: 0.92,
      wl: "45% / 4",
      performance: 42,
      color: "bg-brand-green",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">New report</h1>
          <p className="text-sm text-gray-500 mt-1">Jan 1 - Dec 31, 2025</p>
        </div>
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => setSortBy("revenue")}>Sort by Revenue</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("sales")}>Sort by Sales</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("kpi")}>Sort by KPI</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowFilters(!showFilters)}>Advanced Filters</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Jan 1 - Dec 31, 2025</SelectItem>
              <SelectItem value="previous">Jan 1 - Dec 31, 2024</SelectItem>
              <SelectItem value="q1">Q1 2025</SelectItem>
              <SelectItem value="q2">Q2 2025</SelectItem>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share2 className="h-4 w-4 mr-2" />
                Share Link
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {showFilters && (
        <Card className="p-4 bg-gray-50 border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Advanced Filters</h3>
            <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select team member" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Members</SelectItem>
                <SelectItem value="armin">Armin Arlert</SelectItem>
                <SelectItem value="eren">Eren Yeager</SelectItem>
                <SelectItem value="mikasa">Mikasa Ackerman</SelectItem>
                <SelectItem value="levi">Levi Ackerman</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Performance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Performance</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Revenue range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ranges</SelectItem>
                <SelectItem value="high">$200k+</SelectItem>
                <SelectItem value="medium">$100k - $200k</SelectItem>
                <SelectItem value="low">Under $100k</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
      )}

      {/* Team Members */}
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-2 border-dashed border-gray-300 bg-white text-gray-400 hover:border-brand-violet hover:text-brand-violet hover:bg-violet-50 transition-all"
        >
          +
        </Button>
        {teamMembers.map((member, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedMember(member)}
            className="transition-all hover:scale-110 active:scale-95 group relative"
          >
            <Avatar className="h-10 w-10 cursor-pointer ring-2 ring-white shadow-md group-hover:ring-4 group-hover:ring-brand-violet/20 transition-all">
              <AvatarFallback className={`${member.color} text-white font-black text-sm`}>
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-green border-2 border-white rounded-full" />
          </button>
        ))}
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-8 overflow-hidden relative border-none shadow-xl bg-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-violet/10 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/10 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />

          <div className="space-y-6 relative">
            <div>
              <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Total Revenue</h2>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-6xl font-black text-gray-900 tracking-tighter">$528,976</span>
                <span className="text-3xl text-gray-300 font-medium">.82</span>
                <Badge className="bg-brand-blue text-white hover:bg-brand-blue/90 shadow-lg px-3 py-1.5 rounded-full text-sm font-bold ml-4">
                  <TrendingUp className="h-4 w-4 mr-1.5" />
                  7.9%
                </Badge>
              </div>
              <p className="text-sm text-gray-400 mt-2 font-medium">vs prev. $501,641.73 (Full Year 2025)</p>
            </div>

            {/* Member Performance - Playful multi-color segments */}
            <div className="grid grid-cols-4 gap-4 pt-6">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-200 hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <Avatar className="h-10 w-10 shadow-sm transition-transform group-hover:rotate-12">
                    <AvatarFallback className={`${member.color} text-white text-xs font-black`}>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-black text-gray-900 leading-none">{member.amount}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black mt-1">
                      {member.percentage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Quick Stats - Vibrant Colors */}
        <div className="space-y-4">
          <Card className="p-5 bg-brand-black text-white cursor-pointer hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start justify-between relative z-10">
              <div>
                <p className="text-xs font-black text-gray-500 uppercase tracking-widest">Best deal</p>
                <p className="text-2xl font-black mt-1 group-hover:text-brand-yellow transition-colors">$42,300</p>
                <p className="text-xs font-bold text-gray-500 mt-1">Rolls Royce</p>
              </div>
              <Star className="h-6 w-6 text-brand-yellow fill-brand-yellow animate-bounce" />
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-5 cursor-pointer hover:shadow-2xl border-none bg-brand-yellow/5 hover:bg-brand-yellow/10 transition-all border-l-4 border-l-brand-yellow">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Top sales</p>
              <p className="text-4xl font-black text-gray-900 mt-2">72</p>
              <div className="flex items-center gap-2 mt-4">
                <Avatar className="h-6 w-6 border-2 border-white shadow-sm">
                  <AvatarFallback className="bg-brand-violet text-white text-[10px] font-black">M</AvatarFallback>
                </Avatar>
                <span className="text-xs font-black text-gray-600">Mikasa</span>
              </div>
            </Card>

            <Card className="p-5 border-none bg-brand-orange/5 hover:bg-brand-orange/10 transition-all border-l-4 border-l-brand-orange cursor-pointer">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Deals</p>
              <p className="text-4xl font-black text-gray-900 mt-2">423</p>
              <div className="w-full bg-gray-200 h-1.5 rounded-full mt-6 overflow-hidden">
                <div className="bg-brand-orange h-full w-[65%]" />
              </div>
            </Card>

            <Card className="p-5 border-none bg-brand-blue/5 hover:bg-brand-blue/10 transition-all border-l-4 border-l-brand-blue cursor-pointer">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Value</p>
              <p className="text-3xl font-black text-gray-900 mt-2">$288k</p>
              <div className="flex items-center gap-1 mt-2 text-brand-blue">
                <ArrowUpRight className="h-4 w-4 stroke-[3px]" />
                <span className="text-sm font-black">7.9%</span>
              </div>
            </Card>

            <Card className="p-5 border-none bg-brand-green/5 hover:bg-brand-green/10 transition-all border-l-4 border-l-brand-green cursor-pointer">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Win rate</p>
              <p className="text-4xl font-black text-gray-900 mt-2">61%</p>
              <Badge variant="outline" className="mt-4 border-brand-green text-brand-green font-black rounded-full">
                Target Met
              </Badge>
            </Card>
          </div>
        </div>
      </div>

      {/* Performance Table - High Density with Creative Styling */}
      <Card className="p-0 overflow-hidden border-none shadow-2xl bg-white">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div>
            <h3 className="text-xl font-black text-gray-900">Team Performance</h3>
            <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">Live Ranking 2025</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="font-bold border-2 rounded-xl bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
            <Button className="bg-brand-violet hover:bg-brand-violet/90 text-white font-black rounded-xl shadow-lg shadow-brand-violet/20">
              Generate Report
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/30">
                <th className="text-left py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                  Member
                </th>
                <th className="text-left py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                  Revenue
                </th>
                <th className="text-left py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                  Leads
                </th>
                <th className="text-left py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                  KPI Score
                </th>
                <th className="text-left py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                  Trend
                </th>
                <th className="text-right py-4 px-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr
                  key={idx}
                  onClick={() => setSelectedMember({ ...row, avatar: null })}
                  className="group hover:bg-violet-50/50 cursor-pointer transition-colors border-b border-gray-50 last:border-0"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10 border-2 border-white shadow-md group-hover:scale-110 transition-transform">
                        <AvatarFallback className={`${row.color} text-white text-xs font-black`}>
                          {row.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-black text-gray-900 group-hover:text-brand-violet transition-colors">
                          {row.name}
                        </p>
                        <p className="text-xs font-bold text-gray-400">{row.sales} Sales</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-black text-gray-900">{row.revenue}</span>
                  </td>
                  <td className="py-4 px-6">
                    <Badge variant="secondary" className="font-bold bg-gray-100 text-gray-600 rounded-md">
                      {row.leads}
                    </Badge>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black text-gray-900">{row.kpi}</span>
                      <div className="w-16 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div className={`h-full ${row.color}`} style={{ width: `${row.kpi * 100}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-black text-gray-900">{row.wl}</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className={`w-3 h-1 rounded-full ${i <= 3 ? row.color : "bg-gray-200"}`} />
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Badge
                      className={`${row.color} text-white font-black px-3 py-1 rounded-full shadow-lg opacity-80 group-hover:opacity-100 transition-opacity`}
                    >
                      {row.performance}%
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlatformStats />
        <SalesDynamicChart />
      </div>

      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Team Member Details</DialogTitle>
            <DialogDescription>Detailed performance metrics and information</DialogDescription>
          </DialogHeader>
          {selectedMember && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={selectedMember.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-xl font-bold bg-indigo-600 text-white">
                    {selectedMember.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedMember.name}</h3>
                  <p className="text-gray-600">Senior Sales Manager</p>
                  <div className="flex gap-2 mt-2">
                    <Badge className="bg-green-500">Active</Badge>
                    <Badge variant="outline">Top Performer</Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 bg-indigo-50 border-indigo-200">
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{selectedMember.amount}</p>
                </Card>
                <Card className="p-4">
                  <p className="text-sm text-gray-600">Deals Closed</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {selectedMember.deals || selectedMember.sales}
                  </p>
                </Card>
                <Card className="p-4">
                  <p className="text-sm text-gray-600">KPI Score</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{selectedMember.kpi}</p>
                </Card>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Recent Activity</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Closed deal with Rolls Royce</span>
                    <span className="text-sm font-medium text-green-600">+$45,200</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Follow-up meeting scheduled</span>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Sent proposal to Tech Corp</span>
                    <span className="text-sm text-gray-500">Yesterday</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-indigo-500 hover:bg-indigo-600">Send Message</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  View Full Profile
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
