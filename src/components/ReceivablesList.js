import React from 'react';
import { useFinance } from '../context/FinanceContext';
import Receipt from './Receipt';

export default function ReceivablesList() {
  const { receivables, markPaid } = useFinance();

  return (
    <div>
      <h2>Contas a Receber</h2>
      <table>
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {receivables.map(r => (
            <tr key={r.id}>
              <td>{r.aluno}</td>
              <td>{r.descricao}</td>
              <td>R$ {r.valor.toFixed(2)}</td>
              <td>{r.pago ? 'Pago' : 'Pendente'}</td>
              <td>
                {!r.pago && <button className="small-btn" onClick={() => markPaid(r.id, new Date().toLocaleDateString(), 'Dinheiro')}>Marcar Pago</button>}
                <Receipt aluno={r.aluno} valor={r.valor} data={r.dataPagamento} metodo={r.contaBancaria} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
