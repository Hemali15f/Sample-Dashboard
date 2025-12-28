"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { week: "W 5", value1: 85, value2: 75, value3: 90 },
  { week: "W 6", value1: 88, value2: 72, value3: 85 },
  { week: "W 7", value1: 78, value2: 82, value3: 95 },
  { week: "W 8", value1: 92, value2: 78, value3: 88 },
  { week: "W 9", value1: 95, value2: 85, value3: 92 },
]

export function SalesDynamicChart() {
  const teamData = [{ name: "Eren Y.", revenue: "$117,115", deals: 22, kpi: 0.79, wl: "32%", performance: 15 }]

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales dynamic</h3>

      <div className="space-y-4">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Tooltip />
              <Line type="monotone" dataKey="value1" stroke="#f43f5e" strokeWidth={2} dot={true} />
              <Line type="monotone" dataKey="value2" stroke="#10b981" strokeWidth={2} dot={true} />
              <Line type="monotone" dataKey="value3" stroke="#3b82f6" strokeWidth={2} dot={true} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="pt-4 border-t border-gray-200">
          {teamData.map((member, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>EY</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-gray-900">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.revenue}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div>
                  <Badge variant="secondary">{member.deals}</Badge>
                </div>
                <span className="text-gray-600">{member.kpi}</span>
                <span className="text-gray-600">{member.wl}</span>
                <Badge className="bg-gray-900 text-white">{member.performance}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
