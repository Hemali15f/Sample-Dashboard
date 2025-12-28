"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Calendar,
  Users,
  Bell,
  FileText,
  Settings,
  ChevronRight,
  Star,
  Clock,
  List,
  Target,
  BarChart3,
  FolderOpen,
} from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Team", href: "/team", icon: Users },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
]

const quickLinks = [
  { name: "Starred", icon: Star, href: "/starred" },
  { name: "Recent", icon: Clock, href: "/recent" },
  { name: "Sales list", icon: List, href: "/sales-list" },
  { name: "Goals", icon: Target, href: "/goals" },
]

const reportsSubmenu = [
  { name: "Share with me", icon: FolderOpen },
  { name: "Deals by user", icon: BarChart3 },
  { name: "My reports", icon: FileText },
  { name: "Analytics", icon: BarChart3 },
]

export function Sidebar() {
  const pathname = usePathname()
  const [reportsOpen, setReportsOpen] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        isCollapsed ? "w-20" : "w-64",
      )}
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-brand-violet to-brand-blue flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-xl">M</span>
            </div>
            <span className="font-black text-gray-900 tracking-tighter text-lg">Mydash.com</span>
          </Link>
        )}
        {/* Collapse Toggle Button */}
        <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)} className="h-8 w-8">
          <ChevronRight className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Quick Links */}
        {!isCollapsed && (
          <div>
            <div className="space-y-1">
              {quickLinks.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                      isActive ? "bg-rose-50 text-rose-600" : "text-gray-700 hover:bg-gray-100",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {!isCollapsed && item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <div>
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              const isReports = item.name === "Reports"

              return (
                <div key={item.name}>
                  {isReports ? (
                    <button
                      onClick={() => setReportsOpen(!reportsOpen)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors",
                        isActive ? "bg-rose-500 text-white" : "text-gray-700 hover:bg-gray-100",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5" />
                        {!isCollapsed && item.name}
                      </div>
                      {!isCollapsed && (
                        <ChevronRight className={cn("h-4 w-4 transition-transform", reportsOpen && "rotate-90")} />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                        isActive ? "bg-rose-500 text-white" : "text-gray-700 hover:bg-gray-100",
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && item.name}
                    </Link>
                  )}

                  {/* Reports Submenu */}
                  {isReports && reportsOpen && !isCollapsed && (
                    <div className="ml-8 mt-1 space-y-1">
                      {reportsSubmenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={`/reports/${subItem.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                            pathname.includes(subItem.name.toLowerCase().replace(/\s+/g, "-"))
                              ? "text-rose-600 bg-rose-50"
                              : "text-gray-600 hover:bg-gray-100",
                          )}
                        >
                          <subItem.icon className="h-4 w-4" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </nav>

      {/* User Profile */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200">
          <Button variant="outline" className="w-full justify-start bg-transparent border-none hover:bg-gray-50 p-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold mr-3 shadow-sm">
              H
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">Hemali</p>
              <p className="text-xs text-gray-500">h@example.com</p>
            </div>
          </Button>
        </div>
      )}
    </div>
  )
}
