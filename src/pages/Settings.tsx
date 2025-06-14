
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Trash2, 
  GraduationCap,
  School,
  Users,
  Settings as SettingsIcon
} from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const navigate = useNavigate();
  const [schoolData, setSchoolData] = useState({
    name: "Springfield High School",
    address: "123 Education Street, Springfield, IL 62701",
    phone: "+1 (555) 123-4567",
    email: "admin@springfield.edu",
    website: "www.springfield.edu"
  });

  const [adminData, setAdminData] = useState({
    name: "John Smith",
    email: "john.smith@springfield.edu",
    role: "Principal",
    phone: "+1 (555) 987-6543"
  });
  
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    parentPortalUpdates: true,
    attendanceAlerts: true,
    gradeUpdates: true,
    feeReminders: true
  });

  const handleSaveSchool = () => {
    toast.success("School information updated successfully!");
  };

  const handleSaveAdmin = () => {
    toast.success("Administrator profile updated successfully!");
  };

  const handleSaveNotifications = () => {
    toast.success("Notification preferences updated!");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button variant="ghost" onClick={() => navigate('/dashboard')} className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">EduFlow Settings</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-slate-900">School Settings</h1>
          <Badge className="bg-blue-100 text-blue-700 border-blue-200">
            Professional Plan
          </Badge>
        </div>

        <div className="space-y-6">
          {/* School Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <School className="h-5 w-5 text-slate-600" />
                <CardTitle>School Information</CardTitle>
              </div>
              <CardDescription>
                Update your school's basic information and contact details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="schoolName">School Name</Label>
                  <Input
                    id="schoolName"
                    value={schoolData.name}
                    onChange={(e) => setSchoolData({ ...schoolData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schoolEmail">School Email</Label>
                  <Input
                    id="schoolEmail"
                    type="email"
                    value={schoolData.email}
                    onChange={(e) => setSchoolData({ ...schoolData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="schoolAddress">Address</Label>
                  <Input
                    id="schoolAddress"
                    value={schoolData.address}
                    onChange={(e) => setSchoolData({ ...schoolData, address: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schoolPhone">Phone</Label>
                  <Input
                    id="schoolPhone"
                    value={schoolData.phone}
                    onChange={(e) => setSchoolData({ ...schoolData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schoolWebsite">Website</Label>
                  <Input
                    id="schoolWebsite"
                    value={schoolData.website}
                    onChange={(e) => setSchoolData({ ...schoolData, website: e.target.value })}
                  />
                </div>
              </div>
              
              <Button onClick={handleSaveSchool}>
                Save School Information
              </Button>
            </CardContent>
          </Card>

          {/* Administrator Profile */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-slate-600" />
                <CardTitle>Administrator Profile</CardTitle>
              </div>
              <CardDescription>
                Update your personal information and contact details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">JS</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                  <p className="text-sm text-slate-500 mt-1">
                    JPG, PNG or GIF. Max size 2MB.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="adminName">Full Name</Label>
                  <Input
                    id="adminName"
                    value={adminData.name}
                    onChange={(e) => setAdminData({ ...adminData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adminEmail">Email</Label>
                  <Input
                    id="adminEmail"
                    type="email"
                    value={adminData.email}
                    onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adminRole">Role</Label>
                  <Input
                    id="adminRole"
                    value={adminData.role}
                    onChange={(e) => setAdminData({ ...adminData, role: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adminPhone">Phone</Label>
                  <Input
                    id="adminPhone"
                    value={adminData.phone}
                    onChange={(e) => setAdminData({ ...adminData, phone: e.target.value })}
                  />
                </div>
              </div>
              
              <Button onClick={handleSaveAdmin}>
                Save Profile Changes
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-slate-600" />
                <CardTitle>Notification Preferences</CardTitle>
              </div>
              <CardDescription>
                Manage how you receive updates and alerts from the system.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-slate-500">Receive general system notifications via email</p>
                  </div>
                  <Switch
                    checked={notifications.emailNotifications}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, emailNotifications: checked })}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-slate-500">Get urgent alerts via text message</p>
                  </div>
                  <Switch
                    checked={notifications.smsNotifications}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, smsNotifications: checked })}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Attendance Alerts</p>
                    <p className="text-sm text-slate-500">Get notified about attendance issues</p>
                  </div>
                  <Switch
                    checked={notifications.attendanceAlerts}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, attendanceAlerts: checked })}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Grade Updates</p>
                    <p className="text-sm text-slate-500">Notifications when grades are updated</p>
                  </div>
                  <Switch
                    checked={notifications.gradeUpdates}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, gradeUpdates: checked })}
                  />
                </div>

                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Fee Reminders</p>
                    <p className="text-sm text-slate-500">Automatic reminders for fee payments</p>
                  </div>
                  <Switch
                    checked={notifications.feeReminders}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, feeReminders: checked })}
                  />
                </div>
              </div>
              
              <Button onClick={handleSaveNotifications}>
                Save Notification Preferences
              </Button>
            </CardContent>
          </Card>

          {/* User Management */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-slate-600" />
                <CardTitle>User Management</CardTitle>
              </div>
              <CardDescription>
                Manage users and permissions for your school.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">84</div>
                  <div className="text-sm text-blue-700">Teachers</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">1,247</div>
                  <div className="text-sm text-green-700">Students</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">15</div>
                  <div className="text-sm text-purple-700">Admin Users</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  Manage Teachers
                </Button>
                <Button variant="outline">
                  Manage Students
                </Button>
                <Button variant="outline">
                  User Roles & Permissions
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-slate-600" />
                <CardTitle>Security & Privacy</CardTitle>
              </div>
              <CardDescription>
                Manage your account security and data privacy settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline">
                Change Password
              </Button>
              <Button variant="outline">
                Enable Two-Factor Authentication
              </Button>
              <Button variant="outline">
                Download School Data
              </Button>
              <Button variant="outline">
                Privacy Settings
              </Button>
            </CardContent>
          </Card>

          {/* Billing & Subscription */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-slate-600" />
                <CardTitle>Billing & Subscription</CardTitle>
              </div>
              <CardDescription>
                Manage your subscription and billing information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium">Professional Plan</p>
                  <p className="text-sm text-slate-600">$99/month • Next billing: July 15, 2024</p>
                  <p className="text-sm text-slate-500">Up to 500 students</p>
                </div>
                <Button variant="outline" onClick={() => navigate('/pricing')}>
                  Manage Plan
                </Button>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  Update Payment Method
                </Button>
                <Button variant="outline">
                  Download Invoices
                </Button>
                <Button variant="outline">
                  Usage Reports
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Trash2 className="h-5 w-5 text-red-600" />
                <CardTitle className="text-red-600">Danger Zone</CardTitle>
              </div>
              <CardDescription>
                Irreversible actions that will affect your school's data.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                Export All Data
              </Button>
              <Button variant="destructive">
                Delete School Account
              </Button>
              <p className="text-sm text-slate-500">
                This action cannot be undone. All student data, records, and settings will be permanently deleted.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
