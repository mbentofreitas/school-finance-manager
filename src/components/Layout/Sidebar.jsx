// src/components/Layout/Sidebar.jsx
import React from "react";
import { Home, FilePlus, ListChecks, Banknote } from "lucide-react";

const NAVIGATION_ITEMS = [
  { id: "dashboard", icon: Home, label: "Dashboard" },
  { id: "list", icon: ListChecks, label: "Recebimentos" },
  { id: "new", icon: FilePlus, label: "Novo Lançamento" },
  { id: "conciliation", icon: Banknote, label: "Conciliação" },
];

export default function Sidebar({ currentView, onNavigate }) {
  return (
    <aside className="w-60 bg-white shadow-md flex flex-col">
      <div className="p-6 text-xl font-bold text-indigo-600 border-b">Financeiro</div>

      <nav className="flex-1 p-4 space-y-2">
        {NAVIGATION_ITEMS.map(({ id, icon: Icon, label }) => {
          const isActive = currentView === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => onNavigate?.(id)}
              className={`flex items-center w-full p-3 rounded-md text-left transition ${
                isActive
                  ? "bg-indigo-100 text-indigo-700"
                  : "hover:bg-indigo-50"
              }`}
              aria-pressed={isActive}
            >
              <Icon
                className={`w-5 h-5 mr-3 ${
                  isActive ? "text-indigo-600" : "text-indigo-500"
                }`}
              />
              {label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
