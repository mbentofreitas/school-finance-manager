import React from 'react';

export default function Receipt({ aluno, valor, data, metodo }) {
  const handlePrint = () => {
    const newWindow = window.open('', '', 'width=600,height=400');
    newWindow.document.write(`<h2>Recibo</h2>
      <p>Aluno: ${aluno}</p>
      <p>Valor: R$ ${valor.toFixed(2)}</p>
      <p>Data: ${data || '—'}</p>
      <p>Método: ${metodo || '—'}</p>
    `);
    newWindow.print();
  };

  return <button className="small-btn" onClick={handlePrint}>Gerar Recibo</button>;
}
