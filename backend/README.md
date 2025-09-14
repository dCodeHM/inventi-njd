# Property Management Backend

This is the backend API for the Property Management System, built with Express.js and PostgreSQL.

## Features

- **Centralized Authentication**: JWT-based authentication for both tenants and admins
- **Role-based Access Control**: Separate permissions for admin and tenant users
- **PostgreSQL Database**: Robust data storage with proper relationships
- **Password Security**: Bcrypt hashing for secure password storage
- **Input Validation**: Express-validator for request validation
- **CORS Support**: Configured for frontend integration

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Set up PostgreSQL database:**
   ```sql
   CREATE DATABASE property_management;
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your database credentials:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=property_management
   DB_USER=your_username
   DB_PASSWORD=your_password
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRES_IN=24h
   PORT=5000
   NODE_ENV=development
   ```

4. **Initialize database schema:**
   ```bash
   psql -U your_username -d property_management -f config/database.sql
   ```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in your .env file).

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - Register new user (admin only)
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/change-password` - Change password

### Health Check
- `GET /api/health` - Server health status

## Demo Credentials

The database includes sample users for testing:

**Admin User:**
- Email: `admin@property.com`
- Password: `admin123`

**Tenant User:**
- Email: `tenant@example.com`
- Password: `tenant123`

## Database Schema

The system includes the following main tables:
- `users` - User accounts (tenants and admins)
- `properties` - Property information
- `units` - Individual units within properties
- `tenant_units` - Tenant-unit relationships
- `maintenance_requests` - Maintenance request tracking

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization
- CORS configuration
- Role-based access control
- SQL injection prevention with parameterized queries

## Development

### Project Structure
```
backend/
├── config/
│   ├── database.js          # Database connection
│   └── database.sql         # Database schema
├── middleware/
│   └── auth.js             # Authentication middleware
├── routes/
│   └── auth.js             # Authentication routes
├── server.js               # Main server file
├── package.json
└── README.md
```

### Adding New Routes

1. Create route file in `routes/` directory
2. Import and use in `server.js`
3. Add appropriate middleware for authentication/authorization

### Database Migrations

For production deployments, consider using a migration tool like `knex.js` or `sequelize` for better database version control.

## Troubleshooting

### Common Issues

1. **Database Connection Error:**
   - Verify PostgreSQL is running
   - Check database credentials in `.env`
   - Ensure database exists

2. **JWT Token Issues:**
   - Verify `JWT_SECRET` is set in `.env`
   - Check token expiration settings

3. **CORS Errors:**
   - Update CORS configuration in `server.js`
   - Ensure frontend URL is whitelisted

## Production Deployment

1. Set `NODE_ENV=production` in environment
2. Use a process manager like PM2
3. Set up reverse proxy with Nginx
4. Configure SSL certificates
5. Set up database backups
6. Monitor logs and performance

## Contributing

1. Follow existing code style
2. Add proper error handling
3. Include input validation
4. Write tests for new features
5. Update documentation
