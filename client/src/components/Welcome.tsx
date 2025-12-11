import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const isServiceProvider = user?.userType === 'Service Provider' || user?.companyName;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/service link logo.jpg"
                alt="ServiceLink Logo"
                className="h-20 w-auto max-w-[250px] object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Welcome to ServiceLink!
              </span>
            </h1>
            <p className="text-xl text-gray-600">Digital Solutions</p>
          </div>

          {/* Success Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {isServiceProvider ? (
                  <>
                    🎉 Congratulations, <span className="text-blue-600">{user?.companyName || user?.name}</span>!
                  </>
                ) : (
                  <>
                    Hello, <span className="text-blue-600">{user?.name || 'User'}</span>!
                  </>
                )}
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                Your account has been created successfully!
              </p>
              <p className="text-gray-500">
                {isServiceProvider
                  ? 'A welcome email has been sent to your registered email address.'
                  : 'We\'ve sent a welcome email to your inbox.'}
              </p>
            </div>

            {/* Info Box */}
            <div
              className={`rounded-xl p-6 mb-8 ${
                isServiceProvider
                  ? 'bg-blue-50 border-2 border-blue-200'
                  : 'bg-green-50 border-2 border-green-200'
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {isServiceProvider ? (
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  )}
                </div>
                <div className="ml-4">
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      isServiceProvider ? 'text-blue-900' : 'text-green-900'
                    }`}
                  >
                    {isServiceProvider
                      ? 'Your Service Provider Account is Active!'
                      : 'Your Account is Ready!'}
                  </h3>
                  <p
                    className={`text-sm ${
                      isServiceProvider ? 'text-blue-800' : 'text-green-800'
                    }`}
                  >
                    {isServiceProvider
                      ? 'You can now start connecting with customers, manage your service listings, and grow your business through our platform.'
                      : 'You can now explore our platform, find service providers, book services, and get things done faster than ever.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What's Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {isServiceProvider ? (
                  <>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Complete Your Profile
                        </h4>
                        <p className="text-sm text-gray-600">
                          Add your service details and portfolio
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Set Your Pricing
                        </h4>
                        <p className="text-sm text-gray-600">
                          Upload your service price list
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Start Receiving Requests
                        </h4>
                        <p className="text-sm text-gray-600">
                          Customers can now find and book your services
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Manage Bookings
                        </h4>
                        <p className="text-sm text-gray-600">
                          Track and manage your service appointments
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Browse Services
                        </h4>
                        <p className="text-sm text-gray-600">
                          Explore available services and providers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Book Services
                        </h4>
                        <p className="text-sm text-gray-600">
                          Find and book services that match your needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Track Requests
                        </h4>
                        <p className="text-sm text-gray-600">
                          Monitor your service requests and bookings
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Rate & Review
                        </h4>
                        <p className="text-sm text-gray-600">
                          Share your experience with service providers
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                Go to Dashboard
              </Link>
              <Link
                to="/"
                className="px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* Email Notice */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-blue-600 mr-2"
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
              <p className="text-gray-700 font-medium">
                Check your email for a welcome message!
              </p>
            </div>
            <p className="text-sm text-gray-500">
              We've sent important information to{' '}
              <span className="font-semibold text-gray-700">{user?.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;







