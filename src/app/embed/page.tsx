"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

export default function EmbedPage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("html");

  // Sample widget settings (in a real app, this would come from state/API)
  const widgetSettings = {
    title: "Pre-Sale Widget",
    description: "Join our exclusive pre-sale and get early access!",
    primaryColor: "#3B82F6",
    backgroundColor: "#FFFFFF",
    textColor: "#1F2937",
    buttonColor: "#3B82F6",
    fontFamily: "Inter",
    fontSize: "16",
    position: "bottom-right",
    borderRadius: "8",
    shadow: true,
  };

  const generateHtmlCode = () => {
    return `<!-- Pre-Sale Widget -->
<div id="presale-widget" style="
  position: fixed;
  ${widgetSettings.position.includes("bottom") ? "bottom: 20px;" : "top: 20px;"}
  ${widgetSettings.position.includes("right") ? "right: 20px;" : "left: 20px;"}
  max-width: 320px;
  background-color: ${widgetSettings.backgroundColor};
  color: ${widgetSettings.textColor};
  font-family: ${widgetSettings.fontFamily}, sans-serif;
  font-size: ${widgetSettings.fontSize}px;
  border-radius: ${widgetSettings.borderRadius}px;
  padding: 24px;
  z-index: 9999;
  ${widgetSettings.shadow ? "box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);" : ""}
">
  <h4 style="
    margin: 0 0 8px 0;
    font-weight: bold;
    color: ${widgetSettings.primaryColor};
  ">
    ${widgetSettings.title}
  </h4>
  <p style="
    margin: 0 0 16px 0;
    font-size: 14px;
    line-height: 1.5;
  ">
    ${widgetSettings.description}
  </p>
  <button onclick="joinPresale()" style="
    width: 100%;
    padding: 8px 16px;
    background-color: ${widgetSettings.buttonColor};
    color: white;
    border: none;
    border-radius: ${widgetSettings.borderRadius}px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  ">
    Join Pre-Sale
  </button>
</div>

<script>
function joinPresale() {
  // Add your pre-sale logic here
  alert('Redirecting to pre-sale signup...');
}
</script>`;
  };

  const generateJavaScriptCode = () => {
    return `// Pre-Sale Widget JavaScript
(function() {
  const widgetConfig = ${JSON.stringify(widgetSettings, null, 2)};
  
  function createWidget() {
    const widget = document.createElement('div');
    widget.id = 'presale-widget';
    widget.innerHTML = \`
      <h4>\${widgetConfig.title}</h4>
      <p>\${widgetConfig.description}</p>
      <button onclick="joinPresale()">Join Pre-Sale</button>
    \`;
    
    // Apply styles
    Object.assign(widget.style, {
      position: 'fixed',
      [widgetConfig.position.includes('bottom') ? 'bottom' : 'top']: '20px',
      [widgetConfig.position.includes('right') ? 'right' : 'left']: '20px',
      maxWidth: '320px',
      backgroundColor: widgetConfig.backgroundColor,
      color: widgetConfig.textColor,
      fontFamily: widgetConfig.fontFamily + ', sans-serif',
      fontSize: widgetConfig.fontSize + 'px',
      borderRadius: widgetConfig.borderRadius + 'px',
      padding: '24px',
      zIndex: '9999',
      boxShadow: widgetConfig.shadow ? '0 10px 25px rgba(0, 0, 0, 0.1)' : 'none'
    });
    
    document.body.appendChild(widget);
  }
  
  // Initialize widget when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createWidget);
  } else {
    createWidget();
  }
  
  // Pre-sale function
  window.joinPresale = function() {
    // Add your pre-sale logic here
    alert('Redirecting to pre-sale signup...');
  };
})();`;
  };

  const generateReactCode = () => {
    return `import React from 'react';

const PreSaleWidget = () => {
  const widgetSettings = ${JSON.stringify(widgetSettings, null, 2)};
  
  const handleJoinPresale = () => {
    // Add your pre-sale logic here
    alert('Redirecting to pre-sale signup...');
  };
  
  const getPositionStyles = () => {
    const position = widgetSettings.position;
    return {
      position: 'fixed',
      [position.includes('bottom') ? 'bottom' : 'top']: '20px',
      [position.includes('right') ? 'right' : 'left']: '20px',
      zIndex: 9999,
    };
  };
  
  return (
    <div
      style={{
        ...getPositionStyles(),
        maxWidth: '320px',
        backgroundColor: widgetSettings.backgroundColor,
        color: widgetSettings.textColor,
        fontFamily: \`\${widgetSettings.fontFamily}, sans-serif\`,
        fontSize: \`\${widgetSettings.fontSize}px\`,
        borderRadius: \`\${widgetSettings.borderRadius}px\`,
        padding: '24px',
        boxShadow: widgetSettings.shadow ? '0 10px 25px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <h4
        style={{
          margin: '0 0 8px 0',
          fontWeight: 'bold',
          color: widgetSettings.primaryColor,
        }}
      >
        {widgetSettings.title}
      </h4>
      <p
        style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          lineHeight: '1.5',
        }}
      >
        {widgetSettings.description}
      </p>
      <button
        onClick={handleJoinPresale}
        style={{
          width: '100%',
          padding: '8px 16px',
          backgroundColor: widgetSettings.buttonColor,
          color: 'white',
          border: 'none',
          borderRadius: \`\${widgetSettings.borderRadius}px\`,
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
      >
        Join Pre-Sale
      </button>
    </div>
  );
};

export default PreSaleWidget;`;
  };

  const getCurrentCode = () => {
    switch (activeTab) {
      case "html":
        return generateHtmlCode();
      case "javascript":
        return generateJavaScriptCode();
      case "react":
        return generateReactCode();
      default:
        return generateHtmlCode();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getCurrentCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <DashboardLayout title="Embed Code">
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Widget Embed Code
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Copy and paste the code below into your website to display your
            customized pre-sale widget.
          </p>

          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-6 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
            {[
              { id: "html", label: "HTML + CSS" },
              { id: "javascript", label: "JavaScript" },
              { id: "react", label: "React" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="relative">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{getCurrentCode()}</code>
            </pre>
            <button
              onClick={copyToClipboard}
              className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors"
            >
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Integration Instructions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Integration Instructions
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                HTML + CSS
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Simply paste the HTML code into your website where you want the
                widget to appear. The widget will be positioned according to
                your settings.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                JavaScript
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Add the JavaScript code to your website&apos;s &lt;head&gt;
                section or before the closing &lt;/body&gt; tag. The widget will
                be automatically created and positioned.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                React
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Import and use the PreSaleWidget component in your React
                application. Make sure to customize the joinPresale function
                with your own logic.
              </p>
            </div>
          </div>
        </div>

        {/* Widget Preview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Widget Preview
          </h3>
          <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg p-8 min-h-96">
            <div
              className={`absolute max-w-sm ${
                widgetSettings.position === "bottom-right"
                  ? "bottom-4 right-4"
                  : widgetSettings.position === "bottom-left"
                  ? "bottom-4 left-4"
                  : widgetSettings.position === "top-right"
                  ? "top-4 right-4"
                  : widgetSettings.position === "top-left"
                  ? "top-4 left-4"
                  : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              }`}
              style={{
                backgroundColor: widgetSettings.backgroundColor,
                color: widgetSettings.textColor,
                fontFamily: widgetSettings.fontFamily,
                fontSize: `${widgetSettings.fontSize}px`,
                borderRadius: `${widgetSettings.borderRadius}px`,
                boxShadow: widgetSettings.shadow
                  ? "0 10px 25px rgba(0, 0, 0, 0.1)"
                  : "none",
              }}
            >
              <div className="p-6">
                <h4
                  className="font-bold mb-2"
                  style={{ color: widgetSettings.primaryColor }}
                >
                  {widgetSettings.title}
                </h4>
                <p className="mb-4 text-sm leading-relaxed">
                  {widgetSettings.description}
                </p>
                <button
                  className="w-full px-4 py-2 rounded font-medium text-white transition-colors"
                  style={{
                    backgroundColor: widgetSettings.buttonColor,
                    borderRadius: `${widgetSettings.borderRadius}px`,
                  }}
                >
                  Join Pre-Sale
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
