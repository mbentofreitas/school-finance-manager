import React, { useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';
import Receipt from './Receipt';

export default function UnreconciledList() {
  const { receivables, reconcile } = useContext(FinanceContext);

  const naoConciliados = receivables.filter(r => r.paid && !r.reconciled);

  if (naoConciliados.length === 0) return <p>Não há pagamentos não conciliados.</p>;

  return (
    <div>
      <h2>Pagamentos Não Conciliados</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Vencimento</th>
            <th>Método</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {naoConciliados.map(r => (
            <tr key={r.id}>
              <td>{r.aluno}</td>
              <td>{r.description}</td>
              <td>R$ {r.amount.toFixed(2)}</td>
              <td>{r.dueDate}</td>
              <td>{r.paymentMethod}</td>
              <td>
                <button onClick={() => reconcile(r.id)} style={btnStyle}>Conciliar</button>
                <Receipt aluno={r.aluno} valor={r.amount} data={r.dueDate} metodo={r.paymentMethod} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableStyle = { width:'100%', borderCollapse:'collapse', marginTop:'10px' };
const btnStyle = { padding:'5px 8px', marginRight:'5px', cursor:'pointer' };
