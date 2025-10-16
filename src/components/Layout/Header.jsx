// src/components/Layout/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white px-6 py-4 shadow-sm">
      <h1 className="text-xl font-semibold text-gray-700">Painel Financeiro</h1>
      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-600">Maiara</span>
        <img
          src="https://ui-avatars.com/api/?name=Maiara&background=4f46e5&color=fff"
          alt="avatar"
          className="w-9 h-9 rounded-full shadow"
        />
      </div>
    </header>
  );
}
