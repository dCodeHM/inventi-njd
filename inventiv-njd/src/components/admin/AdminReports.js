import React, { useState } from 'react';
import { financialData, adminStats, properties } from '../../data/adminData';
import './AdminPages.css';

const AdminReports = () => {
  const [selectedReport, setSelectedReport] = useState('financial');
  const [dateRange, setDateRange] = useState('monthly');

  const reportTypes = [
    { id: 'financial', name: 'Financial Report', icon: '💰' },
    { id: 'occupancy', name: 'Occupancy Report', icon: '📊' },
    { id: 'maintenance', name: 'Maintenance Report', icon: '🔧' },
    { id: 'tenant', name: 'Tenant Report', icon: '👥' }
  ];

  const renderFinancialReport = () => (
    <div className="report-content">
      <div className="report-section">
        <h3>Monthly Revenue Trend</h3>
        <div className="chart-container">
          <div className="revenue-chart">
            {financialData.monthlyRevenue.map((item, index) => (
              <div key={index} className="chart-bar">
                <div 
                  className="bar" 
                  style={{ 
                    height: `${(item.revenue / Math.max(...financialData.monthlyRevenue.map(r => r.revenue))) * 100}%` 
                  }}
                ></div>
                <div className="bar-label">{item.month}</div>
                <div className="bar-value">${(item.revenue / 1000).toFixed(0)}k</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="report-section">
        <h3>Expense Breakdown</h3>
        <div className="expense-breakdown">
          {financialData.expenses.map((expense, index) => (
            <div key={index} className="expense-item">
              <div className="expense-header">
                <span className="expense-category">{expense.category}</span>
                <span className="expense-amount">${expense.amount.toLocaleString()}</span>
              </div>
              <div className="expense-bar">
                <div 
                  className="expense-fill" 
                  style={{ width: `${expense.percentage}%` }}
                ></div>
              </div>
              <div className="expense-percentage">{expense.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOccupancyReport = () => (
    <div className="report-content">
      <div className="report-section">
        <h3>Property Occupancy Rates</h3>
        <div className="occupancy-grid">
          {properties.map((property) => (
            <div key={property.id} className="occupancy-card">
              <div className="property-header">
                <span className="property-icon">{property.image}</span>
                <div className="property-info">
                  <h4>{property.name}</h4>
                  <p>{property.type}</p>
                </div>
              </div>
              <div className="occupancy-stats">
                <div className="occupancy-rate">
                  <span className="rate-value">{property.occupancyRate}%</span>
                  <span className="rate-label">Occupancy</span>
                </div>
                <div className="unit-breakdown">
                  <div className="occupied">
                    <span className="count">{property.occupiedUnits}</span>
                    <span className="label">Occupied</span>
                  </div>
                  <div className="vacant">
                    <span className="count">{property.totalUnits - property.occupiedUnits}</span>
                    <span className="label">Vacant</span>
                  </div>
                </div>
              </div>
              <div className="occupancy-bar">
                <div 
                  className="occupancy-fill" 
                  style={{ width: `${property.occupancyRate}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMaintenanceReport = () => (
    <div className="report-content">
      <div className="report-section">
        <h3>Maintenance Summary</h3>
        <div className="maintenance-summary">
          <div className="summary-item">
            <div className="summary-icon">🔧</div>
            <div className="summary-info">
              <h4>Total Requests</h4>
              <p>{adminStats.maintenanceRequests}</p>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-icon">⏳</div>
            <div className="summary-info">
              <h4>Pending</h4>
              <p>{adminStats.pendingMaintenance}</p>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-icon">✅</div>
            <div className="summary-info">
              <h4>Completed</h4>
              <p>{adminStats.completedMaintenance}</p>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-icon">💰</div>
            <div className="summary-info">
              <h4>Avg. Cost</h4>
              <p>$150</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTenantReport = () => (
    <div className="report-content">
      <div className="report-section">
        <h3>Tenant Statistics</h3>
        <div className="tenant-stats">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>{adminStats.totalTenants}</h3>
              <p>Total Tenants</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <h3>{adminStats.newTenantsThisMonth}</h3>
              <p>New This Month</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>{adminStats.occupancyRate}%</h3>
              <p>Occupancy Rate</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <h3>${adminStats.averageRent}</h3>
              <p>Average Rent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReport = () => {
    switch (selectedReport) {
      case 'financial':
        return renderFinancialReport();
      case 'occupancy':
        return renderOccupancyReport();
      case 'maintenance':
        return renderMaintenanceReport();
      case 'tenant':
        return renderTenantReport();
      default:
        return renderFinancialReport();
    }
  };

  return (
    <div className="admin-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Reports & Analytics</h1>
          <p>Comprehensive reports and analytics for property management</p>
        </div>
        <div className="header-actions">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="date-range-select"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button className="btn btn-primary">
            📊 Export Report
          </button>
        </div>
      </div>

      {/* Report Type Selector */}
      <div className="report-selector">
        {reportTypes.map((report) => (
          <button
            key={report.id}
            className={`report-tab ${selectedReport === report.id ? 'active' : ''}`}
            onClick={() => setSelectedReport(report.id)}
          >
            <span className="report-icon">{report.icon}</span>
            <span className="report-name">{report.name}</span>
          </button>
        ))}
      </div>

      {/* Report Content */}
      <div className="report-container">
        {renderReport()}
      </div>
    </div>
  );
};

export default AdminReports;
