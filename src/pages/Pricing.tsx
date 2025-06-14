
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, ArrowLeft, Star } from "lucide-react";

const Pricing = () => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams",
      monthlyPrice: 9,
      yearlyPrice: 89,
      features: [
        "Up to 5 team members",
        "Unlimited tasks",
        "Basic collaboration tools",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Advanced features for growing teams",
      monthlyPrice: 19,
      yearlyPrice: 189,
      features: [
        "Up to 20 team members",
        "Advanced project templates",
        "Time tracking & reporting",
        "Priority support",
        "Custom workflows",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations",
      monthlyPrice: 39,
      yearlyPrice: 389,
      features: [
        "Unlimited team members",
        "Advanced security & compliance",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced analytics",
        "White-label options"
      ],
      popular: false
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    const yearlyTotal = plan.monthlyPrice * 12;
    const savings = yearlyTotal - plan.yearlyPrice;
    return Math.round((savings / yearlyTotal) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-slate-900">TaskFlow</span>
            </div>
            <Button variant="ghost" onClick={() => navigate('/')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to home
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Choose the perfect plan
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Start with a free trial, then choose a plan that fits your team's needs.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${!isYearly ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-blue-600"
            />
            <span className={`text-sm ${isYearly ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-green-100 text-green-700 ml-2">
                Save up to 20%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg scale-105' 
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {plan.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-slate-900">
                      ${getPrice(plan)}
                    </span>
                    <span className="text-slate-600 ml-2">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  
                  {isYearly && (
                    <p className="text-sm text-green-600 font-medium">
                      Save {getSavings(plan)}% vs monthly
                    </p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                      : 'bg-slate-900 hover:bg-slate-800'
                  }`}
                  onClick={() => navigate('/signup')}
                >
                  Start Free Trial
                </Button>
                
                <p className="text-xs text-slate-500 text-center mt-3">
                  14-day free trial • No credit card required
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Frequently asked questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Can I change plans anytime?
              </h3>
              <p className="text-slate-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-slate-600">
                We accept all major credit cards, PayPal, and bank transfers for annual plans.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Is there a free trial?
              </h3>
              <p className="text-slate-600">
                Yes, all plans come with a 14-day free trial. No credit card required to start.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-slate-600">
                We offer a 30-day money-back guarantee if you're not satisfied with TaskFlow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
