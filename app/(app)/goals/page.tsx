"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Target, TrendingUp, Plus, Calendar, Users, Award, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function GoalsPage() {
  const [selectedGoal, setSelectedGoal] = useState<any>(null)

  const goals = [
    {
      id: 1,
      title: "Annual Revenue Target",
      description: "Reach $2M in annual revenue",
      progress: 78,
      current: "$1,560,000",
      target: "$2,000,000",
      deadline: "2023-12-31",
      owner: "Sales Team",
      status: "On Track",
      statusColor: "green",
      category: "Revenue",
      teamMembers: [
        { name: "Armin A.", avatar: null },
        { name: "Eren Y.", avatar: null },
        { name: "Mikasa A.", avatar: null },
      ],
    },
    {
      id: 2,
      title: "Close 500 Deals",
      description: "Complete 500 sales transactions this quarter",
      progress: 64,
      current: "320",
      target: "500",
      deadline: "2023-12-31",
      owner: "Armin A.",
      status: "Behind",
      statusColor: "yellow",
      category: "Sales",
      teamMembers: [{ name: "Armin A.", avatar: null }],
    },
    {
      id: 3,
      title: "Customer Satisfaction",
      description: "Maintain 95% customer satisfaction score",
      progress: 92,
      current: "92%",
      target: "95%",
      deadline: "2023-12-31",
      owner: "Customer Success",
      status: "At Risk",
      statusColor: "red",
      category: "Customer",
      teamMembers: [
        { name: "Eren Y.", avatar: null },
        { name: "Mikasa A.", avatar: null },
      ],
    },
    {
      id: 4,
      title: "Team Growth",
      description: "Hire 10 new team members",
      progress: 100,
      current: "10",
      target: "10",
      deadline: "2023-11-30",
      owner: "HR Department",
      status: "Completed",
      statusColor: "green",
      category: "Team",
      teamMembers: [{ name: "Admin", avatar: null }],
    },
    {
      id: 5,
      title: "Product Launch",
      description: "Launch new product line by end of Q4",
      progress: 45,
      current: "Phase 2",
      target: "Phase 4",
      deadline: "2023-12-15",
      owner: "Product Team",
      status: "On Track",
      statusColor: "blue",
      category: "Product",
      teamMembers: [
        { name: "Armin A.", avatar: null },
        { name: "Eren Y.", avatar: null },
      ],
    },
    {
      id: 6,
      title: "Market Expansion",
      description: "Enter 3 new geographic markets",
      progress: 33,
      current: "1",
      target: "3",
      deadline: "2024-03-31",
      owner: "Strategy Team",
      status: "On Track",
      statusColor: "green",
      category: "Growth",
      teamMembers: [{ name: "Mikasa A.", avatar: null }],
    },
  ]

  const statusColors: Record<string, string> = {
    green: "bg-green-100 text-green-700 border-green-300",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-300",
    red: "bg-red-100 text-red-700 border-red-300",
    blue: "bg-blue-100 text-blue-700 border-blue-300",
  }

  const activeGoals = goals.filter((g) => g.status !== "Completed")
  const completedGoals = goals.filter((g) => g.status === "Completed")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Goals & Objectives</h1>
          <p className="text-sm text-gray-500 mt-1">Track progress towards your business goals</p>
        </div>
        <Button className="bg-rose-500 hover:bg-rose-600">
          <Plus className="h-4 w-4 mr-2" />
          New Goal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-rose-500 to-rose-600 text-white cursor-pointer hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-2">
            <Target className="h-5 w-5" />
            <p className="text-sm opacity-90">Active Goals</p>
          </div>
          <p className="text-4xl font-bold">{activeGoals.length}</p>
          <p className="text-xs opacity-75 mt-1">In progress</p>
        </Card>
        <Card className="p-4 cursor-pointer hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-2">
            <Award className="h-5 w-5 text-green-600" />
            <p className="text-sm text-gray-600">Completed</p>
          </div>
          <p className="text-4xl font-bold text-gray-900">{completedGoals.length}</p>
          <p className="text-xs text-gray-500 mt-1">Goals achieved</p>
        </Card>
        <Card className="p-4 cursor-pointer hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <p className="text-sm text-gray-600">Avg Progress</p>
          </div>
          <p className="text-4xl font-bold text-gray-900">
            {Math.round(goals.reduce((sum, g) => sum + g.progress, 0) / goals.length)}%
          </p>
          <p className="text-xs text-gray-500 mt-1">Across all goals</p>
        </Card>
        <Card className="p-4 cursor-pointer hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            <p className="text-sm text-gray-600">Upcoming</p>
          </div>
          <p className="text-4xl font-bold text-gray-900">
            {goals.filter((g) => new Date(g.deadline) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)).length}
          </p>
          <p className="text-xs text-gray-500 mt-1">Due soon</p>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Goals</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {activeGoals.map((goal) => (
            <Card
              key={goal.id}
              onClick={() => setSelectedGoal(goal)}
              className="p-6 cursor-pointer hover:shadow-lg hover:border-rose-300 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{goal.category}</Badge>
                    <Badge className={statusColors[goal.statusColor]}>{goal.status}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{goal.title}</h3>
                  <p className="text-sm text-gray-600">{goal.description}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-rose-500 transition-colors" />
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-bold text-gray-900">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-600">Current: {goal.current}</span>
                    <span className="text-xs text-gray-600">Target: {goal.target}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{goal.deadline}</span>
                  </div>
                  <div className="flex -space-x-2">
                    {goal.teamMembers.slice(0, 3).map((member, idx) => (
                      <Avatar key={idx} className="h-8 w-8 border-2 border-white">
                        <AvatarImage src={member.avatar || ""} />
                        <AvatarFallback className="bg-indigo-500 text-white text-[10px] font-bold">
                          {member.name[0]}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    {goal.teamMembers.length > 3 && (
                      <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">+{goal.teamMembers.length - 3}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {completedGoals.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Completed Goals</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {completedGoals.map((goal) => (
              <Card
                key={goal.id}
                onClick={() => setSelectedGoal(goal)}
                className="p-4 cursor-pointer hover:shadow-lg transition-all bg-gray-50 border-gray-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                    <p className="text-xs text-gray-500">{goal.deadline}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700">Completed</Badge>
              </Card>
            ))}
          </div>
        </div>
      )}

      <Dialog open={!!selectedGoal} onOpenChange={() => setSelectedGoal(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Goal Details</DialogTitle>
            <DialogDescription>Track progress and manage your goal</DialogDescription>
          </DialogHeader>
          {selectedGoal && (
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedGoal.title}</h3>
                  <p className="text-gray-600">{selectedGoal.description}</p>
                </div>
                <Badge className={statusColors[selectedGoal.statusColor]}>{selectedGoal.status}</Badge>
              </div>

              <Card className="p-6 bg-gradient-to-br from-rose-50 to-orange-50 border-rose-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-3xl font-bold text-gray-900">{selectedGoal.progress}%</span>
                </div>
                <Progress value={selectedGoal.progress} className="h-3 mb-3" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Current: {selectedGoal.current}</span>
                  <span className="text-gray-600">Target: {selectedGoal.target}</span>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-gray-600" />
                    <p className="text-sm text-gray-600">Deadline</p>
                  </div>
                  <p className="text-xl font-bold text-gray-900">{selectedGoal.deadline}</p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-gray-600" />
                    <p className="text-sm text-gray-600">Owner</p>
                  </div>
                  <p className="text-xl font-bold text-gray-900">{selectedGoal.owner}</p>
                </Card>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Team Members</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedGoal.teamMembers.map((member: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={member.avatar || ""} />
                        <AvatarFallback className="bg-indigo-500 text-white text-xs font-bold">
                          {member.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-gray-900">{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button className="flex-1 bg-rose-500 hover:bg-rose-600">Update Progress</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  View Timeline
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
