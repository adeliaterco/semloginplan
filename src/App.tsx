import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Modules from "./pages/Modules";
import ModuleDetail from "./pages/ModuleDetail";
import Tracker from "./pages/Tracker";
import Tools from "./pages/Tools";
import ScriptsGenerator from "./pages/tools/ScriptsGenerator";
import SignalsAnalysis from "./pages/tools/SignalsAnalysis";
import Journaling from "./pages/tools/Journaling";
import LibraryResources from "./pages/tools/LibraryResources";
import PlanB from "./pages/tools/PlanB";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* ✅ MUDANÇA AQUI! */}
            <Route path="/index" element={<Index />} /> {/* ✅ Index movido para /index */}
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/module/:id" element={<ModuleDetail />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/scripts" element={<ScriptsGenerator />} />
            <Route path="/tools/signals" element={<SignalsAnalysis />} />
            <Route path="/tools/journaling" element={<Journaling />} />
            <Route path="/tools/library" element={<LibraryResources />} />
            <Route path="/tools/planb" element={<PlanB />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;