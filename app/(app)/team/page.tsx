"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, MoreVertical, Search, Filter } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMember, setSelectedMember] = useState<any>(null)
  const [filterStatus, setFilterStatus] = useState("all")

  const teamMembers = [
    {
      name: "Armin Arlert",
      role: "Senior Sales Manager",
      email: "armin@example.com",
      phone: "+1 234 567 8900",
      avatar: null, // removed placeholder to force fallback initials
      status: "Active",
      performance: "High",
      sales: "$209,633",
      deals: 118,
    },
    {
      name: "Eren Yeager",
      role: "Sales Representative",
      email: "eren@example.com",
      phone: "+1 234 567 8901",
      avatar: null, // removed placeholder to force fallback initials
      status: "Active",
      performance: "Medium",
      sales: "$156,841",
      deals: 103,
    },
    {
      name: "Mikasa Ackerman",
      role: "Account Executive",
      email: "mikasa@example.com",
      phone: "+1 234 567 8902",
      avatar: null, // removed placeholder to force fallback initials
      status: "Active",
      performance: "High",
      sales: "$117,115",
      deals: 84,
    },
    {
      name: "Levi Ackerman",
      role: "Sales Director",
      email: "levi@example.com",
      phone: "+1 234 567 8903",
      avatar: null, // removed placeholder to force fallback initials
      status: "Active",
      performance: "High",
      sales: "$298,420",
      deals: 145,
    },
  ]

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === "all" || member.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your team members and their performance</p>
        </div>
        <Button
          onClick={() => alert("Add team member functionality would open here")}
          className="bg-rose-500 hover:bg-rose-600 text-white"
        >
          Add Team Member
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search team members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter: {filterStatus === "all" ? "All" : filterStatus}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setFilterStatus("all")}>All Members</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterStatus("Active")}>Active Only</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterStatus("On Leave")}>On Leave</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <p className="text-sm text-gray-600">Total Members</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-gray-600">Active</p>
          <p className="text-3xl font-bold text-green-600 mt-2">22</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-gray-600">On Leave</p>
          <p className="text-3xl font-bold text-orange-600 mt-2">2</p>
        </Card>
        <Card className="p-6 bg-rose-50 border-rose-200">
          <p className="text-sm text-gray-600">Top Performer</p>
          <p className="text-lg font-bold text-gray-900 mt-2">Levi A.</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMembers.map((member, idx) => (
          <Card
            key={idx}
            className="p-6 hover:shadow-lg transition-all cursor-pointer"
            onClick={() => setSelectedMember(member)}
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <Avatar className="h-16 w-16 shadow-sm border-2 border-white">
                  <AvatarImage src={member.avatar || ""} />
                  <AvatarFallback className="bg-indigo-600 text-white text-xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant={member.status === "Active" ? "default" : "secondary"}>{member.status}</Badge>
                    <Badge
                      variant={member.performance === "High" ? "default" : "secondary"}
                      className={member.performance === "High" ? "bg-green-500" : ""}
                    >
                      {member.performance}
                    </Badge>
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Send Message</DropdownMenuItem>
                  <DropdownMenuItem>Edit Details</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Remove Member</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                {member.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                {member.phone}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
              <div>
                <p className="text-xs text-gray-600">Sales</p>
                <p className="text-lg font-bold text-gray-900">{member.sales}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Deals</p>
                <p className="text-lg font-bold text-gray-900">{member.deals}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedMember(member)
                }}
              >
                View Profile
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Team Member Profile</DialogTitle>
            <DialogDescription>Full profile and performance details</DialogDescription>
          </DialogHeader>
          {selectedMember && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-24 w-24 shadow-md border-4 border-white">
                  <AvatarImage src={selectedMember.avatar || ""} />
                  <AvatarFallback className="bg-indigo-600 text-white text-3xl font-bold">
                    {selectedMember.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedMember.name}</h3>
                  <p className="text-gray-600">{selectedMember.role}</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant={selectedMember.status === "Active" ? "default" : "secondary"}>
                      {selectedMember.status}
                    </Badge>
                    <Badge className={selectedMember.performance === "High" ? "bg-green-500" : ""}>
                      {selectedMember.performance} Performance
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">Contact Information</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-gray-400" />
                    {selectedMember.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-gray-400" />
                    {selectedMember.phone}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">Performance Metrics</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Sales:</span>
                    <span className="font-semibold">{selectedMember.sales}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Deals Closed:</span>
                    <span className="font-semibold">{selectedMember.deals}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-rose-500 hover:bg-rose-600">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
