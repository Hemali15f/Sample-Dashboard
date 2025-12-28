"use client" // Added use client for tab interactivity

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Bell, Lock, Palette, Globe } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile", icon: User, description: "Personal info & avatar" },
    { id: "notifications", label: "Notifications", icon: Bell, description: "Email & push alerts" },
    { id: "security", label: "Security", icon: Lock, description: "Password & 2FA" },
    { id: "appearance", label: "Appearance", icon: Palette, description: "Theme & branding" },
    { id: "language", label: "Language", icon: Globe, description: "Regional settings" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your account and platform preferences</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold text-rose-600 uppercase tracking-widest">Last synced</p>
          <p className="text-sm text-gray-500">Just now</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Settings Navigation */}
        <div className="space-y-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full p-4 text-left rounded-2xl transition-all duration-300 border shadow-sm group relative overflow-hidden",
                activeTab === tab.id
                  ? "bg-rose-50 border-rose-200 text-rose-700 ring-4 ring-rose-500/5 shadow-rose-100"
                  : "bg-white border-gray-100 text-gray-600 hover:border-rose-100 hover:bg-rose-50/30",
              )}
            >
              <div className="flex items-center gap-4 relative z-10">
                <div
                  className={cn(
                    "h-10 w-10 rounded-xl flex items-center justify-center transition-all",
                    activeTab === tab.id
                      ? "bg-rose-500 text-white"
                      : "bg-gray-50 text-gray-400 group-hover:bg-rose-100 group-hover:text-rose-600",
                  )}
                >
                  <tab.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-bold block text-sm">{tab.label}</span>
                  <span className="text-[10px] text-gray-400 font-medium group-hover:text-rose-400 transition-colors uppercase tracking-tight">
                    {tab.description}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2">
          {activeTab === "profile" && (
            <Card className="p-8 border-none shadow-xl shadow-gray-200/50 bg-white rounded-3xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
                <Badge variant="outline" className="text-indigo-600 border-indigo-100 bg-indigo-50/30">
                  Verified
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
                <div className="relative group">
                  <Avatar className="h-28 w-28 ring-4 ring-indigo-500/10 shadow-lg">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-gradient-to-tr from-indigo-500 via-blue-600 to-violet-700 text-white text-3xl font-bold uppercase">
                      H
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Palette className="text-white h-6 w-6" />
                  </div>
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <h3 className="text-lg font-bold text-gray-900">Hemali Doe</h3>
                    <Badge className="bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100 transition-colors">
                      Verified
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 max-w-[280px]">
                    Personalize your account with a custom profile picture and details.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-gray-200 hover:bg-gray-50 rounded-lg h-9"
                    >
                      Change Photo
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-rose-600 rounded-lg h-9">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    defaultValue="Hemali"
                    className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    defaultValue="Doe"
                    className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all h-12"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="h@example.com"
                    className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all h-12"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className="mt-1 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all h-12"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    placeholder="Sales Manager"
                    className="mt-1 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all h-12"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">Save Changes</Button>
              </div>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Email Notifications</p>
                    <p className="text-sm text-gray-600">Receive notifications via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Deal Updates</p>
                    <p className="text-sm text-gray-600">Get notified about deal changes</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Team Activity</p>
                    <p className="text-sm text-gray-600">Updates from team members</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Weekly Reports</p>
                    <p className="text-sm text-gray-600">Receive weekly summary reports</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          )}

          {activeTab === "security" && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Security</h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    className="mt-1 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    className="mt-1 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    className="mt-1 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all h-12"
                  />
                </div>
              </div>

              <Button className="mt-6 bg-rose-500 hover:bg-rose-600 text-white">Update Password</Button>
            </Card>
          )}

          {activeTab === "appearance" && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Appearance</h2>
              {/* Appearance content goes here */}
            </Card>
          )}

          {activeTab === "language" && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Language</h2>
              {/* Language content goes here */}
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
