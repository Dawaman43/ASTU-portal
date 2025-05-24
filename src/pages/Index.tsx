
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Calendar, Users, Target, Award, Zap } from "lucide-react";
import StudentDashboard from "@/components/StudentDashboard";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <StudentDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-lg animate-pulse-slow">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ASTU Student Portal</h1>
                <p className="text-sm text-gray-600">Adama Science & Technology University</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Academic Year 2024/25</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Your Academic Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Access your courses, track grades, connect with peers, and excel in your academic pursuits at ASTU.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Award className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Academic Excellence</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Target className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Goal Tracking</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Zap className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">Real-time Updates</span>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="max-w-md mx-auto mb-16 animate-bounce-in">
          <Card className="hover:shadow-2xl transition-all duration-500 border-l-4 border-l-blue-500 hover-lift">
            <CardHeader className="text-center pb-6">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Student Portal</CardTitle>
              <CardDescription className="text-gray-600">
                Access your personalized academic dashboard with courses, grades, announcements, and more
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                Access Student Portal
              </Button>
              <p className="text-xs text-gray-500 mt-3">
                Demo login - No credentials required
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Everything You Need for Academic Success
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors group">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Course Management</h4>
              <p className="text-gray-600 text-sm">Track progress, access materials, and manage assignments</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-green-50 transition-colors group">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Grade Tracking</h4>
              <p className="text-gray-600 text-sm">Monitor your academic performance and GPA trends</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-purple-50 transition-colors group">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Academic Calendar</h4>
              <p className="text-gray-600 text-sm">Stay updated with important dates and deadlines</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-orange-50 transition-colors group">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Student Community</h4>
              <p className="text-gray-600 text-sm">Connect with peers and access university resources</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Faculty Members</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
            <div className="text-gray-600">Academic Programs</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">ASTU Student Portal</h3>
                  <p className="text-gray-400 text-sm">Adama Science & Technology University</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering students with comprehensive academic tools and resources for educational excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Academic Calendar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Library</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Student Handbook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">IT Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health Services</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Adama Science & Technology University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
