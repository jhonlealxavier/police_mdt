import { Trophy } from 'lucide-react';
import { Header } from '../components/layout/Header';

export function RankingPage() {
  const rankings = [
    { position: 1, name: 'John Doe', badge: '512', rank: 'Sargento', count: 814, status: 'online' as const },
    { position: 2, name: 'John Doe', badge: '512', rank: 'Sargento', count: 814, status: 'online' as const },
    { position: 3, name: 'John Doe', badge: '512', rank: 'Sargento', count: 814, status: 'online' as const },
    { position: 4, name: 'John Doe', badge: '512', rank: 'Sargento', count: 814, status: 'online' as const },
    { position: 5, name: 'John Doe', badge: '512', rank: 'Sargento', count: 814, status: 'online' as const },
    { position: 6, name: 'John Doe', badge: '512', rank: 'Sargento', count: 814, status: 'online' as const },
    { position: 7, name: 'John Doe', badge: '512', rank: 'Sargento', count: 814, status: 'online' as const },
  ];

  return (
    <div className="flex flex-col h-full">
      <Header title="Ranking" icon={<Trophy className="w-6 h-6" />} />
      
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button className="px-6 py-2 bg-white text-black rounded-lg font-medium">
            PRISÕES
          </button>
          <button className="px-6 py-2 text-muted-foreground hover:text-foreground">
            MULTAS
          </button>
          <button className="px-6 py-2 text-muted-foreground hover:text-foreground">
            BOLETINS
          </button>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[80px_1fr_200px_150px_100px] gap-4 px-4 py-3 text-sm text-muted-foreground mb-2">
          <div>#</div>
          <div>Nome</div>
          <div>Patente</div>
          <div>Prisões</div>
          <div>Status</div>
        </div>

        {/* Ranking List */}
        <div className="space-y-2">
          {rankings.map((item) => (
            <div
              key={item.position}
              className="bg-card rounded-lg p-4 grid grid-cols-[80px_1fr_200px_150px_100px] gap-4 items-center"
            >
              <div className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center font-bold">
                {item.position}°
              </div>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">({item.badge})</p>
              </div>
              <div className="text-foreground">{item.rank}</div>
              <div className="text-foreground">{item.count}</div>
              <div>
                <span className="w-2 h-2 bg-success rounded-full inline-block"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
