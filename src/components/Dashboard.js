import React from 'react';
import { useFinance } from '../context/FinanceContext';

export default function Dashboard() {
  const { receivables } = useFinance();

  const total = receivables.reduce((sum, r) => sum + r.valor, 0);
  const pagos = receivables.filter(r => r.pago).length;
  const pendentes = receivables.filter(r => !r.pago).length;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total de lançamentos: {receivables.length}</p>
      <p>Pagos: {pagos}</p>
      <p>Pendentes: {pendentes}</p>
      <p>Valor total: R$ {total.toFixed(2)}</p>
    </div>
  );
}
