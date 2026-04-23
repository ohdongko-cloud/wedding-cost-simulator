"use client";

import React from "react";

type SummaryCardProps = {
  meal?: number;
  venue?: number;
  studio?: number;
  dress?: number;
  makeup?: number;
  extra?: number;
};

export default function SummaryCard({
  meal = 0,
  venue = 0,
  studio = 0,
  dress = 0,
  makeup = 0,
  extra = 0,
}: SummaryCardProps) {
  const total = meal + venue + studio + dress + makeup + extra;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-5 mb-6">
      <div className="text-sm text-gray-500 mb-2">현재 예상 비용</div>
      <div className="text-3xl font-bold text-rose-500">
        {total.toLocaleString("ko-KR")}만원
      </div>
    </div>
  );
}
