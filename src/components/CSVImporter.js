import React from 'react';
import Papa from 'papaparse';

export default function CSVImporter({ receivables, onMatch }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      complete: function(results) {
        const matchedIds = [];
        results.data.forEach(row => {
          receivables.forEach(r => {
            if (!r.conciliado && r.valor === parseFloat(row.Valor) && r.aluno === row.Aluno) {
              matchedIds.push(r.id);
            }
          });
        });
        onMatch(matchedIds);
      }
    });
  };

  return <input type="file" accept=".csv" onChange={handleFile} />;
}
