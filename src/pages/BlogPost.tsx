
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Sample blog posts data
const blogPosts = {
  "quantum-computing-algorithms": {
    title: "Understanding Quantum Computing Algorithms",
    category: "technical",
    date: "2024-01-15",
    readTime: "8 min read",
    content: `
# Understanding Quantum Computing Algorithms

Quantum computing represents a paradigm shift in computational thinking, leveraging the principles of quantum mechanics to process information in fundamentally different ways than classical computers.

## The Mathematical Foundation

The foundation of quantum computing lies in the concept of qubits, which can exist in superposition states. Mathematically, a qubit can be represented as:

$$|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$$

where $\\alpha$ and $\\beta$ are complex amplitudes satisfying $|\\alpha|^2 + |\\beta|^2 = 1$.

## Quantum Gates and Operations

Quantum algorithms manipulate qubits through quantum gates. The Hadamard gate, for example, creates superposition:

$$H = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$$

When applied to $|0\\rangle$, it produces: $H|0\\rangle = \\frac{1}{\\sqrt{2}}(|0\\rangle + |1\\rangle)$

## Grover's Algorithm

One of the most famous quantum algorithms is Grover's search algorithm, which provides a quadratic speedup for searching unsorted databases. The algorithm uses an oracle function $O_f$ and an inversion about average operation.

The key insight is the rotation in the two-dimensional subspace spanned by the uniform superposition and the marked states. After approximately $\\frac{\\pi}{4}\\sqrt{N}$ iterations, the probability of measuring a marked item approaches 1.

## Quantum Fourier Transform

The Quantum Fourier Transform (QFT) is central to many quantum algorithms, including Shor's factoring algorithm:

$$QFT|j\\rangle = \\frac{1}{\\sqrt{N}}\\sum_{k=0}^{N-1} e^{2\\pi ijk/N}|k\\rangle$$

## Practical Implications

While quantum computers are still in their early stages, they promise exponential speedups for specific problems:

- **Cryptography**: Shor's algorithm threatens current RSA encryption
- **Optimization**: Quantum approximate optimization algorithms (QAOA)
- **Simulation**: Quantum systems can naturally simulate other quantum systems

## Challenges and Future Directions

The main challenges facing quantum computing include:

1. **Decoherence**: Quantum states are fragile and easily disturbed
2. **Error rates**: Current quantum computers have high error rates
3. **Scalability**: Building large-scale quantum computers remains difficult

As we continue to develop quantum error correction and improve hardware, we're moving closer to achieving quantum advantage in practical applications.

## Conclusion

Quantum computing algorithms represent a fascinating intersection of physics, mathematics, and computer science. While many challenges remain, the potential for revolutionary advances in computing power makes this one of the most exciting fields in modern science.
    `,
    hasLatex: true
  },
  "research-journey": {
    title: "The Art of Research: Lessons from My PhD Journey",
    category: "non-technical",
    date: "2024-01-10",
    readTime: "6 min read",
    content: `
# The Art of Research: Lessons from My PhD Journey

Starting a PhD is like embarking on an intellectual adventure where the destination is unknown, the path is unclear, and the only certainty is that you'll be fundamentally changed by the experience.

## The Beginning: Enthusiasm and Naivety

When I first started my PhD, I was filled with enthusiasm and perhaps a healthy dose of naivety. I thought research would be a linear process: identify a problem, develop a solution, write papers, graduate. How wrong I was!

Research is messy, non-linear, and full of unexpected detours. What I initially thought would be a minor side investigation turned into the core of my thesis, while my original research direction became a forgotten footnote.

## The Valley of Despair

Every PhD student experiences what I call the "valley of despair" – that period where nothing seems to work, experiments fail, papers get rejected, and you question every life choice that led you to this point.

I remember spending three months debugging code that had a single misplaced parenthesis. Those were dark days, but they taught me resilience and the importance of systematic thinking.

## Finding Your Voice

One of the most valuable aspects of the PhD journey is learning to think independently. Initially, I was content to follow my advisor's suggestions without question. But gradually, I began to develop my own research intuition.

The moment I realized I had ideas that my advisor found genuinely interesting was a turning point. It's when I stopped being a student and started becoming a researcher.

## The Importance of Community

Research can be lonely, but it doesn't have to be. Building a community of fellow researchers, attending conferences, and engaging in academic discussions on social media have been crucial for my growth.

Some of my best ideas have come from conversations in coffee shops, late-night discussions with lab mates, and serendipitous encounters at conferences.

## Dealing with Rejection

Paper rejections are part of the research life. My first paper was rejected three times before finally being accepted. Each rejection stung, but the feedback helped improve the work significantly.

I learned to view rejections not as personal failures but as opportunities to strengthen my research and communication skills.

## The Broader Impact

While working on specific technical problems, it's easy to lose sight of the bigger picture. Regular reflection on why your research matters – to science, to society, to future generations – can provide motivation during difficult periods.

My work on climate modeling algorithms might seem abstract, but knowing it could contribute to better understanding of climate change gives it deeper meaning.

## Advice for Future Researchers

If I could go back and give advice to my earlier self, I would say:

1. **Embrace uncertainty**: Research is fundamentally about exploring the unknown
2. **Build relationships**: Your network is your net worth in academia
3. **Learn to communicate**: The best research is worthless if you can't explain it
4. **Stay curious**: Ask questions about everything, even things outside your field
5. **Take care of yourself**: Research is a marathon, not a sprint

## Looking Forward

As I approach the end of my PhD journey, I'm filled with excitement about the future. The skills I've developed – critical thinking, problem-solving, resilience, and communication – will serve me well regardless of whether I stay in academia or transition to industry.

The PhD has taught me that research is not just about finding answers; it's about learning to ask better questions. And in a world full of complex challenges, the ability to ask good questions is perhaps the most valuable skill of all.

The journey continues, and I can't wait to see where it leads next.
    `,
    hasLatex: false
  },
  "ml-climate-modeling": {
    title: "Machine Learning for Climate Modeling",
    category: "technical",
    date: "2024-01-05",
    readTime: "10 min read",
    content: `
# Machine Learning for Climate Modeling

Climate modeling has traditionally relied on complex physical simulations that require enormous computational resources. Recent advances in machine learning are opening new possibilities for more efficient and accurate climate predictions.

## Traditional Climate Models

Traditional Global Climate Models (GCMs) solve the Navier-Stokes equations for atmospheric and oceanic dynamics:

$$\\frac{\\partial \\mathbf{u}}{\\partial t} + (\\mathbf{u} \\cdot \\nabla)\\mathbf{u} = -\\frac{1}{\\rho}\\nabla p + \\nu \\nabla^2 \\mathbf{u} + \\mathbf{f}$$

where $\\mathbf{u}$ is the velocity field, $p$ is pressure, $\\rho$ is density, $\\nu$ is kinematic viscosity, and $\\mathbf{f}$ represents external forces.

These models require massive computational grids and can take weeks to simulate decades of climate evolution.

## Machine Learning Approaches

### Neural Network Parameterizations

One promising approach is using neural networks to parameterize sub-grid scale processes. Instead of explicitly modeling cloud microphysics, we can train networks to learn the relationship:

$$\\Delta T = f_{NN}(T, q, p, \\mathbf{u}, \\ldots)$$

where $\\Delta T$ represents temperature tendencies due to convective processes.

### Recurrent Neural Networks for Time Series

For temporal climate patterns, LSTM networks have shown promise in capturing long-term dependencies:

$$\\mathbf{h}_t = \\text{LSTM}(\\mathbf{x}_t, \\mathbf{h}_{t-1})$$

where $\\mathbf{x}_t$ represents climate variables at time $t$.

### Graph Neural Networks for Spatial Patterns

Climate systems have complex spatial relationships that can be modeled using Graph Neural Networks:

$$\\mathbf{h}_v^{(l+1)} = \\text{UPDATE}\\left(\\mathbf{h}_v^{(l)}, \\text{AGGREGATE}\\left(\\{\\mathbf{h}_u^{(l)} : u \\in \\mathcal{N}(v)\\}\\right)\\right)$$

where nodes represent geographic locations and edges capture atmospheric connections.

## Hybrid Approaches

The most promising direction combines physical models with machine learning:

$$\\frac{d\\mathbf{x}}{dt} = \\mathbf{F}_{physics}(\\mathbf{x}) + \\mathbf{F}_{ML}(\\mathbf{x})$$

where $\\mathbf{F}_{physics}$ captures well-understood physical processes and $\\mathbf{F}_{ML}$ learns to model complex sub-grid phenomena.

## Data Challenges

Climate data presents unique challenges:

- **Sparse observations**: Weather stations are unevenly distributed
- **Multiple scales**: From local weather to global patterns
- **Non-stationarity**: Climate patterns change over time
- **High dimensionality**: Massive spatial and temporal grids

## Recent Breakthroughs

### FourCastNet

NVIDIA's FourCastNet uses a Vision Transformer architecture to predict global weather patterns with remarkable accuracy and speed. The model treats weather prediction as an image-to-image translation problem.

### GraphCast

DeepMind's GraphCast uses graph neural networks on a multi-scale mesh to make 10-day weather forecasts that outperform traditional numerical weather prediction models.

### ClimateGAN

Generative models are being explored for downscaling climate projections and generating realistic climate scenarios under different emission pathways.

## Evaluation Metrics

Climate ML models require specialized evaluation:

- **Physical consistency**: Conservation of energy and mass
- **Extreme events**: Capturing rare but important events
- **Spatial patterns**: Maintaining realistic geographic correlations
- **Temporal stability**: Long-term climate stability

The skill score for temperature predictions is often measured as:

$$S = 1 - \\frac{\\text{MSE}_{model}}{\\text{MSE}_{reference}}$$

## Challenges and Limitations

### Generalization

ML models trained on historical data may struggle with unprecedented climate conditions:

$$P(\\text{future climate}) \\neq P(\\text{historical climate})$$

### Interpretability

Understanding why a neural network makes specific predictions is crucial for climate science:

$$\\frac{\\partial y}{\\partial x_i} \\text{ must be physically meaningful}$$

### Computational Efficiency

While ML models are faster for inference, training can be computationally expensive, especially for large-scale models.

## Future Directions

### Physics-Informed Neural Networks

Incorporating physical constraints directly into the loss function:

$$\\mathcal{L} = \\mathcal{L}_{data} + \\lambda \\mathcal{L}_{physics}$$

where $\\mathcal{L}_{physics}$ ensures conservation laws are satisfied.

### Uncertainty Quantification

Developing better methods for quantifying prediction uncertainty using techniques like:
- Bayesian neural networks
- Ensemble methods
- Conformal prediction

### Multi-Modal Learning

Integrating satellite imagery, ground observations, and model outputs into unified frameworks.

## Conclusion

Machine learning is revolutionizing climate modeling by offering new ways to handle complex, multi-scale phenomena. While challenges remain, the rapid progress in this field suggests that ML-enhanced climate models will play an increasingly important role in our understanding of Earth's climate system.

The future of climate modeling lies not in replacing physical models with purely data-driven approaches, but in creating hybrid systems that leverage the strengths of both paradigms.
    `,
    hasLatex: true
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/">
            <Button variant="outline" className="glass">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = (content: string) => {
    const parts = content.split(/(\\$\\$[^$]+\\$\\$|\\$[^$]+\\$)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const latex = part.slice(2, -2);
        return <BlockMath key={index} math={latex} />;
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const latex = part.slice(1, -1);
        return <InlineMath key={index} math={latex} />;
      } else {
        return (
          <div 
            key={index} 
            dangerouslySetInnerHTML={{ 
              __html: part
                .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-6 gradient-text">$1</h1>')
                .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mb-4 mt-8">$1</h2>')
                .replace(/^### (.*$)/gm, '<h3 class="text-xl font-medium mb-3 mt-6">$1</h3>')
                .replace(/^\* (.*$)/gm, '<li class="ml-4">$1</li>')
                .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
                .replace(/^\d+\. (.*$)/gm, '<li class="ml-4">$1</li>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/`([^`]+)`/g, '<code class="bg-muted px-2 py-1 rounded text-sm">$1</code>')
                .replace(/\n\n/g, '</p><p class="mb-4">')
                .replace(/^(?!<[h|l])/gm, '<p class="mb-4">')
            }} 
          />
        );
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" className="text-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-12 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <Badge 
                variant={post.category === "technical" ? "default" : "secondary"}
                className="text-sm"
              >
                {post.category}
              </Badge>
              {post.hasLatex && (
                <Badge variant="outline" className="text-sm">
                  LaTeX
                </Badge>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <Card className="glass animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                {renderContent(post.content)}
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <footer className="mt-12 text-center">
            <Link to="/#blog">
              <Button variant="outline" className="glass">
                ← Back to Blog
              </Button>
            </Link>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
