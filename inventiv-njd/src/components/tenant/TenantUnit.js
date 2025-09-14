import React from 'react';
import { unitInfo } from '../../data/tenantData';
import './TenantPages.css';

const TenantUnit = () => {
  return (
    <div className="tenant-page">
      <div className="page-header">
        <div className="header-content">
          <h1>My Unit Information</h1>
          <p>Complete details about your rental unit and lease</p>
        </div>
      </div>

      {/* Unit Overview */}
      <div className="unit-overview">
        <div className="unit-header">
          <div className="unit-icon">🏠</div>
          <div className="unit-info">
            <h2>Unit {unitInfo.unitNumber}</h2>
            <h3>{unitInfo.propertyName}</h3>
            <p className="unit-address">{unitInfo.propertyAddress}</p>
          </div>
        </div>
      </div>

      {/* Unit Details Grid */}
      <div className="details-grid">
        {/* Basic Information */}
        <div className="detail-card">
          <div className="card-header">
            <h3>📋 Basic Information</h3>
          </div>
          <div className="card-content">
            <div className="detail-row">
              <span className="label">Unit Number:</span>
              <span className="value">{unitInfo.unitNumber}</span>
            </div>
            <div className="detail-row">
              <span className="label">Floor:</span>
              <span className="value">{unitInfo.floor}</span>
            </div>
            <div className="detail-row">
              <span className="label">Bedrooms:</span>
              <span className="value">{unitInfo.bedrooms}</span>
            </div>
            <div className="detail-row">
              <span className="label">Bathrooms:</span>
              <span className="value">{unitInfo.bathrooms}</span>
            </div>
            <div className="detail-row">
              <span className="label">Square Feet:</span>
              <span className="value">{unitInfo.squareFeet} sq ft</span>
            </div>
            <div className="detail-row">
              <span className="label">Parking Spaces:</span>
              <span className="value">{unitInfo.parkingSpaces} (Space {unitInfo.parkingNumber})</span>
            </div>
          </div>
        </div>

        {/* Lease Information */}
        <div className="detail-card">
          <div className="card-header">
            <h3>📄 Lease Information</h3>
          </div>
          <div className="card-content">
            <div className="detail-row">
              <span className="label">Lease Type:</span>
              <span className="value">{unitInfo.leaseType}</span>
            </div>
            <div className="detail-row">
              <span className="label">Lease Start:</span>
              <span className="value">{unitInfo.leaseStartDate}</span>
            </div>
            <div className="detail-row">
              <span className="label">Lease End:</span>
              <span className="value">{unitInfo.leaseEndDate}</span>
            </div>
            <div className="detail-row">
              <span className="label">Monthly Rent:</span>
              <span className="value rent">${unitInfo.monthlyRent.toLocaleString()}</span>
            </div>
            <div className="detail-row">
              <span className="label">Security Deposit:</span>
              <span className="value">${unitInfo.securityDeposit.toLocaleString()}</span>
            </div>
            <div className="detail-row">
              <span className="label">Days Remaining:</span>
              <span className="value">
                {Math.ceil((new Date(unitInfo.leaseEndDate) - new Date()) / (1000 * 60 * 60 * 24))} days
              </span>
            </div>
          </div>
        </div>

        {/* Property Management */}
        <div className="detail-card">
          <div className="card-header">
            <h3>👨‍💼 Property Management</h3>
          </div>
          <div className="card-content">
            <div className="detail-row">
              <span className="label">Property Manager:</span>
              <span className="value">{unitInfo.propertyManager}</span>
            </div>
            <div className="detail-row">
              <span className="label">Phone:</span>
              <span className="value">
                <a href={`tel:${unitInfo.managerPhone}`}>{unitInfo.managerPhone}</a>
              </span>
            </div>
            <div className="detail-row">
              <span className="label">Email:</span>
              <span className="value">
                <a href={`mailto:${unitInfo.managerEmail}`}>{unitInfo.managerEmail}</a>
              </span>
            </div>
            <div className="detail-row">
              <span className="label">Office Hours:</span>
              <span className="value">Monday-Friday, 9 AM - 5 PM</span>
            </div>
          </div>
        </div>

        {/* Utilities */}
        <div className="detail-card">
          <div className="card-header">
            <h3>⚡ Utilities</h3>
          </div>
          <div className="card-content">
            <div className="utilities-section">
              <h4>Included in Rent:</h4>
              <ul className="utilities-list">
                {unitInfo.utilities.included.map((utility, index) => (
                  <li key={index} className="utility-item included">
                    ✅ {utility}
                  </li>
                ))}
              </ul>
            </div>
            <div className="utilities-section">
              <h4>Tenant Responsibility:</h4>
              <ul className="utilities-list">
                {unitInfo.utilities.tenantResponsible.map((utility, index) => (
                  <li key={index} className="utility-item tenant">
                    ⚠️ {utility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="detail-card amenities-card">
          <div className="card-header">
            <h3>🏊‍♀️ Amenities</h3>
          </div>
          <div className="card-content">
            <div className="amenities-grid">
              {unitInfo.amenities.map((amenity, index) => (
                <div key={index} className="amenity-item">
                  <span className="amenity-icon">✨</span>
                  <span className="amenity-name">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="detail-card actions-card">
          <div className="card-header">
            <h3>⚡ Quick Actions</h3>
          </div>
          <div className="card-content">
            <div className="quick-actions">
              <button className="action-btn primary">
                <span className="btn-icon">🔧</span>
                <span className="btn-text">Request Maintenance</span>
              </button>
              <button className="action-btn secondary">
                <span className="btn-icon">📋</span>
                <span className="btn-text">View Lease Document</span>
              </button>
              <button className="action-btn secondary">
                <span className="btn-icon">📞</span>
                <span className="btn-text">Contact Manager</span>
              </button>
              <button className="action-btn secondary">
                <span className="btn-icon">📧</span>
                <span className="btn-text">Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantUnit;
