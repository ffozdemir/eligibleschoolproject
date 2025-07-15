# Eligible School Project

A comprehensive school management system built with Next.js 15, featuring role-based authentication, student management, program scheduling, and administrative tools.

## 🚀 Features

### Authentication & Authorization
- **Multi-role Authentication**: Admin, Teacher, Student, and Parent roles
- **JWT Token Management**: Secure token-based authentication
- **Role-based Access Control**: Protected routes based on user permissions
- **Session Management**: Persistent login sessions

### Administrative Features
- **Admin Management**: Create, edit, and manage admin accounts
- **User Management**: Comprehensive user administration

### Academic Management
- **Program Scheduling**: Create and manage lesson programs
- **Student Management**: Student enrollment and profile management
- **Meeting Coordination**: Schedule and manage student-teacher meetings
- **Lesson Management**: Course and curriculum administration

### User Interface
- **Responsive Design**: Mobile-first responsive interface
- **Modern UI Components**: Bootstrap and PrimeReact integration
- **Loading States**: Skeleton loaders and loading indicators
- **Form Validation**: Client and server-side validation

## 🛠️ Technology Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React features with hooks
- **JavaScript**: Modern JavaScript (ES6+)
- **SCSS**: Advanced styling with mixins and variables

### UI Libraries
- **React Bootstrap**: Responsive UI components
- **PrimeReact**: Advanced data tables and form components
- **React Hook Form**: Form state management
- **SweetAlert2**: Beautiful alert dialogs

### Authentication
- **NextAuth.js**: Complete authentication solution
- **JWT**: Secure token management
- **Credential Provider**: Custom login implementation

### Development Tools
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Turbopack**: Fast bundling and development

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd eligibleschoolproject
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Configuration**
Create a `.env.local` file in the root directory:
```env
AUTH_SECRET=your-secret-key
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── actions/               # Server actions
│   ├── admin-action.js
│   ├── auth-action.js
│   ├── meet-action.js
│   └── program-actions.js
├── app/                   # Next.js App Router
│   ├── dashboard/         # Protected dashboard routes
│   │   ├── admin/
│   │   ├── meet/
│   │   └── program/
│   └── login/             # Authentication pages
├── components/            # React components
│   ├── common/            # Shared components
│   │   ├── form-fields/   # Form input components
│   │   └── loaders/       # Loading components
│   └── dashboard/         # Dashboard-specific components
├── helpers/               # Utility functions
│   ├── config/            # App configuration
│   ├── schemas/           # Validation schemas
│   └── auth-helper.js     # Authentication utilities
├── services/              # API service layer
│   ├── admin-service.js
│   ├── auth-service.js
│   └── program-service.js
└── styles/                # SCSS styles
    ├── _mixins.scss
    └── _variables.scss
```

## 🔐 Authentication Flow

1. **Login Process**
   - Users authenticate via `/login` page
   - Credentials validated against backend API
   - JWT token stored in session
   - Role-based redirection to appropriate dashboard

2. **Protected Routes**
   - All `/dashboard/*` routes require authentication
   - Role-based access control
   - Automatic token validation
   - Unauthorized access redirection

## 🎯 User Roles & Permissions

### Admin
- Full system access
- User management
- System configuration
- All CRUD operations

### Teacher
- Student management
- Program scheduling
- Meeting coordination
- Grade management

### Student
- View schedules
- Access meetings
- View grades
- Profile management

## 📊 API Integration

The application integrates with a backend API for:
- User authentication and authorization
- CRUD operations for all entities
- File uploads and management
- Real-time data synchronization

### API Services
- **AuthService**: Authentication and session management
- **AdminService**: Administrative operations
- **StudentService**: Student management
- **ProgramService**: Academic program management
- **MeetService**: Meeting coordination

## 🎨 Styling & Theming

- **SCSS Architecture**: Modular styling with mixins and variables
- **Responsive Design**: Mobile-first approach
- **Component Styling**: Scoped styles for components
- **Theme Customization**: Configurable color schemes and layouts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request