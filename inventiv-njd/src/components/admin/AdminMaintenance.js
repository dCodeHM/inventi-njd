import React, { useState } from 'react';
import { maintenanceRequests } from '../../data/adminData';
import './AdminPages.css';

const AdminMaintenance = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  const filteredRequests = maintenanceRequests.filter(request => {
    const matchesStatus = filterStatus === 'all' || request.status.toLowerCase() === filterStatus.toLowerCase();
    const matchesPriority = filterPriority === 'all' || request.priority.toLowerCase() === filterPriority.toLowerCase();
    return matchesStatus && matchesPriority;
  });

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
  };

  const closeModal = () => {
    setSelectedRequest(null);
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return '#dc3545';
      case 'medium': return '#ffc107';
      case 'low': return '#28a745';
      default: return '#6c757d';
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending': return '#ffc107';
      case 'in progress': return '#495057';
      case 'completed': return '#28a745';
      case 'cancelled': return '#dc3545';
      default: return '#6c757d';
    }
  };

  return (
    <div className="admin-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Maintenance Management</h1>
          <p>Track and manage maintenance requests across all properties</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary">
            ➕ New Request
          </button>
        </div>
      </div>

      {/* Filters */}
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
        <div className="filter-group">
          <label>Priority:</label>
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
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
      <div className="maintenance-container">
        <div className="maintenance-requests">
          {filteredRequests.map((request) => (
            <div key={request.id} className="maintenance-card" onClick={() => handleRequestClick(request)}>
              <div className="request-header">
                <div className="request-info">
                  <h3 className="request-title">{request.title}</h3>
                  <p className="request-tenant">{request.tenantName} - {request.unit}</p>
                </div>
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
              <div className="request-content">
                <p className="request-description">{request.description}</p>
                <div className="request-meta">
                  <div className="meta-item">
                    <span className="meta-label">Submitted:</span>
                    <span className="meta-value">{request.submittedDate}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Category:</span>
                    <span className="meta-value">{request.category}</span>
                  </div>
                  {request.assignedTo && (
                    <div className="meta-item">
                      <span className="meta-label">Assigned to:</span>
                      <span className="meta-value">{request.assignedTo}</span>
                    </div>
                  )}
                  {request.estimatedCost && (
                    <div className="meta-item">
                      <span className="meta-label">Est. Cost:</span>
                      <span className="meta-value">${request.estimatedCost}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="request-actions">
                <button className="btn btn-sm btn-secondary">Edit</button>
                <button className="btn btn-sm btn-primary">Update Status</button>
              </div>
            </div>
          ))}
        </div>
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
                      <label>Tenant:</label>
                      <span>{selectedRequest.tenantName}</span>
                    </div>
                    <div className="detail-item">
                      <label>Unit:</label>
                      <span>{selectedRequest.unit}</span>
                    </div>
                    <div className="detail-item">
                      <label>Category:</label>
                      <span>{selectedRequest.category}</span>
                    </div>
                    <div className="detail-item">
                      <label>Submitted Date:</label>
                      <span>{selectedRequest.submittedDate}</span>
                    </div>
                    <div className="detail-item">
                      <label>Status:</label>
                      <span 
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(selectedRequest.status) }}
                      >
                        {selectedRequest.status}
                      </span>
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
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Description</h3>
                  <p className="request-description-full">{selectedRequest.description}</p>
                </div>

                <div className="detail-section">
                  <h3>Assignment & Cost</h3>
                  <div className="detail-grid">
                    {selectedRequest.assignedTo && (
                      <div className="detail-item">
                        <label>Assigned to:</label>
                        <span>{selectedRequest.assignedTo}</span>
                      </div>
                    )}
                    {selectedRequest.estimatedCost && (
                      <div className="detail-item">
                        <label>Estimated Cost:</label>
                        <span>${selectedRequest.estimatedCost}</span>
                      </div>
                    )}
                  </div>
                </div>

                {selectedRequest.images && selectedRequest.images.length > 0 && (
                  <div className="detail-section">
                    <h3>Images</h3>
                    <div className="request-images">
                      {selectedRequest.images.map((image, index) => (
                        <div key={index} className="image-placeholder">
                          📷 {image}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeModal}>Close</button>
              <button className="btn btn-warning">Update Status</button>
              <button className="btn btn-primary">Assign Contractor</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMaintenance;
