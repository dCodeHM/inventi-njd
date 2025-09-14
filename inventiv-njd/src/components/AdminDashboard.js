import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { adminStats, properties, recentTenants, maintenanceRequests, recentActivities, financialData, upcomingTasks } from '../data/adminData';
import './Dashboard.css';

const AdminDashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Total Properties',
      value: adminStats.totalProperties.toString(),
      icon: '🏢',
      color: '#495057',
      change: `+${adminStats.newTenantsThisMonth} this month`
    },
    {
      title: 'Active Tenants',
      value: adminStats.totalTenants.toString(),
      icon: '👥',
      color: '#28a745',
      change: `+${adminStats.newTenantsThisMonth} this month`
    },
    {
      title: 'Occupancy Rate',
      value: `${adminStats.occupancyRate}%`,
      icon: '📊',
      color: '#ffc107',
      change: '+2.1% from last month'
    },
    {
      title: 'Maintenance Requests',
      value: adminStats.maintenanceRequests.toString(),
      icon: '🔧',
      color: '#dc3545',
      change: `${adminStats.pendingMaintenance} pending`
    }
  ];

  // Use imported recentActivities data

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#dc3545';
      case 'medium': return '#ffc107';
      case 'low': return '#28a745';
      default: return '#6c757d';
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, {user?.first_name}!</h1>
        <p>Here's what's happening with your properties today.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-title">{stat.title}</p>
              <span className="stat-change">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        {/* Recent Activities */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Recent Activities</h2>
            <button className="view-all-button">View All</button>
          </div>
          <div className="activities-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  {activity.icon}
                </div>
                <div className="activity-content">
                  <p className="activity-message">{activity.message}</p>
                  <div className="activity-meta">
                    <span className="activity-time">{activity.time}</span>
                    <span 
                      className="activity-priority"
                      style={{ color: getPriorityColor(activity.priority) }}
                    >
                      {activity.priority}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Properties Overview */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Properties Overview</h2>
            <button className="view-all-button">Manage Properties</button>
          </div>
          <div className="properties-grid">
            {properties.slice(0, 4).map((property) => (
              <div key={property.id} className="property-card">
                <div className="property-header">
                  <span className="property-icon">{property.image}</span>
                  <div className="property-info">
                    <h3 className="property-name">{property.name}</h3>
                    <p className="property-type">{property.type}</p>
                  </div>
                </div>
                <div className="property-stats">
                  <div className="stat">
                    <span className="stat-value">{property.occupiedUnits}/{property.totalUnits}</span>
                    <span className="stat-label">Units</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{property.occupancyRate}%</span>
                    <span className="stat-label">Occupancy</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">${property.monthlyRevenue.toLocaleString()}</span>
                    <span className="stat-label">Revenue</span>
                  </div>
                </div>
                <div className="property-manager">
                  <span className="manager-label">Manager:</span>
                  <span className="manager-name">{property.manager}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Requests */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Recent Maintenance Requests</h2>
            <button className="view-all-button">View All</button>
          </div>
          <div className="maintenance-list">
            {maintenanceRequests.slice(0, 3).map((request) => (
              <div key={request.id} className="maintenance-item">
                <div className="request-header">
                  <h3 className="request-title">{request.title}</h3>
                  <div className="request-badges">
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getPriorityColor(request.priority.toLowerCase()) }}
                    >
                      {request.status}
                    </span>
                    <span 
                      className="priority-badge"
                      style={{ backgroundColor: getPriorityColor(request.priority.toLowerCase()) }}
                    >
                      {request.priority}
                    </span>
                  </div>
                </div>
                <p className="request-description">{request.description}</p>
                <div className="request-meta">
                  <span className="request-tenant">{request.tenantName} - {request.unit}</span>
                  <span className="request-date">Submitted: {request.submittedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Quick Actions</h2>
          </div>
          <div className="quick-actions">
            <button className="action-button">
              <span className="action-icon">➕</span>
              <span className="action-label">Add Property</span>
            </button>
            <button className="action-button">
              <span className="action-icon">👤</span>
              <span className="action-label">Add Tenant</span>
            </button>
            <button className="action-button">
              <span className="action-icon">🔧</span>
              <span className="action-label">New Maintenance</span>
            </button>
            <button className="action-button">
              <span className="action-icon">📊</span>
              <span className="action-label">Generate Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
