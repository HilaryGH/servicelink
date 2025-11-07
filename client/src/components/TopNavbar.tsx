const TopNavbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-2 gap-2 md:gap-0">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+1 (234) 567-890</span>
            </a>
            <a
              href="mailto:info@servicelink.com"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>info@servicelink.com</span>
            </a>
          </div>

          {/* Right Side - Utility Links */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="hover:text-blue-200 transition-colors duration-200 text-xs sm:text-sm"
              >
                Help
              </a>
              <span className="h-4 w-px bg-white opacity-50"></span>
              <a
                href="#"
                className="hover:text-blue-200 transition-colors duration-200 text-xs sm:text-sm"
              >
                Support
              </a>
              <span className="h-4 w-px bg-white opacity-50"></span>
              <select className="bg-transparent border-none text-white text-xs sm:text-sm cursor-pointer hover:text-blue-200 focus:outline-none">
                <option value="en" className="bg-gray-800">EN</option>
                <option value="es" className="bg-gray-800">ES</option>
                <option value="fr" className="bg-gray-800">FR</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

