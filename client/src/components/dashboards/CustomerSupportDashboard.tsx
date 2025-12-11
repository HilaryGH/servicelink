import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerSupportDashboard = () => {
  const navigate = useNavigate();
  const [_user, setUser] = useState<any>(null);
  const [stats, _setStats] = useState({
    openTickets: 0,
    resolvedToday: 0,
    averageResponseTime: '0 min',
    satisfactionRate: '0%',
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
      <header className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Customer Support Dashboard</h1>
              <p className="text-sm text-cyan-100">Manage customer inquiries and support tickets</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors font-semibold"
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
                <p className="text-sm font-medium text-gray-600">Open Tickets</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.openTickets}</p>
              </div>
              <div className="bg-red-100 rounded-full p-3">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Resolved Today</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.resolvedToday}</p>
              </div>
              <div className="bg-green-100 rounded-full p-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.averageResponseTime}</p>
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Satisfaction Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.satisfactionRate}</p>
              </div>
              <div className="bg-yellow-100 rounded-full p-3">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Support Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Ticket Management</h2>
            <div className="space-y-3">
              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-cyan-600 hover:bg-cyan-50 transition-colors text-left">
                <h3 className="font-semibold text-gray-900">View All Tickets</h3>
                <p className="text-sm text-gray-600 mt-1">Browse and manage support tickets</p>
              </button>
              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-teal-600 hover:bg-teal-50 transition-colors text-left">
                <h3 className="font-semibold text-gray-900">Create Ticket</h3>
                <p className="text-sm text-gray-600 mt-1">Create a new support ticket</p>
              </button>
              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors text-left">
                <h3 className="font-semibold text-gray-900">Assign Tickets</h3>
                <p className="text-sm text-gray-600 mt-1">Assign tickets to team members</p>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Customer Resources</h2>
            <div className="space-y-3">
              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 transition-colors text-left">
                <h3 className="font-semibold text-gray-900">Knowledge Base</h3>
                <p className="text-sm text-gray-600 mt-1">Access help articles and guides</p>
              </button>
              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition-colors text-left">
                <h3 className="font-semibold text-gray-900">Live Chat</h3>
                <p className="text-sm text-gray-600 mt-1">Manage live chat conversations</p>
              </button>
              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-yellow-600 hover:bg-yellow-50 transition-colors text-left">
                <h3 className="font-semibold text-gray-900">Customer History</h3>
                <p className="text-sm text-gray-600 mt-1">View customer interaction history</p>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Tickets */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Tickets</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Account Access Issue</p>
                <p className="text-sm text-gray-600">Priority: High • Created 2 hours ago</p>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Open</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Payment Question</p>
                <p className="text-sm text-gray-600">Priority: Medium • Created 5 hours ago</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">In Progress</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Service Inquiry</p>
                <p className="text-sm text-gray-600">Priority: Low • Resolved 1 day ago</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Resolved</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerSupportDashboard;


