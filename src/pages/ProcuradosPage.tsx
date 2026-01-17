import { Users, Eye, Car } from 'lucide-react';
import { Header } from '../components/layout/Header';

export function ProcuradosPage() {
  const wanted = [
    { id: '1', name: 'John Doe', reason: 'Lorem Ipsum is simply dummy text of the printing.', date: 'Há 3 dias' },
    { id: '2', name: 'John Doe', reason: 'Lorem Ipsum is simply dummy text of the printing.', date: 'Há 3 dias' },
    { id: '3', name: 'John Doe', reason: 'Lorem Ipsum is simply dummy text of the printing.', date: 'Há 3 dias' },
  ];

  const vehicles = [
    { id: '1', brand: 'Volkswagen', model: 'Golf GTI', plate: '3SAM123', owner: 'John Doe', date: 'Há 5 dias' },
    { id: '2', brand: 'Volkswagen', model: 'Golf GTI', plate: '3SAM123', owner: 'John Doe', date: 'Há 5 dias' },
    { id: '3', brand: 'Volkswagen', model: 'Golf GTI', plate: '3SAM123', owner: 'John Doe', date: 'Há 5 dias' },
  ];

  return (
    <div className="flex flex-col h-full">
      <Header title="Procurados" icon={<Users className="w-6 h-6" />} />
      
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Indivíduos */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Indivíduos</h2>
          <div className="space-y-3">
            {wanted.map((person) => (
              <div key={person.id} className="bg-card rounded-lg p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Nome</p>
                      <p className="font-medium">{person.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Motivo</p>
                      <p className="text-sm">{person.reason}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Data</p>
                      <p className="text-sm">{person.date}</p>
                    </div>
                  </div>
                </div>
                <button className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Eye className="w-5 h-5 text-primary-foreground" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Veículos */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Veículos</h2>
          <div className="space-y-3">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-card rounded-lg p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Car className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1 grid grid-cols-5 gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Marca</p>
                    <p className="font-medium">{vehicle.brand}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Modelo</p>
                    <p className="font-medium">{vehicle.model}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Placa</p>
                    <p className="font-medium">{vehicle.plate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Dono</p>
                    <p className="font-medium">{vehicle.owner}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Data</p>
                    <p className="font-medium">{vehicle.date}</p>
                  </div>
                </div>
                <button className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Eye className="w-5 h-5 text-primary-foreground" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
