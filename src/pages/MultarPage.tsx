import { Car } from 'lucide-react';
import { Header } from '../components/layout/Header';

export function MultarPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Multar" icon={<Car className="w-6 h-6" />} />
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Insira a placa do veículo"
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-card rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Policial</p>
            <p className="font-medium">John Doe (512)</p>
          </div>
          <div className="bg-card rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Data</p>
            <p className="font-medium">30/10/2025</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Infrações</h3>
          <button className="w-full bg-card border border-border rounded-lg p-4 text-left text-muted-foreground hover:border-primary transition-colors">
            Selecione os artigos
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Redução de Multas</h3>
          <button className="w-full bg-card border border-border rounded-lg p-4 text-left text-muted-foreground">
            Selecione
          </button>
        </div>

        <div className="bg-card rounded-lg p-4 mb-6">
          <p className="text-sm text-muted-foreground mb-1">Valor</p>
          <p className="text-2xl font-bold text-primary">R$ 225.000</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Descrição</h3>
          <textarea
            placeholder="Digite uma breve descrição sobre a multa..."
            className="w-full bg-card border border-border rounded-lg p-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px] resize-none"
          />
        </div>

        <button className="w-full bg-primary text-primary-foreground rounded-lg py-4 font-semibold hover:bg-primary/90 transition-colors">
          EFETUAR MULTA
        </button>
      </div>
    </div>
  );
}
