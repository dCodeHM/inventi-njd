import React, { useState } from 'react';
import { properties } from '../../data/adminData';
import './AdminPages.css';

const AdminProperties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="admin-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Properties Management</h1>
          <p>Manage all properties, units, and occupancy</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
            {viewMode === 'grid' ? '📋 List View' : '🏢 Grid View'}
          </button>
          <button className="btn btn-primary">
            ➕ Add Property
          </button>
        </div>
      </div>

      {/* Properties Summary */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-icon">🏢</div>
          <div className="summary-content">
            <h3>{properties.length}</h3>
            <p>Total Properties</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">🏠</div>
          <div className="summary-content">
            <h3>{properties.reduce((sum, prop) => sum + prop.totalUnits, 0)}</h3>
            <p>Total Units</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">👥</div>
          <div className="summary-content">
            <h3>{properties.reduce((sum, prop) => sum + prop.occupiedUnits, 0)}</h3>
            <p>Occupied Units</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">📊</div>
          <div className="summary-content">
            <h3>{Math.round(properties.reduce((sum, prop) => sum + prop.occupancyRate, 0) / properties.length)}%</h3>
            <p>Avg Occupancy</p>
          </div>
        </div>
      </div>

      {/* Properties Grid/List */}
      <div className="properties-container">
        {viewMode === 'grid' ? (
          <div className="properties-grid">
            {properties.map((property) => (
              <div key={property.id} className="property-card" onClick={() => handlePropertyClick(property)}>
                <div className="property-header">
                  <span className="property-icon">{property.image}</span>
                  <div className="property-info">
                    <h3 className="property-name">{property.name}</h3>
                    <p className="property-type">{property.type}</p>
                    <p className="property-address">{property.address}</p>
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
                <div className="property-actions">
                  <button className="btn btn-sm btn-secondary">Edit</button>
                  <button className="btn btn-sm btn-primary">View Details</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="properties-table">
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Units</th>
                  <th>Occupancy</th>
                  <th>Revenue</th>
                  <th>Manager</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr key={property.id}>
                    <td>
                      <div className="property-cell">
                        <span className="property-icon">{property.image}</span>
                        <div>
                          <div className="property-name">{property.name}</div>
                          <div className="property-address">{property.address}</div>
                        </div>
                      </div>
                    </td>
                    <td>{property.type}</td>
                    <td>{property.occupiedUnits}/{property.totalUnits}</td>
                    <td>
                      <span className={`occupancy-badge ${property.occupancyRate >= 90 ? 'high' : property.occupancyRate >= 75 ? 'medium' : 'low'}`}>
                        {property.occupancyRate}%
                      </span>
                    </td>
                    <td>${property.monthlyRevenue.toLocaleString()}</td>
                    <td>{property.manager}</td>
                    <td>
                      <span className={`status-badge ${property.status.toLowerCase()}`}>
                        {property.status}
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <button className="btn btn-sm btn-secondary">Edit</button>
                        <button className="btn btn-sm btn-primary">View</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedProperty.name}</h2>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="property-details">
                <div className="detail-section">
                  <h3>Property Information</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <label>Type:</label>
                      <span>{selectedProperty.type}</span>
                    </div>
                    <div className="detail-item">
                      <label>Address:</label>
                      <span>{selectedProperty.address}</span>
                    </div>
                    <div className="detail-item">
                      <label>Total Units:</label>
                      <span>{selectedProperty.totalUnits}</span>
                    </div>
                    <div className="detail-item">
                      <label>Occupied Units:</label>
                      <span>{selectedProperty.occupiedUnits}</span>
                    </div>
                    <div className="detail-item">
                      <label>Occupancy Rate:</label>
                      <span>{selectedProperty.occupancyRate}%</span>
                    </div>
                    <div className="detail-item">
                      <label>Monthly Revenue:</label>
                      <span>${selectedProperty.monthlyRevenue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="detail-section">
                  <h3>Management</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <label>Property Manager:</label>
                      <span>{selectedProperty.manager}</span>
                    </div>
                    <div className="detail-item">
                      <label>Phone:</label>
                      <span>{selectedProperty.phone}</span>
                    </div>
                    <div className="detail-item">
                      <label>Status:</label>
                      <span className={`status-badge ${selectedProperty.status.toLowerCase()}`}>
                        {selectedProperty.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeModal}>Close</button>
              <button className="btn btn-primary">Edit Property</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProperties;
