-- Property Management Database Schema
-- This file contains the SQL commands to create the database and tables

-- Create database (run this command separately)
-- CREATE DATABASE property_management;

-- Connect to the property_management database and create tables

-- Users table for both tenants and admins
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('tenant', 'admin')),
    phone VARCHAR(20),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Properties table
CREATE TABLE IF NOT EXISTS properties (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    property_type VARCHAR(50) NOT NULL,
    total_units INTEGER NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Units table
CREATE TABLE IF NOT EXISTS units (
    id SERIAL PRIMARY KEY,
    property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
    unit_number VARCHAR(20) NOT NULL,
    floor INTEGER,
    bedrooms INTEGER NOT NULL,
    bathrooms INTEGER NOT NULL,
    square_feet INTEGER,
    rent_amount DECIMAL(10,2) NOT NULL,
    is_occupied BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(property_id, unit_number)
);

-- Tenant-Unit relationships
CREATE TABLE IF NOT EXISTS tenant_units (
    id SERIAL PRIMARY KEY,
    tenant_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    unit_id INTEGER REFERENCES units(id) ON DELETE CASCADE,
    lease_start_date DATE NOT NULL,
    lease_end_date DATE,
    monthly_rent DECIMAL(10,2) NOT NULL,
    security_deposit DECIMAL(10,2),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Maintenance requests
CREATE TABLE IF NOT EXISTS maintenance_requests (
    id SERIAL PRIMARY KEY,
    tenant_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    unit_id INTEGER REFERENCES units(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled')),
    assigned_to INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample admin user (password: admin123)
INSERT INTO users (email, password_hash, first_name, last_name, role, phone) 
VALUES (
    'admin@property.com', 
    '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 
    'Admin', 
    'User', 
    'admin', 
    '+1234567890'
) ON CONFLICT (email) DO NOTHING;

-- Insert sample tenant user (password: tenant123)
INSERT INTO users (email, password_hash, first_name, last_name, role, phone) 
VALUES (
    'tenant@example.com', 
    '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 
    'John', 
    'Doe', 
    'tenant', 
    '+1234567891'
) ON CONFLICT (email) DO NOTHING;

-- Insert sample property
INSERT INTO properties (name, address, property_type, total_units, description) 
VALUES (
    'Sunset Apartments',
    '123 Main Street, City, State 12345',
    'apartment',
    24,
    'Modern apartment complex with amenities'
) ON CONFLICT DO NOTHING;

-- Insert sample units
INSERT INTO units (property_id, unit_number, floor, bedrooms, bathrooms, square_feet, rent_amount, is_occupied) 
VALUES 
    (1, '101', 1, 1, 1, 750, 1200.00, true),
    (1, '102', 1, 2, 1, 950, 1500.00, false),
    (1, '201', 2, 1, 1, 750, 1200.00, false),
    (1, '202', 2, 2, 2, 1100, 1800.00, false)
ON CONFLICT (property_id, unit_number) DO NOTHING;

-- Assign tenant to unit
INSERT INTO tenant_units (tenant_id, unit_id, lease_start_date, lease_end_date, monthly_rent, security_deposit) 
VALUES (
    2, -- tenant_id (John Doe)
    1, -- unit_id (unit 101)
    '2024-01-01',
    '2024-12-31',
    1200.00,
    1200.00
) ON CONFLICT DO NOTHING;
