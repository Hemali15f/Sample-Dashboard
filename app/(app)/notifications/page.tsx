import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Check, X, Clock } from "lucide-react"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "deal",
      title: "New deal closed",
      user: "Armin Arlert",
      message: "Armin closed a deal worth $15,000 with Acme Corp",
      time: "5 minutes ago",
      read: false,
      color: "bg-green-500",
    },
    {
      id: 2,
      type: "meeting",
      title: "Meeting reminder",
      user: "Eren Yeager",
      message: "Client presentation starts in 30 minutes",
      time: "25 minutes ago",
      read: false,
      color: "bg-blue-500",
    },
    {
      id: 3,
      type: "report",
      title: "Weekly report ready",
      user: "System",
      message: "Your weekly performance report is now available",
      time: "2 hours ago",
      read: true,
      color: "bg-purple-500",
    },
    {
      id: 4,
      type: "team",
      title: "New team member",
      user: "Historia Reiss",
      message: "Historia Reiss joined your team",
      time: "5 hours ago",
      read: true,
      color: "bg-blue-600",
    },
    {
      id: 5,
      type: "task",
      title: "Task completed",
      user: "Mikasa Ackerman",
      message: "Mikasa completed the Q4 sales analysis",
      time: "1 day ago",
      read: true,
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-sm text-gray-500 mt-1">Stay updated with your latest activities</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Check className="h-4 w-4 mr-2" />
            Mark all read
          </Button>
          <Button variant="outline">
            <Bell className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Notifications List */}
        <div className="lg:col-span-2 space-y-3">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`p-4 ${!notification.read ? "border-rose-200 bg-rose-50/30" : ""}`}>
              <div className="flex gap-4">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={notification.avatar || "/placeholder.svg"} />
                    <AvatarFallback className={`${notification.color} text-white font-bold`}>
                      {notification.user
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full ${notification.color} border-2 border-white`}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{notification.time}</span>
                        {!notification.read && <Badge className="bg-rose-500 text-white text-xs">New</Badge>}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Notification Stats */}
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Overview</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Unread</p>
                <p className="text-4xl font-bold text-blue-600 mt-1">2</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Today</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">8</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">This Week</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">34</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Deals</span>
                <Badge variant="secondary">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Meetings</span>
                <Badge variant="secondary">8</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Reports</span>
                <Badge variant="secondary">6</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Team</span>
                <Badge variant="secondary">8</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
