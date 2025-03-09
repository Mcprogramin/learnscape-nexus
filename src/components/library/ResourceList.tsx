
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText, FileImage, Film, File, Search, BookOpen } from "lucide-react";

// Mock data for library resources
const resources = [
  {
    id: 1,
    title: "Advanced Mathematics - Calculus Guide",
    description: "Comprehensive guide to differential and integral calculus with practice problems.",
    type: "PDF",
    subject: "Mathematics",
    gradeLevel: "11-12",
    uploadDate: "May 15, 2023",
    fileSize: "2.4 MB",
    author: "Dr. Alan Thomson"
  },
  {
    id: 2,
    title: "World History - 20th Century Timeline",
    description: "Visual timeline of major events in 20th century world history.",
    type: "Image",
    subject: "History",
    gradeLevel: "9-10",
    uploadDate: "May 12, 2023",
    fileSize: "3.1 MB",
    author: "Prof. Sarah Williams"
  },
  {
    id: 3,
    title: "Chemistry Lab Safety Guidelines",
    description: "Essential safety procedures and protocols for the chemistry laboratory.",
    type: "PDF",
    subject: "Chemistry",
    gradeLevel: "All",
    uploadDate: "May 10, 2023",
    fileSize: "1.8 MB",
    author: "Science Department"
  },
  {
    id: 4,
    title: "Introduction to Photosynthesis",
    description: "Educational video explaining the process of photosynthesis with animations.",
    type: "Video",
    subject: "Biology",
    gradeLevel: "7-8",
    uploadDate: "May 8, 2023",
    fileSize: "45.6 MB",
    author: "Ms. Jennifer Lopez"
  },
  {
    id: 5,
    title: "English Literature - Shakespearean Plays Analysis",
    description: "In-depth analysis of major themes in Shakespeare's most famous plays.",
    type: "PDF",
    subject: "English",
    gradeLevel: "9-12",
    uploadDate: "May 5, 2023",
    fileSize: "4.2 MB",
    author: "Dr. Michael Johnson"
  },
  {
    id: 6,
    title: "Physics - Forces and Motion Practice Problems",
    description: "Collection of practice problems covering Newton's laws and related concepts.",
    type: "PDF",
    subject: "Physics",
    gradeLevel: "10-12",
    uploadDate: "May 2, 2023",
    fileSize: "2.7 MB",
    author: "Mr. Robert Chen"
  },
  {
    id: 7,
    title: "Spanish Vocabulary Flashcards",
    description: "Printable flashcards with common Spanish vocabulary words and phrases.",
    type: "PDF",
    subject: "Languages",
    gradeLevel: "All",
    uploadDate: "April 28, 2023",
    fileSize: "1.5 MB",
    author: "Language Department"
  },
  {
    id: 8,
    title: "Digital Art Basics Tutorial",
    description: "Step-by-step tutorial for beginners learning digital art techniques.",
    type: "Video",
    subject: "Art",
    gradeLevel: "All",
    uploadDate: "April 25, 2023",
    fileSize: "65.3 MB",
    author: "Ms. Emily Carter"
  }
];

const getResourceIcon = (type: string) => {
  switch (type) {
    case "PDF":
      return <FileText className="h-10 w-10 text-red-500" />;
    case "Image":
      return <FileImage className="h-10 w-10 text-blue-500" />;
    case "Video":
      return <Film className="h-10 w-10 text-purple-500" />;
    default:
      return <File className="h-10 w-10 text-gray-500" />;
  }
};

const ResourceList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");

  // Get unique subjects, types, and grade levels for filters
  const subjects = [...new Set(resources.map(resource => resource.subject))];
  const types = [...new Set(resources.map(resource => resource.type))];
  const gradeLevels = [...new Set(resources.map(resource => resource.gradeLevel))];

  // Filter resources based on search and selected filters
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSubject = selectedSubject === "" || resource.subject === selectedSubject;
    const matchesType = selectedType === "" || resource.type === selectedType;
    const matchesGrade = selectedGrade === "" || resource.gradeLevel === selectedGrade;
    
    return matchesSearch && matchesSubject && matchesType && matchesGrade;
  });

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Find Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title, description, or author"
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Subjects</SelectItem>
                {subjects.map(subject => (
                  <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="File Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                {types.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger>
                <SelectValue placeholder="Grade Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Grades</SelectItem>
                {gradeLevels.map(grade => (
                  <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:col-span-3">
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedSubject("");
                setSelectedType("");
                setSelectedGrade("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Resource List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <Card key={resource.id} className="card-hover">
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                {getResourceIcon(resource.type)}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <Badge>{resource.type}</Badge>
                  </div>
                  <CardDescription>
                    <span className="block">By {resource.author}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{resource.subject}</Badge>
                      <Badge variant="outline">Grades {resource.gradeLevel}</Badge>
                    </div>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{resource.description}</p>
                <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                  <span>Uploaded: {resource.uploadDate}</span>
                  <span>{resource.fileSize}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-school-primary hover:bg-school-secondary">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-2 flex flex-col items-center justify-center py-12 text-center">
            <BookOpen className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium mb-2">No resources found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceList;
