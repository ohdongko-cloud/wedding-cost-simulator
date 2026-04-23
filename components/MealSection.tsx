"use client";

import React from "react";

type MealSectionProps = {
  onChange?: (value: number) => void;
};

export default function MealSection({ onChange }: MealSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
      <div className="font-semibold mb-2">식대</div>
      <button
        className="px-4 py-2 rounded-lg bg-rose-500 text-white"
        onClick={() => onChange?.(0)}
      >
        임시 식대 0만원 적용
      </button>
    </div>
  );
}
