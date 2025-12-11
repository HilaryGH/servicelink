import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MarketingTeamDashboard = () => {
  const navigate = useNavigate();
  const [_user, setUser] = useState<any>(null);
  const [stats, _setStats] = useState({
    campaigns: 0,
    activePromotions: 0,
    emailSent: 0,
    conversionRate: '0%',
  });

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Marketing Team Dashboard</h1>
              <p className="text-sm text-pink-100">Manage campaigns and promotions</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white text-pink-600 rounded-lg hover:bg-pink-50 transition-colors font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.campaigns}</p>
              </div>
              <div className="bg-pink-100 rounded-full p-3">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Promotions</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.activePromotions}</p>
              </div>
              <div className="bg-rose-100 rounded-full p-3">
                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Emails Sent</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.emailSent.toLocaleString()}</p>
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.conversionRate}</p>
              </div>
              <div className="bg-green-100 rounded-full p-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Campaign Management</h2>
            <div className="space-y-3">
              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-pink-600 hover:bg-pink-50 transition-colors text-left">
                <h3 className="font-semibold text-gray-900">Create Campaign</h3>
                <p className="text-sm text-gray-600 mt-1">Launch a new marketing campaign</p>
              </button>
              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-rose-600 hover:bg-rose-50 transition-colors text-left">
                <h3 className="font-semibold text-gray-900">Manage Promotions</h3>
                <p className="text-sm text-gray-600 mt-1">Create and manage promotional offers</p>
              </button>
              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors text-left">
                <h3 className="font-semibold text-gray-900">Email Marketing</h3>
                <p className="text-sm text-gray-600 mt-1">Send targeted email campaigns</p>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Analytics & Reports</h2>
            <div className="space-y-3">
              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 transition-colors text-left">
                <h3 className="font-semibold text-gray-900">Campaign Analytics</h3>
                <p className="text-sm text-gray-600 mt-1">View campaign performance metrics</p>
              </button>
              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition-colors text-left">
                <h3 className="font-semibold text-gray-900">User Engagement</h3>
                <p className="text-sm text-gray-600 mt-1">Track user engagement and behavior</p>
              </button>
              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-yellow-600 hover:bg-yellow-50 transition-colors text-left">
                <h3 className="font-semibold text-gray-900">Generate Reports</h3>
                <p className="text-sm text-gray-600 mt-1">Create detailed marketing reports</p>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Campaigns */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Campaigns</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Summer Promotion 2024</p>
                <p className="text-sm text-gray-600">Active • 1,234 conversions</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">New User Welcome Campaign</p>
                <p className="text-sm text-gray-600">Scheduled • Starts tomorrow</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Scheduled</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketingTeamDashboard;


