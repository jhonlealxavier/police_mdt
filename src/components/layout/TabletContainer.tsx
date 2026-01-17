import type { ReactNode } from "react";

interface TabletContainerProps {
  children: ReactNode;
}

export function TabletContainer({ children }: TabletContainerProps) {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <div
        className="relative rounded-[30px] border-[6px] border-[#787d81] shadow-2xl overflow-hidden"
        style={{
          width: "var(--tablet-width)",
          height: "var(--tablet-height)",
          backgroundColor: "var(--color-background)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
