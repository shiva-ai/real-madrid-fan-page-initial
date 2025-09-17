import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, Trophy } from 'lucide-react';

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  tags: string[];
}

const blogPostsData: BlogPostData[] = [
  {
    id: 1,
    title: "Real Madrid's Historic 15th Champions League Victory",
    excerpt: "Reliving the magical journey to our record-breaking European triumph and what it means for the future of Los Blancos.",
    content: `
      <p>The Santiago Bernabéu erupted in pure ecstasy as the final whistle blew, confirming what every Madridista had dreamed of – our beloved Real Madrid had claimed their 15th Champions League trophy, extending their unparalleled record in European football's most prestigious competition.</p>
      
      <p>This victory wasn't just another trophy in our illustrious cabinet; it was a testament to the enduring spirit, the never-say-die attitude, and the magical aura that surrounds this great club. From the group stages to the final, Los Blancos displayed the kind of football that has made them legends.</p>
      
      <h3>The Journey to Glory</h3>
      <p>The path to the final was anything but easy. We faced formidable opponents who tested our resolve at every turn. The quarter-final against Manchester City showcased our ability to perform under pressure, with Benzema's hat-trick reminding the world why he deserved the Ballon d'Or.</p>
      
      <p>The semi-final against Chelsea was a masterclass in tactical discipline and individual brilliance. Modrić, at 37, continued to defy age and expectations, orchestrating play with the precision of a master conductor leading a symphony.</p>
      
      <h3>The Final Performance</h3>
      <p>In the final, we witnessed everything that makes Real Madrid special. The tactical flexibility of Ancelotti, the leadership of Benzema, the creativity of Modrić, and the defensive solidity of our backline all came together in perfect harmony.</p>
      
      <p>When Liverpool took the lead, there was no panic, no desperation – just the calm confidence of a team that has been in this situation countless times before. The equalizer came through a moment of pure magic, and from that point, there was only one winner.</p>
      
      <h3>What This Means for the Future</h3>
      <p>This 15th Champions League title isn't just about the present; it's about setting the foundation for future success. The young players in our squad have now tasted European glory, and they understand what it means to wear the Real Madrid shirt on the biggest stage.</p>
      
      <p>Players like Vinícius Jr., Rodrygo, and Camavinga have shown that the future of Real Madrid is in safe hands. They've learned from the masters and are ready to carry the torch forward.</p>
      
      <p>As we celebrate this historic achievement, we also look ahead with excitement. The Bernabéu renovation is nearing completion, new talents are emerging from La Fábrica, and the club's commitment to excellence remains unwavering.</p>
      
      <p>Hala Madrid y nada más! This is just the beginning of another golden era.</p>
    `,
    date: "2024-12-20",
    author: "Madridista",
    image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200",
    readTime: "8 min read",
    tags: ["Champions League", "Victory", "History", "Analysis"]
  },
  {
    id: 2,
    title: "Bellingham's Impact: The Perfect Galáctico",
    excerpt: "Analyzing how Jude Bellingham has seamlessly integrated into Real Madrid's winning culture and tactical system.",
    content: `
      <p>When Jude Bellingham arrived at the Santiago Bernabéu, expectations were sky-high. The young Englishman had already proven himself at Borussia Dortmund, but adapting to Real Madrid's unique culture and pressure is a different challenge altogether.</p>
      
      <p>What we've witnessed in his first season has been nothing short of extraordinary. Bellingham hasn't just adapted; he's thrived, embodied the Madridista spirit, and shown why he represents the future of this great club.</p>
      
      <h3>Tactical Integration</h3>
      <p>Ancelotti's tactical setup has been perfectly tailored to maximize Bellingham's strengths. Playing in a more advanced role than he did at Dortmund, the Englishman has found the freedom to express his creativity while maintaining the defensive discipline that Real Madrid demands.</p>
      
      <p>His positioning between the lines has been crucial in breaking down stubborn defenses. The way he finds pockets of space and creates opportunities for his teammates shows a football intelligence beyond his years.</p>
      
      <h3>Leadership Qualities</h3>
      <p>Perhaps most impressive has been Bellingham's leadership on the pitch. Despite being one of the youngest players in the squad, he's shown the kind of character and determination that defines Real Madrid players.</p>
      
      <p>His celebration after scoring crucial goals, the way he encourages teammates, and his never-give-up attitude in difficult moments – these are the qualities that make a true Galáctico.</p>
      
      <h3>Statistical Impact</h3>
      <p>The numbers speak for themselves. Goals, assists, key passes, defensive contributions – Bellingham has excelled in every metric. But beyond statistics, it's his impact on the team's overall performance that truly matters.</p>
      
      <p>Games are won and lost in crucial moments, and Bellingham has consistently delivered when it matters most. His ability to rise to the occasion in big matches is what separates good players from great ones.</p>
      
      <h3>The Perfect Fit</h3>
      <p>What makes Bellingham special isn't just his talent, but how perfectly he fits into Real Madrid's philosophy. He understands the weight of the shirt, the expectations of the fans, and the standards required to succeed at this level.</p>
      
      <p>His humility in victory and determination in defeat reflect the values that have made Real Madrid the most successful club in history. He's not just a player; he's becoming a symbol of what it means to be a Madridista.</p>
    `,
    date: "2024-12-18",
    author: "Madridista",
    image: "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1200",
    readTime: "6 min read",
    tags: ["Bellingham", "Analysis", "Galáctico", "Tactics"]
  },
  {
    id: 3,
    title: "Santiago Bernabéu: A Cathedral Reborn",
    excerpt: "Exploring the stunning renovation of our beloved stadium and how it enhances the matchday experience.",
    content: `
      <p>The Santiago Bernabéu has always been more than just a stadium – it's a cathedral of football, a temple where legends are born and dreams come true. The ongoing renovation project is transforming this iconic venue into a 21st-century marvel while preserving its soul and history.</p>
      
      <h3>Architectural Marvel</h3>
      <p>The new Bernabéu design is breathtaking. The retractable roof, the 360-degree LED screen, and the revolutionary facade that changes colors create an atmosphere unlike anywhere else in world football.</p>
      
      <p>But it's not just about aesthetics. Every element has been designed to enhance the fan experience, from improved acoustics that amplify the crowd's voice to better sightlines that bring every supporter closer to the action.</p>
      
      <h3>Technological Innovation</h3>
      <p>The integration of cutting-edge technology sets the new Bernabéu apart. The retractable pitch allows the stadium to host concerts and events, making it a year-round entertainment destination.</p>
      
      <p>The digital infrastructure enables immersive experiences that were previously impossible. Fans can access real-time statistics, multiple camera angles, and interactive content that deepens their connection to the game.</p>
      
      <h3>Preserving History</h3>
      <p>While embracing the future, the renovation carefully preserves the stadium's rich history. The museum has been expanded to showcase our incredible trophy collection and tell the story of Real Madrid's journey through the decades.</p>
      
      <p>The presidential box, the tunnel where players emerge, and other iconic areas maintain their original character while benefiting from modern upgrades.</p>
      
      <h3>Enhanced Fan Experience</h3>
      <p>Every aspect of the matchday experience has been reimagined. From the moment fans approach the stadium, they're immersed in an atmosphere that celebrates Real Madrid's greatness.</p>
      
      <p>New hospitality areas, improved concourses, and better facilities ensure that every visit to the Bernabéu is memorable. The stadium isn't just a place to watch football; it's a destination that celebrates the beautiful game.</p>
      
      <p>The new Santiago Bernabéu represents Real Madrid's commitment to excellence in every aspect. It's a stadium worthy of the greatest club in the world, a venue where future legends will write their names in history.</p>
    `,
    date: "2024-12-15",
    author: "Madridista",
    image: "https://images.pexels.com/photos/3692441/pexels-photo-3692441.jpeg?auto=compress&cs=tinysrgb&w=1200",
    readTime: "7 min read",
    tags: ["Bernabéu", "Stadium", "Renovation", "Experience"]
  },
  {
    id: 4,
    title: "Ancelotti's Tactical Masterclass",
    excerpt: "Breaking down Carlo Ancelotti's tactical evolution and how he adapts to modern football while maintaining Madrid's DNA.",
    content: `
      <p>Carlo Ancelotti's return to Real Madrid marked the beginning of a new tactical era. The Italian maestro brought with him decades of experience and a deep understanding of what makes this club special.</p>
      
      <h3>Tactical Flexibility</h3>
      <p>What sets Ancelotti apart is his ability to adapt his tactics to different opponents while maintaining Real Madrid's attacking philosophy. Whether it's a 4-3-3, 4-4-2, or 3-5-2, he finds the perfect formation for each match.</p>
      
      <p>His in-game adjustments are particularly impressive. The way he reads the flow of a match and makes tactical changes that turn the tide shows why he's considered one of the greatest coaches of all time.</p>
      
      <h3>Player Management</h3>
      <p>Ancelotti's man-management skills are legendary. He knows how to get the best out of superstars while maintaining harmony in the dressing room. His relationship with players like Modrić, Benzema, and Kroos has been crucial to the team's success.</p>
      
      <p>He gives players the freedom to express themselves while ensuring they understand their tactical responsibilities. This balance between structure and creativity is what makes Real Madrid so dangerous.</p>
      
      <h3>Adapting to Modern Football</h3>
      <p>While respecting Real Madrid's traditions, Ancelotti has embraced modern tactical trends. The high press, quick transitions, and positional play are all part of his evolved approach.</p>
      
      <p>He's also shown great faith in young players, integrating talents like Camavinga, Tchouaméni, and Bellingham seamlessly into the team structure.</p>
      
      <h3>The Ancelotti Effect</h3>
      <p>Under Ancelotti, Real Madrid plays with a calmness and confidence that's infectious. Players know their roles, trust the system, and execute the game plan with precision.</p>
      
      <p>His tactical masterclass continues to evolve, adapting to new challenges while maintaining the winning mentality that defines Real Madrid. Don Carlo has once again proven why he's the perfect coach for this great club.</p>
    `,
    date: "2024-12-12",
    author: "Madridista",
    image: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=1200",
    readTime: "5 min read",
    tags: ["Ancelotti", "Tactics", "Coaching", "Strategy"]
  },
  {
    id: 5,
    title: "The Next Generation: La Fábrica's Rising Stars",
    excerpt: "Spotlighting the young talents emerging from Real Madrid's academy and their path to the first team.",
    content: `
      <p>La Fábrica has always been the heartbeat of Real Madrid, producing generations of players who understand what it means to wear the white shirt. Today's academy continues this proud tradition, nurturing talents who could define the club's future.</p>
      
      <h3>Academy Philosophy</h3>
      <p>The Real Madrid academy doesn't just develop footballers; it creates Madridistas. From the youngest age groups, players learn about the club's values, history, and the standards required to succeed at the highest level.</p>
      
      <p>Technical excellence, tactical intelligence, and mental strength are the pillars of La Fábrica's development program. Every drill, every training session is designed to prepare players for the unique pressures of representing Real Madrid.</p>
      
      <h3>Current Rising Stars</h3>
      <p>Several academy graduates are already making their mark in the first team. Players like Nico Paz, Álvaro Rodríguez, and Rafa Marín represent the next wave of talent ready to step up when called upon.</p>
      
      <p>Their development path shows the effectiveness of Real Madrid's youth system. From Juvenil A to Castilla, and eventually to the first team, each step is carefully planned to maximize their potential.</p>
      
      <h3>Integration Process</h3>
      <p>The transition from academy to first team is handled with great care. Young players train with the senior squad, learn from experienced professionals, and gradually earn their opportunities through hard work and dedication.</p>
      
      <p>Ancelotti's trust in youth has been evident, giving chances to academy products in important matches and showing that talent, regardless of age, will be rewarded.</p>
      
      <h3>Future Prospects</h3>
      <p>The current generation of La Fábrica graduates shows tremendous promise. Their technical ability, combined with their understanding of Real Madrid's culture, makes them ideal candidates to carry the club forward.</p>
      
      <p>As we look to the future, these young talents represent hope and continuity. They embody the values that have made Real Madrid great and are ready to write the next chapter in our illustrious history.</p>
    `,
    date: "2024-12-10",
    author: "Madridista",
    image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1200",
    readTime: "6 min read",
    tags: ["La Fábrica", "Youth", "Academy", "Future"]
  },
  {
    id: 6,
    title: "El Clásico: A Tale of Eternal Rivalry",
    excerpt: "Diving deep into the history, passion, and unforgettable moments that define football's greatest rivalry.",
    content: `
      <p>El Clásico is more than a football match – it's a cultural phenomenon that transcends sport. The rivalry between Real Madrid and Barcelona represents different philosophies, regions, and identities, creating a spectacle that captivates the world.</p>
      
      <h3>Historical Context</h3>
      <p>The roots of this rivalry run deep, intertwined with Spanish history, politics, and culture. From the early 20th century to the present day, Real Madrid and Barcelona have represented different visions of Spain and football.</p>
      
      <p>The political undertones, especially during the Franco era, added layers of complexity to this rivalry that extend far beyond the football pitch. Understanding this history is crucial to appreciating the intensity of El Clásico.</p>
      
      <h3>Legendary Encounters</h3>
      <p>Over the decades, El Clásico has produced moments that are etched in football folklore. From Di Stéfano's dominance in the 1950s to the Galácticos era, from Ronaldinho's standing ovation at the Bernabéu to Messi's countless masterpieces.</p>
      
      <p>Each generation has added its own chapter to this epic story. The Mourinho-Guardiola era brought tactical innovation and unprecedented intensity, while recent years have seen new heroes emerge on both sides.</p>
      
      <h3>Tactical Evolution</h3>
      <p>El Clásico has often been a showcase of tactical innovation. The different playing philosophies – Real Madrid's directness and power versus Barcelona's possession-based approach – have created fascinating tactical battles.</p>
      
      <p>Coaches have made their reputations in these matches, with tactical masterstrokes often deciding the outcome. The evolution of both teams' playing styles can be traced through their Clásico encounters.</p>
      
      <h3>Global Impact</h3>
      <p>Today, El Clásico is watched by hundreds of millions of fans worldwide. It's a global event that stops the football world, bringing together supporters from every continent to witness this spectacular rivalry.</p>
      
      <p>The commercial and cultural impact extends far beyond Spain, making El Clásico one of the most valuable sporting properties in the world.</p>
      
      <h3>The Eternal Rivalry</h3>
      <p>What makes El Clásico special is its timeless nature. Players come and go, coaches change, but the rivalry endures. Each match adds new chapters to this incredible story.</p>
      
      <p>For Real Madrid fans, El Clásico represents the ultimate test. Victory brings unparalleled joy, while defeat motivates us to come back stronger. This is the essence of what makes football beautiful – passion, rivalry, and the eternal pursuit of glory.</p>
    `,
    date: "2024-12-08",
    author: "Madridista",
    image: "https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg?auto=compress&cs=tinysrgb&w=1200",
    readTime: "9 min read",
    tags: ["El Clásico", "Rivalry", "History", "Barcelona"]
  }
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const particlesRef = useRef<HTMLDivElement>(null);
  
  const post = blogPostsData.find(p => p.id === parseInt(id || '1'));

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      if (particlesRef.current) {
        for (let i = 0; i < 15; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.animationDelay = Math.random() * 10 + 's';
          particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
          particlesRef.current.appendChild(particle);
        }
      }
    };

    createParticles();

    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Floating Particles Background */}
      <div ref={particlesRef} className="particles-container fixed inset-0 pointer-events-none z-0"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Madridista Central
              </span>
            </Link>
            <Link 
              to="/"
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6 animate-on-scroll opacity-0">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-black mb-6 animate-on-scroll opacity-0 leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
                {post.title}
              </span>
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-white/60 animate-on-scroll opacity-0">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 animate-on-scroll opacity-0">
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full hover:scale-105 transition-all duration-300">
                <Heart className="w-4 h-4" />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto animate-on-scroll opacity-0">
            <div className="relative group overflow-hidden rounded-3xl">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-96 md:h-[500px] object-cover transform group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none animate-on-scroll opacity-0">
              <div 
                className="blog-content text-white/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.8'
                }}
              />
            </div>

            {/* Author Section */}
            <div className="mt-16 p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl border border-white/10 animate-on-scroll opacity-0">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Written by {post.author}</h3>
                  <p className="text-white/60">
                    Passionate Real Madrid fan sharing insights, analysis, and the love for Los Blancos with fellow Madridistas around the world.
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-16 text-center animate-on-scroll opacity-0">
              <Link 
                to="/"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to All Blogs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;