"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, FileText, Users, BarChart3, Settings, Calendar, MoreVertical } from "lucide-react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function RecentPage() {
  const [activities] = useState([
    {
      id: 1,
      type: "Report",
      icon: FileText,
      title: "Viewed Q4 Revenue Analysis",
      description: "Comprehensive revenue breakdown and forecasts",
      user: "You",
      avatar: "/placeholder.svg?height=32&width=32",
      time: "2 minutes ago",
      color: "rose",
    },
    {
      id: 2,
      type: "Team",
      icon: Users,
      title: "Updated Armin A. profile",
      description: "Modified team member performance metrics",
      user: "You",
      avatar: "/placeholder.svg?height=32&width=32",
      time: "15 minutes ago",
      color: "blue",
    },
    {
      id: 3,
      type: "Dashboard",
      icon: BarChart3,
      title: "Accessed Dashboard",
      description: "Reviewed team performance and revenue stats",
      user: "You",
      avatar: "/placeholder.svg?height=32&width=32",
      time: "1 hour ago",
      color: "purple",
    },
    {
      id: 4,
      type: "Settings",
      icon: Settings,
      title: "Changed notification preferences",
      description: "Updated email notification settings",
      user: "You",
      avatar: "/placeholder.svg?height=32&width=32",
      time: "3 hours ago",
      color: "gray",
    },
    {
      id: 5,
      type: "Report",
      icon: FileText,
      title: "Generated Sales Report",
      description: "Monthly sales performance summary",
      user: "You",
      avatar: "/placeholder.svg?height=32&width=32",
      time: "Yesterday",
      color: "green",
    },
    {
      id: 6,
      type: "Team",
      icon: Users,
      title: "Invited new team member",
      description: "Sent invitation to john.doe@example.com",
      user: "You",
      avatar: "/placeholder.svg?height=32&width=32",
      time: "2 days ago",
      color: "orange",
    },
    {
      id: 7,
      type: "Report",
      icon: Calendar,
      title: "Scheduled meeting with Tech Corp",
      description: "Q1 planning session",
      user: "Eren Y.",
      avatar: "/placeholder.svg?height=32&width=32",
      time: "2 days ago",
      color: "blue",
    },
    {
      id: 8,
      type: "Dashboard",
      icon: BarChart3,
      title: "Exported revenue data",
      description: "Downloaded CSV report for analysis",
      user: "Mikasa A.",
      avatar: "/placeholder.svg?height=32&width=32",
      time: "3 days ago",
      color: "rose",
    },
  ])

  const iconColorMap: Record<string, string> = {
    rose: "bg-rose-100 text-rose-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    gray: "bg-gray-100 text-gray-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Recent Activity</h1>
          <p className="text-sm text-gray-500 mt-1">Your recent actions and updates</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Clock className="h-4 w-4 mr-2" />
            Last 7 days
          </Button>
          <Button variant="outline">Clear History</Button>
        </div>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <Card
              key={activity.id}
              className="p-4 hover:shadow-md transition-all cursor-pointer group border-gray-200 hover:border-rose-200"
            >
              <div className="flex items-start gap-4">
                <div className={cn("p-3 rounded-lg", iconColorMap[activity.color])}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-gray-900 mb-1">{activity.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{activity.user[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-gray-600">{activity.user}</span>
                        </div>
                        <span className="text-sm text-gray-400">•</span>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="h-3 w-3" />
                          {activity.time}
                        </div>
                        <Badge variant="outline" className="ml-2">
                          {activity.type}
                        </Badge>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Share Activity</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Remove from History</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <Card className="p-6 bg-gray-50 border-gray-200">
        <div className="text-center">
          <Clock className="h-8 w-8 text-gray-400 mx-auto mb-3" />
          <p className="text-sm text-gray-600">You've reached the end of your recent activity</p>
          <Button variant="link" className="mt-2 text-rose-600">
            View All History
          </Button>
        </div>
      </Card>
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
