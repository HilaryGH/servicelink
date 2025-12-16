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
              href="/home.jpg"
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

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Discover Our Service Categories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore a wide range of professional services tailored to meet your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏠",
                title: "Home Services",
                description: "Plumbing, electrical, cleaning, and home maintenance",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "💻",
                title: "Technology",
                description: "Web development, app creation, and IT solutions",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "🎨",
                title: "Creative Services",
                description: "Design, photography, video production, and branding",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: "📚",
                title: "Education",
                description: "Tutoring, training, and professional development",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: "💼",
                title: "Business Services",
                description: "Consulting, legal, accounting, and business support",
                color: "from-cyan-500 to-cyan-600"
              },
              {
                icon: "🏥",
                title: "Health & Wellness",
                description: "Fitness training, wellness coaching, and health services",
                color: "from-emerald-500 to-emerald-600"
              },
              {
                icon: "🎉",
                title: "Events & Entertainment",
                description: "Event planning, catering, and entertainment services",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: "🚗",
                title: "Automotive",
                description: "Car repair, maintenance, and automotive services",
                color: "from-red-500 to-red-600"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Connecting People, Creating Opportunities
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ServiceLink was born from a simple vision: to make finding and providing services easier, faster, and more reliable. We believe that everyone deserves access to quality services, and every service provider deserves a platform to showcase their expertise.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our platform bridges the gap between service seekers and providers, creating a seamless ecosystem where connections flourish, businesses grow, and communities thrive.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    10K+
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Providers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                    98%
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="space-y-4">
                    {[
                      { icon: "🎯", text: "Mission-Driven" },
                      { icon: "🤝", text: "Community Focused" },
                      { icon: "✨", text: "Innovation First" },
                      { icon: "💎", text: "Quality Assured" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 text-white">
                        <div className="text-3xl">{item.icon}</div>
                        <div className="text-lg font-semibold">{item.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="white" fillOpacity="0.1"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-4 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/30">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-100 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <a href="tel:+251911508734" className="text-blue-200 hover:text-white transition-colors">
                        +251911508734
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <a href="mailto:g.fikre2@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                        g.fikre2@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Location</h4>
                      <p className="text-blue-200">Available Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


