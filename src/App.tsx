import { useState, useEffect } from "react";
import { TabletContainer } from "./components/layout/TabletContainer";
import { Sidebar } from "./components/layout/Sidebar";
import {
  OverviewPage,
  ConsultarPage,
  PrisaoPage,
  MultarPage,
  ProcuradosPage,
  RankingPage,
} from "./pages";
import { fivem } from "./services/fivem";
import type { PageType } from "./types";

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("overview");
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    fivem.close();
  };

  useEffect(() => {
    // Listener para mostrar/esconder o painel
    const cleanup = fivem.on("setVisible", (visible) => {
      setIsVisible(visible as boolean);
    });

    // Listener para tecla ESC
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      cleanup();
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "overview":
        return <OverviewPage />;
      case "consultar":
        return <ConsultarPage />;
      case "prisao":
        return <PrisaoPage />;
      case "multar":
        return <MultarPage />;
      case "procurados":
        return <ProcuradosPage />;
      case "ranking":
        return <RankingPage />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">
                Em Desenvolvimento
              </h2>
              <p className="text-muted-foreground">
                Esta página está sendo desenvolvida.
              </p>
            </div>
          </div>
        );
    }
  };

  if (!isVisible) return null;

  return (
    <TabletContainer>
      <div className="flex h-full p-2">
        <Sidebar
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onClose={handleClose}
        />
        <main className="flex-1 overflow-hidden">{renderPage()}</main>
      </div>
    </TabletContainer>
  );
}

export default App;
