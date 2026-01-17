import {
  Home,
  Search,
  Users,
  FileWarning,
  Shield,
  Trophy,
  X,
  Paperclip,
  CarFront,
} from "lucide-react";
import type { PageType } from "@/types";

interface SidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  onClose: () => void;
}

const menuItems: { icon: typeof Home; page: PageType; label: string }[] = [
  { icon: Home, page: "overview", label: "Overview" },
  { icon: Search, page: "consultar", label: "Consultar" },
  { icon: Paperclip, page: "prisao", label: "Prisão" },
  { icon: CarFront, page: "multar", label: "Multar" },
  { icon: Users, page: "procurados", label: "Procurados" },
  { icon: FileWarning, page: "boletim", label: "Boletim de Ocorrência" },
  { icon: Shield, page: "gerenciamento", label: "Gerenciamento" },
  { icon: Trophy, page: "ranking", label: "Ranking" },
];

export function Sidebar({ currentPage, onPageChange, onClose }: SidebarProps) {
  return (
    <aside
      className="flex flex-col items-center gap-2 py-6 rounded-[19px] rounded-r-none bg-card border-r border-none"
      style={{ width: "var(--sidebar-width)" }}
    >
      {/* Logo */}
      <div className="mb-4">
        <Shield className="w-8 h-8 text-primary-foreground" />
      </div>

      {/* Menu Items */}
      <nav className="flex-1 flex flex-col gap-2 w-full px-3 items-center">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.page;

          return (
            <button
              key={item.page}
              onClick={() => onPageChange(item.page)}
              className={`
                w-12 h-12 rounded-lg flex items-center cursor-pointer justify-center
                transition-all duration-200
                ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                }
              `}
              title={item.label}
            >
              <Icon className="w-6 h-6" />
            </button>
          );
        })}
      </nav>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="w-14 h-14 rounded-lg flex items-center justify-center
                   text-muted-foreground hover:text-foreground hover:bg-secondary
                   transition-all duration-200"
        title="Fechar"
      >
        <X className="w-6 h-6" />
      </button>
    </aside>
  );
}
