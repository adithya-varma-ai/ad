import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Heart, 
  Users, 
  BarChart3, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Heart,
      title: "Doctor Dashboard",
      description: "Comprehensive patient management with appointment scheduling, wellness tracking, and treatment analytics.",
      benefits: ["Real-time patient monitoring", "Treatment plan management", "Risk assessment tools"]
    },
    {
      icon: Users,
      title: "HR Dashboard", 
      description: "Employee wellness analytics, program effectiveness measurement, and population health insights.",
      benefits: ["Wellness ROI tracking", "Risk identification", "Compliance monitoring"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Data-driven insights for informed decision making and measurable wellness outcomes.",
      benefits: ["Predictive analytics", "Custom reporting", "Trend analysis"]
    }
  ];

  const services = [
    "ZenChat Therapy Sessions",
    "Guided Meditation Programs", 
    "Sound Healing Treatments",
    "Discussion Room Communities",
    "Wellness Events & Workshops",
    "Mental Health Marketplace"
  ];

  const stats = [
    { value: "10,000+", label: "Active Users" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "78%", label: "Wellness Improvement" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-calm-gradient">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-16 w-16 text-primary mr-4" />
            <h1 className="text-5xl font-bold bg-wellness-gradient bg-clip-text text-transparent">
              Nirvaha
            </h1>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Mental Wellness
            <span className="block text-primary">Dashboard Platform</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering healthcare professionals and HR teams with sophisticated analytics, 
            real-time insights, and comprehensive wellness management tools for measurable mental health outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark transition-smooth text-lg px-8 py-6"
              onClick={() => navigate("/login")}
            >
              Access Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
            >
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Professional Dashboards
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Wellness Management
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed for healthcare professionals and HR teams to deliver effective mental wellness services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Integrated Services
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Wellness Ecosystem
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrated services tracked and managed through intelligent dashboards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-wellness-gradient rounded-full mr-3 group-hover:scale-110 transition-smooth"></div>
                    <span className="font-medium text-foreground">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 px-4 bg-background/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-warning mr-4" />
            <div>
              <h3 className="text-2xl font-bold text-foreground">Enterprise Security</h3>
              <p className="text-muted-foreground">HIPAA compliant with advanced data protection</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-metric-excellent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-metric-excellent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">HIPAA Compliant</h4>
              <p className="text-sm text-muted-foreground">Full healthcare data protection compliance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Real-time Encryption</h4>
              <p className="text-sm text-muted-foreground">End-to-end encrypted data transmission</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Advanced Analytics</h4>
              <p className="text-sm text-muted-foreground">Privacy-first data insights and reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Mental Wellness?
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Join healthcare professionals and HR teams using Nirvaha to deliver measurable wellness outcomes
          </p>
          <Button 
            size="lg" 
            className="bg-wellness-gradient hover:opacity-90 transition-smooth text-lg px-8 py-6"
            onClick={() => navigate("/login")}
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold bg-wellness-gradient bg-clip-text text-transparent">
              Nirvaha
            </span>
          </div>
          <p className="text-muted-foreground">
            Empowering mental wellness through intelligent dashboards and data-driven insights
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;