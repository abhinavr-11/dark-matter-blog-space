
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
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

const projects = [
  {
    title: "Neural Climate Predictor",
    description: "A deep learning model for predicting climate patterns using satellite data and temporal analysis.",
    tech: ["Python", "TensorFlow", "LSTM", "Satellite Data"],
    github: "#",
    demo: "#"
  },
  {
    title: "Quantum Algorithm Simulator",
    description: "A quantum computing simulator built to test and visualize quantum algorithms and their behaviors.",
    tech: ["Qiskit", "Python", "NumPy", "Visualization"],
    github: "#",
    demo: "#"
  },
  {
    title: "Research Paper Analytics",
    description: "NLP tool for analyzing research papers and extracting key insights and citation patterns.",
    tech: ["NLP", "BERT", "React", "D3.js"],
    github: "#",
    demo: "#"
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
              {["home", "about", "projects", "blog"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center animate-fade-in max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/20">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" 
                alt="Your Name" 
              />
              <AvatarFallback className="text-2xl">YN</AvatarFallback>
            </Avatar>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Your Name</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            PhD Student in Computer Science
          </h2>

          {/* Brief Description */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate researcher exploring the intersection of machine learning, 
              quantum computing, and climate science. Currently pursuing my PhD, I focus 
              on developing innovative computational methods to address complex real-world challenges.
            </p>
          </div>

          {/* Research Areas */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Machine Learning", "Quantum Computing", "Climate Science", "Deep Learning"].map((area) => (
              <Badge key={area} variant="secondary" className="glass px-4 py-2">
                {area}
              </Badge>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-12">
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
            onClick={() => scrollToSection("about")} 
            variant="ghost" 
            className="animate-bounce"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate researcher focused on developing innovative solutions 
                at the intersection of artificial intelligence and environmental science. 
                My work involves creating novel machine learning algorithms for climate 
                modeling and exploring quantum computing applications.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Currently pursuing my PhD at [University Name], I'm particularly 
                interested in how we can leverage advanced computational methods 
                to address some of the world's most pressing challenges.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Machine Learning", "Quantum Computing", "Climate Science", "Deep Learning", "Research"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="glass">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <Card className="glass animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• PhD in Computer Science</li>
                  <li>• Climate modeling with ML</li>
                  <li>• Quantum algorithm development</li>
                  <li>• Research publications</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass hover:bg-white/10 transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="glass">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="glass">
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Blog</h2>
          
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
