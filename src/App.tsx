
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoleProvider } from "@/contexts/RoleContext";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import DoctorDashboard from "./pages/DoctorDashboard";
import HRDashboard from "./pages/HRDashboard";
import PatientProfile from "./pages/PatientProfile";
import Analytics from "./pages/Analytics";
import Appointments from "./pages/Appointments";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

// Layout
import DashboardLayout from "./components/layout/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RoleProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="doctor" element={<DoctorDashboard />} />
              <Route path="hr" element={<HRDashboard />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="appointments" element={<Appointments />} />
              <Route path="patient/:id" element={<PatientProfile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RoleProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
