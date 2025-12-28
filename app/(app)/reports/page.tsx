"use client"

import { useState } from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Calendar, TrendingUp, Share2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReportsPage() {
  const [showGenerateDialog, setShowGenerateDialog] = useState(false)
  const [selectedReport, setSelectedReport] = useState<any>(null)

  const reports = [
    {
      title: "Full Year 2025 Sales",
      description: "Annual sales performance summary",
      date: "Dec 28, 2025",
      status: "Ready",
      type: "Sales",
      size: "4.2 MB",
    },
    {
      title: "2025 Market Trends",
      description: "Analysis of market behavior in current year",
      date: "Dec 15, 2025",
      status: "Ready",
      type: "Finance",
      size: "2.1 MB",
    },
    {
      title: "Q4 Sales Report",
      description: "Comprehensive sales analysis for Q4 2025",
      date: "Dec 1, 2025",
      status: "Ready",
      type: "Sales",
      size: "2.4 MB",
    },
    {
      title: "Revenue Analysis",
      description: "Monthly revenue breakdown and trends",
      date: "Nov 30, 2025",
      status: "Ready",
      type: "Finance",
      size: "1.8 MB",
    },
    {
      title: "Team Performance",
      description: "Individual and team metrics review",
      date: "Nov 28, 2025",
      status: "Ready",
      type: "HR",
      size: "3.2 MB",
    },
    {
      title: "Client Analytics",
      description: "Client engagement and satisfaction metrics",
      date: "Nov 25, 2025",
      status: "Processing",
      type: "Analytics",
      size: "4.1 MB",
    },
  ]

  const handleDownload = (report: any) => {
    console.log("[v0] Downloading report:", report.title)
    alert(`Downloading ${report.title}...`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-sm text-gray-500 mt-1">Access and generate your business reports</p>
        </div>
        <Button onClick={() => setShowGenerateDialog(true)} className="bg-rose-500 hover:bg-rose-600 text-white">
          <FileText className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <p className="text-sm text-gray-600">Total Reports</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">48</p>
        </Card>
        <Card className="p-6 bg-green-50 border-green-200">
          <p className="text-sm text-gray-600">This Month</p>
          <p className="text-3xl font-bold text-green-600 mt-2">12</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-gray-600">Downloaded</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">156</p>
        </Card>
        <Card className="p-6 bg-rose-50 border-rose-200">
          <p className="text-sm text-gray-600">Shared</p>
          <p className="text-3xl font-bold text-rose-600 mt-2">42</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Reports</h2>
        <div className="space-y-3">
          {reports.map((report, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedReport(report)}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-rose-300 hover:bg-rose-50 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-rose-100 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{report.title}</h3>
                  <p className="text-sm text-gray-600">{report.description}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {report.date}
                    </span>
                    <Badge variant="secondary">{report.type}</Badge>
                    {report.status === "Ready" ? (
                      <Badge className="bg-green-500 text-white">Ready</Badge>
                    ) : (
                      <Badge variant="secondary">Processing</Badge>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">{report.size}</span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={report.status !== "Ready"}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDownload(report)
                  }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          onClick={() => setShowGenerateDialog(true)}
          className="p-6 cursor-pointer hover:shadow-lg hover:border-rose-300 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Sales Report</h3>
              <p className="text-sm text-gray-600">Generate new sales report</p>
            </div>
          </div>
        </Card>
        <Card
          onClick={() => setShowGenerateDialog(true)}
          className="p-6 cursor-pointer hover:shadow-lg hover:border-rose-300 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Custom Report</h3>
              <p className="text-sm text-gray-600">Build custom report</p>
            </div>
          </div>
        </Card>
        <Card
          onClick={() => alert("Schedule report feature coming soon!")}
          className="p-6 cursor-pointer hover:shadow-lg hover:border-rose-300 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Schedule Report</h3>
              <p className="text-sm text-gray-600">Set up automated reports</p>
            </div>
          </div>
        </Card>
      </div>

      <Dialog open={showGenerateDialog} onOpenChange={setShowGenerateDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generate New Report</DialogTitle>
            <DialogDescription>Configure and generate a custom report</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Report Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Report</SelectItem>
                  <SelectItem value="revenue">Revenue Analysis</SelectItem>
                  <SelectItem value="team">Team Performance</SelectItem>
                  <SelectItem value="client">Client Analytics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Report Name</Label>
              <Input placeholder="Q4 Performance Report" />
            </div>
            <div>
              <Label>Time Period</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Last 7 Days</SelectItem>
                  <SelectItem value="month">Last 30 Days</SelectItem>
                  <SelectItem value="quarter">Last Quarter</SelectItem>
                  <SelectItem value="year">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-3 pt-4">
              <Button
                className="flex-1 bg-rose-500 hover:bg-rose-600"
                onClick={() => {
                  alert("Generating report...")
                  setShowGenerateDialog(false)
                }}
              >
                Generate Report
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowGenerateDialog(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedReport} onOpenChange={() => setSelectedReport(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedReport?.title}</DialogTitle>
            <DialogDescription>{selectedReport?.description}</DialogDescription>
          </DialogHeader>
          {selectedReport && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="font-medium">{selectedReport.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-medium">{selectedReport.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Size</p>
                  <p className="font-medium">{selectedReport.size}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <Badge className={selectedReport.status === "Ready" ? "bg-green-500" : ""}>
                    {selectedReport.status}
                  </Badge>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  className="flex-1 bg-rose-500 hover:bg-rose-600"
                  disabled={selectedReport.status !== "Ready"}
                  onClick={() => handleDownload(selectedReport)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
