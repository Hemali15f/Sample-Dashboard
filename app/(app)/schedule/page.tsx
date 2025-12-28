import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, MapPin } from "lucide-react"

export default function SchedulePage() {
  const events = [
    {
      time: "09:00 AM",
      title: "Team Standup",
      type: "Meeting",
      duration: "30 min",
      location: "Conference Room A",
      attendees: 8,
      color: "bg-blue-500",
    },
    {
      time: "10:30 AM",
      title: "Client Presentation",
      type: "Call",
      duration: "1 hour",
      location: "Zoom",
      attendees: 5,
      color: "bg-rose-500",
    },
    {
      time: "02:00 PM",
      title: "Product Review",
      type: "Workshop",
      duration: "2 hours",
      location: "Conference Room B",
      attendees: 12,
      color: "bg-purple-500",
    },
    {
      time: "04:30 PM",
      title: "Sprint Planning",
      type: "Meeting",
      duration: "1 hour",
      location: "Conference Room A",
      attendees: 10,
      color: "bg-green-500",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your calendar and upcoming events</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Today
          </Button>
          <Button className="bg-rose-500 hover:bg-rose-600 text-white">Create Event</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <Card className="lg:col-span-2 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className={`w-1 rounded-full ${event.color}`} />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{event.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </span>
                        <span>{event.duration}</span>
                        <Badge variant="secondary">{event.type}</Badge>
                      </div>
                      <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                        {event.location.includes("Zoom") ? (
                          <Video className="h-4 w-4" />
                        ) : (
                          <MapPin className="h-4 w-4" />
                        )}
                        {event.location}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">{event.attendees} attendees</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Total Events</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">24</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Meetings</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Calls</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Hours Scheduled</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">32.5</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-rose-50 border-rose-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upcoming</h3>
            <p className="text-sm text-gray-600 mb-4">Client Presentation in 2 hours</p>
            <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Join Meeting</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
