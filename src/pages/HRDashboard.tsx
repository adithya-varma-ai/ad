import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  TrendingUp, 
  Activity,
  Building,
  AlertCircle,
  Plus,
  Shield,
  Heart
} from "lucide-react";

const HRDashboard = () => {
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
          <h1 className="text-3xl font-bold text-foreground">HR Dashboard</h1>
          <p className="text-muted-foreground mt-1">{today}</p>
        </div>
        <Button className="bg-secondary hover:bg-secondary-light transition-smooth">
          <Plus className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Company Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card hover:shadow-hover transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,247</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12</span> new hires this month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wellness Engagement</CardTitle>
            <Activity className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">78%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+5%</span> from last quarter
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wellness Score</CardTitle>
            <Heart className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8.2</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+0.4</span> improvement
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ROI on Wellness</CardTitle>
            <TrendingUp className="h-4 w-4 text-metric-excellent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$3.2M</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+15%</span> savings vs last year
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Wellness Overview */}
        <Card className="lg:col-span-2 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              Department Wellness Metrics
            </CardTitle>
            <CardDescription>Wellness scores by department</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { dept: "Engineering", score: 8.5, engagement: 85, trend: "up" },
              { dept: "Sales", score: 7.8, engagement: 72, trend: "up" },
              { dept: "Marketing", score: 8.1, engagement: 79, trend: "stable" },
              { dept: "Customer Support", score: 7.2, engagement: 68, trend: "down" },
              { dept: "HR", score: 8.7, engagement: 91, trend: "up" }
            ].map((dept, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-smooth">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-medium text-foreground w-32">{dept.dept}</div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Wellness Score</p>
                      <p className="font-medium text-foreground">{dept.score}/10</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Engagement</p>
                      <p className="font-medium text-foreground">{dept.engagement}%</p>
                    </div>
                  </div>
                </div>
                <Badge variant={dept.trend === "up" ? "default" : dept.trend === "down" ? "destructive" : "secondary"}>
                  {dept.trend === "up" ? "↗ Improving" : dept.trend === "down" ? "↘ Declining" : "→ Stable"}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Service Utilization */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-secondary" />
              Service Usage
            </CardTitle>
            <CardDescription>Popular wellness services</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">ZenChat</span>
                <span className="font-medium">65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Meditation</span>
                <span className="font-medium">58%</span>
              </div>
              <Progress value={58} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Discussion Rooms</span>
                <span className="font-medium">42%</span>
              </div>
              <Progress value={42} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sound Healing</span>
                <span className="font-medium">35%</span>
              </div>
              <Progress value={35} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Events</span>
                <span className="font-medium">28%</span>
              </div>
              <Progress value={28} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Assessment and Compliance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <AlertCircle className="h-5 w-5" />
              Risk Assessment
            </CardTitle>
            <CardDescription>Employees requiring intervention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { dept: "Customer Support", issue: "High stress indicators (15 employees)", level: "high", count: 15 },
              { dept: "Sales", issue: "Low engagement rates", level: "medium", count: 8 },
              { dept: "Engineering", issue: "Overtime concerns", level: "medium", count: 12 },
              { dept: "Marketing", issue: "Team communication issues", level: "low", count: 5 }
            ].map((risk, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  risk.level === 'high' ? 'bg-destructive' : 
                  risk.level === 'medium' ? 'bg-warning' : 'bg-secondary'
                }`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground">{risk.dept}</p>
                    <Badge variant="outline">{risk.count} employees</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{risk.issue}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-metric-excellent" />
              Compliance & Safety
            </CardTitle>
            <CardDescription>Psychosocial safety metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-metric-excellent/10 rounded-lg">
                <div className="text-2xl font-bold text-metric-excellent">96%</div>
                <p className="text-sm text-muted-foreground">Safety Score</p>
              </div>
              <div className="text-center p-3 bg-metric-good/10 rounded-lg">
                <div className="text-2xl font-bold text-metric-good">0.2%</div>
                <p className="text-sm text-muted-foreground">Incident Rate</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Manager Effectiveness</span>
                <span className="font-medium">8.4/10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Employee Satisfaction</span>
                <span className="font-medium">87%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Retention Rate</span>
                <span className="font-medium">94%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HRDashboard;