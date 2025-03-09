
import { useParams, Link } from "react-router-dom";
import { User, Calendar, Clock, ChevronLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

// Mock data for a single blog post
const blogPost = {
  id: 1,
  title: "The Future of Educational Technology",
  content: `
    <p class="mb-4">Technology continues to transform education at an unprecedented pace. From artificial intelligence to virtual reality, new tools are creating opportunities for more personalized and engaging learning experiences.</p>

    <h2 class="text-2xl font-bold mt-6 mb-4">Artificial Intelligence in the Classroom</h2>
    <p class="mb-4">AI-powered systems can now adapt to individual student needs, providing customized learning paths and immediate feedback. These tools can identify knowledge gaps and suggest resources to help students overcome specific challenges.</p>
    <p class="mb-4">Teachers are using AI to automate routine tasks like grading multiple-choice assessments, allowing them to focus more on providing qualitative feedback and one-on-one support.</p>

    <h2 class="text-2xl font-bold mt-6 mb-4">Virtual and Augmented Reality</h2>
    <p class="mb-4">VR and AR technologies are creating immersive learning environments that were previously impossible. Students can now visit ancient Rome, explore the human body from the inside, or conduct virtual science experiments without leaving the classroom.</p>
    <p class="mb-4">These technologies are particularly valuable for visual and kinesthetic learners who benefit from interactive, hands-on experiences.</p>

    <h2 class="text-2xl font-bold mt-6 mb-4">Challenges and Considerations</h2>
    <p class="mb-4">While educational technology offers tremendous benefits, it also presents challenges. Issues of digital equity, privacy concerns, and the need for teacher training must be addressed to ensure that technology enhances rather than hinders the educational experience.</p>
    <p class="mb-4">Schools must also strike a balance between technology use and traditional learning methods. The social and emotional aspects of education remain crucial and should not be overshadowed by digital tools.</p>

    <h2 class="text-2xl font-bold mt-6 mb-4">Looking Ahead</h2>
    <p class="mb-4">The future of educational technology is bright, with continued innovations promising to make learning more accessible, engaging, and effective for all students. As we embrace these new tools, we must remain focused on the fundamental goal of education: helping students develop the knowledge, skills, and mindset they need to thrive in an ever-changing world.</p>
  `,
  author: {
    name: "Dr. Jane Smith",
    role: "Educational Technology Professor",
    avatar: ""
  },
  date: "May 20, 2023",
  category: "Technology",
  readTime: "5 min read"
};

const BlogDetail = () => {
  const { id } = useParams();
  
  // In a real application, you would fetch the post based on the ID
  // For this example, we'll just use our mock data

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link to="/blog">
          <Button variant="ghost" className="pl-0">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              {blogPost.category}
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {blogPost.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blogPost.title}</h1>
          <div className="flex items-center gap-4 mb-8">
            <Avatar>
              <AvatarImage src={blogPost.author.avatar} />
              <AvatarFallback>{blogPost.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{blogPost.author.name}</div>
              <div className="text-sm text-muted-foreground">{blogPost.author.role}</div>
            </div>
            <div className="text-sm text-muted-foreground flex items-center ml-auto">
              <Calendar className="h-4 w-4 mr-1" />
              Published on {blogPost.date}
            </div>
          </div>
        </div>

        <Separator />

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

        <Separator className="my-8" />

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">About the Author</h3>
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={blogPost.author.avatar} />
              <AvatarFallback className="text-xl">{blogPost.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-lg">{blogPost.author.name}</div>
              <div className="text-muted-foreground mb-2">{blogPost.author.role}</div>
              <p className="text-sm">
                Dr. Smith has over 15 years of experience in educational technology research and implementation. 
                She has published numerous articles on the integration of technology in K-12 and higher education.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold hover:text-school-secondary">
                  <Link to="/blog/2">Effective Study Techniques for Final Exams</Link>
                </h4>
                <p className="text-sm text-muted-foreground mt-1">Prof. Michael Johnson • May 18, 2023</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold hover:text-school-secondary">
                  <Link to="/blog/6">Preparing Students for the Jobs of Tomorrow</Link>
                </h4>
                <p className="text-sm text-muted-foreground mt-1">Dr. Lisa Garcia • May 8, 2023</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
