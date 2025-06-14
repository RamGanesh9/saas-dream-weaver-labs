
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Check, GraduationCap, Star } from "lucide-react";

const Pricing = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small schools",
      monthlyPrice: 49,
      annualPrice: 39,
      students: "Up to 100 students",
      features: [
        "Student & teacher management",
        "Basic attendance tracking",
        "Grade management",
        "Simple timetable",
        "Email support",
        "5 admin users"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing schools",
      monthlyPrice: 99,
      annualPrice: 79,
      students: "Up to 500 students",
      features: [
        "Everything in Starter",
        "Advanced analytics & reports",
        "Fee management",
        "SMS notifications",
        "Parent portal",
        "15 admin users",
        "API access",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large institutions",
      monthlyPrice: 199,
      annualPrice: 159,
      students: "Unlimited students",
      features: [
        "Everything in Professional",
        "Multi-campus management",
        "Advanced security features",
        "Custom integrations",
        "Dedicated account manager",
        "Unlimited admin users",
        "Priority support",
        "Custom training"
      ],
      popular: false
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (!isAnnual) return 0;
    return ((plan.monthlyPrice * 12) - (plan.annualPrice * 12)) / (plan.monthlyPrice * 12) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to home
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">EduFlow</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/login')}>
                Sign In
              </Button>
              <Button onClick={() => navigate('/signup')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your school. Start with a 14-day free trial, no credit card required.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <span className={`font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge className="bg-green-100 text-green-700 border-green-200">
                Save up to 20%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 ring-offset-4 scale-105' 
                  : 'hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-slate-900">
                      ${getPrice(plan)}
                    </span>
                    <span className="text-slate-500 ml-1">
                      /{isAnnual ? 'month' : 'month'}
                    </span>
                  </div>
                  {isAnnual && getSavings(plan) > 0 && (
                    <div className="text-sm text-green-600 mt-1">
                      Save {getSavings(plan).toFixed(0)}% annually
                    </div>
                  )}
                  <div className="text-sm text-slate-500 mt-2">
                    {plan.students}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-slate-900 hover:bg-slate-800'
                  }`}
                  onClick={() => navigate('/signup')}
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Is there a free trial?
              </h3>
              <p className="text-slate-600">
                Yes! We offer a 14-day free trial with full access to all features. No credit card required.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Can I change plans anytime?
              </h3>
              <p className="text-slate-600">
                Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-slate-600">
                We accept all major credit cards, bank transfers, and can set up annual invoicing for enterprise customers.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Is there a setup fee?
              </h3>
              <p className="text-slate-600">
                No setup fees ever. We also provide free onboarding and training for all plans.
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              For large institutions with specific requirements, we offer custom packages with dedicated support and tailored features.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
