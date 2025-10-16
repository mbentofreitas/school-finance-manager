import React, { useState } from 'react';
import { useFinance } from '../context/FinanceContext';

export default function NewReceivableForm() {
  const { addReceivable } = useFinance();
  const [aluno, setAluno] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReceivable({ aluno, descricao, valor: parseFloat(valor) });
    setAluno(''); setDescricao(''); setValor('');
  };

  return (
    <div>
      <h2>Novo Lançamento</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Aluno" value={aluno} onChange={e => setAluno(e.target.value)} required />
        <input placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} required />
        <input type="number" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} required />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
