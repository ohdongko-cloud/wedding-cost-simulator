"use client";

import React from "react";
import { CheckItem } from "../lib/types";

type ItemTableProps = {
  title?: string;
  emoji?: string;
  items?: CheckItem[];
  colorClass?: string;
  borderColor?: string;
  accentColor?: string;
  totalMan?: number;
  onToggle?: (id: string) => void;
  onCustomChange?: (id: string, val: string) => void;
  onAddRow?: (item: CheckItem) => void;
  onRemoveRow?: (id: string) => void;
  onAvgPriceChange?: (id: string, val: string) => void;
  onNameChange?: (id: string, val: string) => void;
};

export default function ItemTable({
  title = "항목",
  emoji = "📋",
  items = [],
  totalMan = 0,
}: ItemTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold">
          {emoji} {title}
        </div>
        <div className="text-sm text-gray-500">{totalMan.toLocaleString("ko-KR")}만원</div>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border rounded-lg px-3 py-2"
          >
            <span>{item.name}</span>
            <span className="text-sm text-gray-500">
              {item.avgPrice ?? 0}만원
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
