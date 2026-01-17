import { Search } from 'lucide-react';
import { Header } from '../components/layout/Header';

export function ConsultarPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Consultar" icon={<Search className="w-6 h-6" />} />
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="w-full">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Insira o nome do indivíduo ou placa do veículo..."
              className="w-full bg-card border border-border rounded-lg pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mt-12 flex flex-col items-center justify-center text-center py-20">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Search className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Nenhum resultado</h2>
            <p className="text-muted-foreground max-w-md">
              Use a barra de pesquisa para realizar a busca pelo indivíduo pelo nome ou placa do veículo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
