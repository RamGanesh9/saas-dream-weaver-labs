
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Mail, Lock, User, Building2, Network } from "lucide-react";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "student",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Welcome to ConnectED! Your journey begins now.");
      navigate('/dashboard');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back button */}
        <Button 
          variant="ghost" 
          className="mb-6 text-slate-600 hover:text-blue-600"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to home
        </Button>

        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Network className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">ConnectED</span>
            </div>
            <CardTitle className="text-2xl text-slate-800">Join the Platform</CardTitle>
            <CardDescription className="text-slate-600">
              Connect with industry opportunities or discover fresh talent
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* User Type Selection */}
              <div className="space-y-2">
                <Label className="text-slate-700">Join as</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    type="button"
                    variant={formData.userType === "student" ? "default" : "outline"}
                    className={formData.userType === "student" 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600" 
                      : "border-slate-300 hover:border-blue-400"
                    }
                    onClick={() => setFormData({ ...formData, userType: "student" })}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Student
                  </Button>
                  <Button
                    type="button"
                    variant={formData.userType === "company" ? "default" : "outline"}
                    className={formData.userType === "company" 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600" 
                      : "border-slate-300 hover:border-blue-400"
                    }
                    onClick={() => setFormData({ ...formData, userType: "company" })}
                  >
                    <Building2 className="h-4 w-4 mr-2" />
                    Company
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-slate-700">
                  {formData.userType === "student" ? "Full Name" : "Company Name"}
                </Label>
                <div className="relative">
                  {formData.userType === "student" ? (
                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  ) : (
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  )}
                  <Input
                    id="fullName"
                    type="text"
                    placeholder={formData.userType === "student" ? "Enter your full name" : "Enter company name"}
                    className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder={formData.userType === "student" ? "your.email@university.edu" : "contact@company.com"}
                    className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a secure password"
                    className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-slate-700">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? "Creating your account..." : `Join as ${formData.userType === "student" ? "Student" : "Company"}`}
              </Button>
            </form>
            
            <div className="mt-6">
              <Separator />
              <div className="text-center mt-6">
                <p className="text-sm text-slate-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features highlight */}
        <Card className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
          <CardContent className="pt-4">
            <p className="text-sm font-medium text-slate-700 mb-2">
              {formData.userType === "student" ? "What you'll get:" : "What's included:"}
            </p>
            <ul className="text-xs text-slate-600 space-y-1">
              {formData.userType === "student" ? (
                <>
                  <li>✓ Access to premium internships & jobs</li>
                  <li>✓ Industry mentorship programs</li>
                  <li>✓ AI-powered opportunity matching</li>
                  <li>✓ Free forever for students</li>
                </>
              ) : (
                <>
                  <li>✓ Access to skilled student talent pool</li>
                  <li>✓ Post unlimited opportunities</li>
                  <li>✓ Advanced filtering & matching</li>
                  <li>✓ University partnership access</li>
                </>
              )}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
