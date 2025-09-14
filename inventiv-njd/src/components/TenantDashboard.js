import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { tenantProfile, unitInfo, paymentHistory, currentPayment, maintenanceRequests, announcements, upcomingEvents, contactInfo, tenantStats } from '../data/tenantData';
import './Dashboard.css';

const TenantDashboard = () => {
  const { user } = useAuth();

  // Use imported data from tenantData.js

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return '#ffc107';
      case 'In Progress': return '#495057';
      case 'Completed': return '#28a745';
      case 'Cancelled': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return '#dc3545';
      case 'Medium': return '#ffc107';
      case 'Low': return '#28a745';
      default: return '#6c757d';
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome home, {user?.first_name}!</h1>
        <p>Here's your unit information and recent activity.</p>
      </div>

      {/* Unit Information */}
      <div className="unit-info-card">
        <div className="unit-header">
          <h2>Unit {unitInfo.unitNumber}</h2>
          <span className="property-name">{unitInfo.propertyName}</span>
        </div>
        <div className="unit-details">
          <div className="unit-detail">
            <span className="detail-label">Address:</span>
            <span className="detail-value">{unitInfo.propertyAddress}</span>
          </div>
          <div className="unit-detail">
            <span className="detail-label">Property Manager:</span>
            <span className="detail-value">{unitInfo.propertyManager} - {unitInfo.managerPhone}</span>
          </div>
          <div className="unit-specs">
            <div className="spec">
              <span className="spec-value">{unitInfo.bedrooms}</span>
              <span className="spec-label">Bedrooms</span>
            </div>
            <div className="spec">
              <span className="spec-value">{unitInfo.bathrooms}</span>
              <span className="spec-label">Bathrooms</span>
            </div>
            <div className="spec">
              <span className="spec-value">{unitInfo.squareFeet} sq ft</span>
              <span className="spec-label">Size</span>
            </div>
            <div className="spec">
              <span className="spec-value">{unitInfo.parkingSpaces}</span>
              <span className="spec-label">Parking</span>
            </div>
          </div>
          <div className="lease-info">
            <div className="lease-detail">
              <span className="detail-label">Lease Period:</span>
              <span className="detail-value">{unitInfo.leaseStartDate} to {unitInfo.leaseEndDate}</span>
            </div>
            <div className="lease-detail">
              <span className="detail-label">Lease Type:</span>
              <span className="detail-value">{unitInfo.leaseType}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Payment Status */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Payment Status</h2>
          </div>
          <div className="payment-card">
            <div className="payment-status">
              <div className="status-indicator">
                <span className={`status-dot ${currentPayment.status.toLowerCase()}`}></span>
                <span className="status-text">{currentPayment.month} - ${currentPayment.amount.toLocaleString()}</span>
              </div>
              <div className="next-payment">
                <span className="next-label">Due Date:</span>
                <span className="next-date">{currentPayment.dueDate}</span>
              </div>
              <div className="payment-details">
                <span className="days-until-due">{currentPayment.daysUntilDue} days until due</span>
                {currentPayment.lateFee > 0 && (
                  <span className="late-fee">Late Fee: ${currentPayment.lateFee}</span>
                )}
              </div>
            </div>
            <button className="payment-button">Make Payment</button>
          </div>
        </div>

        {/* Maintenance Requests */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Maintenance Requests</h2>
            <button className="new-request-button">New Request</button>
          </div>
          <div className="maintenance-list">
            {maintenanceRequests.map((request) => (
              <div key={request.id} className="maintenance-item">
                <div className="request-header">
                  <h3 className="request-title">{request.title}</h3>
                  <div className="request-badges">
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(request.status) }}
                    >
                      {request.status}
                    </span>
                    <span 
                      className="priority-badge"
                      style={{ backgroundColor: getPriorityColor(request.priority) }}
                    >
                      {request.priority}
                    </span>
                  </div>
                </div>
                <p className="request-description">{request.description}</p>
                <div className="request-meta">
                  <span className="request-date">Submitted: {request.submittedDate}</span>
                  {request.assignedTo && (
                    <span className="request-assigned">Assigned to: {request.assignedTo}</span>
                  )}
                  {request.estimatedCompletion && (
                    <span className="request-completion">Est. Completion: {request.estimatedCompletion}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Announcements</h2>
          </div>
          <div className="announcements-list">
            {announcements.slice(0, 3).map((announcement) => (
              <div key={announcement.id} className="announcement-item">
                <div className="announcement-header">
                  <h3 className="announcement-title">{announcement.title}</h3>
                  <span 
                    className="announcement-priority"
                    style={{ backgroundColor: getPriorityColor(announcement.priority) }}
                  >
                    {announcement.priority}
                  </span>
                </div>
                <p className="announcement-message">{announcement.message}</p>
                <div className="announcement-meta">
                  <span className="announcement-date">{announcement.date}</span>
                  <span className="announcement-type">{announcement.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Upcoming Events</h2>
          </div>
          <div className="events-list">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-item">
                <div className="event-date">
                  <span className="event-day">{new Date(event.date).getDate()}</span>
                  <span className="event-month">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                </div>
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-time">{event.time}</p>
                  <p className="event-description">{event.description}</p>
                </div>
                <div className="event-type">
                  <span className="type-badge">{event.type}</span>
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
              <span className="action-icon">🔧</span>
              <span className="action-label">Request Maintenance</span>
            </button>
            <button className="action-button">
              <span className="action-icon">💳</span>
              <span className="action-label">Make Payment</span>
            </button>
            <button className="action-button">
              <span className="action-icon">📋</span>
              <span className="action-label">View Lease</span>
            </button>
            <button className="action-button">
              <span className="action-icon">📞</span>
              <span className="action-label">Contact Office</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
