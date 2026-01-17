import { CirclePlus, Home, Trash, Trash2 } from "lucide-react";
import { Header } from "../components/layout/Header";
import { EstatisticasChart } from "@/components/EstatisticaChart";

export function OverviewPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Overview" icon={<Home className="w-6 h-6" />} />

      <div className="flex-1 p-6 overflow-y-auto">
        <div className="border p-6 rounded-sm bg-[#131316] border-border">
          {/* Tabs */}
          <div className="flex flex-row w-full justify-between">
            <div className="flex gap-[10px] mb-8">
              <button className="w-[118px] h-[43px] px-[22px] py-3 bg-white text-black rounded font-bold text-[16px] leading-[100%] tracking-[0%]">
                PRISÕES
              </button>
              <button className="w-[118px] h-[43px] px-[22px] py-3 text-muted-foreground hover:text-foreground rounded font-bold text-[16px] leading-[100%] tracking-[0%]">
                MULTAS
              </button>
              <button className="w-[118px] h-[43px] px-[22px] py-3 text-muted-foreground hover:text-foreground rounded font-bold text-[16px] leading-[100%] tracking-[0%]">
                BOLETINS
              </button>
            </div>
            <button className="size-[42px] bg-[#FF204E] rounded-[5px] cursor-pointer hover:bg-[#e61b45] transition-colors flex items-center justify-center">
              <CirclePlus className="size-5 text-white mx-auto" />
            </button>
          </div>

          {/* Chart Placeholder */}
          <div className="py-3">
            <EstatisticasChart />
          </div>

          {/* Eventos Recentes */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Eventos Recentes</h2>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-card rounded-lg p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Reunião Alto Escalão</h3>
                    <p className="text-sm text-muted-foreground">02/11/2025</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <button className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors">
                  <span className="text-primary-foreground">
                    <Trash className="w-5 h-5" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
