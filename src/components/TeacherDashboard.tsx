
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  Bell, 
  User, 
  LogOut,
  Calendar,
  BarChart3,
  MessageSquare,
  PlusCircle
} from "lucide-react";

interface TeacherDashboardProps {
  onLogout: () => void;
}

const TeacherDashboard = ({ onLogout }: TeacherDashboardProps) => {
  const teacherData = {
    name: "Dr. Sarah Wilson",
    id: "ASTU/FAC/2018/042",
    department: "Computer Science & Engineering",
    position: "Associate Professor",
    experience: "8 years"
  };

  const courses = [
    {
      id: "CSE201",
      name: "Data Structures & Algorithms",
      students: 45,
      semester: "Spring 2024",
      schedule: "Mon, Wed, Fri - 10:00 AM",
      room: "CSE-201",
      avgGrade: "B+",
      completion: 75
    },
    {
      id: "CSE301",
      name: "Advanced Algorithms",
      students: 32,
      semester: "Spring 2024",
      schedule: "Tue, Thu - 2:00 PM",
      room: "CSE-301",
      avgGrade: "A-",
      completion: 68
    },
    {
      id: "CSE401",
      name: "Machine Learning",
      students: 28,
      semester: "Spring 2024",
      schedule: "Mon, Wed - 3:30 PM",
      room: "CSE-401",
      avgGrade: "B+",
      completion: 82
    }
  ];

  const recentSubmissions = [
    {
      student: "Alex Johnson",
      course: "CSE201",
      assignment: "Binary Tree Implementation",
      submitted: "2 hours ago",
      status: "pending"
    },
    {
      student: "Maria Garcia",
      course: "CSE301",
      assignment: "Graph Algorithms",
      submitted: "5 hours ago",
      status: "graded"
    },
    {
      student: "David Chen",
      course: "CSE401",
      assignment: "Neural Network Project",
      submitted: "1 day ago",
      status: "pending"
    }
  ];

  const upcomingClasses = [
    { course: "CSE201", time: "10:00 AM", room: "CSE-201", topic: "Binary Search Trees" },
    { course: "CSE301", time: "2:00 PM", room: "CSE-301", topic: "Dynamic Programming" },
    { course: "CSE401", time: "3:30 PM", room: "CSE-401", topic: "Deep Learning Basics" }
  ];

  const studentPerformance = [
    { name: "Alex Johnson", course: "CSE201", grade: "A-", attendance: "95%" },
    { name: "Maria Garcia", course: "CSE301", grade: "A", attendance: "98%" },
    { name: "David Chen", course: "CSE401", grade: "B+", attendance: "87%" },
    { name: "Sarah Kim", course: "CSE201", grade: "B", attendance: "92%" },
    { name: "John Smith", course: "CSE301", grade: "A-", attendance: "90%" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Teacher Portal</h1>
                <p className="text-sm text-gray-600">Welcome back, {teacherData.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Teacher Info */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg">{teacherData.name}</CardTitle>
                <CardDescription>{teacherData.position}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">ID:</span>
                  <span className="text-sm font-medium">{teacherData.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Department:</span>
                  <span className="text-sm font-medium">{teacherData.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Experience:</span>
                  <span className="text-sm font-medium">{teacherData.experience}</span>
                </div>
                <div className="pt-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Create Assignment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Today's Classes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingClasses.map((class_, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-sm">{class_.course}</h4>
                    <p className="text-xs text-gray-600">{class_.time} • {class_.room}</p>
                    <p className="text-xs text-gray-500 mt-1">{class_.topic}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <Tabs defaultValue="courses" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="courses">My Courses</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="submissions">Submissions</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="courses" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Management</h2>
                  <div className="grid gap-6">
                    {courses.map((course) => (
                      <Card key={course.id} className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl">{course.name}</CardTitle>
                              <CardDescription className="mt-1">
                                {course.id} • {course.semester}
                              </CardDescription>
                            </div>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {course.students} students
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-gray-600">Schedule</p>
                              <p className="font-medium">{course.schedule}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Room</p>
                              <p className="font-medium">{course.room}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Avg. Grade</p>
                              <p className="font-medium">{course.avgGrade}</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Course Progress</span>
                              <span>{course.completion}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-green-600 h-2 rounded-full transition-all duration-300" 
                                style={{ width: `${course.completion}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-4">
                            <Button size="sm" variant="outline">
                              <BookOpen className="h-4 w-4 mr-2" />
                              View Course
                            </Button>
                            <Button size="sm" variant="outline">
                              <Users className="h-4 w-4 mr-2" />
                              Manage Students
                            </Button>
                            <Button size="sm" variant="outline">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Announcements
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="students" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Performance</h2>
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Student Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Student</th>
                              <th className="text-left py-2">Course</th>
                              <th className="text-left py-2">Grade</th>
                              <th className="text-left py-2">Attendance</th>
                              <th className="text-left py-2">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {studentPerformance.map((student, index) => (
                              <tr key={index} className="border-b">
                                <td className="py-3">
                                  <div className="flex items-center space-x-3">
                                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                                      <User className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <span className="font-medium">{student.name}</span>
                                  </div>
                                </td>
                                <td className="py-3">{student.course}</td>
                                <td className="py-3">
                                  <Badge variant={student.grade.includes('A') ? 'default' : 'secondary'}>
                                    {student.grade}
                                  </Badge>
                                </td>
                                <td className="py-3">{student.attendance}</td>
                                <td className="py-3">
                                  <Button size="sm" variant="outline">
                                    View Details
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="submissions" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Submissions</h2>
                  <div className="space-y-4">
                    {recentSubmissions.map((submission, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">{submission.assignment}</h3>
                              <p className="text-gray-600 mt-1">
                                Submitted by {submission.student} • {submission.course}
                              </p>
                              <p className="text-sm text-gray-500 mt-1">{submission.submitted}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge 
                                variant={submission.status === 'graded' ? 'default' : 'secondary'}
                              >
                                {submission.status}
                              </Badge>
                              <Button size="sm">
                                {submission.status === 'graded' ? 'View Grade' : 'Grade Now'}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Analytics</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <BarChart3 className="h-5 w-5 mr-2" />
                          Course Statistics
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Total Students</span>
                          <span className="text-2xl font-bold text-green-600">105</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Average Grade</span>
                          <span className="text-lg font-semibold">B+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Attendance Rate</span>
                          <span className="text-lg font-semibold">92%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Completion Rate</span>
                          <span className="text-lg font-semibold">87%</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Grade Distribution</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>A Grades</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-green-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                              </div>
                              <span className="text-sm">35%</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>B Grades</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                              </div>
                              <span className="text-sm">45%</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>C Grades</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                              </div>
                              <span className="text-sm">15%</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>D & F Grades</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div className="bg-red-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                              </div>
                              <span className="text-sm">5%</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
