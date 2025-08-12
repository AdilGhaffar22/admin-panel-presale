"use client";

import DashboardLayout from "@/components/DashboardLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const viewsData = [
  { name: "Mon", views: 1200, clicks: 120 },
  { name: "Tue", views: 1900, clicks: 190 },
  { name: "Wed", views: 800, clicks: 80 },
  { name: "Thu", views: 1600, clicks: 160 },
  { name: "Fri", views: 2200, clicks: 220 },
  { name: "Sat", views: 1800, clicks: 180 },
  { name: "Sun", views: 1400, clicks: 140 },
];

const conversionData = [
  { name: "Jan", conversions: 45 },
  { name: "Feb", conversions: 52 },
  { name: "Mar", conversions: 38 },
  { name: "Apr", conversions: 67 },
  { name: "May", conversions: 89 },
  { name: "Jun", conversions: 123 },
];

const deviceData = [
  { name: "Desktop", value: 65, color: "#3B82F6" },
  { name: "Mobile", value: 30, color: "#10B981" },
  { name: "Tablet", value: 5, color: "#F59E0B" },
];

const topPages = [
  { page: "/landing", views: 5420, conversions: 234 },
  { page: "/product", views: 3210, conversions: 156 },
  { page: "/pricing", views: 2890, conversions: 98 },
  { page: "/about", views: 1560, conversions: 45 },
  { page: "/contact", views: 890, conversions: 23 },
];

export default function AnalyticsPage() {
  return (
    <DashboardLayout title="Analytics">
      <div className="space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Views
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  12,345
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                  ↗ +12.5% from last week
                </p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Clicks
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  1,234
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                  ↗ +8.2% from last week
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Conversions
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  123
                </p>
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                  ↘ -2.1% from last week
                </p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Conversion Rate
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  9.98%
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                  ↗ +1.3% from last week
                </p>
              </div>
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-full">
                <svg
                  className="w-6 h-6 text-yellow-600 dark:text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Views & Clicks (Last 7 Days)
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={viewsData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis
                    dataKey="name"
                    className="text-gray-600 dark:text-gray-400"
                  />
                  <YAxis className="text-gray-600 dark:text-gray-400" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--tooltip-bg)",
                      border: "1px solid var(--tooltip-border)",
                      borderRadius: "8px",
                      color: "var(--tooltip-text)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke="#3B82F6"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="clicks"
                    stroke="#10B981"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Monthly Conversions
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis
                    dataKey="name"
                    className="text-gray-600 dark:text-gray-400"
                  />
                  <YAxis className="text-gray-600 dark:text-gray-400" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--tooltip-bg)",
                      border: "1px solid var(--tooltip-border)",
                      borderRadius: "8px",
                      color: "var(--tooltip-text)",
                    }}
                  />
                  <Bar dataKey="conversions" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Device Breakdown
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name} ${((percent || 0) * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--tooltip-bg)",
                      border: "1px solid var(--tooltip-border)",
                      borderRadius: "8px",
                      color: "var(--tooltip-text)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Top Performing Pages
            </h3>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div
                  key={page.page}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {page.page}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {page.views} views
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {page.conversions}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      conversions
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
