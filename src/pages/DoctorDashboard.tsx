import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Heart,
  Activity,
  Clock,
  AlertTriangle,
  Plus
} from "lucide-react";

const DoctorDashboard = () => {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Doctor Dashboard</h1>
          <p className="text-muted-foreground mt-1">{today}</p>
        </div>
        <Button className="bg-primary hover:bg-primary-dark transition-smooth">
          <Plus className="h-4 w-4 mr-2" />
          New Appointment
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card hover:shadow-hover transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+2</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Patients</CardTitle>
            <Users className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">127</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+5%</span> this month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session Rating</CardTitle>
            <Heart className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">4.8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+0.2</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-metric-excellent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$12,450</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+8%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your appointments for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { time: "09:00 AM", patient: "Sarah Johnson", type: "Initial Consultation", status: "upcoming" },
              { time: "10:30 AM", patient: "Michael Chen", type: "Follow-up", status: "in-progress" },
              { time: "02:00 PM", patient: "Emma Davis", type: "Therapy Session", status: "upcoming" },
              { time: "03:30 PM", patient: "Robert Wilson", type: "Medication Review", status: "upcoming" },
            ].map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-smooth">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-medium text-primary">{appointment.time}</div>
                  <div>
                    <p className="font-medium text-foreground">{appointment.patient}</p>
                    <p className="text-sm text-muted-foreground">{appointment.type}</p>
                  </div>
                </div>
                <Badge variant={appointment.status === "in-progress" ? "default" : "secondary"}>
                  {appointment.status === "in-progress" ? "In Progress" : "Upcoming"}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Patient Wellness Overview */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-secondary" />
              Patient Wellness
            </CardTitle>
            <CardDescription>Overall wellness metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Excellent</span>
                <span className="font-medium">35%</span>
              </div>
              <Progress value={35} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Good</span>
                <span className="font-medium">45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Moderate</span>
                <span className="font-medium">15%</span>
              </div>
              <Progress value={15} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Poor</span>
                <span className="font-medium">5%</span>
              </div>
              <Progress value={5} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <AlertTriangle className="h-5 w-5" />
              Priority Alerts
            </CardTitle>
            <CardDescription>Patients requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { patient: "Alex Rodriguez", issue: "Missed 2 consecutive appointments", level: "high" },
              { patient: "Maria Garcia", issue: "Reported increased anxiety levels", level: "medium" },
              { patient: "David Kim", issue: "Medication adherence concern", level: "low" }
            ].map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  alert.level === 'high' ? 'bg-destructive' : 
                  alert.level === 'medium' ? 'bg-warning' : 'bg-secondary'
                }`} />
                <div className="flex-1">
                  <p className="font-medium text-foreground">{alert.patient}</p>
                  <p className="text-sm text-muted-foreground">{alert.issue}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Patient Activity</CardTitle>
            <CardDescription>Latest engagement across services</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { patient: "Jennifer Lee", activity: "Completed guided meditation", time: "2 hours ago", service: "Meditation" },
              { patient: "Tom Anderson", activity: "Joined discussion room", time: "4 hours ago", service: "Community" },
              { patient: "Lisa Park", activity: "ZenChat session completed", time: "6 hours ago", service: "ZenChat" }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Activity className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{activity.patient}</p>
                  <p className="text-sm text-muted-foreground">{activity.activity}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">{activity.service}</Badge>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorDashboard;