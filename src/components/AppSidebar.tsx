import { NavLink, useLocation } from "react-router-dom";
import { 
  Brain, 
  Users, 
  Calendar, 
  BarChart3, 
  UserCheck, 
  Settings, 
  Heart,
  Activity
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const doctorItems = [
  { title: "Doctor Dashboard", url: "/dashboard/doctor", icon: Heart },
  { title: "Appointments", url: "/dashboard/appointments", icon: Calendar },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

const hrItems = [
  { title: "HR Dashboard", url: "/dashboard/hr", icon: Users },
  { title: "Analytics", url: "/dashboard/analytics", icon: Activity },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  // Determine which items to show based on current route
  const isDoctorRoute = currentPath.includes('/doctor') || currentPath.includes('/appointments') || 
    (currentPath.includes('/analytics') && document.referrer.includes('/doctor')) ||
    (currentPath.includes('/settings') && document.referrer.includes('/doctor'));
  const items = isDoctorRoute ? doctorItems : hrItems;

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-card border-r">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            {!collapsed && (
              <div>
                <h3 className="font-bold text-lg bg-wellness-gradient bg-clip-text text-transparent">
                  Nirvaha
                </h3>
                <p className="text-xs text-muted-foreground">Mental Wellness</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2 text-sm font-medium text-muted-foreground">
            {!collapsed && (isDoctorRoute ? "Doctor Portal" : "HR Portal")}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavCls}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span className="ml-2">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}