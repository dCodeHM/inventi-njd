# Property Management System

A comprehensive property management system with centralized authentication for both tenants and administrators, built with React.js frontend and Express.js backend with PostgreSQL database.

## 🏢 System Overview

This system provides a centralized login solution that serves both tenant and admin users with role-based access control. The system is designed to streamline property management operations while providing tenants with easy access to their unit information and services.

## ✨ Key Features

### Authentication & Security
- **Centralized Login**: Single login system for both tenants and admins
- **Role-based Access Control**: Different dashboards and permissions based on user role
- **JWT Authentication**: Secure token-based authentication
- **Password Security**: Bcrypt hashing for secure password storage
- **Input Validation**: Comprehensive validation on both frontend and backend

### Admin Features
- Property management dashboard
- Tenant management and registration
- Maintenance request handling
- Reports and analytics
- User management

### Tenant Features
- Personal dashboard with unit information
- Maintenance request submission
- Payment status tracking
- Profile management
- Lease information access

## 🛠 Technology Stack

### Frontend
- **React.js 19** - Modern React with hooks
- **React Router** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Axios** - HTTP client for API communication
- **React Hot Toast** - User notifications
- **CSS3** - Modern styling with responsive design

### Backend
- **Express.js** - Web application framework
- **PostgreSQL** - Relational database
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Express Validator** - Input validation
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd inventi-njd
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Create PostgreSQL database
createdb property_management

# Initialize database schema
psql -U your_username -d property_management -f config/database.sql

# Start the backend server
npm run dev
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory (in a new terminal)
cd inventiv-njd

# Install dependencies
npm install

# Start the development server
npm start
```

### 4. Access the Application
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

## 🔐 Demo Credentials

### Admin User
- **Email**: `admin@property.com`
- **Password**: `admin123`

### Tenant User
- **Email**: `tenant@example.com`
- **Password**: `tenant123`

## 📁 Project Structure

```
inventi-njd/
├── backend/                 # Express.js backend
│   ├── config/
│   │   ├── database.js     # Database connection
│   │   └── database.sql    # Database schema
│   ├── middleware/
│   │   └── auth.js         # Authentication middleware
│   ├── routes/
│   │   └── auth.js         # Authentication routes
│   ├── server.js           # Main server file
│   ├── package.json
│   └── README.md
├── inventiv-njd/           # React.js frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── contexts/       # React contexts
│   │   ├── App.js          # Main app component
│   │   └── index.js        # App entry point
│   ├── package.json
│   └── README.md
└── README.md               # This file
```

## 🎯 React.js Best Practices Implemented

### Component Architecture
- **Functional Components**: All components use modern React hooks
- **Context API**: Centralized state management with AuthContext
- **Custom Hooks**: Reusable authentication logic
- **Component Composition**: Modular and reusable components

### State Management
- **useReducer**: Complex state management in AuthContext
- **useContext**: Global authentication state
- **useState**: Local component state
- **useEffect**: Side effects and lifecycle management

### Routing & Navigation
- **React Router v6**: Modern routing with hooks
- **Protected Routes**: Role-based access control
- **Programmatic Navigation**: useNavigate hook usage
- **Route Parameters**: Dynamic routing

### Form Handling
- **React Hook Form**: Efficient form management
- **Input Validation**: Client-side validation with error handling
- **Controlled Components**: Proper form state management

### Performance Optimization
- **Code Splitting**: Automatic with React Router
- **Lazy Loading**: Components loaded on demand
- **Memoization**: Optimized re-renders
- **Bundle Optimization**: Efficient build process

### Styling & UI/UX
- **CSS Modules**: Component-scoped styling
- **Responsive Design**: Mobile-first approach
- **Modern CSS**: Flexbox, Grid, and custom properties
- **Accessibility**: ARIA labels and keyboard navigation

## 🔧 Development

### Backend Development
```bash
cd backend
npm run dev  # Start with nodemon for auto-restart
```

### Frontend Development
```bash
cd inventiv-njd
npm start    # Start development server with hot reload
```

### Building for Production
```bash
# Backend
cd backend
npm start

# Frontend
cd inventiv-njd
npm run build
```

## 🗄 Database Schema

The system includes the following main entities:
- **Users**: Tenant and admin accounts
- **Properties**: Property information
- **Units**: Individual units within properties
- **Tenant Units**: Relationships between tenants and units
- **Maintenance Requests**: Request tracking system

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization
- CORS configuration
- Role-based access control
- SQL injection prevention

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## 🌙 Dark Mode Support

Automatic dark mode detection based on system preferences with manual toggle option.

## 🚀 Deployment

### Backend Deployment
1. Set up PostgreSQL database
2. Configure environment variables
3. Deploy to platforms like Heroku, AWS, or DigitalOcean
4. Set up process management with PM2

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy to platforms like Netlify, Vercel, or AWS S3
3. Configure environment variables for API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the individual README files in backend/ and inventiv-njd/ directories
- Review the troubleshooting sections
- Create an issue in the repository

## 🔮 Future Enhancements

- Real-time notifications
- File upload functionality
- Advanced reporting features
- Mobile app development
- Multi-language support
- Advanced search and filtering
- Payment integration
- Document management