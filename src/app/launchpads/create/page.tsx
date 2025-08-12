"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

interface FormData {
  // Chain & Token
  chain: string;
  tokenAddress: string;
  currency: string;
  feeOption: string;
  listingOption: string;
  affiliateProgram: string;

  // Presale Information
  presaleRate: string;
  softCap: string;
  hardCap: string;
  minimumBuy: string;
  maximumBuy: string;
  refundType: string;
  router: string;
  liquidity: string;
  listingRate: string;

  // Presale Details
  startTime: string;
  endTime: string;
  liquidityLockup: string;

  // Additional Info
  logoUrl: string;
  website: string;
  facebook: string;
  twitter: string;
  github: string;
  telegram: string;
  instagram: string;
  discord: string;
  reddit: string;
  description: string;
}

const chains = [
  //   { id: "evm", name: "EVM chain (ETH, BNB, POL, AVAX...)", icon: "🔗" },
  { id: "bnb", name: "BNB Chain", icon: "🟡" },
  { id: "ethereum", name: "Ethereum", icon: "🔵" },
  { id: "arbitrum", name: "Arbitrum", icon: "🔷" },
  { id: "polygon", name: "Polygon", icon: "🟣" },
  { id: "avax", name: "AVAX", icon: "🔴" },
  { id: "cronos", name: "Cronos", icon: "⚫" },
  { id: "alvey", name: "Alvey", icon: "🟢" },
  { id: "bitrock", name: "Bitrock", icon: "⚪" },
  { id: "core", name: "Core", icon: "🟠" },
  { id: "dogechain", name: "Dogechain", icon: "🟤" },
  { id: "pulsechain", name: "PulseChain", icon: "💙" },
  { id: "base", name: "Base", icon: "🔵" },
  { id: "zetachain", name: "ZetaChain", icon: "🟢" },
  { id: "unichain", name: "Unichain", icon: "🦄" },
  { id: "solana", name: "Solana", icon: "⚫" },
  { id: "eclipse", name: "Eclipse", icon: "🌙" },
  { id: "ton", name: "The Open Network (TON)", icon: "🔵" },
  { id: "sui", name: "Sui", icon: "💧" },
];

