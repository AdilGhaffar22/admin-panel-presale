"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

interface Launchpad {
  id: string;
  tokenName: string;
  tokenSymbol: string;
  tokenAddress: string;
  presaleRate: number;
  softCap: number;
  hardCap: number;
  raised: number;
  progress: number;
  status: "upcoming" | "live" | "ended" | "success" | "failed";
  startTime: string;
  endTime: string;
  participants: number;
  chain: string;
}

const mockLaunchpads: Launchpad[] = [
  {
    id: "1",
    tokenName: "DeFi Token",
    tokenSymbol: "DFT",
    tokenAddress: "0x1234...5678",
    presaleRate: 1000,
    softCap: 50,
    hardCap: 100,
    raised: 75.5,
    progress: 75.5,
    status: "live",
    startTime: "2024-01-15T10:00:00Z",
    endTime: "2024-01-25T10:00:00Z",
    participants: 234,
    chain: "BSC",
  },
  {
    id: "2",
    tokenName: "Gaming Token",
    tokenSymbol: "GMT",
    tokenAddress: "0xabcd...efgh",
    presaleRate: 800,
    softCap: 30,
    hardCap: 60,
    raised: 60,
    progress: 100,
    status: "success",
    startTime: "2024-01-10T10:00:00Z",
    endTime: "2024-01-20T10:00:00Z",
    participants: 156,
    chain: "ETH",
  },
  {
    id: "3",
    tokenName: "NFT Token",
    tokenSymbol: "NFT",
    tokenAddress: "0x9876...5432",
    presaleRate: 1200,
    softCap: 25,
    hardCap: 50,
    raised: 15.2,
    progress: 30.4,
    status: "live",
    startTime: "2024-01-12T10:00:00Z",
    endTime: "2024-01-22T10:00:00Z",
    participants: 89,
    chain: "BSC",
  },
  {
    id: "4",
    tokenName: "Metaverse Token",
    tokenSymbol: "META",
    tokenAddress: "0xfedc...ba98",
    presaleRate: 900,
    softCap: 40,
    hardCap: 80,
    raised: 12.5,
    progress: 15.6,
    status: "failed",
    startTime: "2024-01-05T10:00:00Z",
    endTime: "2024-01-15T10:00:00Z",
    participants: 45,
    chain: "POLYGON",
  },
];

export default function LaunchpadListPage() {
  const [filter, setFilter] = useState<"all" | "live" | "upcoming" | "ended">(
    "all"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLaunchpads = mockLaunchpads.filter((launchpad) => {
    const matchesFilter =
      filter === "all" ||
      launchpad.status === filter ||
      (filter === "ended" && ["success", "failed"].includes(launchpad.status));
    const matchesSearch =
      launchpad.tokenName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      launchpad.tokenSymbol.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "upcoming":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "success":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400";
      case "failed":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "ended":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getChainColor = (chain: string) => {
    switch (chain) {
      case "BSC":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "ETH":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      case "POLYGON":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <DashboardLayout title="Launchpad List">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              All Launchpads
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Discover and participate in token presales
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Create Presale
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex space-x-2">
              {["all", "live", "upcoming", "ended"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === status
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search launchpads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <svg
                className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Launchpad Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLaunchpads.map((launchpad) => (
            <div
              key={launchpad.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {launchpad.tokenName}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {launchpad.tokenSymbol}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        launchpad.status
                      )}`}
                    >
                      {launchpad.status.toUpperCase()}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getChainColor(
                        launchpad.chain
                      )}`}
                    >
                      {launchpad.chain}
                    </span>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{launchpad.progress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(launchpad.progress, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <span>{launchpad.raised} BNB raised</span>
                    <span>{launchpad.hardCap} BNB goal</span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Rate:
                    </span>
                    <span className="text-gray-900 dark:text-white">
                      {launchpad.presaleRate.toLocaleString()}{" "}
                      {launchpad.tokenSymbol}/BNB
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Soft Cap:
                    </span>
                    <span className="text-gray-900 dark:text-white">
                      {launchpad.softCap} BNB
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Participants:
                    </span>
                    <span className="text-gray-900 dark:text-white">
                      {launchpad.participants}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6">
                  <button
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      launchpad.status === "live"
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : launchpad.status === "upcoming"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!["live", "upcoming"].includes(launchpad.status)}
                  >
                    {launchpad.status === "live"
                      ? "Participate"
                      : launchpad.status === "upcoming"
                      ? "View Details"
                      : launchpad.status === "success"
                      ? "Successful"
                      : launchpad.status === "failed"
                      ? "Failed"
                      : "Ended"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLaunchpads.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">
              🚀
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No launchpads found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
