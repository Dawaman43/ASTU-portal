
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  Bell, 
  User, 
  LogOut,
  Clock,
  Award,
  TrendingUp,
  Search,
  Download,
  FileText,
  Video,
  MessageSquare,
  Star,
  Target,
  CheckCircle,
  AlertCircle,
  Users,
  BookMarked,
  Calculator,
  Globe,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Wallet,
  Receipt,
  Calendar as CalendarIcon,
  Settings,
  HelpCircle,
  Shield,
  Zap,
  Laptop,
  Coffee,
  PlusCircle
} from "lucide-react";

interface StudentDashboardProps {
  onLogout: () => void;
}

const StudentDashboard = ({ onLogout }: StudentDashboardProps) => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const studentData = {
    name: "Alex Johnson",
    id: "ASTU/CSE/2023/001",
    year: "2nd Year",
    department: "Computer Science & Engineering",
    gpa: "3.85",
    credits: "45/120",
    email: "alex.johnson@astu.edu.et",
    phone: "+251-911-234567",
    address: "Adama, Ethiopia",
    emergencyContact: "+251-911-987654",
    bloodType: "O+",
    mentor: "Dr. Sarah Wilson"
  };

  const courses = [
    {
      id: "CSE201",
      name: "Data Structures & Algorithms",
      instructor: "Dr. Sarah Wilson",
      credits: 4,
      grade: "A-",
      progress: 85,
      schedule: "Mon, Wed, Fri - 10:00 AM",
      room: "Lab-201",
      assignments: 8,
      completedAssignments: 7,
      nextDeadline: "Project 3 - Mar 25",
      resources: ["Lecture Notes", "Lab Manual", "Video Tutorials"]
    },
    {
      id: "CSE202",
      name: "Database Management Systems",
      instructor: "Prof. Michael Chen",
      credits: 3,
      grade: "B+",
      progress: 78,
      schedule: "Tue, Thu - 2:00 PM",
      room: "Room-105",
      assignments: 6,
      completedAssignments: 5,
      nextDeadline: "Quiz 4 - Mar 22",
      resources: ["SQL Practice", "Database Design Guide"]
    },
    {
      id: "CSE203",
      name: "Computer Networks",
      instructor: "Dr. Emily Davis",
      credits: 3,
      grade: "A",
      progress: 92,
      schedule: "Mon, Wed - 3:30 PM",
      room: "Lab-301",
      assignments: 5,
      completedAssignments: 5,
      nextDeadline: "Final Project - Apr 1",
      resources: ["Network Simulator", "Protocol Documentation"]
    },
    {
      id: "MTH201",
      name: "Discrete Mathematics",
      instructor: "Prof. Robert Kim",
      credits: 4,
      grade: "B",
      progress: 73,
      schedule: "Tue, Thu - 9:00 AM",
      room: "Room-208",
      assignments: 10,
      completedAssignments: 8,
      nextDeadline: "Assignment 9 - Mar 28",
      resources: ["Problem Sets", "Solution Manual"]
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "Midterm Exam Schedule Released",
      content: "The midterm examination schedule for all courses has been published. Check your course pages for specific dates and times.",
      date: "2024-03-15",
      priority: "high",
      author: "Academic Office",
      category: "Exams"
    },
    {
      id: 2,
      title: "Library Extended Hours",
      content: "Library will be open 24/7 during exam week to support student studies.",
      date: "2024-03-14",
      priority: "medium",
      author: "Library Services",
      category: "Facilities"
    },
    {
      id: 3,
      title: "Career Fair Registration Open",
      content: "Register for the annual career fair happening next month. Top tech companies will be participating.",
      date: "2024-03-13",
      priority: "low",
      author: "Career Services",
      category: "Career"
    },
    {
      id: 4,
      title: "New Research Opportunities",
      content: "Faculty members are looking for undergraduate research assistants. Apply through the research portal.",
      date: "2024-03-12",
      priority: "medium",
      author: "Research Office",
      category: "Research"
    }
  ];

  const upcomingEvents = [
    { title: "Data Structures Quiz", date: "Mar 18", time: "10:00 AM", type: "exam" },
    { title: "Database Project Due", date: "Mar 20", time: "11:59 PM", type: "assignment" },
    { title: "Networks Lab Session", date: "Mar 22", time: "2:00 PM", type: "lab" },
    { title: "Math Study Group", date: "Mar 24", time: "4:00 PM", type: "study" },
    { title: "Career Workshop", date: "Mar 26", time: "1:00 PM", type: "workshop" }
  ];

  const financialData = {
    tuitionDue: "15,000 ETB",
    dueDate: "April 15, 2024",
    lastPayment: "10,000 ETB - Feb 15, 2024",
    totalFees: "45,000 ETB",
    paidAmount: "30,000 ETB",
    balance: "15,000 ETB",
    scholarships: "Merit Scholarship - 5,000 ETB"
  };

  const resources = [
    { name: "Digital Library", icon: BookOpen, description: "Access to academic papers and books", link: "#" },
    { name: "E-Learning Platform", icon: Video, description: "Online courses and tutorials", link: "#" },
    { name: "Student Portal", icon: Laptop, description: "Academic records and services", link: "#" },
    { name: "Career Services", icon: Target, description: "Job placement and internships", link: "#" },
    { name: "Health Services", icon: Shield, description: "Medical and counseling support", link: "#" },
    { name: "IT Support", icon: Settings, description: "Technical assistance", link: "#" }
  ];

  const quickStats = [
    { title: "Current GPA", value: studentData.gpa, icon: TrendingUp, color: "text-blue-600" },
    { title: "Credits Earned", value: "45", icon: Award, color: "text-green-600" },
    { title: "Courses Active", value: "4", icon: BookOpen, color: "text-purple-600" },
    { title: "Assignments Due", value: "3", icon: Clock, color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg animate-pulse">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ASTU Student Portal</h1>
                <p className="text-sm text-gray-600">Welcome back, {studentData.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 hidden md:block"
                />
              </div>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={onLogout} className="hover:bg-red-50">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={stat.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* Student Profile */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{studentData.name}</CardTitle>
                <CardDescription>{studentData.id}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Year:</span>
                  <span className="text-sm font-medium">{studentData.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Department:</span>
                  <span className="text-sm font-medium break-words">{studentData.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">GPA:</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {studentData.gpa}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Credits:</span>
                  <span className="text-sm font-medium">{studentData.credits}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Mentor:</span>
                  <span className="text-sm font-medium">{studentData.mentor}</span>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium text-sm flex items-center">
                      {event.type === 'exam' && <AlertCircle className="h-4 w-4 mr-2 text-red-500" />}
                      {event.type === 'assignment' && <FileText className="h-4 w-4 mr-2 text-blue-500" />}
                      {event.type === 'lab' && <Laptop className="h-4 w-4 mr-2 text-green-500" />}
                      {event.type === 'study' && <Users className="h-4 w-4 mr-2 text-purple-500" />}
                      {event.type === 'workshop' && <Target className="h-4 w-4 mr-2 text-orange-500" />}
                      {event.title}
                    </h4>
                    <p className="text-xs text-gray-600 flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {event.date} at {event.time}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Quick Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {resources.slice(0, 4).map((resource, index) => (
                  <Button key={index} variant="ghost" className="w-full justify-start text-sm h-auto p-2">
                    <resource.icon className="h-4 w-4 mr-2" />
                    {resource.name}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <Tabs defaultValue="dashboard" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 bg-white border">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="grades">Grades</TabsTrigger>
                <TabsTrigger value="announcements">News</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
                  
                  {/* Recent Activity */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                          Recent Activity
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center space-x-3 p-2 bg-green-50 rounded">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Completed Networks Assignment 4</span>
                        </div>
                        <div className="flex items-center space-x-3 p-2 bg-blue-50 rounded">
                          <FileText className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">Submitted Database Project Draft</span>
                        </div>
                        <div className="flex items-center space-x-3 p-2 bg-purple-50 rounded">
                          <Star className="h-4 w-4 text-purple-600" />
                          <span className="text-sm">Received A+ on Math Quiz</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Target className="h-5 w-5 mr-2 text-orange-600" />
                          This Week's Goals
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Complete Database Project</span>
                          <Badge variant="outline">In Progress</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Study for Networks Exam</span>
                          <Badge variant="outline">Pending</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Math Assignment 9</span>
                          <Badge variant="outline">Pending</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Course Progress Overview */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Progress Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {courses.map((course) => (
                          <div key={course.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-sm">{course.name}</h4>
                              <Badge variant={course.grade === 'A' ? 'default' : 'secondary'}>
                                {course.grade}
                              </Badge>
                            </div>
                            <p className="text-xs text-gray-600 mb-3">{course.id} • {course.instructor}</p>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-500" 
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="courses" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">My Courses</h2>
                  <div className="grid gap-6">
                    {courses.map((course) => (
                      <Card 
                        key={course.id} 
                        className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                        onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                      >
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <CardTitle className="text-lg">{course.name}</CardTitle>
                              <CardDescription className="mt-1">
                                {course.id} • {course.instructor} • {course.room}
                              </CardDescription>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                              <Badge variant={course.grade === 'A' ? 'default' : 'secondary'}>
                                {course.grade}
                              </Badge>
                              <span className="text-sm text-gray-600">{course.credits} Credits</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-gray-400" />
                                <span>{course.schedule}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <FileText className="h-4 w-4 text-gray-400" />
                                <span>{course.completedAssignments}/{course.assignments} Assignments</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <AlertCircle className="h-4 w-4 text-orange-400" />
                                <span>{course.nextDeadline}</span>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span>Course Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-3">
                                <div 
                                  className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full transition-all duration-500" 
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            </div>

                            {selectedCourse === course.id && (
                              <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-fade-in">
                                <h5 className="font-medium mb-3">Course Resources</h5>
                                <div className="grid md:grid-cols-2 gap-2">
                                  {course.resources.map((resource, index) => (
                                    <Button key={index} variant="ghost" size="sm" className="justify-start">
                                      <Download className="h-4 w-4 mr-2" />
                                      {resource}
                                    </Button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="grades" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Performance</h2>
                  <div className="grid gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Award className="h-5 w-5 mr-2" />
                          Grade Summary
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-3">Course</th>
                                <th className="text-left py-3">Credits</th>
                                <th className="text-left py-3">Grade</th>
                                <th className="text-left py-3">Points</th>
                                <th className="text-left py-3">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {courses.map((course) => (
                                <tr key={course.id} className="border-b hover:bg-gray-50 transition-colors">
                                  <td className="py-4">
                                    <div>
                                      <div className="font-medium">{course.name}</div>
                                      <div className="text-sm text-gray-600">{course.id}</div>
                                    </div>
                                  </td>
                                  <td className="py-4">{course.credits}</td>
                                  <td className="py-4">
                                    <Badge variant={course.grade === 'A' ? 'default' : 'secondary'}>
                                      {course.grade}
                                    </Badge>
                                  </td>
                                  <td className="py-4 font-medium">
                                    {course.grade === 'A' ? '4.0' : 
                                     course.grade === 'A-' ? '3.7' :
                                     course.grade === 'B+' ? '3.3' : '3.0'}
                                  </td>
                                  <td className="py-4">
                                    <Badge variant="outline" className="text-green-600 border-green-600">
                                      In Progress
                                    </Badge>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2" />
                            GPA Trend
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span>Current Semester</span>
                              <span className="text-2xl font-bold text-blue-600">{studentData.gpa}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Previous Semester</span>
                              <span className="text-lg font-semibold">3.72</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Cumulative GPA</span>
                              <span className="text-lg font-semibold">3.78</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Academic Standing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-600" />
                              <span>Dean's List - Fall 2023</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Star className="h-5 w-5 text-yellow-600" />
                              <span>Merit Scholarship Recipient</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Award className="h-5 w-5 text-purple-600" />
                              <span>Academic Excellence Award</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="announcements" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Announcements & News</h2>
                  <div className="space-y-4">
                    {announcements.map((announcement) => (
                      <Card key={announcement.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <CardTitle className="text-lg">{announcement.title}</CardTitle>
                              <CardDescription className="mt-1">
                                By {announcement.author} • {announcement.date}
                              </CardDescription>
                            </div>
                            <div className="flex space-x-2">
                              <Badge variant="outline">{announcement.category}</Badge>
                              <Badge 
                                variant={
                                  announcement.priority === 'high' ? 'destructive' :
                                  announcement.priority === 'medium' ? 'default' : 'secondary'
                                }
                              >
                                {announcement.priority}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{announcement.content}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="finance" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Information</h2>
                  <div className="grid gap-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center text-red-600">
                            <CreditCard className="h-5 w-5 mr-2" />
                            Amount Due
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">{financialData.tuitionDue}</p>
                          <p className="text-sm text-gray-600">Due: {financialData.dueDate}</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center text-green-600">
                            <Wallet className="h-5 w-5 mr-2" />
                            Total Paid
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold">{financialData.paidAmount}</p>
                          <p className="text-sm text-gray-600">Last: {financialData.lastPayment}</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center text-blue-600">
                            <Receipt className="h-5 w-5 mr-2" />
                            Scholarships
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-lg font-bold">5,000 ETB</p>
                          <p className="text-sm text-gray-600">Merit Scholarship</p>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Payment History</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                            <div>
                              <span className="font-medium">Tuition Payment</span>
                              <p className="text-sm text-gray-600">February 15, 2024</p>
                            </div>
                            <span className="font-bold text-green-600">10,000 ETB</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                            <div>
                              <span className="font-medium">Registration Fee</span>
                              <p className="text-sm text-gray-600">January 10, 2024</p>
                            </div>
                            <span className="font-bold text-green-600">5,000 ETB</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                            <div>
                              <span className="font-medium">Merit Scholarship</span>
                              <p className="text-sm text-gray-600">January 5, 2024</p>
                            </div>
                            <span className="font-bold text-blue-600">-5,000 ETB</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="profile" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Profile</h2>
                  <div className="grid gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-600">Full Name</label>
                            <p className="mt-1 font-medium">{studentData.name}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Student ID</label>
                            <p className="mt-1 font-medium">{studentData.id}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Email</label>
                            <p className="mt-1 font-medium flex items-center">
                              <Mail className="h-4 w-4 mr-2" />
                              {studentData.email}
                            </p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Phone</label>
                            <p className="mt-1 font-medium flex items-center">
                              <Phone className="h-4 w-4 mr-2" />
                              {studentData.phone}
                            </p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Address</label>
                            <p className="mt-1 font-medium flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {studentData.address}
                            </p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Blood Type</label>
                            <p className="mt-1 font-medium">{studentData.bloodType}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Academic Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-600">Department</label>
                            <p className="mt-1 font-medium">{studentData.department}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Academic Year</label>
                            <p className="mt-1 font-medium">{studentData.year}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Academic Mentor</label>
                            <p className="mt-1 font-medium">{studentData.mentor}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Emergency Contact</label>
                            <p className="mt-1 font-medium">{studentData.emergencyContact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="resources" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Resources</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <CardContent className="p-6 text-center">
                          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                            <resource.icon className="h-8 w-8 text-blue-600" />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{resource.name}</h3>
                          <p className="text-gray-600 text-sm">{resource.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="mt-8">
                    <CardHeader>
                      <CardTitle>Support & Help</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Button variant="outline" className="h-12 justify-start">
                          <HelpCircle className="h-5 w-5 mr-3" />
                          FAQ & Help Center
                        </Button>
                        <Button variant="outline" className="h-12 justify-start">
                          <MessageSquare className="h-5 w-5 mr-3" />
                          Live Chat Support
                        </Button>
                        <Button variant="outline" className="h-12 justify-start">
                          <Phone className="h-5 w-5 mr-3" />
                          Call Student Services
                        </Button>
                        <Button variant="outline" className="h-12 justify-start">
                          <Mail className="h-5 w-5 mr-3" />
                          Email Support
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
