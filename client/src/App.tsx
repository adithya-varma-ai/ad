
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
import EmployeeAnalyticsPage from "./pages/EmployeeAnalytics";
import NotFound from "./pages/NotFound";

// Layout
import DashboardLayout from "./components/layout/DashboardLayout";



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
            
            {/* Dashboard Routes with Layout */}
            <Route path="/dashboard/doctor">
              {() => (
                <DashboardLayout>
                  <DoctorDashboard />
                </DashboardLayout>
              )}
            </Route>
            <Route path="/dashboard/hr">
              {() => (
                <DashboardLayout>
                  <HRDashboard />
                </DashboardLayout>
              )}
            </Route>
            <Route path="/dashboard/analytics">
              {() => (
                <DashboardLayout>
                  <Analytics />
                </DashboardLayout>
              )}
            </Route>
            <Route path="/dashboard/appointments">
              {() => (
                <DashboardLayout>
                  <Appointments />
                </DashboardLayout>
              )}
            </Route>
            <Route path="/dashboard/patient/:id">
              {() => (
                <DashboardLayout>
                  <PatientProfile />
                </DashboardLayout>
              )}
            </Route>
            <Route path="/dashboard/employee-analytics">
              {() => (
                <DashboardLayout>
                  <EmployeeAnalyticsPage />
                </DashboardLayout>
              )}
            </Route>
            <Route path="/dashboard/settings">
              {() => (
                <DashboardLayout>
                  <Settings />
                </DashboardLayout>
              )}
            </Route>
            
            {/* Default dashboard redirect */}
            <Route path="/dashboard/">
              {() => (
                <DashboardLayout>
                  <DoctorDashboard />
                </DashboardLayout>
              )}
            </Route>
            
            {/* Catch-all route */}
            <Route component={NotFound} />
          </Switch>
        </RoleProvider>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
