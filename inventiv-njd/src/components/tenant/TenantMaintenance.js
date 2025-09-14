import React, { useState } from 'react';
import { maintenanceRequests } from '../../data/tenantData';
import './TenantPages.css';

const TenantMaintenance = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showNewRequestForm, setShowNewRequestForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredRequests = maintenanceRequests.filter(request => {
    return filterStatus === 'all' || request.status.toLowerCase() === filterStatus.toLowerCase();
  });

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
  };

  const closeModal = () => {
    setSelectedRequest(null);
  };

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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending': return '⏳';
      case 'In Progress': return '🔄';
      case 'Completed': return '✅';
      case 'Cancelled': return '❌';
      default: return '❓';
    }
  };

  return (
    <div className="tenant-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Maintenance Requests</h1>
          <p>Submit and track maintenance requests for your unit</p>
        </div>
        <div className="header-actions">
          <button 
            className="btn btn-primary"
            onClick={() => setShowNewRequestForm(true)}
          >
            ➕ New Request
          </button>
        </div>
      </div>

      {/* Filter */}
      <div className="filter-bar">
        <div className="filter-group">
          <label>Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Maintenance Summary */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-icon">🔧</div>
          <div className="summary-content">
            <h3>{maintenanceRequests.length}</h3>
            <p>Total Requests</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">⏳</div>
          <div className="summary-content">
            <h3>{maintenanceRequests.filter(r => r.status === 'Pending').length}</h3>
            <p>Pending</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">🔄</div>
          <div className="summary-content">
            <h3>{maintenanceRequests.filter(r => r.status === 'In Progress').length}</h3>
            <p>In Progress</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">✅</div>
          <div className="summary-content">
            <h3>{maintenanceRequests.filter(r => r.status === 'Completed').length}</h3>
            <p>Completed</p>
          </div>
        </div>
      </div>

      {/* Maintenance Requests */}
      <div className="maintenance-requests">
        {filteredRequests.map((request) => (
          <div key={request.id} className="maintenance-card" onClick={() => handleRequestClick(request)}>
            <div className="request-header">
              <div className="request-info">
                <h3 className="request-title">{request.title}</h3>
                <p className="request-category">{request.category}</p>
              </div>
              <div className="request-badges">
                <span 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(request.status) }}
                >
                  {getStatusIcon(request.status)} {request.status}
                </span>
                <span 
                  className="priority-badge"
                  style={{ backgroundColor: getPriorityColor(request.priority) }}
                >
                  {request.priority}
                </span>
              </div>
            </div>
            <div className="request-content">
              <p className="request-description">{request.description}</p>
              <div className="request-meta">
                <div className="meta-item">
                  <span className="meta-label">Submitted:</span>
                  <span className="meta-value">{request.submittedDate}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Last Updated:</span>
                  <span className="meta-value">{request.lastUpdated}</span>
                </div>
                {request.assignedTo && (
                  <div className="meta-item">
                    <span className="meta-label">Assigned to:</span>
                    <span className="meta-value">{request.assignedTo}</span>
                  </div>
                )}
                {request.estimatedCompletion && (
                  <div className="meta-item">
                    <span className="meta-label">Est. Completion:</span>
                    <span className="meta-value">{request.estimatedCompletion}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="request-actions">
              <button className="btn btn-sm btn-secondary">View Details</button>
              {request.status === 'Pending' && (
                <button className="btn btn-sm btn-warning">Cancel Request</button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Request Detail Modal */}
      {selectedRequest && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedRequest.title}</h2>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="request-details">
                <div className="detail-section">
                  <h3>Request Information</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <label>Category:</label>
                      <span>{selectedRequest.category}</span>
                    </div>
                    <div className="detail-item">
                      <label>Priority:</label>
                      <span 
                        className="priority-badge"
                        style={{ backgroundColor: getPriorityColor(selectedRequest.priority) }}
                      >
                        {selectedRequest.priority}
                      </span>
                    </div>
                    <div className="detail-item">
                      <label>Status:</label>
                      <span 
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(selectedRequest.status) }}
                      >
                        {getStatusIcon(selectedRequest.status)} {selectedRequest.status}
                      </span>
                    </div>
                    <div className="detail-item">
                      <label>Submitted Date:</label>
                      <span>{selectedRequest.submittedDate}</span>
                    </div>
                    <div className="detail-item">
                      <label>Last Updated:</label>
                      <span>{selectedRequest.lastUpdated}</span>
                    </div>
                    {selectedRequest.assignedTo && (
                      <div className="detail-item">
                        <label>Assigned to:</label>
                        <span>{selectedRequest.assignedTo}</span>
                      </div>
                    )}
                    {selectedRequest.estimatedCompletion && (
                      <div className="detail-item">
                        <label>Estimated Completion:</label>
                        <span>{selectedRequest.estimatedCompletion}</span>
                      </div>
                    )}
                    {selectedRequest.completedDate && (
                      <div className="detail-item">
                        <label>Completed Date:</label>
                        <span>{selectedRequest.completedDate}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Description</h3>
                  <p className="request-description-full">{selectedRequest.description}</p>
                </div>

                {selectedRequest.images && selectedRequest.images.length > 0 && (
                  <div className="detail-section">
                    <h3>Attached Images</h3>
                    <div className="request-images">
                      {selectedRequest.images.map((image, index) => (
                        <div key={index} className="image-placeholder">
                          📷 {image}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedRequest.status === 'Completed' && (
                  <div className="detail-section">
                    <h3>Completion Notes</h3>
                    <p className="completion-notes">
                      The maintenance request has been completed successfully. 
                      If you have any concerns or if the issue persists, please contact the property management office.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeModal}>Close</button>
              {selectedRequest.status === 'Pending' && (
                <button className="btn btn-warning">Cancel Request</button>
              )}
              <button className="btn btn-primary">Contact Manager</button>
            </div>
          </div>
        </div>
      )}

      {/* New Request Form Modal */}
      {showNewRequestForm && (
        <div className="modal-overlay" onClick={() => setShowNewRequestForm(false)}>
          <div className="modal-content large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>New Maintenance Request</h2>
              <button className="modal-close" onClick={() => setShowNewRequestForm(false)}>×</button>
            </div>
            <div className="modal-body">
              <form className="new-request-form">
                <div className="form-group">
                  <label htmlFor="title">Request Title *</label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Brief description of the issue"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select id="category" required>
                    <option value="">Select a category</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electrical">Electrical</option>
                    <option value="HVAC">HVAC</option>
                    <option value="General">General</option>
                    <option value="Appliance">Appliance</option>
                    <option value="Cleaning">Cleaning</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Priority *</label>
                  <select id="priority" required>
                    <option value="">Select priority</option>
                    <option value="Low">Low - Non-urgent</option>
                    <option value="Medium">Medium - Standard</option>
                    <option value="High">High - Urgent</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description *</label>
                  <textarea
                    id="description"
                    rows="4"
                    placeholder="Please provide detailed information about the issue..."
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="images">Attach Images (Optional)</label>
                  <input
                    type="file"
                    id="images"
                    multiple
                    accept="image/*"
                  />
                  <small>You can attach up to 5 images</small>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowNewRequestForm(false)}>Cancel</button>
              <button className="btn btn-primary">Submit Request</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenantMaintenance;
