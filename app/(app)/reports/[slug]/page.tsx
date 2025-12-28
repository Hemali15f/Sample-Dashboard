import { Card } from "@/components/ui/card"
import { Users, Share2, Activity, PieChart, BarChart } from "lucide-react"

export default async function ReportSubPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

  const getSubPageContent = () => {
    switch (slug) {
      case "share-with-me":
        return {
          icon: <Share2 className="h-8 w-8 text-blue-500" />,
          description: "Reports shared with you by other team members for collaboration",
          stats: [
            { label: "Shared Files", value: "24", sub: "8 pending review" },
            { label: "From Managers", value: "8", sub: "Most frequent" },
            { label: "Needs Review", value: "3", sub: "Action required" },
          ],
          feature: "Collaboration History",
        }
      case "deals-by-user":
        return {
          icon: <Users className="h-8 w-8 text-green-500" />,
          description: "Breakdown of individual performance and deal distribution",
          stats: [
            { label: "Top Performer", value: "Hemali", sub: "92% win rate" },
            { label: "Active Deals", value: "42", sub: "In pipeline" },
            { label: "Avg Close Rate", value: "68%", sub: "+5% vs 2024" },
          ],
          feature: "Leaderboard View",
        }
      case "my-reports":
        return {
          icon: <PieChart className="h-8 w-8 text-rose-500" />,
          description: "Your personal repository of saved custom analytics and exports",
          stats: [
            { label: "Saved Templates", value: "12", sub: "3 shared" },
            { label: "Private Reports", value: "15", sub: "Last week" },
            { label: "Storage Used", value: "85%", sub: "4.2GB / 5GB" },
          ],
          feature: "Custom Library",
        }
      case "analytics":
        return {
          icon: <Activity className="h-8 w-8 text-purple-500" />,
          description: "Real-time metrics and deep-dive analytics into growth trends",
          stats: [
            { label: "Growth Rate", value: "+14.2%", sub: "MoM change" },
            { label: "New Leads", value: "456", sub: "Direct traffic" },
            { label: "Conversion", value: "12.4%", sub: "All channels" },
          ],
          feature: "Live Trends",
        }
      default:
        return {
          icon: <BarChart className="h-8 w-8 text-gray-500" />,
          description: "General overview of system reports and logs for 2025",
          stats: [
            { label: "Data Points", value: "12k", sub: "Collected today" },
            { label: "Accuracy", value: "99.9%", sub: "Target met" },
            { label: "Last Sync", value: "2m ago", sub: "System healthy" },
          ],
          feature: "General Logs",
        }
    }
  }

  const content = getSubPageContent()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">{content.icon}</div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h1>
          <p className="text-sm text-gray-500 mt-1">{content.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.stats.map((stat, idx) => (
          <Card key={idx} className="p-6 border-none shadow-sm bg-white">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{stat.label}</h3>
            <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.sub}</p>
          </Card>
        ))}
      </div>

      <Card className="p-8 flex flex-col items-center justify-center border-dashed text-center min-h-[400px] bg-gray-50/50">
        <div className="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
          {content.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">Visualizing 2025 {title} Data</h3>
        <p className="text-gray-500 mt-2 max-w-sm">
          We are currently aggregating the latest performance metrics for your {title.toLowerCase()} dashboard. Graphs
          and charts will appear here shortly.
        </p>
        <div className="flex gap-2 mt-8">
          <div className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" />
          <div className="h-2 w-2 rounded-full bg-violet-500 animate-bounce delay-75" />
          <div className="h-2 w-2 rounded-full bg-rose-500 animate-bounce delay-150" />
        </div>
      </Card>
    </div>
  )
}
