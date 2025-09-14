import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { tenantProfile, contactInfo, tenantStats } from '../../data/tenantData';
import './TenantPages.css';

const TenantProfile = () => {
  const { user, updateProfile, changePassword } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.first_name || '',
    lastName: user?.last_name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const result = await updateProfile(formData);
    if (result.success) {
      setIsEditing(false);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    const result = await changePassword(passwordData.currentPassword, passwordData.newPassword);
    if (result.success) {
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }
  };

  const tabs = [
    { id: 'profile', name: 'Profile Information', icon: '👤' },
    { id: 'contact', name: 'Contact Information', icon: '📞' },
    { id: 'security', name: 'Security & Password', icon: '🔒' },
    { id: 'preferences', name: 'Preferences', icon: '⚙️' }
  ];

  return (
    <div className="tenant-page">
      <div className="page-header">
        <div className="header-content">
          <h1>My Profile</h1>
          <p>Manage your personal information and account settings</p>
        </div>
      </div>

      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          <span className="avatar-icon">{tenantProfile.profileImage}</span>
        </div>
        <div className="profile-info">
          <h2>{user?.first_name} {user?.last_name}</h2>
          <p className="profile-role">{user?.role === 'tenant' ? 'Tenant' : 'User'}</p>
          <p className="profile-email">{user?.email}</p>
        </div>
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{tenantStats.daysInUnit}</span>
            <span className="stat-label">Days in Unit</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{tenantStats.paymentsOnTime}</span>
            <span className="stat-label">On-Time Payments</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{tenantStats.maintenanceRequests}</span>
            <span className="stat-label">Maintenance Requests</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-name">{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'profile' && (
          <div className="profile-section">
            <div className="section-header">
              <h3>Personal Information</h3>
              <button 
                className="btn btn-secondary"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
            <form onSubmit={handleProfileUpdate}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              {isEditing && (
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
              )}
            </form>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="profile-section">
            <div className="section-header">
              <h3>Contact Information</h3>
            </div>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-header">
                  <span className="contact-icon">👨‍💼</span>
                  <h4>Property Manager</h4>
                </div>
                <div className="contact-details">
                  <p><strong>{contactInfo.propertyManager.name}</strong></p>
                  <p>📞 {contactInfo.propertyManager.phone}</p>
                  <p>📧 {contactInfo.propertyManager.email}</p>
                  <p>🕒 {contactInfo.propertyManager.officeHours}</p>
                </div>
                <div className="contact-actions">
                  <button className="btn btn-sm btn-primary">Call</button>
                  <button className="btn btn-sm btn-secondary">Email</button>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-header">
                  <span className="contact-icon">🚨</span>
                  <h4>Emergency Maintenance</h4>
                </div>
                <div className="contact-details">
                  <p><strong>24/7 Emergency Line</strong></p>
                  <p>📞 {contactInfo.emergencyMaintenance.phone}</p>
                  <p>🕒 {contactInfo.emergencyMaintenance.available}</p>
                </div>
                <div className="contact-actions">
                  <button className="btn btn-sm btn-danger">Call Emergency</button>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-header">
                  <span className="contact-icon">🏢</span>
                  <h4>Leasing Office</h4>
                </div>
                <div className="contact-details">
                  <p><strong>Main Office</strong></p>
                  <p>📞 {contactInfo.leasingOffice.phone}</p>
                  <p>📧 {contactInfo.leasingOffice.email}</p>
                  <p>📍 {contactInfo.leasingOffice.address}</p>
                </div>
                <div className="contact-actions">
                  <button className="btn btn-sm btn-primary">Call</button>
                  <button className="btn btn-sm btn-secondary">Email</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="profile-section">
            <div className="section-header">
              <h3>Change Password</h3>
            </div>
            <form onSubmit={handlePasswordUpdate}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    required
                    minLength="6"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    required
                    minLength="6"
                  />
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Update Password</button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="profile-section">
            <div className="section-header">
              <h3>Account Preferences</h3>
            </div>
            <div className="preferences-grid">
              <div className="preference-card">
                <div className="preference-header">
                  <span className="preference-icon">📧</span>
                  <h4>Email Notifications</h4>
                </div>
                <div className="preference-options">
                  <label className="preference-option">
                    <input type="checkbox" defaultChecked />
                    <span>Payment reminders</span>
                  </label>
                  <label className="preference-option">
                    <input type="checkbox" defaultChecked />
                    <span>Maintenance updates</span>
                  </label>
                  <label className="preference-option">
                    <input type="checkbox" defaultChecked />
                    <span>Property announcements</span>
                  </label>
                  <label className="preference-option">
                    <input type="checkbox" />
                    <span>Marketing communications</span>
                  </label>
                </div>
              </div>

              <div className="preference-card">
                <div className="preference-header">
                  <span className="preference-icon">📱</span>
                  <h4>SMS Notifications</h4>
                </div>
                <div className="preference-options">
                  <label className="preference-option">
                    <input type="checkbox" />
                    <span>Emergency alerts</span>
                  </label>
                  <label className="preference-option">
                    <input type="checkbox" />
                    <span>Maintenance updates</span>
                  </label>
                  <label className="preference-option">
                    <input type="checkbox" />
                    <span>Payment reminders</span>
                  </label>
                </div>
              </div>

              <div className="preference-card">
                <div className="preference-header">
                  <span className="preference-icon">🌙</span>
                  <h4>Display Preferences</h4>
                </div>
                <div className="preference-options">
                  <label className="preference-option">
                    <input type="radio" name="theme" value="light" defaultChecked />
                    <span>Light theme</span>
                  </label>
                  <label className="preference-option">
                    <input type="radio" name="theme" value="dark" />
                    <span>Dark theme</span>
                  </label>
                  <label className="preference-option">
                    <input type="radio" name="theme" value="auto" />
                    <span>Auto (system preference)</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary">Save Preferences</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TenantProfile;
