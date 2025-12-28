"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PlatformStats() {
  const platforms = [
    { name: "Dribbble", value: "28.1%", amount: "$156,841", icon: "🎨", color: "bg-pink-500" },
    { name: "Instagram", value: "14.1%", amount: "$77,177", icon: "📷", color: "bg-purple-500" },
    { name: "Google", value: "5.4%", amount: "$28,689", icon: "🔍", color: "bg-blue-500" },
    { name: "Other", value: "7.1%", amount: "$11,135", icon: "⚡", color: "bg-gray-500" },
  ]

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Work with platforms</h3>

      <div className="space-y-4">
        {platforms.map((platform, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`h-8 w-8 rounded-lg ${platform.color} flex items-center justify-center text-white`}>
                  {platform.icon}
                </div>
                <span className="text-sm font-medium text-gray-900">{platform.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">{platform.value}</span>
                <Badge className="bg-rose-100 text-rose-700">{platform.amount}</Badge>
              </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className={`h-full ${platform.color}`} style={{ width: platform.value }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Total Revenue</span>
          <span className="text-2xl font-bold text-gray-900">$273,842</span>
        </div>
      </div>
    </Card>
  )
}
