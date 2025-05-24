
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, TrendingUp, TrendingDown, Download, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Grades = () => {
  const studentData = {
    currentGPA: 3.67,
    cumulativeGPA: 3.45,
    totalCredits: 45,
    completedCredits: 42
  };

  const currentSemester = [
    {
      course: "Data Structures & Algorithms",
      code: "CSE201",
      credits: 3,
      grade: "A-",
      percentage: 88,
      assignments: [
        { name: "Assignment 1", score: 85, total: 100, weight: 10 },
        { name: "Assignment 2", score: 92, total: 100, weight: 10 },
        { name: "Midterm", score: 86, total: 100, weight: 30 },
        { name: "Final Project", score: 90, total: 100, weight: 25 }
      ]
    },
    {
      course: "Discrete Mathematics",
      code: "MTH301",
      credits: 4,
      grade: "B+",
      percentage: 82,
      assignments: [
        { name: "Homework 1", score: 80, total: 100, weight: 15 },
        { name: "Homework 2", score: 85, total: 100, weight: 15 },
        { name: "Midterm", score: 78, total: 100, weight: 35 },
        { name: "Final Exam", score: 85, total: 100, weight: 35 }
      ]
    },
    {
      course: "Physics II",
      code: "PHY201",
      credits: 3,
      grade: "A",
      percentage: 92,
      assignments: [
        { name: "Lab Reports", score: 95, total: 100, weight: 20 },
        { name: "Quiz Average", score: 88, total: 100, weight: 20 },
        { name: "Midterm", score: 94, total: 100, weight: 30 },
        { name: "Final Exam", score: 90, total: 100, weight: 30 }
      ]
    }
  ];

  const gradeHistory = [
    { semester: "Fall 2023", gpa: 3.2, credits: 15 },
    { semester: "Spring 2023", gpa: 3.4, credits: 15 },
    { semester: "Fall 2022", gpa: 3.1, credits: 15 }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.includes('A')) return 'bg-green-100 text-green-800';
    if (grade.includes('B')) return 'bg-blue-100 text-blue-800';
    if (grade.includes('C')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Academic Records</h1>
            <p className="text-gray-600">Track your academic performance and progress</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Transcript
            </Button>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* GPA Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Current GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-green-600">{studentData.currentGPA}</span>
                <TrendingUp className="h-4 w-4 text-green-600 ml-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Cumulative GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">{studentData.cumulativeGPA}</span>
                <TrendingUp className="h-4 w-4 text-blue-600 ml-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Credits Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-bold text-purple-600">{studentData.completedCredits}</span>
              <p className="text-sm text-gray-600">of {studentData.totalCredits}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={(studentData.completedCredits / studentData.totalCredits) * 100} className="w-full" />
              <p className="text-sm text-gray-600 mt-1">
                {Math.round((studentData.completedCredits / studentData.totalCredits) * 100)}% Complete
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="current" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">Current Semester</TabsTrigger>
            <TabsTrigger value="history">Grade History</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-6">
            <div className="space-y-4">
              {currentSemester.map((course, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{course.course}</CardTitle>
                        <CardDescription>{course.code} • {course.credits} Credits</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge className={getGradeColor(course.grade)}>{course.grade}</Badge>
                        <p className="text-sm text-gray-600 mt-1">{course.percentage}%</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-gray-700">Grade Breakdown</h4>
                      {course.assignments.map((assignment, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-sm">{assignment.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">
                              {assignment.score}/{assignment.total}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {assignment.weight}%
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Semester History</CardTitle>
                <CardDescription>Your academic performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gradeHistory.map((semester, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{semester.semester}</h4>
                        <p className="text-sm text-gray-600">{semester.credits} Credits</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <span className="text-lg font-semibold mr-2">{semester.gpa}</span>
                          {semester.gpa > 3.0 ? 
                            <TrendingUp className="h-4 w-4 text-green-600" /> : 
                            <TrendingDown className="h-4 w-4 text-red-600" />
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Performance Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Assignment Average</span>
                        <span>87%</span>
                      </div>
                      <Progress value={87} className="w-full" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Exam Average</span>
                        <span>84%</span>
                      </div>
                      <Progress value={84} className="w-full" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Project Average</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="w-full" />
                    </div>
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
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                        </div>
                        <span className="text-sm">33%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>B Grades</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                        <span className="text-sm">50%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>C Grades</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '17%' }}></div>
                        </div>
                        <span className="text-sm">17%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Grades;
