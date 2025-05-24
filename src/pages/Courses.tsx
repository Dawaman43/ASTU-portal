
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Users, Calendar, ArrowLeft, Download, Play, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses = [
    {
      id: "CSE201",
      name: "Data Structures & Algorithms",
      instructor: "Dr. Smith",
      credits: 3,
      progress: 75,
      grade: "A-",
      schedule: "Mon, Wed, Fri - 10:00 AM",
      room: "Room 201",
      nextClass: "Tomorrow at 10:00 AM",
      materials: ["Lecture Notes Week 8", "Assignment 3", "Practice Problems"],
      assignments: [
        { name: "Binary Trees Implementation", due: "2024-01-15", status: "submitted" },
        { name: "Graph Algorithms", due: "2024-01-22", status: "pending" }
      ]
    },
    {
      id: "MTH301",
      name: "Discrete Mathematics",
      instructor: "Dr. Johnson",
      credits: 4,
      progress: 60,
      grade: "B+",
      schedule: "Tue, Thu - 2:00 PM",
      room: "Room 105",
      nextClass: "Today at 2:00 PM",
      materials: ["Logic and Proofs", "Set Theory Notes", "Midterm Study Guide"],
      assignments: [
        { name: "Proof Techniques", due: "2024-01-18", status: "graded" },
        { name: "Graph Theory Problems", due: "2024-01-25", status: "not_started" }
      ]
    },
    {
      id: "PHY201",
      name: "Physics II",
      instructor: "Dr. Wilson",
      credits: 3,
      progress: 85,
      grade: "A",
      schedule: "Mon, Wed - 1:00 PM",
      room: "Lab 301",
      nextClass: "Monday at 1:00 PM",
      materials: ["Electromagnetism Notes", "Lab Manual", "Problem Sets"],
      assignments: [
        { name: "Circuit Analysis", due: "2024-01-20", status: "submitted" },
        { name: "Wave Mechanics", due: "2024-01-27", status: "pending" }
      ]
    }
  ];

  if (selectedCourse) {
    const course = courses.find(c => c.id === selectedCourse);
    if (!course) return null;

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedCourse(null)}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{course.name}</h1>
              <p className="text-gray-600">{course.instructor} • {course.credits} Credits</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="materials">Materials</TabsTrigger>
                  <TabsTrigger value="assignments">Assignments</TabsTrigger>
                  <TabsTrigger value="grades">Grades</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Completion</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="w-full" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-100 p-2 rounded-full">
                            <FileText className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">New lecture notes uploaded</p>
                            <p className="text-sm text-gray-600">2 hours ago</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="bg-green-100 p-2 rounded-full">
                            <BookOpen className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Assignment graded</p>
                            <p className="text-sm text-gray-600">1 day ago</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="materials" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Materials</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {course.materials.map((material, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                            <div className="flex items-center space-x-3">
                              <FileText className="h-5 w-5 text-gray-500" />
                              <span>{material}</span>
                            </div>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="assignments" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Assignments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {course.assignments.map((assignment, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <h4 className="font-medium">{assignment.name}</h4>
                              <p className="text-sm text-gray-600">Due: {assignment.due}</p>
                            </div>
                            <Badge variant={
                              assignment.status === 'submitted' ? 'default' :
                              assignment.status === 'graded' ? 'secondary' : 'destructive'
                            }>
                              {assignment.status.replace('_', ' ')}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="grades" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Grade Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Current Grade</span>
                          <Badge className="text-lg px-3 py-1">{course.grade}</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Assignments (40%)</span>
                            <span>85%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Midterm (30%)</span>
                            <span>88%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Participation (15%)</span>
                            <span>92%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Final Exam (15%)</span>
                            <span>Not taken</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium">{course.schedule}</p>
                    <p className="text-sm text-gray-600">{course.room}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-800">Next Class</p>
                    <p className="text-sm text-blue-600">{course.nextClass}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start">
                    <Play className="h-4 w-4 mr-2" />
                    Join Virtual Class
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Study Group
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Course Forum
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
            <p className="text-gray-600">Spring 2024 Semester</p>
          </div>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer hover-lift"
              onClick={() => setSelectedCourse(course.id)}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {course.id} • {course.instructor}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{course.credits} Credits</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="w-full" />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Current Grade</span>
                    <Badge>{course.grade}</Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.schedule}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {course.nextClass}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
