// src/App.js
import React, { useState } from "react";
import { FinanceProvider } from "./context/FinanceContext";
import Layout from "./components/Layout/Layout";
import SummaryCards from "./components/SummaryCards";
import ReceivablesList from "./components/ReceivablesList";
import NewReceivableForm from "./components/NewReceivableForm";
import ConciliationView from "./components/ConciliationView";

export default function App() {
  const [view, setView] = useState("dashboard");

  return (
    <FinanceProvider>
      <Layout>
        {view === "dashboard" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <SummaryCards />
          </div>
        )}
        {view === "list" && <ReceivablesList />}
        {view === "new" && <NewReceivableForm onSaved={() => setView("list")} />}
        {view === "conciliation" && <ConciliationView />}
      </Layout>
    </FinanceProvider>
  );
}
