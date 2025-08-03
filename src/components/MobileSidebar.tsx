import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Brain, 
  Users, 
  Calendar, 
  BarChart3, 
  UserCheck, 
  Settings, 
  Heart,
  Activity,
  Menu
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const isDoctorRoute = currentPath.includes('/doctor') || currentPath.includes('/appointments');
  const items = isDoctorRoute ? doctorItems : hrItems;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex items-center gap-2 text-left">
            <Brain className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-bold text-lg bg-wellness-gradient bg-clip-text text-transparent">
                Nirvaha
              </h3>
              <p className="text-xs text-muted-foreground">Mental Wellness</p>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="p-4">
          <div className="space-y-1">
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              {isDoctorRoute ? "Doctor Portal" : "HR Portal"}
            </h4>
            {items.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}