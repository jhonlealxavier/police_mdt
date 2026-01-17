// Types para o painel policial

export type PageType =
  | 'overview'
  | 'consultar'
  | 'prisao'
  | 'multar'
  | 'procurados'
  | 'boletim'
  | 'gerenciamento'
  | 'ranking';

export interface Officer {
  id: string;
  name: string;
  badge: string;
  rank: string;
  status: 'online' | 'offline';
  joinedDate: string;
}

export interface Wanted {
  id: string;
  name: string;
  avatar?: string;
  reason: string;
  date: string;
  daysAgo: string;
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  plate: string;
  owner: string;
  date: string;
  daysAgo: string;
}

export interface Bulletin {
  id: string;
  number: string;
  officer: string;
  description: string;
  date: string;
  status: 'active' | 'archived';
}

export interface PrisonData {
  officer: string;
  officerId: string;
  date: string;
  infractions: string[];
  fineReduction: number;
  sentenceReduction: number;
  sentence: number; // em meses
  fine: number; // em R$
  description: string;
}

export interface FineData {
  officer: string;
  officerId: string;
  date: string;
  infractions: string[];
  fineReduction: number;
  value: number; // em R$
  description: string;
}

export interface RankingData {
  position: number;
  name: string;
  badge: string;
  rank: string;
  count: number; // prisões, multas ou boletins
  status: 'online' | 'offline';
}

// Mensagens para comunicação com Lua
export interface LuaMessage {
  type: string;
  data?: any;
}

export interface LuaResponse {
  success: boolean;
  data?: any;
  error?: string;
}
