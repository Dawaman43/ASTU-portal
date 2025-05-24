
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, BookOpen, Download, ArrowLeft, Filter, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const resources = [
    {
      id: 1,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      type: "Textbook",
      format: "PDF",
      size: "15.2 MB",
      downloads: 1234,
      rating: 4.8,
      category: "Computer Science",
      description: "Comprehensive guide to algorithms and data structures"
    },
    {
      id: 2,
      title: "Physics Laboratory Manual",
      author: "ASTU Physics Department",
      type: "Manual",
      format: "PDF",
      size: "8.7 MB",
      downloads: 856,
      rating: 4.5,
      category: "Physics",
      description: "Complete laboratory experiments and procedures"
    },
    {
      id: 3,
      title: "Calculus and Analytic Geometry",
      author: "Howard Anton",
      type: "Textbook",
      format: "PDF",
      size: "22.1 MB",
      downloads: 2145,
      rating: 4.7,
      category: "Mathematics",
      description: "Essential calculus concepts and applications"
    },
    {
      id: 4,
      title: "Database Systems Lecture Notes",
      author: "Dr. Smith",
      type: "Lecture Notes",
      format: "PDF",
      size: "3.4 MB",
      downloads: 567,
      rating: 4.6,
      category: "Computer Science",
      description: "Database design and implementation concepts"
    }
  ];

  const recentBooks = [
    {
      title: "Data Structures & Algorithms",
      author: "Dr. Smith",
      lastAccessed: "2 hours ago",
      progress: 75
    },
    {
      title: "Linear Algebra Notes",
      author: "Dr. Johnson",
      lastAccessed: "1 day ago",
      progress: 45
    },
    {
      title: "Physics Lab Manual",
      author: "Dr. Wilson",
      lastAccessed: "3 days ago",
      progress: 90
    }
  ];

  const categories = [
    { name: "Computer Science", count: 234 },
    { name: "Mathematics", count: 189 },
    { name: "Physics", count: 156 },
    { name: "Chemistry", count: 134 },
    { name: "Engineering", count: 267 },
    { name: "Biology", count: 98 }
  ];

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Digital Library</h1>
            <p className="text-gray-600">Access textbooks, research papers, and study materials</p>
          </div>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search books, authors, or subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="browse" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="browse">Browse Resources</TabsTrigger>
            <TabsTrigger value="recent">Recently Accessed</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="favorites">My Favorites</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            <div className="grid gap-4">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <BookOpen className="h-5 w-5 text-blue-600" />
                          <h3 className="text-lg font-semibold">{resource.title}</h3>
                          <Badge variant="outline">{resource.type}</Badge>
                        </div>
                        <p className="text-gray-600 mb-2">by {resource.author}</p>
                        <p className="text-sm text-gray-500 mb-3">{resource.description}</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{resource.format} • {resource.size}</span>
                          <span>{resource.downloads} downloads</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span>{resource.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2 ml-4">
                        <Badge className="bg-blue-100 text-blue-800">{resource.category}</Badge>
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          Preview
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Recently Accessed
                </CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBooks.map((book, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-2 rounded">
                          <BookOpen className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{book.title}</h4>
                          <p className="text-sm text-gray-600">{book.author}</p>
                          <p className="text-xs text-gray-500">{book.lastAccessed}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium mb-1">{book.progress}% complete</p>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${book.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-blue-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.count} resources</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  My Favorites
                </CardTitle>
                <CardDescription>Your bookmarked resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No favorites yet</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Start adding resources to your favorites to see them here
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Library;
