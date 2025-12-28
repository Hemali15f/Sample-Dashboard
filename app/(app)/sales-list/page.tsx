"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { TrendingUp, Search, Filter, Download, MoreVertical, Plus, DollarSign, Calendar, User } from "lucide-react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function SalesListPage() {
  const [selectedSale, setSelectedSale] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const salesData = [
    {
      id: 1,
      company: "Rolls Royce", // Updated from Rolf Inc.
      contact: "Sarah Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      amount: "$45,200",
      status: "Closed",
      probability: 100,
      closeDate: "2025-11-28", // Updated year to 2025
      stage: "Won",
      owner: "Armin A.",
      statusColor: "green",
    },
    {
      id: 2,
      company: "Tech Corp",
      contact: "Michael Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      amount: "$89,500",
      status: "Negotiation",
      probability: 75,
      closeDate: "2025-12-15",
      stage: "Proposal Sent",
      owner: "Eren Y.",
      statusColor: "blue",
    },
    {
      id: 3,
      company: "StartupXYZ",
      contact: "Emily Davis",
      avatar: "/placeholder.svg?height=32&width=32",
      amount: "$23,400",
      status: "Closed",
      probability: 100,
      closeDate: "2025-11-20",
      stage: "Won",
      owner: "Mikasa A.",
      statusColor: "green",
    },
    {
      id: 4,
      company: "Enterprise Solutions",
      contact: "David Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
      amount: "$156,000",
      status: "Qualified",
      probability: 60,
      closeDate: "2025-01-10",
      stage: "Discovery",
      owner: "Armin A.",
      statusColor: "yellow",
    },
    {
      id: 5,
      company: "Global Industries",
      contact: "Lisa Anderson",
      avatar: "/placeholder.svg?height=32&width=32",
      amount: "$67,800",
      status: "Proposal",
      probability: 50,
      closeDate: "2025-12-20",
      stage: "Proposal Pending",
      owner: "Eren Y.",
      statusColor: "purple",
    },
    {
      id: 6,
      company: "Digital Dynamics",
      contact: "Robert Taylor",
      avatar: "/placeholder.svg?height=32&width=32",
      amount: "$34,500",
      status: "Lost",
      probability: 0,
      closeDate: "2025-11-15",
      stage: "Lost",
      owner: "Mikasa A.",
      statusColor: "red",
    },
  ]

  const filteredSales = salesData.filter((sale) => {
    const matchesSearch =
      sale.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sale.contact.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "All" || sale.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalValue = filteredSales.reduce((sum, sale) => {
    const amount = Number.parseFloat(sale.amount.replace(/[$,]/g, ""))
    return sum + amount
  }, 0)

  const statusColors: Record<string, string> = {
    green: "bg-green-100 text-green-700 border-green-300",
    blue: "bg-blue-100 text-blue-700 border-blue-300",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-300",
    purple: "bg-purple-100 text-purple-700 border-purple-300",
    red: "bg-red-100 text-red-700 border-red-300",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sales Pipeline</h1>
          <p className="text-sm text-gray-500 mt-1">Track and manage your sales opportunities</p>
        </div>
        <Button className="bg-rose-500 hover:bg-rose-600">
          <Plus className="h-4 w-4 mr-2" />
          New Sale
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-rose-500 to-rose-600 text-white">
          <p className="text-sm opacity-90 mb-1">Total Value</p>
          <p className="text-3xl font-bold">${(totalValue / 1000).toFixed(1)}k</p>
          <p className="text-xs opacity-75 mt-1">Across {filteredSales.length} deals</p>
        </Card>
        <Card className="p-4 cursor-pointer hover:shadow-lg transition-all">
          <p className="text-sm text-gray-600 mb-1">Won Deals</p>
          <p className="text-3xl font-bold text-gray-900">
            {filteredSales.filter((s) => s.status === "Closed").length}
          </p>
          <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +12% this month
          </p>
        </Card>
        <Card className="p-4 cursor-pointer hover:shadow-lg transition-all">
          <p className="text-sm text-gray-600 mb-1">In Progress</p>
          <p className="text-3xl font-bold text-gray-900">
            {filteredSales.filter((s) => s.status !== "Closed" && s.status !== "Lost").length}
          </p>
          <p className="text-xs text-gray-500 mt-1">Active opportunities</p>
        </Card>
        <Card className="p-4 cursor-pointer hover:shadow-lg transition-all">
          <p className="text-sm text-gray-600 mb-1">Avg Deal Size</p>
          <p className="text-3xl font-bold text-gray-900">${(totalValue / filteredSales.length / 1000).toFixed(1)}k</p>
          <p className="text-xs text-gray-500 mt-1">Per opportunity</p>
        </Card>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by company or contact..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-transparent"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              {statusFilter}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setStatusFilter("All")}>All Status</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("Closed")}>Closed</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("Negotiation")}>Negotiation</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("Qualified")}>Qualified</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("Proposal")}>Proposal</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Company</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Contact</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Amount</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Probability</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Close Date</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Owner</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700"></th>
              </tr>
            </thead>
            <tbody>
              {filteredSales.map((sale) => (
                <tr
                  key={sale.id}
                  onClick={() => setSelectedSale(sale)}
                  className="border-b border-gray-100 hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <td className="py-4 px-6 text-sm">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 rounded-lg">
                        <AvatarFallback className="bg-slate-900 text-white font-bold rounded-lg">
                          {sale.company[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-semibold text-gray-900">{sale.company}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={sale.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-blue-500 text-white font-bold text-xs">
                          {sale.contact[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-700">{sale.contact}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-base font-semibold text-gray-900">{sale.amount}</span>
                  </td>
                  <td className="py-4 px-6">
                    <Badge className={statusColors[sale.statusColor]}>{sale.status}</Badge>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden max-w-[80px]">
                        <div
                          className="h-full bg-rose-500 rounded-full transition-all"
                          style={{ width: `${sale.probability}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{sale.probability}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      {sale.closeDate}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      {sale.owner}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Sale</DropdownMenuItem>
                        <DropdownMenuItem>View History</DropdownMenuItem>
                        <DropdownMenuItem>Send Follow-up</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete Sale</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Dialog open={!!selectedSale} onOpenChange={() => setSelectedSale(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Sale Details</DialogTitle>
            <DialogDescription>Complete information about this sales opportunity</DialogDescription>
          </DialogHeader>
          {selectedSale && (
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedSale.company}</h3>
                  <p className="text-gray-600 mt-1">{selectedSale.contact}</p>
                </div>
                <Badge className={statusColors[selectedSale.statusColor]}>{selectedSale.status}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-rose-50 border-rose-200">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-rose-600" />
                    <p className="text-sm text-gray-600">Deal Value</p>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{selectedSale.amount}</p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-gray-600" />
                    <p className="text-sm text-gray-600">Win Probability</p>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{selectedSale.probability}%</p>
                </Card>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Close Date</span>
                  <span className="text-sm font-medium text-gray-900">{selectedSale.closeDate}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Current Stage</span>
                  <span className="text-sm font-medium text-gray-900">{selectedSale.stage}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Account Owner</span>
                  <span className="text-sm font-medium text-gray-900">{selectedSale.owner}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-rose-500 hover:bg-rose-600">Update Status</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Send Proposal
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
