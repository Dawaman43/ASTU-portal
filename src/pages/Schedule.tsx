
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, ArrowLeft, Plus, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const Schedule = () => {
  const [selectedView, setSelectedView] = useState("week");

  const weeklySchedule = [
    {
      day: "Monday",
      classes: [
        {
          time: "10:00 AM - 11:30 AM",
          course: "Data Structures & Algorithms",
          code: "CSE201",
          room: "Room 201",
          instructor: "Dr. Smith",
          type: "Lecture"
        },
        {
          time: "1:00 PM - 2:30 PM",
          course: "Physics II",
          code: "PHY201",
          room: "Lab 301",
          instructor: "Dr. Wilson",
          type: "Lab"
        }
      ]
    },
    {
      day: "Tuesday",
      classes: [
        {
          time: "2:00 PM - 3:30 PM",
          course: "Discrete Mathematics",
          code: "MTH301",
          room: "Room 105",
          instructor: "Dr. Johnson",
          type: "Lecture"
        }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        {
          time: "10:00 AM - 11:30 AM",
          course: "Data Structures & Algorithms",
          code: "CSE201",
          room: "Room 201",
          instructor: "Dr. Smith",
          type: "Lecture"
        },
        {
          time: "1:00 PM - 2:30 PM",
          course: "Physics II",
          code: "PHY201",
          room: "Lab 301",
          instructor: "Dr. Wilson",
          type: "Lab"
        }
      ]
    },
    {
      day: "Thursday",
      classes: [
        {
          time: "2:00 PM - 3:30 PM",
          course: "Discrete Mathematics",
          code: "MTH301",
          room: "Room 105",
          instructor: "Dr. Johnson",
          type: "Lecture"
        }
      ]
    },
    {
      day: "Friday",
      classes: [
        {
          time: "10:00 AM - 11:30 AM",
          course: "Data Structures & Algorithms",
          code: "CSE201",
          room: "Room 201",
          instructor: "Dr. Smith",
          type: "Lecture"
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      date: "2024-01-15",
      time: "2:00 PM",
      title: "CSE201 Assignment Due",
      type: "deadline",
      course: "Data Structures & Algorithms"
    },
    {
      date: "2024-01-18",
      time: "10:00 AM",
      title: "MTH301 Midterm Exam",
      type: "exam",
      course: "Discrete Mathematics"
    },
    {
      date: "2024-01-20",
      time: "1:00 PM",
      title: "PHY201 Lab Practical",
      type: "lab",
      course: "Physics II"
    },
    {
      date: "2024-01-22",
      time: "3:00 PM",
      title: "Academic Advisor Meeting",
      type: "meeting",
      course: "Personal"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Lecture": return "bg-blue-100 text-blue-800";
      case "Lab": return "bg-green-100 text-green-800";
      case "Tutorial": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "deadline": return "border-l-red-500 bg-red-50";
      case "exam": return "border-l-orange-500 bg-orange-50";
      case "lab": return "border-l-green-500 bg-green-50";
      case "meeting": return "border-l-blue-500 bg-blue-50";
      default: return "border-l-gray-500 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Schedule</h1>
            <p className="text-gray-600">Spring 2024 Academic Calendar</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <Tabs defaultValue="weekly" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="weekly">Weekly View</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="calendar">Monthly Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="space-y-6">
            <div className="grid gap-4">
              {weeklySchedule.map((day, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      {day.day}
                    </CardTitle>
                    <CardDescription>
                      {day.classes.length} {day.classes.length === 1 ? 'class' : 'classes'} scheduled
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {day.classes.length === 0 ? (
                      <p className="text-gray-500 text-center py-4">No classes scheduled</p>
                    ) : (
                      <div className="space-y-3">
                        {day.classes.map((class_, classIndex) => (
                          <div key={classIndex} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className="font-medium">{class_.course}</h4>
                                <Badge variant="outline">{class_.code}</Badge>
                                <Badge className={getTypeColor(class_.type)}>{class_.type}</Badge>
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {class_.time}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {class_.room}
                                </div>
                                <span>{class_.instructor}</span>
                              </div>
                            </div>
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Upcoming Events & Deadlines
                </CardTitle>
                <CardDescription>Important dates and assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className={`p-4 border-l-4 rounded-lg ${getEventColor(event.type)}`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{event.course}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {event.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {event.time}
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="capitalize">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>January 2024</CardTitle>
                <CardDescription>Monthly overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="p-2 text-center font-medium text-gray-600 text-sm">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                    <div key={day} className="p-2 text-center border rounded hover:bg-gray-50 cursor-pointer min-h-[60px] flex flex-col justify-start">
                      <span className="text-sm font-medium">{day}</span>
                      {day === 15 && <div className="w-2 h-2 bg-red-500 rounded-full mt-1 mx-auto"></div>}
                      {day === 18 && <div className="w-2 h-2 bg-orange-500 rounded-full mt-1 mx-auto"></div>}
                      {day === 20 && <div className="w-2 h-2 bg-green-500 rounded-full mt-1 mx-auto"></div>}
                      {day === 22 && <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 mx-auto"></div>}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span>Deadline</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    <span>Exam</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Lab</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span>Meeting</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Schedule;
