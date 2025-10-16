import React from "react";
import Card from "../components/ui/Card";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <Card title="Recebimentos pendentes">
        <div className="text-2xl font-semibold">R$ 23.450,00</div>
        <div className="text-sm text-gray-500 mt-2">12 títulos vencidos</div>
      </Card>

      <Card title="Recebimentos previstos">
        <div className="text-2xl font-semibold">R$ 48.120,00</div>
        <div className="text-sm text-gray-500 mt-2">Mês atual</div>
      </Card>

      <Card title="Últimas conciliações">
        <ul className="text-sm text-gray-700 space-y-2">
          <li>01/10 - Pagamento via PIX - R$ 1.200,00</li>
          <li>28/09 - Depósito bancário - R$ 4.500,00</li>
        </ul>
      </Card>

      <div className="lg:col-span-3">
        <Card title="Visão geral">
          <div className="h-48 flex items-center justify-center text-gray-400">Gráfico (placeholder)</div>
        </Card>
      </div>

    </div>
  );
}
