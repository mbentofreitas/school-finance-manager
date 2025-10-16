// src/context/FinanceContext.js
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import * as receivablesApi from '../api/receivablesApi';

const defaultTotals = {
  totalPendente: 0,
  totalPago: 0,
  totalAtrasado: 0,
  conciliacoesPendentes: 0,
};

const FinanceContext = createContext({
  receivables: [],
  loading: true,
  addReceivable: async () => {},
  updateReceivable: async () => {},
  deleteReceivable: async () => {},
  registerPayment: async () => {},
  reconcile: async () => {},
  totals: defaultTotals,
});

export function useFinance() {
  return useContext(FinanceContext);
}

export function FinanceProvider({ children }) {
  const [receivables, setReceivables] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await receivablesApi.getAll();
        if (mounted) setReceivables(data || []);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false };
  }, []);

  async function addReceivable(payload) {
    const created = await receivablesApi.create(payload);
    setReceivables(s => [created, ...s]);
    return created;
  }
  async function updateReceivable(id, changes) {
    const updated = await receivablesApi.update(id, changes);
    setReceivables(s => s.map(r => r.id === id ? { ...r, ...updated } : r));
  }
  async function deleteReceivable(id) {
    await receivablesApi.remove(id);
    setReceivables(s => s.filter(r => r.id !== id));
  }
  async function registerPayment(id, payload) {
    const updated = await receivablesApi.registerPayment(id, payload);
    setReceivables(s => s.map(r => r.id === id ? { ...r, ...updated } : r));
  }
  async function reconcile(id) {
    const updated = await receivablesApi.reconcile(id);
    setReceivables(s => s.map(r => r.id === id ? { ...r, ...updated } : r));
  }

  const totals = useMemo(() => {
    if (!Array.isArray(receivables) || receivables.length === 0) return defaultTotals;
    const sum = (arr) => arr.reduce((s, r) => s + (Number(r.valor) || 0), 0);
    const totalPendente = sum(receivables.filter(r => r.status === 'pendente'));
    const totalPago = sum(receivables.filter(r => r.status === 'pago'));
    const totalAtrasado = sum(receivables.filter(r => r.status === 'atrasado'));
    const conciliacoesPendentes = receivables.filter(r => r.status === 'pago' && !r.conciliado).length;
    return { totalPendente, totalPago, totalAtrasado, conciliacoesPendentes };
  }, [receivables]);

  const value = {
    receivables,
    loading,
    addReceivable,
    updateReceivable,
    deleteReceivable,
    registerPayment,
    reconcile,
    totals, // <- sempre presente
  };

  return (
    <FinanceContext.Provider value={value}>
      {children}
    </FinanceContext.Provider>
  );
}