export default function CreatePresalePage() {
  const [formData, setFormData] = useState<FormData>({
    chain: "evm",
    tokenAddress: "",
    currency: "ETH",
    feeOption: "5% ETH raised only",
    listingOption: "Auto Listing",
    affiliateProgram: "Disable Affiliate",
    presaleRate: "",
    softCap: "",
    hardCap: "",
    minimumBuy: "",
    maximumBuy: "",
    refundType: "Refund",
    router: "Pancakeswap",
    liquidity: "",
    listingRate: "",
    startTime: "",
    endTime: "",
    liquidityLockup: "",
    logoUrl: "",
    website: "",
    facebook: "",
    twitter: "",
    github: "",
    telegram: "",
    instagram: "",
    discord: "",
    reddit: "",
    description: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert("Presale created successfully!");
  };

  return (
    <DashboardLayout title="Create Presale">
      <div className="max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-8"
        >
          {/* Chain & Token */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Chain & Token
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Chain
                </label>
                <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
                  {chains.map((chain) => (
                    <label
                      key={chain.id}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                        formData.chain === chain.id
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                          : "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      <input
                        type="radio"
                        name="chain"
                        value={chain.id}
                        checked={formData.chain === chain.id}
                        onChange={(e) =>
                          handleInputChange("chain", e.target.value)
                        }
                        className="mr-3"
                      />
                      <span className="mr-2">{chain.icon}</span>
                      <span className="text-gray-900 dark:text-white">
                        {chain.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Token Address
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={formData.tokenAddress}
                    onChange={(e) =>
                      handleInputChange("tokenAddress", e.target.value)
                    }
                    placeholder="Enter token address"
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <div className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md">
                    Or
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Create Token
                  </button>
                </div>
                <p className="text-sm text-blue-500 mt-1">
                  Creation Fee: 0.2 ETH. (Balance: 0 ETH)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Currency
                </label>
                <div className="space-y-2">
                  {["ETH", "USDT", "USDC"].map((currency) => (
                    <label key={currency} className="flex items-center">
                      <input
                        type="radio"
                        name="currency"
                        value={currency}
                        checked={formData.currency === currency}
                        onChange={(e) =>
                          handleInputChange("currency", e.target.value)
                        }
                        className="mr-2"
                      />
                      <span className="text-gray-900 dark:text-white">
                        {currency}
                      </span>
                    </label>
                  ))}
                </div>
                <p className="text-sm text-blue-500 mt-1">
                  Users will pay with ETH for your token
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Fee options
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="feeOption"
                    value="5% ETH raised only"
                    checked={formData.feeOption === "5% ETH raised only"}
                    onChange={(e) =>
                      handleInputChange("feeOption", e.target.value)
                    }
                    className="mr-2"
                  />
                  <span className="text-gray-900 dark:text-white">
                    5% ETH raised only
                  </span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Listing Options
                </label>
                <div className="space-y-2">
                  {[
                    "Auto Listing",
                    "Manual Listing (Recommended for Seed/Private Sale)",
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="listingOption"
                        value={option}
                        checked={formData.listingOption === option}
                        onChange={(e) =>
                          handleInputChange("listingOption", e.target.value)
                        }
                        className="mr-2"
                      />
                      <span className="text-gray-900 dark:text-white">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Affiliate Program
                </label>
                <div className="space-y-2">
                  {["Disable Affiliate", "Enable Affiliate"].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="affiliateProgram"
                        value={option}
                        checked={formData.affiliateProgram === option}
                        onChange={(e) =>
                          handleInputChange("affiliateProgram", e.target.value)
                        }
                        className="mr-2"
                      />
                      <span className="text-gray-900 dark:text-white">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Presale Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Presale Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Presale Rate
                </label>
                <input
                  type="number"
                  value={formData.presaleRate}
                  onChange={(e) =>
                    handleInputChange("presaleRate", e.target.value)
                  }
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <p className="text-sm text-gray-500 mt-1">
                  If I pay 1 ETH how many tokens will I receive?
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Soft Cap (ETH)
                </label>
                <input
                  type="number"
                  value={formData.softCap}
                  onChange={(e) => handleInputChange("softCap", e.target.value)}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Soft cap must be ≥ 50% of hard cap!
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Hard Cap (ETH)
                </label>
                <input
                  type="number"
                  value={formData.hardCap}
                  onChange={(e) => handleInputChange("hardCap", e.target.value)}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Minimum Buy (ETH)
                </label>
                <input
                  type="number"
                  value={formData.minimumBuy}
                  onChange={(e) =>
                    handleInputChange("minimumBuy", e.target.value)
                  }
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Maximum Buy (ETH)
                </label>
                <input
                  type="number"
                  value={formData.maximumBuy}
                  onChange={(e) =>
                    handleInputChange("maximumBuy", e.target.value)
                  }
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Refund type
                </label>
                <select
                  value={formData.refundType}
                  onChange={(e) =>
                    handleInputChange("refundType", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="Refund">Refund</option>
                  <option value="Burn">Burn</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Router
                </label>
                <select
                  value={formData.router}
                  onChange={(e) => handleInputChange("router", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="Pancakeswap">Pancakeswap</option>
                  <option value="Uniswap">Uniswap</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Liquidity (%)
                </label>
                <input
                  type="number"
                  value={formData.liquidity}
                  onChange={(e) =>
                    handleInputChange("liquidity", e.target.value)
                  }
                  placeholder="0"
                  min="51"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter the percentage of raised funds that should be allocated
                  to Liquidity on (Min 51%, Max 100%)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Listing Rate
                </label>
                <input
                  type="number"
                  value={formData.listingRate}
                  onChange={(e) =>
                    handleInputChange("listingRate", e.target.value)
                  }
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <p className="text-sm text-gray-500 mt-1">
                  1 ETH = ? Your token
                </p>
              </div>
            </div>
          </div>

          {/* Presale Details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Presale Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Start Time (UTC)
                </label>
                <input
                  type="datetime-local"
                  value={formData.startTime}
                  onChange={(e) =>
                    handleInputChange("startTime", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  End Time (UTC)
                </label>
                <input
                  type="datetime-local"
                  value={formData.endTime}
                  onChange={(e) => handleInputChange("endTime", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Liquidity Lockup (minutes)
                </label>
                <input
                  type="number"
                  value={formData.liquidityLockup}
                  onChange={(e) =>
                    handleInputChange("liquidityLockup", e.target.value)
                  }
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Additional Info
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Logo URL
                </label>
                <input
                  type="url"
                  value={formData.logoUrl}
                  onChange={(e) => handleInputChange("logoUrl", e.target.value)}
                  placeholder="Ex: https://..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  placeholder="Ex: https://..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Facebook
                </label>
                <input
                  type="url"
                  value={formData.facebook}
                  onChange={(e) =>
                    handleInputChange("facebook", e.target.value)
                  }
                  placeholder="Ex: https://facebook.com/..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Twitter
                </label>
                <input
                  type="url"
                  value={formData.twitter}
                  onChange={(e) => handleInputChange("twitter", e.target.value)}
                  placeholder="Ex: https://twitter.com/..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Github
                </label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => handleInputChange("github", e.target.value)}
                  placeholder="Ex: https://github.com/..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Telegram
                </label>
                <input
                  type="url"
                  value={formData.telegram}
                  onChange={(e) =>
                    handleInputChange("telegram", e.target.value)
                  }
                  placeholder="Ex: https://t.me/..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Instagram
                </label>
                <input
                  type="url"
                  value={formData.instagram}
                  onChange={(e) =>
                    handleInputChange("instagram", e.target.value)
                  }
                  placeholder="Ex: https://instagram.com/..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Discord
                </label>
                <input
                  type="url"
                  value={formData.discord}
                  onChange={(e) => handleInputChange("discord", e.target.value)}
                  placeholder="Ex: https://discord.gg/..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Reddit
                </label>
                <input
                  type="url"
                  value={formData.reddit}
                  onChange={(e) => handleInputChange("reddit", e.target.value)}
                  placeholder="Ex: https://reddit.com/..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 mt-6">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Ex: This is the best project..."
                rows={4}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Create Presale
            </button>
          </div>
        </form>

        {/* Warnings */}
        <div className="mt-6 space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  Important Notes:
                </h3>
                <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Presale creation is currently unavailable via Ledger
                      devices. If you connected by using Ledger, please
                      disconnect your Ledger wallet and reconnect using a
                      supported method.
                    </li>
                    <li>
                      For auto listing, after you finalize the pool your token
                      will be auto listed on DEX.
                    </li>
                    <li>
                      Insufficient creation fee. Need at least 0.2 ETH +
                      transaction fee 0.01 ETH to create presale (PinkSale
                      won&apos;t charge the transaction fees. We just ensure you
                      have enough transaction fees to create a presale and
                      update the presale setting when launched). Your balance is
                      0 ETH.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Please exclude PinkSale Factory address{" "}
              <span className="font-mono">0x35b...bF21</span> 🔗 from fees,
              rewards, max tx amount to start creating pools
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
