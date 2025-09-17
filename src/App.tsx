import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChevronDown, Calendar, User, ArrowRight, Trophy, Star, Heart } from 'lucide-react';
import BlogPost from './components/BlogPost';

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    // Parallax effect for hero
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Create floating particles
    const createParticles = () => {
      if (particlesRef.current) {
        for (let i = 0; i < 20; i++) {
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Real Madrid's 700th Champions League Victory",
      excerpt: "Positive Start for Real Madrid in the Champions League Against Olympique Marseille.",
      date: "2025-9-16",
      author: "Shiva",
      image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Bellingham's Impact: The Perfect Galáctico",
      excerpt: "Analyzing how Jude Bellingham has seamlessly integrated into Real Madrid's winning culture and tactical system.",
      date: "2024-12-18",
      author: "Madridista",
      image: "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Santiago Bernabéu: A Cathedral Reborn",
      excerpt: "Exploring the stunning renovation of our beloved stadium and how it enhances the matchday experience.",
      date: "2024-12-15",
      author: "Madridista",
      image: "https://images.pexels.com/photos/3692441/pexels-photo-3692441.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Ancelotti's Tactical Masterclass",
      excerpt: "Breaking down Carlo Ancelotti's tactical evolution and how he adapts to modern football while maintaining Madrid's DNA.",
      date: "2024-12-12",
      author: "Madridista",
      image: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "The Next Generation: La Fábrica's Rising Stars",
      excerpt: "Spotlighting the young talents emerging from Real Madrid's academy and their path to the first team.",
      date: "2024-12-10",
      author: "Madridista",
      image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "El Clásico: A Tale of Eternal Rivalry",
      excerpt: "Diving deep into the history, passion, and unforgettable moments that define football's greatest rivalry.",
      date: "2024-12-08",
      author: "Madridista",
      image: "https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Floating Particles Background */}
      <div ref={particlesRef} className="particles-container fixed inset-0 pointer-events-none z-0"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Trophy className="w-6 h-6 text-white" />
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALnZgEqX_e4A6vEl4H6PcaGfJRnoxCjzRuw&s'  />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Madridista Central
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Blogs', 'History', 'Players', 'News'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="nav-link relative py-2 px-4 text-white/80 hover:text-white transition-colors duration-300"
                >
                  {item}
                  <span className="nav-underline absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          ref={heroRef}
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="hero-crest mb-8 animate-float">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-500">
              <Trophy className="w-16 h-16 text-white animate-pulse" />
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALnZgEqX_e4A6vEl4H6PcaGfJRnoxCjzRuw&s'  />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 hero-title">
            <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
              HALA
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
              MADRID
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Welcome to the ultimate Real Madrid fan experience. Dive into the rich history, legendary players, 
            and unforgettable moments of the greatest club in football history.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full transform hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center space-x-2">
              <span>Explore Blogs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full transform hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Heart className="w-5 h-5 group-hover:text-red-400 transition-colors" />
              <span>Join Community</span>
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-blue-900 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15", label: "Champions League", icon: Trophy },
              { number: "36", label: "La Liga Titles", icon: Star },
              { number: "20", label: "Copa del Rey", icon: Trophy },
              { number: "1902", label: "Founded", icon: Calendar }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-on-scroll opacity-0 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <stat.icon className="w-12 h-12 text-yellow-400 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <div className="text-4xl md:text-6xl font-black text-white mb-2 counter" data-target={stat.number}>
                  {stat.number}
                </div>
                <div className="text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Featured Stories
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Discover the latest insights, analysis, and passion from the heart of Madrid
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-20 animate-on-scroll opacity-0">
            <Link to={`/blog/${blogPosts[0].id}`}>
              <div className="relative group cursor-pointer transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-yellow-400/30 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-bold">
                        FEATURED
                      </div>
                      <div className="flex items-center space-x-2 text-white/60">
                        <Calendar className="w-4 h-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black mb-6 text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-white/70 text-lg mb-8 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white/80 font-medium">{blogPosts[0].author}</span>
                      </div>
                      <ArrowRight className="w-6 h-6 text-yellow-400 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <div 
                key={post.id}
                className="blog-card animate-on-scroll opacity-0 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group-hover:border-yellow-400/30 transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-all duration-300">
                        <Star className="w-4 h-4 text-white group-hover:text-yellow-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Calendar className="w-4 h-4 text-white/60" />
                      <span className="text-sm text-white/60">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs text-white/60">{post.author}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-r from-gray-900 to-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Madridista Central
              </span>
            </div>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Your ultimate destination for Real Madrid passion, analysis, and community. 
              Together we celebrate the greatest club in the world.
            </p>
            <div className="flex justify-center space-x-6 text-white/40">
              <span>© 2024 Madridista Central</span>
              <span>•</span>
              <span>Hala Madrid</span>
              <span>•</span>
              <span>Y Nada Más</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;