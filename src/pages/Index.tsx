
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, FileText, ChevronDown, Award, Calendar, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Quantum Computing Algorithms",
    excerpt: "An exploration of quantum algorithms and their potential applications in solving complex computational problems.",
    category: "technical",
    date: "2024-01-15",
    slug: "quantum-computing-algorithms",
    hasLatex: true
  },
  {
    id: 2,
    title: "The Art of Research: Lessons from My PhD Journey",
    excerpt: "Personal reflections on the challenges and rewards of pursuing graduate research in computer science.",
    category: "non-technical",
    date: "2024-01-10",
    slug: "research-journey",
    hasLatex: false
  },
  {
    id: 3,
    title: "Machine Learning for Climate Modeling",
    excerpt: "How deep learning techniques are revolutionizing our understanding of climate patterns and predictions.",
    category: "technical",
    date: "2024-01-05",
    slug: "ml-climate-modeling",
    hasLatex: true
  }
];

const publications = [
  {
    title: "Quantum-Enhanced Climate Modeling with Neural Networks",
    authors: "Your Name, A. Researcher, B. Scientist",
    venue: "Nature Machine Intelligence",
    year: "2024",
    type: "journal",
    status: "published"
  },
  {
    title: "Deep Learning Approaches for Long-term Climate Prediction",
    authors: "Your Name, C. Expert, D. Professor",
    venue: "International Conference on Machine Learning (ICML)",
    year: "2023",
    type: "conference",
    status: "published"
  },
  {
    title: "Quantum Algorithms for Climate Data Analysis",
    authors: "Your Name, E. Collaborator",
    venue: "arXiv preprint",
    year: "2024",
    type: "preprint",
    status: "preprint"
  }
];

const awards = [
  {
    title: "Best Student Paper Award",
    organization: "International Conference on Machine Learning",
    year: "2023"
  },
  {
    title: "Graduate Research Fellowship",
    organization: "National Science Foundation",
    year: "2022"
  },
  {
    title: "Outstanding TA Award",
    organization: "Computer Science Department",
    year: "2022"
  }
];

const updates = [
  {
    date: "2024-01-20",
    content: "Excited to share that our paper on quantum-enhanced climate modeling has been accepted at Nature MI!"
  },
  {
    date: "2024-01-15",
    content: "Presented our latest research at the Quantum Computing Workshop at MIT."
  },
  {
    date: "2024-01-10",
    content: "Started collaboration with researchers at CERN on quantum algorithms for particle physics simulations."
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [blogFilter, setBlogFilter] = useState("all");

  const filteredPosts = blogPosts.filter(post => 
    blogFilter === "all" || post.category === blogFilter
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text">
              Your Name
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "publications", "awards", "updates", "miscellaneous", "blog"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section === "miscellaneous" ? "misc" : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Photo - Left Side */}
            <div className="flex justify-center md:justify-end animate-fade-in">
              <Avatar className="w-64 h-64 ring-4 ring-primary/20">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" 
                  alt="Your Name" 
                />
                <AvatarFallback className="text-4xl">YN</AvatarFallback>
              </Avatar>
            </div>

            {/* About Text - Right Side */}
            <div className="text-left animate-slide-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">Your Name</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                PhD Student in Computer Science
              </h2>

              <div className="mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate researcher exploring the intersection of machine learning, 
                  quantum computing, and climate science. Currently pursuing my PhD, I focus 
                  on developing innovative computational methods to address complex real-world challenges.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My work involves creating novel algorithms that leverage quantum computing principles 
                  to enhance climate modeling accuracy and develop sustainable solutions for environmental challenges.
                </p>
              </div>

              {/* Research Areas */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["Machine Learning", "Quantum Computing", "Climate Science", "Deep Learning"].map((area) => (
                  <Badge key={area} variant="secondary" className="glass px-4 py-2">
                    {area}
                  </Badge>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                <Button variant="outline" size="icon" className="glass">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="glass">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="glass">
                  <Mail className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="glass">
                  <FileText className="h-5 w-5" />
                </Button>
              </div>

              {/* Scroll Indicator */}
              <Button 
                onClick={() => scrollToSection("publications")} 
                variant="ghost" 
                className="animate-bounce"
              >
                <ChevronDown className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Publications & Preprints</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="glass hover:bg-white/10 transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge 
                      variant={pub.status === "published" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {pub.status === "published" ? pub.type : "preprint"}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{pub.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                  <p className="text-muted-foreground mb-2">{pub.authors}</p>
                  <p className="text-sm text-muted-foreground italic">{pub.venue}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Services Section */}
      <section id="awards" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Awards & Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="h-6 w-6 mr-2" />
                Awards
              </h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <Card key={index} className="glass animate-fade-in">
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{award.title}</h4>
                      <p className="text-muted-foreground text-sm">{award.organization}</p>
                      <p className="text-muted-foreground text-xs">{award.year}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Services</h3>
              <div className="space-y-4">
                <Card className="glass animate-fade-in">
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Reviewer</h4>
                    <p className="text-muted-foreground text-sm">ICML, NeurIPS, ICLR</p>
                    <p className="text-muted-foreground text-xs">2023 - Present</p>
                  </CardContent>
                </Card>
                <Card className="glass animate-fade-in">
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Teaching Assistant</h4>
                    <p className="text-muted-foreground text-sm">Machine Learning Fundamentals</p>
                    <p className="text-muted-foreground text-xs">Fall 2023</p>
                  </CardContent>
                </Card>
                <Card className="glass animate-fade-in">
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Student Representative</h4>
                    <p className="text-muted-foreground text-sm">Graduate Student Council</p>
                    <p className="text-muted-foreground text-xs">2022 - 2024</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section id="updates" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in flex items-center justify-center">
            <Calendar className="h-8 w-8 mr-3" />
            Updates
          </h2>
          <div className="space-y-6">
            {updates.map((update, index) => (
              <Card key={index} className="glass hover:bg-white/10 transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-muted-foreground">{update.date}</span>
                  </div>
                  <p className="text-muted-foreground">{update.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Miscellaneous Section */}
      <section id="miscellaneous" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Miscellaneous</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Rock climbing and mountaineering</li>
                  <li>• Photography and digital art</li>
                  <li>• Science fiction literature</li>
                  <li>• Cooking and experimenting with cuisines</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Fun Facts</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fluent in 4 programming languages</li>
                  <li>• Once debugged code at 3 AM for 6 hours straight</li>
                  <li>• Coffee enthusiast with a home espresso setup</li>
                  <li>• Built a Raspberry Pi weather station</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in flex items-center justify-center">
            <BookOpen className="h-8 w-8 mr-3" />
            Blog
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex justify-center mb-8 space-x-4">
            {["all", "technical", "non-technical"].map((filter) => (
              <Button
                key={filter}
                onClick={() => setBlogFilter(filter)}
                variant={blogFilter === filter ? "default" : "outline"}
                className={blogFilter === filter ? "" : "glass"}
              >
                {filter === "all" ? "All Posts" : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Button>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card className="glass hover:bg-white/10 transition-all duration-300 h-full cursor-pointer animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge 
                        variant={post.category === "technical" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {post.category}
                      </Badge>
                      {post.hasLatex && (
                        <Badge variant="outline" className="text-xs">
                          LaTeX
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Your Name. Built with React and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
