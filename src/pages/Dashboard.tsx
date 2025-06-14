
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Users,
  Target,
  TrendingUp,
  Bell,
  Settings,
  LogOut
} from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks] = useState([
    { id: 1, title: "Design new landing page", status: "in-progress", priority: "high", assignee: "Sarah Chen", dueDate: "2024-06-20", progress: 75 },
    { id: 2, title: "Implement user authentication", status: "completed", priority: "medium", assignee: "Mike Johnson", dueDate: "2024-06-18", progress: 100 },
    { id: 3, title: "Write API documentation", status: "todo", priority: "low", assignee: "Emily Davis", dueDate: "2024-06-25", progress: 0 },
    { id: 4, title: "Setup CI/CD pipeline", status: "in-progress", priority: "high", assignee: "Alex Kim", dueDate: "2024-06-22", progress: 40 },
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-slate-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: "bg-green-100 text-green-700",
      "in-progress": "bg-blue-100 text-blue-700",
      todo: "bg-slate-100 text-slate-700"
    };
    return variants[status as keyof typeof variants] || variants.todo;
  };

  const getPriorityBadge = (priority: string) => {
    const variants = {
      high: "bg-red-100 text-red-700",
      medium: "bg-yellow-100 text-yellow-700",
      low: "bg-green-100 text-green-700"
    };
    return variants[priority as keyof typeof variants] || variants.low;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                <span className="text-xl font-bold text-slate-900">TaskFlow</span>
              </div>
              <Badge variant="secondary">Pro Plan</Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate('/settings')}>
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
                <LogOut className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Good morning, John! 👋</h1>
          <p className="text-slate-600">Here's what's happening with your projects today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Tasks</p>
                  <p className="text-3xl font-bold text-slate-900">24</p>
                </div>
                <Target className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Completed</p>
                  <p className="text-3xl font-bold text-green-600">18</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Team Members</p>
                  <p className="text-3xl font-bold text-purple-600">8</p>
                </div>
                <Users className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Productivity</p>
                  <p className="text-3xl font-bold text-orange-600">92%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Task Management Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Tasks</CardTitle>
                <CardDescription>Manage your team's tasks and projects</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Task
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(task.status)}
                    <div>
                      <h4 className="font-medium text-slate-900">{task.title}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getStatusBadge(task.status)}>{task.status.replace('-', ' ')}</Badge>
                        <Badge className={getPriorityBadge(task.priority)}>{task.priority}</Badge>
                        <span className="text-sm text-slate-500">Due: {task.dueDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-900">{task.assignee}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Progress value={task.progress} className="w-20" />
                        <span className="text-sm text-slate-500">{task.progress}%</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
