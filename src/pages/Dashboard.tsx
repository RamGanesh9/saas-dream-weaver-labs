
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
  Users,
  GraduationCap,
  Calendar,
  BookOpen,
  TrendingUp,
  Bell,
  Settings,
  LogOut,
  UserCheck,
  DollarSign,
  Award
} from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [recentActivities] = useState([
    { id: 1, type: "attendance", message: "Attendance marked for Class 10-A", time: "2 mins ago", status: "completed" },
    { id: 2, type: "grade", message: "Math quiz grades uploaded", time: "15 mins ago", status: "completed" },
    { id: 3, type: "fee", message: "Fee payment received from John Smith", time: "1 hour ago", status: "completed" },
    { id: 4, type: "announcement", message: "Parent-teacher meeting scheduled", time: "2 hours ago", status: "scheduled" },
  ]);

  const [classes] = useState([
    { id: 1, name: "Class 10-A", students: 35, teacher: "Sarah Johnson", subject: "Mathematics", attendance: 94 },
    { id: 2, name: "Class 9-B", students: 32, teacher: "Mike Davis", subject: "Science", attendance: 89 },
    { id: 3, name: "Class 8-C", students: 28, teacher: "Emily Wilson", subject: "English", attendance: 92 },
    { id: 4, name: "Class 11-A", students: 40, teacher: "David Brown", subject: "Physics", attendance: 87 },
  ]);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "attendance":
        return <UserCheck className="h-4 w-4 text-green-500" />;
      case "grade":
        return <Award className="h-4 w-4 text-blue-500" />;
      case "fee":
        return <DollarSign className="h-4 w-4 text-emerald-500" />;
      default:
        return <Bell className="h-4 w-4 text-slate-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">EduFlow</span>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                Springfield High School
              </Badge>
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
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, Admin! 👋</h1>
          <p className="text-slate-600">Here's what's happening at Springfield High School today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Students</p>
                  <p className="text-3xl font-bold text-slate-900">1,247</p>
                </div>
                <GraduationCap className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Teachers</p>
                  <p className="text-3xl font-bold text-green-600">84</p>
                </div>
                <Users className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Classes</p>
                  <p className="text-3xl font-bold text-purple-600">42</p>
                </div>
                <BookOpen className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Attendance Rate</p>
                  <p className="text-3xl font-bold text-orange-600">94%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Classes Overview */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Today's Classes</CardTitle>
                    <CardDescription>Overview of active classes and attendance</CardDescription>
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
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Class
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classes.map((cls) => (
                    <div key={cls.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                          {cls.name.split('-')[0].slice(-2)}
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900">{cls.name}</h4>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-slate-500">
                            <span>{cls.students} students</span>
                            <span>•</span>
                            <span>{cls.teacher}</span>
                            <span>•</span>
                            <span>{cls.subject}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium text-slate-900">Attendance</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Progress value={cls.attendance} className="w-20" />
                            <span className="text-sm text-slate-500 font-medium">{cls.attendance}%</span>
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

          {/* Recent Activities */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest updates from your school</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      {getActivityIcon(activity.type)}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900">
                          {activity.message}
                        </p>
                        <p className="text-sm text-slate-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Activities
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="justify-start h-auto p-3">
                  <Users className="h-4 w-4 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">Add Student</div>
                    <div className="text-xs text-slate-500">Register new student</div>
                  </div>
                </Button>
                <Button variant="outline" size="sm" className="justify-start h-auto p-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">Schedule</div>
                    <div className="text-xs text-slate-500">Create timetable</div>
                  </div>
                </Button>
                <Button variant="outline" size="sm" className="justify-start h-auto p-3">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">Grades</div>
                    <div className="text-xs text-slate-500">Update marks</div>
                  </div>
                </Button>
                <Button variant="outline" size="sm" className="justify-start h-auto p-3">
                  <Bell className="h-4 w-4 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">Announce</div>
                    <div className="text-xs text-slate-500">Send notification</div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
