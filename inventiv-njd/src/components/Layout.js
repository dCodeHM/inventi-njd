import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children, title }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getDashboardPath = () => {
    return user?.role === 'admin' ? '/admin/dashboard' : '/tenant/dashboard';
  };

  const getNavigationItems = () => {
    if (user?.role === 'admin') {
      return [
        { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
        { path: '/admin/properties', label: 'Properties', icon: '🏢' },
        { path: '/admin/tenants', label: 'Tenants', icon: '👥' },
        { path: '/admin/maintenance', label: 'Maintenance', icon: '🔧' },
        { path: '/admin/reports', label: 'Reports', icon: '📈' }
      ];
    } else {
      return [
        { path: '/tenant/dashboard', label: 'Dashboard', icon: '🏠' },
        { path: '/tenant/unit', label: 'My Unit', icon: '🏡' },
        { path: '/tenant/payments', label: 'Payments', icon: '💳' },
        { path: '/tenant/maintenance', label: 'Maintenance', icon: '🔧' },
        { path: '/tenant/profile', label: 'Profile', icon: '👤' }
      ];
    }
  };

  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <button 
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <h1 className="page-title">{title}</h1>
          </div>
          
          <div className="header-right">
            <div className="user-info">
              <span className="user-name">
                {user?.first_name} {user?.last_name}
              </span>
              <span className="user-role">
                {user?.role === 'admin' ? 'Administrator' : 'Tenant'}
              </span>
            </div>
            
            <div className="user-actions">
              <button 
                className="logout-button"
                onClick={handleLogout}
                title="Logout"
              >
                🚪 Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="layout-body">
        {/* Sidebar */}
        <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <nav className="sidebar-nav">
            <ul className="nav-list">
              {getNavigationItems().map((item) => (
                <li key={item.path} className="nav-item">
                  <button
                    className={`nav-link ${window.location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => {
                      navigate(item.path);
                      setIsMenuOpen(false);
                    }}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="content-wrapper">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Layout;
