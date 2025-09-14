import React, { useState } from 'react';
import { recentTenants } from '../../data/adminData';
import './AdminPages.css';

const AdminTenants = () => {
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock additional tenants data
  const allTenants = [
    ...recentTenants,
    {
      id: 6,
      name: "Jennifer Lee",
      email: "jennifer.lee@email.com",
      phone: "(555) 111-3333",
      unit: "University Heights - Unit 301",
      moveInDate: "2024-01-10",
      leaseEndDate: "2024-12-31",
      monthlyRent: 1800,
      status: "Active",
      profileImage: "👩‍🎓"
    },
    {
      id: 7,
      name: "Robert Martinez",
      email: "robert.martinez@email.com",
      phone: "(555) 222-4444",
      unit: "Parkview Estates - Unit 5",
      moveInDate: "2024-01-25",
      leaseEndDate: "2025-01-25",
      monthlyRent: 2500,
      status: "Active",
      profileImage: "👨‍💼"
    },
    {
      id: 8,
      name: "Lisa Wang",
      email: "lisa.wang@email.com",
      phone: "(555) 333-5555",
      unit: "Metro Towers - Unit 1205",
      moveInDate: "2024-02-01",
      leaseEndDate: "2025-02-01",
      monthlyRent: 2400,
      status: "Active",
      profileImage: "👩‍💼"
    }
  ];

  const filteredTenants = allTenants.filter(tenant => {
    const matchesSearch = tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tenant.unit.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || tenant.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const handleTenantClick = (tenant) => {
    setSelectedTenant(tenant);
  };

  const closeModal = () => {
    setSelectedTenant(null);
  };

  return (
    <div className="admin-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Tenants Management</h1>
          <p>Manage tenant information, leases, and communications</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary">
            ➕ Add Tenant
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="search-filter-bar">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search tenants by name, email, or unit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        <div className="filter-dropdown">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Tenants Summary */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-icon">👥</div>
          <div className="summary-content">
            <h3>{allTenants.length}</h3>
            <p>Total Tenants</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">✅</div>
          <div className="summary-content">
            <h3>{allTenants.filter(t => t.status === 'Active').length}</h3>
            <p>Active Tenants</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">💰</div>
          <div className="summary-content">
            <h3>${allTenants.reduce((sum, tenant) => sum + tenant.monthlyRent, 0).toLocaleString()}</h3>
            <p>Monthly Revenue</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">📅</div>
          <div className="summary-content">
            <h3>{allTenants.filter(t => {
              const leaseEnd = new Date(t.leaseEndDate);
              const now = new Date();
              const monthsUntilEnd = (leaseEnd.getFullYear() - now.getFullYear()) * 12 + (leaseEnd.getMonth() - now.getMonth());
              return monthsUntilEnd <= 3;
            }).length}</h3>
            <p>Leases Ending Soon</p>
          </div>
        </div>
      </div>

      {/* Tenants Table */}
      <div className="tenants-container">
        <div className="tenants-table">
          <table>
            <thead>
              <tr>
                <th>Tenant</th>
                <th>Contact</th>
                <th>Unit</th>
                <th>Lease Period</th>
                <th>Monthly Rent</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTenants.map((tenant) => (
                <tr key={tenant.id} onClick={() => handleTenantClick(tenant)} className="tenant-row">
                  <td>
                    <div className="tenant-cell">
                      <span className="tenant-avatar">{tenant.profileImage}</span>
                      <div>
                        <div className="tenant-name">{tenant.name}</div>
                        <div className="tenant-id">ID: {tenant.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="contact-info">
                      <div>{tenant.email}</div>
                      <div>{tenant.phone}</div>
                    </div>
                  </td>
                  <td>{tenant.unit}</td>
                  <td>
                    <div className="lease-info">
                      <div>Start: {tenant.moveInDate}</div>
                      <div>End: {tenant.leaseEndDate}</div>
                    </div>
                  </td>
                  <td>${tenant.monthlyRent.toLocaleString()}</td>
                  <td>
                    <span className={`status-badge ${tenant.status.toLowerCase()}`}>
                      {tenant.status}
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
      </div>

      {/* Tenant Detail Modal */}
      {selectedTenant && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedTenant.name}</h2>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="tenant-details">
                <div className="tenant-profile">
                  <div className="tenant-avatar-large">{selectedTenant.profileImage}</div>
                  <div className="tenant-info">
                    <h3>{selectedTenant.name}</h3>
                    <p>Tenant ID: {selectedTenant.id}</p>
                    <span className={`status-badge ${selectedTenant.status.toLowerCase()}`}>
                      {selectedTenant.status}
                    </span>
                  </div>
                </div>
                
                <div className="detail-section">
                  <h3>Contact Information</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <label>Email:</label>
                      <span>{selectedTenant.email}</span>
                    </div>
                    <div className="detail-item">
                      <label>Phone:</label>
                      <span>{selectedTenant.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Lease Information</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <label>Unit:</label>
                      <span>{selectedTenant.unit}</span>
                    </div>
                    <div className="detail-item">
                      <label>Move-in Date:</label>
                      <span>{selectedTenant.moveInDate}</span>
                    </div>
                    <div className="detail-item">
                      <label>Lease End Date:</label>
                      <span>{selectedTenant.leaseEndDate}</span>
                    </div>
                    <div className="detail-item">
                      <label>Monthly Rent:</label>
                      <span>${selectedTenant.monthlyRent.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeModal}>Close</button>
              <button className="btn btn-primary">Edit Tenant</button>
              <button className="btn btn-danger">Send Message</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTenants;
