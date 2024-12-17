import React, { useState } from "react";

function ProductTabsData({ details, reviews }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Product Details", content: { details } },
    { label: "Product Reviews", content: { reviews } },
    // { label: "Tab 3", content: "This is the content of Tab 3" },
  ];

  return (
    <div className="w-full  mx-auto mt-5">
      {/* Tabs */}
      <div className="flex space-x-4 border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4 border rounded-lg bg-gray-100">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
}

export default ProductTabsData;
