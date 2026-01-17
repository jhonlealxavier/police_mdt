// Serviço de comunicação com FiveM (Lua)


interface FiveMResponse {
  success: boolean;
  data?: unknown;
  error?: string;
}

class FiveMService {
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = import.meta.env.DEV;
  }

  /**
   * Envia uma mensagem para o lado Lua do FiveM
   */
  async send<T = unknown>(type: string, data?: unknown): Promise<T> {
    if (this.isDevelopment) {
      console.log('[FiveM Dev] Sending:', { type, data });
      // Em desenvolvimento, retorna dados mockados
      return this.getMockData(type) as T;
    }

    return new Promise((resolve, reject) => {
      fetch(`https://${GetParentResourceName()}/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response: FiveMResponse) => {
          if (response.success) {
            resolve(response.data as T);
          } else {
            reject(new Error(response.error || 'Unknown error'));
          }
        })
        .catch((error) => {
          console.error('[FiveM] Error:', error);
          reject(error);
        });
    });
  }

  /**
   * Registra um listener para eventos vindos do Lua
   */
  on(eventName: string, callback: (data: unknown) => void): () => void {
    const handler = (event: MessageEvent) => {
      if (event.data.type === eventName) {
        callback(event.data.data);
      }
    };

    window.addEventListener('message', handler);

    // Retorna função para remover o listener
    return () => window.removeEventListener('message', handler);
  }

  /**
   * Fecha o painel (envia evento para esconder a NUI)
   */
  async close(): Promise<void> {
    if (this.isDevelopment) {
      console.log('[FiveM Dev] Close panel');
      return;
    }

    await this.send('close');
  }

  /**
   * Dados mockados para desenvolvimento
   */
  private getMockData(type: string): unknown {
    const mockData: Record<string, unknown> = {
      getOfficerInfo: {
        id: '512',
        name: 'John Doe',
        rank: 'Sargento',
        badge: '512',
      },
      getWanted: [
        {
          id: '1',
          name: 'John Doe',
          reason: 'Lorem Ipsum is simply dummy text of the printing.',
          date: '2025-10-27',
          daysAgo: 'Há 3 dias',
        },
      ],
      getVehicles: [
        {
          id: '1',
          brand: 'Volkswagen',
          model: 'Golf GTI',
          plate: '3SAM123',
          owner: 'John Doe',
          date: '2025-10-27',
          daysAgo: 'Há 5 dias',
        },
      ],
      getBulletins: [
        {
          id: '1',
          number: '#512',
          officer: 'John Doe',
          description: 'Assalto a Banco',
          date: '29/10/2025',
          status: 'active',
        },
      ],
      getOfficers: [
        {
          id: '1',
          name: 'John Doe',
          badge: '512',
          rank: 'Sargento',
          status: 'online',
          joinedDate: '29/10/2025',
        },
      ],
      getRanking: [
        {
          position: 1,
          name: 'John Doe',
          badge: '512',
          rank: 'Sargento',
          count: 814,
          status: 'online',
        },
      ],
    };

    return mockData[type] || null;
  }
}

// Função auxiliar para obter o nome do recurso
function GetParentResourceName(): string {
  return 'jhones_police';
}

export const fivem = new FiveMService();
