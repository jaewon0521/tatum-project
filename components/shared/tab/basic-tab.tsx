"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function BasicTab() {
  const [activeTab, setActiveTab] = useState("cloud");

  const tabs = [
    { id: "cloud", label: "Cloud" },
    { id: "cloud-group", label: "Cloud Group" },
    { id: "cloud-watcher", label: "Cloud Watcher" },
    { id: "schedule", label: "Schedule" },
  ];

  return (
    <nav className="flex gap-1 border-b-1 border-blue-600 font-semibold text-xs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "px-3 py-2 rounded-t-sm cursor-pointer",
            activeTab === tab.id
              ? "text-blue-600"
              : "bg-gray-100 text-gray-400 hover:text-gray-500"
          )}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
