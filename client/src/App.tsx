
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
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



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <RoleProvider>
          <Switch>
            <Route path="/" component={Index} />
            <Route path="/login" component={Login} />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard/doctor" component={DoctorDashboard} />
            <Route path="/dashboard/hr" component={HRDashboard} />
            <Route path="/dashboard/analytics" component={Analytics} />
            <Route path="/dashboard/appointments" component={Appointments} />
            <Route path="/dashboard/patient/:id" component={PatientProfile} />
            <Route path="/dashboard/settings" component={Settings} />
            
            {/* Catch-all route */}
            <Route component={NotFound} />
          </Switch>
        </RoleProvider>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
