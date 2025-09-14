# Property Management System - Frontend

A modern React.js frontend for the Property Management System with centralized authentication for both tenants and administrators.

## Features

- **Centralized Login**: Single login system for both tenants and admins
- **Role-based Dashboards**: Different interfaces based on user role
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Real-time Notifications**: Toast notifications for user feedback
- **Protected Routes**: Secure navigation based on authentication status
- **Dark Mode Support**: Automatic dark mode detection

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see backend README)

## Installation

1. **Install dependencies:**
   ```bash
   cd inventiv-njd
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

The application will open in your browser at `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── Login.js              # Centralized login component
│   ├── Login.css             # Login component styles
│   ├── Layout.js             # Main layout with navigation
│   ├── Layout.css            # Layout styles
│   ├── ProtectedRoute.js     # Route protection component
│   ├── AdminDashboard.js     # Admin dashboard
│   ├── TenantDashboard.js    # Tenant dashboard
│   └── Dashboard.css         # Dashboard styles
├── contexts/
│   └── AuthContext.js        # Authentication context
├── App.js                    # Main app component with routing
├── App.css                   # Global styles
└── index.js                  # App entry point
```

## User Roles

### Admin Features
- Property management
- Tenant management
- Maintenance request handling
- Reports and analytics
- User registration (admin only)

### Tenant Features
- Personal dashboard
- Unit information
- Maintenance requests
- Payment status
- Profile management

## Demo Credentials

**Admin User:**
- Email: `admin@property.com`
- Password: `admin123`

**Tenant User:**
- Email: `tenant@example.com`
- Password: `tenant123`

## Key Components

### Authentication Context (`AuthContext.js`)
- Manages user authentication state
- Handles login/logout functionality
- Provides user information throughout the app
- Manages JWT token storage

### Login Component (`Login.js`)
- Centralized login form for both roles
- Form validation with react-hook-form
- Error handling and user feedback
- Demo credentials display

### Protected Routes (`ProtectedRoute.js`)
- Ensures only authenticated users can access protected pages
- Role-based access control
- Automatic redirection based on user role

### Layout Component (`Layout.js`)
- Responsive navigation sidebar
- User information display
- Logout functionality
- Mobile-friendly menu

### Dashboards
- **AdminDashboard**: Property management overview with stats and quick actions
- **TenantDashboard**: Personal unit information and maintenance requests

## Styling

The application uses:
- **CSS Modules**: Component-specific styling
- **Responsive Design**: Mobile-first approach
- **Modern CSS**: Flexbox, Grid, and CSS custom properties
- **Dark Mode**: Automatic system preference detection
- **Smooth Animations**: CSS transitions and transforms

## API Integration

The frontend communicates with the backend API through:
- **Axios**: HTTP client for API requests
- **JWT Tokens**: Stored in localStorage for authentication
- **Error Handling**: Comprehensive error handling with user feedback

## Development

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

### Adding New Features

1. **New Pages:**
   - Create component in `src/components/`
   - Add route in `App.js`
   - Include in navigation if needed

2. **New API Endpoints:**
   - Add API calls in `AuthContext.js` or create new context
   - Update error handling
   - Add loading states

3. **Styling:**
   - Follow existing CSS patterns
   - Use CSS custom properties for consistency
   - Ensure responsive design

## Production Build

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Serve the build folder:**
   - Use a web server like Nginx or Apache
   - Or deploy to platforms like Netlify, Vercel, or AWS S3

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Code Splitting**: Automatic code splitting with React Router
- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Proper image optimization
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## Security

- **JWT Token Management**: Secure token storage and handling
- **Input Validation**: Client-side validation with server-side verification
- **XSS Protection**: React's built-in XSS protection
- **HTTPS**: Ensure HTTPS in production

## Contributing

1. Follow React best practices
2. Use functional components with hooks
3. Maintain consistent code style
4. Add proper error handling
5. Include responsive design
6. Test on multiple devices

## Troubleshooting

### Common Issues

1. **API Connection Errors:**
   - Verify backend server is running
   - Check API base URL configuration
   - Ensure CORS is properly configured

2. **Authentication Issues:**
   - Check JWT token in localStorage
   - Verify token expiration
   - Clear browser cache and cookies

3. **Styling Issues:**
   - Check CSS import paths
   - Verify responsive breakpoints
   - Test in different browsers

## Future Enhancements

- Real-time notifications
- File upload functionality
- Advanced reporting features
- Mobile app development
- Multi-language support
- Advanced search and filtering