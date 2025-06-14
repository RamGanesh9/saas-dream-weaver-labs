
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Building2, 
  BookOpen, 
  Briefcase, 
  Network,
  CheckCircle,
  Star,
  ArrowRight,
  UserCheck,
  Target,
  Lightbulb,
  MessageSquare,
  Zap,
  Globe,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Industry Connections",
      description: "Direct interaction with top companies and industry leaders. Build meaningful professional relationships."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Internships & Job Listings",
      description: "Easy access to career opportunities, internships, and real-world projects from leading companies."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Skill Development",
      description: "Workshops, projects, and mentorship programs designed to enhance your professional skills."
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Networking & Community",
      description: "Forums and events to engage with industry professionals and build your network."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "AI Matching System",
      description: "Smart recommendations based on your interests, skills, and career aspirations."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Direct Communication",
      description: "Chat, mentorship sessions, and application tracking all in one platform."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Create Your Profile",
      description: "Showcase your skills, interests, achievements, and career aspirations",
      icon: <UserCheck className="h-8 w-8" />
    },
    {
      step: "02", 
      title: "Companies Post Opportunities",
      description: "Access internships, projects, jobs, and mentorship programs",
      icon: <Building2 className="h-8 w-8" />
    },
    {
      step: "03",
      title: "AI-Powered Matching",
      description: "Get smart recommendations tailored to your profile and goals",
      icon: <Zap className="h-8 w-8" />
    },
    {
      step: "04",
      title: "Connect & Grow",
      description: "Direct interaction, mentorship, and career development",
      icon: <TrendingUp className="h-8 w-8" />
    }
  ];

  const benefits = {
    students: [
      "Access to premium internships",
      "Industry mentorship programs", 
      "Real-world project experience",
      "Direct company connections",
      "Skill development workshops"
    ],
    companies: [
      "Access to skilled talent pool",
      "Reduced recruitment costs",
      "Early talent identification",
      "University partnerships",
      "Brand visibility to students"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Network className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ConnectED
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/pricing')} className="text-slate-700 hover:text-blue-600">
                Pricing
              </Button>
              <Button variant="outline" onClick={() => navigate('/login')} className="border-slate-300 text-slate-700 hover:bg-slate-50">
                Sign In
              </Button>
              <Button onClick={() => navigate('/signup')} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                Join Platform
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200 shadow-sm">
            🌟 Bridging Education & Industry
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Connecting{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Industries
            </span>{" "}
            to Students
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Empowering students with direct access to industry opportunities while helping companies discover and nurture fresh talent through our AI-powered platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6 shadow-lg transform hover:scale-105 transition-all"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/pricing')}
              className="text-lg px-8 py-6 border-2 border-slate-300 hover:border-blue-400 hover:bg-blue-50"
            >
              Explore Features
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              Free for students
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              Verified companies
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              AI-powered matching
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Challenge We Solve
              </h2>
              <div className="space-y-6">
                <Card className="border-l-4 border-red-400 bg-red-50">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-red-800 mb-2">Students Struggle to Find Opportunities</h3>
                    <p className="text-red-700">Limited access to internships, mentorships, and real-world industry experience.</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-orange-400 bg-orange-50">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-orange-800 mb-2">Industries Struggle to Find Talent</h3>
                    <p className="text-orange-700">Companies face challenges in reaching and recruiting fresh, skilled talent.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Solution
              </h2>
              <Card className="border-l-4 border-emerald-400 bg-gradient-to-br from-emerald-50 to-blue-50 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Network className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">ConnectED Platform</h3>
                  </div>
                  <p className="text-slate-700 mb-4">A comprehensive platform that directly connects students with companies, creating meaningful opportunities for both sides.</p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      Direct industry connections
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      AI-powered talent matching
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      End-to-end career support
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Powerful Features for Success
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to connect, learn, and grow in your career journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4 shadow-md">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-slate-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How ConnectED Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple steps to transform your career journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-lg relative">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits for Everyone
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Creating value for students and companies alike
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-blue-800">For Students</CardTitle>
                <CardDescription className="text-blue-600">
                  Unlock your potential with industry connections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.students.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Building2 className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-indigo-800">For Companies</CardTitle>
                <CardDescription className="text-indigo-600">
                  Discover and nurture fresh talent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.companies.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">10K+</div>
              <div className="text-blue-100">Students Connected</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-blue-100">Partner Companies</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-blue-100">Platform Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of students and companies already connected through our platform
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/signup')}
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-lg px-8 py-6 shadow-lg transform hover:scale-105 transition-all"
          >
            Join ConnectED Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Network className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">ConnectED</span>
              </div>
              <p className="text-slate-400 max-w-md">
                Bridging the gap between education and industry, empowering students and strengthening companies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-slate-400">
                <li>For Students</li>
                <li>For Companies</li>
                <li>Features</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Community</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ConnectED. Empowering Students, Strengthening Industries.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
