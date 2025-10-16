// src/components/Layout/Sidebar.jsx
import React from "react";
import { Home, FilePlus, ListChecks, Banknote } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white shadow-md flex flex-col">
      <div className="p-6 text-xl font-bold text-indigo-600 border-b">Financeiro</div>

      <nav className="flex-1 p-4 space-y-2">
        <button className="flex items-center w-full p-3 rounded-md hover:bg-indigo-50 text-left transition">
          <Home className="w-5 h-5 mr-3 text-indigo-500" /> Dashboard
        </button>
        <button className="flex items-center w-full p-3 rounded-md hover:bg-indigo-50 text-left transition">
          <ListChecks className="w-5 h-5 mr-3 text-indigo-500" /> Recebimentos
        </button>
        <button className="flex items-center w-full p-3 rounded-md hover:bg-indigo-50 text-left transition">
          <FilePlus className="w-5 h-5 mr-3 text-indigo-500" /> Novo Lançamento
        </button>
        <button className="flex items-center w-full p-3 rounded-md hover:bg-indigo-50 text-left transition">
          <Banknote className="w-5 h-5 mr-3 text-indigo-500" /> Conciliação
        </button>
      </nav>
    </aside>
  );
}
