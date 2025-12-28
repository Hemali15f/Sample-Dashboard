"use client"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Search, Menu, Plus, Grid } from "lucide-react"
import { Avatar, AvatarFallback } from "./ui/avatar"

export function Header() {
  return (
    <header className="h-20 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-8">
      <div className="flex items-center gap-6 flex-1">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>

        <div className="relative flex-1 max-w-xl group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brand-violet transition-colors" />
          <Input
            placeholder='Try searching "insights"'
            className="pl-12 h-12 bg-gray-50/50 border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-brand-violet/5 transition-all text-sm font-medium"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 rounded-2xl border-gray-100 bg-white shadow-sm hover:bg-gray-50"
        >
          <Grid className="h-5 w-5 text-gray-600" />
        </Button>

        <Avatar className="h-11 w-11 rounded-2xl shadow-lg shadow-indigo-100 cursor-pointer hover:scale-105 transition-transform">
          <AvatarFallback className="bg-gradient-to-tr from-brand-violet via-brand-blue to-brand-violet text-white font-black text-sm uppercase">
            H
          </AvatarFallback>
        </Avatar>

        <Button
          size="icon"
          className="h-11 w-11 rounded-2xl bg-brand-red hover:bg-brand-red/90 text-white shadow-lg shadow-brand-red/20 transition-all hover:scale-110 active:scale-95"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}
