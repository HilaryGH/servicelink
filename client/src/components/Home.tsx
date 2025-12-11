import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600">
        {/* Brand Color Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600"></div>

        {/* Creative SVG Curves with Brand Colors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top Right Curve with Image */}
          <svg className="absolute top-0 right-0 w-full h-1/2" style={{ zIndex: 1 }}>
            <defs>
              <clipPath id="topRightCurve">
                <path d="M1440,0 Q1240,150 1040,200 T640,250 Q440,280 240,300 T0,320 L0,0 Z" />
              </clipPath>
            </defs>
            <image
              href="/hero.jpg"
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#topRightCurve)"
              className="animate-pulse"
              style={{ animationDuration: '4s' }}
            />
          </svg>

          {/* Bottom Right Flowing Curve - Purple */}
          <svg 
            className="absolute bottom-0 right-0 w-full h-full" 
            viewBox="0 0 1440 800" 
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            <defs>
              <linearGradient id="gradient2" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path
              d="M1440,800 Q1240,650 1040,600 T640,550 Q440,520 240,500 T0,480 L0,800 Z"
              fill="url(#gradient2)"
              className="animate-pulse"
              style={{ animationDuration: '5s', animationDelay: '1s' }}
            />
          </svg>

          {/* Center Wave Curve - Connecting Element */}
          <svg 
            className="absolute top-1/2 left-0 w-full h-full transform -translate-y-1/2" 
            viewBox="0 0 1440 400" 
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            <defs>
              <linearGradient id="gradient3" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M0,200 Q360,150 720,200 T1440,200 L1440,400 Q1080,350 720,400 T0,400 Z"
              fill="url(#gradient3)"
              className="animate-pulse"
              style={{ animationDuration: '6s', animationDelay: '2s' }}
            />
          </svg>

          {/* Left Side Accent Curve */}
          <svg 
            className="absolute top-1/4 left-0 w-1/2 h-full" 
            viewBox="0 0 720 600" 
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            <defs>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 Q180,100 360,150 Q540,200 720,180 L720,0 Z"
              fill="url(#gradient4)"
            />
          </svg>

          {/* Right Side Accent Curve */}
          <svg 
            className="absolute bottom-1/4 right-0 w-1/2 h-full" 
            viewBox="0 0 720 600" 
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            <defs>
              <linearGradient id="gradient5" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M720,600 Q540,500 360,450 Q180,400 0,420 L0,600 Z"
              fill="url(#gradient5)"
            />
          </svg>
        </div>

       

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-2xl">
              <span className="text-xs font-semibold text-white drop-shadow-2xl font-bold">
                ✨ Welcome to ServiceLink - Connecting People, Creating Opportunities
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              <span className="block text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mb-2">
                Connect.
              </span>
              <span className="block bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Serve.
              </span>
              <span className="block text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mt-2">
                Succeed.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-white mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] font-semibold">
              Your trusted platform for seamless service connections. 
              <span className="block mt-2 text-blue-100 font-medium">
                Discover quality services, connect with professionals, and get things done faster than ever.
              </span>
            </p>

            {/* CTA Button */}
            <div className="flex justify-center items-center mb-8">
              <Link
                to="/register"
                className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-300 overflow-hidden inline-block text-center backdrop-blur-sm border-2 border-white/30"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-xl">✨</span>
                  <span>Begin Your Journey</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            </div>

            {/* Stats or Features Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  10K+
                </div>
                <div className="text-blue-200 font-medium text-sm">Active Users</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-purple-200 font-medium text-sm">Service Providers</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-pink-200 font-medium text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Additional Sections - Features Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why Choose ServiceLink?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of service connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Fast & Easy",
                description: "Connect with service providers in minutes, not hours. Our streamlined process gets you started quickly."
              },
              {
                icon: "🔒",
                title: "Secure & Trusted",
                description: "Your safety is our priority. All providers are verified and your transactions are protected."
              },
              {
                icon: "⭐",
                title: "Quality Assured",
                description: "We maintain high standards. Only the best service providers make it to our platform."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


