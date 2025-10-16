import React from 'react';
import { useFinance } from '../context/FinanceContext';
import CSVImporter from './CSVImporter';

export default function ConciliationView() {
  const { receivables, reconcile } = useFinance();
  const unpaid = receivables.filter(r => r.pago && !r.conciliado);

  return (
    <div>
      <h2>Conciliação Financeira (manual / CSV)</h2>
      <p>Você pode conciliar manualmente ou importar um extrato CSV e conciliar automaticamente por valor/data.</p>
      <CSVImporter receivables={receivables} onMatch={ids => ids.forEach(id => reconcile(id))} />

      <h3 style={{ marginTop: 16 }}>Pagos não conciliados</h3>
      <table>
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Data Pag.</th>
            <th>Conta</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {unpaid.map(r => (
            <tr key={r.id}>
              <td>{r.aluno}</td>
              <td>{r.descricao}</td>
              <td>R$ {r.valor.toFixed(2)}</td>
              <td>{r.dataPagamento || '—'}</td>
              <td>{r.contaBancaria || '—'}</td>
              <td>
                <button className="small-btn" onClick={() => reconcile(r.id)}>Conciliar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
