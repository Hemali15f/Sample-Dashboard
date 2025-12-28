"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, MoreVertical, Filter, Search, Calendar } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function StarredPage() {
  const [starredItems, setStarredItems] = useState([
    {
      id: 1,
      type: "Report",
      title: "Q4 Revenue Analysis",
      description: "Comprehensive revenue breakdown and forecasts",
      starred: true,
      date: "2023-11-28",
      value: "$528,976",
      change: "+7.9%",
      color: "rose",
    },
    {
      id: 2,
      type: "Deal",
      title: "Rolf Inc. Partnership",
      description: "Strategic partnership deal with Rolf Inc.",
      starred: true,
      date: "2023-11-25",
      value: "$45,200",
      change: "+12.3%",
      color: "blue",
    },
    {
      id: 3,
      type: "Client",
      title: "Tech Corp Enterprise",
      description: "Enterprise level client with high potential",
      starred: true,
      date: "2023-11-20",
      value: "$89,500",
      change: "+5.2%",
      color: "green",
    },
    {
      id: 4,
      type: "Goal",
      title: "Annual Sales Target",
      description: "Reach $2M in annual revenue",
      starred: true,
      date: "2023-12-31",
      value: "$2,000,000",
      change: "78% complete",
      color: "purple",
    },
    {
      id: 5,
      type: "Team",
      title: "Armin A. Performance",
      description: "Top performer this quarter",
      starred: true,
      date: "2023-11-15",
      value: "$209,633",
      change: "+15.7%",
      color: "orange",
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("All")

  const toggleStar = (id: number) => {
    setStarredItems(starredItems.map((item) => (item.id === id ? { ...item, starred: !item.starred } : item)))
  }

  const removeItem = (id: number) => {
    setStarredItems(starredItems.filter((item) => item.id !== id))
  }

  const filteredItems = starredItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterType === "All" || item.type === filterType
    return item.starred && matchesSearch && matchesFilter
  })

  const colorMap: Record<string, string> = {
    rose: "bg-rose-100 border-rose-300 text-rose-700",
    blue: "bg-blue-100 border-blue-300 text-blue-700",
    green: "bg-green-100 border-green-300 text-green-700",
    purple: "bg-purple-100 border-purple-300 text-purple-700",
    orange: "bg-orange-100 border-orange-300 text-orange-700",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Starred Items</h1>
          <p className="text-sm text-gray-500 mt-1">Your favorite reports, deals, and goals</p>
        </div>
        <Badge className="bg-rose-500 text-white">{filteredItems.length} items</Badge>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search starred items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-transparent"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              {filterType}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setFilterType("All")}>All Types</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterType("Report")}>Reports</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterType("Deal")}>Deals</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterType("Goal")}>Goals</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterType("Client")}>Clients</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className="p-6 hover:shadow-lg transition-all cursor-pointer group border-gray-200 hover:border-rose-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={colorMap[item.color]}>{item.type}</Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {item.change}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => toggleStar(item.id)} className="transition-transform hover:scale-110">
                  <Star className={cn("h-5 w-5", item.starred ? "fill-yellow-400 text-yellow-400" : "text-gray-400")} />
                </button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => removeItem(item.id)} className="text-red-600">
                      Remove from Starred
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <Card className="p-12 text-center">
          <Star className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No starred items found</h3>
          <p className="text-gray-600">Star your favorite items to access them quickly</p>
        </Card>
      )}
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
