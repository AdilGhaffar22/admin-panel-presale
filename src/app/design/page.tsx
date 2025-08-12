"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { createConfig, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { base, baseSepolia, Chain, mainnet } from "viem/chains";
import { PreSale } from "widget-button";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { getL1BatchBlockRange } from "viem/zksync";

export const supportedChains: readonly [Chain, ...Chain[]] = [
  base,
  mainnet,
  baseSepolia,
];
export const transports = {
  [base.id]: http(),
  [mainnet.id]: http(),
  [baseSepolia.id]: http(),
};
export const defaultChain = base;

export const config = createConfig({
  multiInjectedProviderDiscovery: false,
  chains: supportedChains,
  ssr: true,
  transports: transports,
});

const queryClient = new QueryClient();

interface WidgetSettings {
  title: string;
  description: string;
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  fontFamily: string;
  fontSize: string;
  position: string;
  borderRadius: string;
  shadow: boolean;
}

export default function DesignPage() {
  const [settings, setSettings] = useState<WidgetSettings>({
    title: "Pre-Sale Widget",
    description: "Join our exclusive pre-sale and get early access!",
    primaryColor: "#3B82F6",
    backgroundColor: "#FFFFFF",
    textColor: "#1F2937",
    // buttonColor: "#ff0000",
    buttonColor: "#3B82F6",
    fontFamily: "Inter",
    fontSize: "16",
    position: "center",
    borderRadius: "8",
    shadow: true,
  });

  const handleSettingChange = (
    key: keyof WidgetSettings,
    value: string | boolean
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const fontOptions = ["Inter", "Roboto", "Open Sans", "Lato", "Montserrat"];
  const positionOptions = [
    { value: "center", label: "Center" },
    { value: "bottom-right", label: "Bottom Right" },
    { value: "bottom-left", label: "Bottom Left" },
    { value: "top-right", label: "Top Right" },
    { value: "top-left", label: "Top Left" },
  ];

  return (
    <DashboardLayout title="Design">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Settings Panel */}
        <div className="space-y-6">
          {/* Widget Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Widget Content
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Widget Title
                </label>
                <input
                  type="text"
                  value={settings.title}
                  onChange={(e) => handleSettingChange("title", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={settings.description}
                  onChange={(e) =>
                    handleSettingChange("description", e.target.value)
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Colors
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Primary Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={settings.primaryColor}
                    onChange={(e) =>
                      handleSettingChange("primaryColor", e.target.value)
                    }
                    className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={settings.primaryColor}
                    onChange={(e) =>
                      handleSettingChange("primaryColor", e.target.value)
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Background Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={settings.backgroundColor}
                    onChange={(e) =>
                      handleSettingChange("backgroundColor", e.target.value)
                    }
                    className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={settings.backgroundColor}
                    onChange={(e) =>
                      handleSettingChange("backgroundColor", e.target.value)
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Text Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={settings.textColor}
                    onChange={(e) =>
                      handleSettingChange("textColor", e.target.value)
                    }
                    className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={settings.textColor}
                    onChange={(e) =>
                      handleSettingChange("textColor", e.target.value)
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Button Color
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={settings.buttonColor}
                    onChange={(e) =>
                      handleSettingChange("buttonColor", e.target.value)
                    }
                    className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={settings.buttonColor}
                    onChange={(e) =>
                      handleSettingChange("buttonColor", e.target.value)
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Typography & Layout */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Typography & Layout
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Font Family
                  </label>
                  <select
                    value={settings.fontFamily}
                    onChange={(e) =>
                      handleSettingChange("fontFamily", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    {fontOptions.map((font) => (
                      <option key={font} value={font}>
                        {font}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Font Size
                  </label>
                  <input
                    type="number"
                    value={settings.fontSize}
                    onChange={(e) =>
                      handleSettingChange("fontSize", e.target.value)
                    }
                    min="12"
                    max="24"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Position
                </label>
                <select
                  value={settings.position}
                  onChange={(e) =>
                    handleSettingChange("position", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  {positionOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Border Radius (px)
                  </label>
                  <input
                    type="number"
                    value={settings.borderRadius}
                    onChange={(e) =>
                      handleSettingChange("borderRadius", e.target.value)
                    }
                    min="0"
                    max="20"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Shadow
                  </label>
                  <div className="flex items-center h-10">
                    <input
                      type="checkbox"
                      checked={settings.shadow}
                      onChange={(e) =>
                        handleSettingChange("shadow", e.target.checked)
                      }
                      className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Enable shadow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Save Changes
          </button>
        </div>

        {/* Preview Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          {/* <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Preview
          </h3>
          <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg p-8 min-h-96">
            <div
              className={`absolute max-w-sm ${
                settings.position === "bottom-right"
                  ? "bottom-4 right-4"
                  : settings.position === "bottom-left"
                  ? "bottom-4 left-4"
                  : settings.position === "top-right"
                  ? "top-4 right-4"
                  : settings.position === "top-left"
                  ? "top-4 left-4"
                  : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              }`}
              style={{
                backgroundColor: settings.backgroundColor,
                color: settings.textColor,
                fontFamily: settings.fontFamily,
                fontSize: `${settings.fontSize}px`,
                borderRadius: `${settings.borderRadius}px`,
                boxShadow: settings.shadow
                  ? "0 10px 25px rgba(0, 0, 0, 0.1)"
                  : "none",
              }}
            >
              <div className="p-6">
                <h4
                  className="font-bold mb-2"
                  style={{ color: settings.primaryColor }}
                >
                  {settings.title}
                </h4>
                <p className="mb-4 text-sm leading-relaxed">
                  {settings.description}
                </p>
                <button
                  className="w-full px-4 py-2 rounded font-medium text-white transition-colors"
                  style={{
                    backgroundColor: settings.buttonColor,
                    borderRadius: `${settings.borderRadius}px`,
                  }}
                >
                  Join Pre-Sale
                </button>
              </div>
            </div>
          </div> */}

          <QueryClientProvider client={queryClient}>
            <WagmiProvider config={config}>
              <DynamicContextProvider
                settings={{
                  environmentId: "your-environment-id",
                  walletConnectors: [],
                }}
              >
                <PreSale
                  title={settings.title}
                  theme="dark"
                  onBuyCard={() => alert("Working Bro!")}
                  buttonStyle={{ backgroundColor: settings.buttonColor }}
                  // buttonStyle={`!bg-[${settings.buttonColor}]`}
                />
              </DynamicContextProvider>
            </WagmiProvider>
          </QueryClientProvider>
        </div>
      </div>
    </DashboardLayout>
  );
}
