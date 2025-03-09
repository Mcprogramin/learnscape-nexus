
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadResource = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "",
    gradeLevel: "",
    resourceType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const clearFile = () => {
    setFileName("");
    // This would reset the file input in a real implementation
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title || !formData.subject || !formData.gradeLevel || !formData.resourceType || !fileName) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields and upload a file.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call for upload
    setTimeout(() => {
      toast({
        title: "Upload Successful",
        description: "Your resource has been uploaded to the library.",
      });
      
      // Reset form
      setFormData({
        title: "",
        description: "",
        subject: "",
        gradeLevel: "",
        resourceType: "",
      });
      setFileName("");
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Upload New Resource</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Resource Title *</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter a descriptive title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Provide a brief description of this resource"
              value={formData.description}
              onChange={handleChange}
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Select 
                value={formData.subject} 
                onValueChange={(value) => handleSelectChange("subject", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Mathematics">Mathematics</SelectItem>
                  <SelectItem value="Science">Science</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="History">History</SelectItem>
                  <SelectItem value="Geography">Geography</SelectItem>
                  <SelectItem value="Art">Art</SelectItem>
                  <SelectItem value="Music">Music</SelectItem>
                  <SelectItem value="Physical Education">Physical Education</SelectItem>
                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                  <SelectItem value="Languages">Languages</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gradeLevel">Grade Level *</Label>
              <Select 
                value={formData.gradeLevel} 
                onValueChange={(value) => handleSelectChange("gradeLevel", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select grade level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="K-2">K-2</SelectItem>
                  <SelectItem value="3-5">3-5</SelectItem>
                  <SelectItem value="6-8">6-8</SelectItem>
                  <SelectItem value="9-10">9-10</SelectItem>
                  <SelectItem value="11-12">11-12</SelectItem>
                  <SelectItem value="All">All Grades</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resourceType">Resource Type *</Label>
              <Select 
                value={formData.resourceType} 
                onValueChange={(value) => handleSelectChange("resourceType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PDF">PDF Document</SelectItem>
                  <SelectItem value="Image">Image</SelectItem>
                  <SelectItem value="Video">Video</SelectItem>
                  <SelectItem value="Presentation">Presentation</SelectItem>
                  <SelectItem value="Worksheet">Worksheet</SelectItem>
                  <SelectItem value="Lesson Plan">Lesson Plan</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Upload File *</Label>
            <div className="flex items-center gap-4">
              {fileName ? (
                <div className="flex-1 flex items-center justify-between border rounded-md p-2 bg-gray-50">
                  <span className="text-sm truncate max-w-[250px]">{fileName}</span>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFile}
                    className="h-auto p-1"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex-1">
                  <label 
                    htmlFor="file-upload" 
                    className="flex items-center justify-center gap-2 border border-dashed rounded-md p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <Upload className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Click to upload a file</span>
                    <Input 
                      id="file-upload" 
                      type="file" 
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Maximum file size: 50MB. Supported formats: PDF, JPG, PNG, MP4, PPTX
                  </p>
                </div>
              )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" type="button">
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit} 
          disabled={loading}
          className="bg-school-primary hover:bg-school-secondary"
        >
          {loading ? "Uploading..." : "Upload Resource"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UploadResource;
