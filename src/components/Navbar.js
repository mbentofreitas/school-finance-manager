import React from 'react';

export default function Navbar({ view, onChangeView }) {
  return (
    <header className="navbar">
      <div style={{ fontWeight: 700, fontSize: 18 }}>Escola — Financeiro (MVP)</div>
      <nav className="nav-buttons">
        <button className={view === 'dashboard' ? 'active' : ''} onClick={() => onChangeView('dashboard')}>Dashboard</button>
        <button className={view === 'list' ? 'active' : ''} onClick={() => onChangeView('list')}>Contas a Receber</button>
        <button className={view === 'new' ? 'active' : ''} onClick={() => onChangeView('new')}>Novo Lançamento</button>
        <button className={view === 'conciliation' ? 'active' : ''} onClick={() => onChangeView('conciliation')}>Conciliação</button>
      </nav>
    </header>
  );
}
