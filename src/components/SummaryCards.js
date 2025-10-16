// src/components/SummaryCards.js
import React from 'react';
import { useFinance } from '../context/FinanceContext';

export default function SummaryCards() {
  const finance = useFinance() || {};
  const totals = finance.totals || {
    totalPendente: 0,
    totalPago: 0,
    totalAtrasado: 0,
    conciliacoesPendentes: 0,
  };

  return (
    <div className="card-grid">
      <div className="card"><div>Total Pendente</div><div style={{fontWeight:700,marginTop:8}}>R$ {totals.totalPendente.toFixed(2)}</div></div>
      <div className="card"><div>Total Recebido</div><div style={{fontWeight:700,marginTop:8}}>R$ {totals.totalPago.toFixed(2)}</div></div>
      <div className="card"><div>Total Atrasado</div><div style={{fontWeight:700,marginTop:8}}>R$ {totals.totalAtrasado.toFixed(2)}</div></div>
      <div className="card"><div>Conciliações Pendentes</div><div style={{fontWeight:700,marginTop:8}}>{totals.conciliacoesPendentes}</div></div>
    </div>
  );
}
