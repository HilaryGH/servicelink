import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../services/api';

const RegisterServiceProvider = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    serviceType: '',
    businessStatus: '',
    leadership: '',
    ownership: '',
    email: '',
    phone: '',
    whatsapp: '',
    telegram: '',
    city: '',
    password: '',
    confirmPassword: '',
    license: null as File | null,
    tradeRegistration: null as File | null,
    serviceCentrePhotos: [] as File[],
    introVideo: null as File | null,
    whwCard: null as File | null,
    insuranceProfileLink: '',
    taxIdentificationNumber: '',
    location: '',
    branches: [{ city: '', location: '' }],
    bankAccounts: [{ bank: '', accountNumber: '' }],
    servicePriceList: null as File | null,
    country: 'Ethiopia',
    consent: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    setError('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (e.target.files && e.target.files[0]) {
      if (field === 'serviceCentrePhotos') {
        const files = Array.from(e.target.files).slice(0, 5);
        setFormData({
          ...formData,
          serviceCentrePhotos: files,
        });
      } else {
        setFormData({
          ...formData,
          [field]: e.target.files[0],
        } as any);
      }
    }
  };

  const addBranch = () => {
    setFormData({
      ...formData,
      branches: [...formData.branches, { city: '', location: '' }],
    });
  };

  const updateBranch = (index: number, field: string, value: string) => {
    const updatedBranches = [...formData.branches];
    updatedBranches[index] = { ...updatedBranches[index], [field]: value };
    setFormData({ ...formData, branches: updatedBranches });
  };

  const removeBranch = (index: number) => {
    const updatedBranches = formData.branches.filter((_, i) => i !== index);
    setFormData({ ...formData, branches: updatedBranches });
  };

  const addBankAccount = () => {
    setFormData({
      ...formData,
      bankAccounts: [...formData.bankAccounts, { bank: '', accountNumber: '' }],
    });
  };

  const updateBankAccount = (index: number, field: string, value: string) => {
    const updatedAccounts = [...formData.bankAccounts];
    updatedAccounts[index] = { ...updatedAccounts[index], [field]: value };
    setFormData({ ...formData, bankAccounts: updatedAccounts });
  };

  const removeBankAccount = (index: number) => {
    const updatedAccounts = formData.bankAccounts.filter((_, i) => i !== index);
    setFormData({ ...formData, bankAccounts: updatedAccounts });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.consent) {
      setError('You must consent to the terms and conditions');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);

    try {
      // Convert files to URLs (in production, upload to cloud storage first)
      const licenseUrl = formData.license ? URL.createObjectURL(formData.license) : '';
      const tradeRegUrl = formData.tradeRegistration ? URL.createObjectURL(formData.tradeRegistration) : '';
      const servicePhotosUrls = formData.serviceCentrePhotos.map(file => URL.createObjectURL(file));
      const introVideoUrl = formData.introVideo ? URL.createObjectURL(formData.introVideo) : '';
      const whwCardUrl = formData.whwCard ? URL.createObjectURL(formData.whwCard) : '';
      const priceListUrl = formData.servicePriceList ? URL.createObjectURL(formData.servicePriceList) : '';

      const response = await authAPI.registerServiceProvider({
        companyName: formData.companyName,
        serviceType: formData.serviceType,
        businessStatus: formData.businessStatus,
        leadership: formData.leadership,
        ownership: formData.ownership,
        email: formData.email,
        phone: formData.phone,
        whatsapp: formData.whatsapp,
        telegram: formData.telegram,
        city: formData.city,
        password: formData.password,
        license: licenseUrl,
        tradeRegistration: tradeRegUrl,
        serviceCentrePhotos: servicePhotosUrls,
        introVideo: introVideoUrl,
        whwCard: whwCardUrl,
        insuranceProfileLink: formData.insuranceProfileLink,
        taxIdentificationNumber: formData.taxIdentificationNumber,
        location: formData.location,
        branches: formData.branches,
        bankAccounts: formData.bankAccounts,
        servicePriceList: priceListUrl,
        country: formData.country,
        consent: formData.consent,
      });
      
      if (response.success) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        navigate('/welcome');
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || 'Registration failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/service link logo.jpg"
              alt="ServiceLink Logo"
              className="h-16 w-auto max-w-[200px] object-contain"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Register as Service Provider</h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Registering as */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Registering as
            </label>
            <select
              name="userType"
              value="Service Provider"
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
            >
              <option value="Service Provider">Service Provider</option>
            </select>
          </div>

          {/* Membership Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Membership Level
            </label>
            <select
              name="membershipLevel"
              value="Basic Provider"
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
            >
              <option value="Basic Provider">Basic Provider</option>
            </select>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter company name"
            />
          </div>

          {/* Select Service Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Service Type
            </label>
            <select
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Service Type</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical">Electrical</option>
              <option value="HVAC">HVAC</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Carpentry">Carpentry</option>
              <option value="Painting">Painting</option>
              <option value="Landscaping">Landscaping</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Business Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Status
            </label>
            <input
              type="text"
              name="businessStatus"
              value={formData.businessStatus}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter business status"
            />
          </div>

          {/* Leadership */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Leadership
            </label>
            <select
              name="leadership"
              required
              value={formData.leadership}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Leadership</option>
              <option value="Women Led">Women Led</option>
              <option value="Non Women Led">Non Women Led</option>
            </select>
          </div>

          {/* Ownership */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ownership
            </label>
            <select
              name="ownership"
              required
              value={formData.ownership}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Ownership</option>
              <option value="Women Owned">Women Owned</option>
              <option value="Non Women Owned">Non Women Owned</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="g.fikre2@gmail.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number"
            />
          </div>

          {/* WhatsApp (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              WhatsApp (Optional)
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter WhatsApp number"
            />
          </div>

          {/* Telegram (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telegram (Optional)
            </label>
            <input
              type="text"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Telegram username"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter city"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="•••••••••••••••"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="•••••••••••••••"
            />
          </div>

          {/* License (PDF/Image) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              License (PDF/Image)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                id="license"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange(e, 'license')}
                className="hidden"
              />
              <label
                htmlFor="license"
                className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                Choose File
              </label>
              <span className="text-sm text-gray-500">
                {formData.license ? formData.license.name : 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Trade Registration (PDF/Image) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Trade Registration (PDF/Image)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                id="tradeRegistration"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange(e, 'tradeRegistration')}
                className="hidden"
              />
              <label
                htmlFor="tradeRegistration"
                className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                Choose File
              </label>
              <span className="text-sm text-gray-500">
                {formData.tradeRegistration ? formData.tradeRegistration.name : 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Service Centre Photos (up to 5) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Centre Photos (up to 5)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                id="serviceCentrePhotos"
                accept=".jpg,.jpeg,.png"
                multiple
                onChange={(e) => handleFileChange(e, 'serviceCentrePhotos')}
                className="hidden"
              />
              <label
                htmlFor="serviceCentrePhotos"
                className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                Choose Files
              </label>
              <span className="text-sm text-gray-500">
                {formData.serviceCentrePhotos.length > 0 
                  ? `${formData.serviceCentrePhotos.length} file(s) chosen`
                  : 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Intro Video (optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Intro Video (optional)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                id="introVideo"
                accept=".mp4,.mov,.avi"
                onChange={(e) => handleFileChange(e, 'introVideo')}
                className="hidden"
              />
              <label
                htmlFor="introVideo"
                className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                Choose File
              </label>
              <span className="text-sm text-gray-500">
                {formData.introVideo ? formData.introVideo.name : 'No file chosen'}
              </span>
            </div>
          </div>

          {/* WHW card */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              WHW card
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                id="whwCard"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange(e, 'whwCard')}
                className="hidden"
              />
              <label
                htmlFor="whwCard"
                className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                Choose File
              </label>
              <span className="text-sm text-gray-500">
                {formData.whwCard ? formData.whwCard.name : 'No file chosen'}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">(Document upload coming soon)</p>
          </div>

          {/* Insurance Profile Link (PDF/Image) (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Insurance Profile Link (PDF/Image) (Optional)
            </label>
            <input
              type="url"
              name="insuranceProfileLink"
              value={formData.insuranceProfileLink}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/file.pdf"
            />
          </div>

          {/* Tax Identification Number (TIN) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tax Identification Number (TIN)
            </label>
            <input
              type="text"
              name="taxIdentificationNumber"
              value={formData.taxIdentificationNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter TIN"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter location"
            />
          </div>

          {/* Branches */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Branches
              </label>
              <button
                type="button"
                onClick={addBranch}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                + Add Branch
              </button>
            </div>
            {formData.branches.map((branch, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="City"
                  value={branch.city}
                  onChange={(e) => updateBranch(index, 'city', e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={branch.location}
                  onChange={(e) => updateBranch(index, 'location', e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formData.branches.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeBranch(index)}
                    className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Bank Accounts */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Bank Accounts
              </label>
              <button
                type="button"
                onClick={addBankAccount}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                + Add Bank Account
              </button>
            </div>
            {formData.bankAccounts.map((account, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <select
                  value={account.bank}
                  onChange={(e) => updateBankAccount(index, 'bank', e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Bank</option>
                  <option value="Commercial Bank of Ethiopia">Commercial Bank of Ethiopia</option>
                  <option value="Awash Bank">Awash Bank</option>
                  <option value="Dashen Bank">Dashen Bank</option>
                  <option value="Bank of Abyssinia">Bank of Abyssinia</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="text"
                  placeholder="Account Number"
                  value={account.accountNumber}
                  onChange={(e) => updateBankAccount(index, 'accountNumber', e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formData.bankAccounts.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeBankAccount(index)}
                    className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Service Price List / Quotation Document (PDF) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Price List / Quotation Document (PDF)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                id="servicePriceList"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, 'servicePriceList')}
                className="hidden"
              />
              <label
                htmlFor="servicePriceList"
                className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                Choose File
              </label>
              <span className="text-sm text-gray-500">
                {formData.servicePriceList ? formData.servicePriceList.name : 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Ethiopia">Ethiopia</option>
              <option value="Kenya">Kenya</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Uganda">Uganda</option>
            </select>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              required
            />
            <label className="ml-2 text-sm text-gray-700">
              I consent to the collection and processing of my personal data in line with data regulations as described in the{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy & Merchant Service Agreement</a>.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Registering...' : 'Register as Service Provider'}
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Login
            </Link>
          </p>
        </form>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          Ⓒ All rights reserved by ServiceLink
        </div>
      </div>
    </div>
  );
};

export default RegisterServiceProvider;

