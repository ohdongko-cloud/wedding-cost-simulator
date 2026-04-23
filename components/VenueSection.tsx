"use client";

import React from "react";

type VenueSectionProps = {
  onChange?: (value: number) => void;
};

export default function VenueSection({ onChange }: VenueSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
      <div className="font-semibold mb-2">대관료</div>
      <button
        className="px-4 py-2 rounded-lg bg-rose-500 text-white"
        onClick={() => onChange?.(0)}
      >
        임시 대관료 0만원 적용
      </button>
    </div>
  );
}
