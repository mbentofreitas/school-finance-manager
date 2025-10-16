import React from "react";

export default function Card({ title, children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl p-4 shadow-sm border ${className}`}>
      {title && <div className="text-sm font-medium text-gray-600 mb-2">{title}</div>}
      <div>{children}</div>
    </div>
  );
}
