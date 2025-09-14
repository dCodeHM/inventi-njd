import React, { useState } from 'react';
import { paymentHistory, currentPayment } from '../../data/tenantData';
import './TenantPages.css';

const TenantPayments = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentClick = (payment) => {
    setSelectedPayment(payment);
  };

  const closeModal = () => {
    setSelectedPayment(null);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'paid': return '#28a745';
      case 'pending': return '#ffc107';
      case 'upcoming': return '#495057';
      case 'overdue': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'paid': return '✅';
      case 'pending': return '⏳';
      case 'upcoming': return '📅';
      case 'overdue': return '⚠️';
      default: return '❓';
    }
  };

  return (
    <div className="tenant-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Payment History & Management</h1>
          <p>Track your rent payments and manage upcoming payments</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary">
            💳 Make Payment
          </button>
        </div>
      </div>

      {/* Current Payment Status */}
      <div className="current-payment-card">
        <div className="payment-header">
          <div className="payment-info">
            <h2>Current Payment Status</h2>
            <p className="payment-month">{currentPayment.month}</p>
          </div>
          <div className="payment-status">
            <span 
              className="status-badge"
              style={{ backgroundColor: getStatusColor(currentPayment.status) }}
            >
              {getStatusIcon(currentPayment.status)} {currentPayment.status}
            </span>
          </div>
        </div>
        <div className="payment-details">
          <div className="payment-amount">
            <span className="amount-label">Amount Due:</span>
            <span className="amount-value">${currentPayment.amount.toLocaleString()}</span>
          </div>
          <div className="payment-due">
            <span className="due-label">Due Date:</span>
            <span className="due-value">{currentPayment.dueDate}</span>
          </div>
          <div className="payment-countdown">
            <span className="countdown-label">Days Until Due:</span>
            <span className={`countdown-value ${currentPayment.daysUntilDue <= 7 ? 'urgent' : ''}`}>
              {currentPayment.daysUntilDue} days
            </span>
          </div>
          {currentPayment.lateFee > 0 && (
            <div className="late-fee">
              <span className="fee-label">Late Fee:</span>
              <span className="fee-value">${currentPayment.lateFee}</span>
            </div>
          )}
        </div>
        <div className="payment-actions">
          <button className="btn btn-primary btn-large">
            💳 Pay Now - ${currentPayment.totalAmount.toLocaleString()}
          </button>
          <button className="btn btn-secondary">
            📅 Schedule Payment
          </button>
        </div>
      </div>

      {/* Payment History */}
      <div className="payment-history">
        <div className="section-header">
          <h2>Payment History</h2>
          <div className="history-summary">
            <span className="summary-item">
              <span className="summary-label">Total Paid:</span>
              <span className="summary-value">
                ${paymentHistory.filter(p => p.status === 'Paid').reduce((sum, p) => sum + p.amount, 0).toLocaleString()}
              </span>
            </span>
            <span className="summary-item">
              <span className="summary-label">On-Time Payments:</span>
              <span className="summary-value">
                {paymentHistory.filter(p => p.status === 'Paid').length}/{paymentHistory.length}
              </span>
            </span>
          </div>
        </div>

        <div className="payments-table">
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Paid Date</th>
                <th>Status</th>
                <th>Method</th>
                <th>Reference</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment) => (
                <tr 
                  key={payment.id} 
                  className="payment-row"
                  onClick={() => handlePaymentClick(payment)}
                >
                  <td>
                    <div className="payment-month-cell">
                      <span className="month-name">{payment.month}</span>
                    </div>
                  </td>
                  <td>
                    <span className="payment-amount">${payment.amount.toLocaleString()}</span>
                  </td>
                  <td>{payment.dueDate}</td>
                  <td>{payment.paidDate || '-'}</td>
                  <td>
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(payment.status) }}
                    >
                      {getStatusIcon(payment.status)} {payment.status}
                    </span>
                  </td>
                  <td>{payment.method || '-'}</td>
                  <td>{payment.reference || '-'}</td>
                  <td>
                    <div className="payment-actions-cell">
                      {payment.status === 'Paid' ? (
                        <button className="btn btn-sm btn-secondary">Receipt</button>
                      ) : (
                        <button className="btn btn-sm btn-primary">Pay Now</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="payment-methods">
        <div className="section-header">
          <h2>Payment Methods</h2>
          <button className="btn btn-secondary">
            ➕ Add Payment Method
          </button>
        </div>
        <div className="methods-grid">
          <div className="method-card primary">
            <div className="method-header">
              <span className="method-icon">💳</span>
              <div className="method-info">
                <h3>Bank Account</h3>
                <p>****1234 (Primary)</p>
              </div>
            </div>
            <div className="method-actions">
              <button className="btn btn-sm btn-secondary">Edit</button>
              <button className="btn btn-sm btn-danger">Remove</button>
            </div>
          </div>
          <div className="method-card">
            <div className="method-header">
              <span className="method-icon">💳</span>
              <div className="method-info">
                <h3>Credit Card</h3>
                <p>****5678</p>
              </div>
            </div>
            <div className="method-actions">
              <button className="btn btn-sm btn-secondary">Edit</button>
              <button className="btn btn-sm btn-danger">Remove</button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Detail Modal */}
      {selectedPayment && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Payment Details - {selectedPayment.month}</h2>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="payment-details-modal">
                <div className="detail-section">
                  <h3>Payment Information</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <label>Month:</label>
                      <span>{selectedPayment.month}</span>
                    </div>
                    <div className="detail-item">
                      <label>Amount:</label>
                      <span>${selectedPayment.amount.toLocaleString()}</span>
                    </div>
                    <div className="detail-item">
                      <label>Due Date:</label>
                      <span>{selectedPayment.dueDate}</span>
                    </div>
                    <div className="detail-item">
                      <label>Status:</label>
                      <span 
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(selectedPayment.status) }}
                      >
                        {getStatusIcon(selectedPayment.status)} {selectedPayment.status}
                      </span>
                    </div>
                    {selectedPayment.paidDate && (
                      <div className="detail-item">
                        <label>Paid Date:</label>
                        <span>{selectedPayment.paidDate}</span>
                      </div>
                    )}
                    {selectedPayment.method && (
                      <div className="detail-item">
                        <label>Payment Method:</label>
                        <span>{selectedPayment.method}</span>
                      </div>
                    )}
                    {selectedPayment.reference && (
                      <div className="detail-item">
                        <label>Reference:</label>
                        <span>{selectedPayment.reference}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeModal}>Close</button>
              {selectedPayment.status === 'Paid' ? (
                <button className="btn btn-primary">Download Receipt</button>
              ) : (
                <button className="btn btn-primary">Make Payment</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenantPayments;
