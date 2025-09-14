// Comprehensive sample data for Admin Dashboard

export const adminStats = {
  totalProperties: 8,
  totalUnits: 156,
  occupiedUnits: 142,
  vacantUnits: 14,
  totalTenants: 142,
  newTenantsThisMonth: 8,
  maintenanceRequests: 23,
  pendingMaintenance: 7,
  completedMaintenance: 16,
  monthlyRevenue: 284000,
  occupancyRate: 91.0,
  averageRent: 2000
};

export const properties = [
  {
    id: 1,
    name: "Sunset Apartments",
    address: "123 Main Street, Downtown, CA 90210",
    type: "Apartment Complex",
    totalUnits: 24,
    occupiedUnits: 22,
    monthlyRevenue: 52800,
    occupancyRate: 91.7,
    image: "🏢",
    status: "Active",
    manager: "Sarah Johnson",
    phone: "(555) 123-4567"
  },
  {
    id: 2,
    name: "Garden View Condos",
    address: "456 Oak Avenue, Midtown, CA 90211",
    type: "Condominium",
    totalUnits: 18,
    occupiedUnits: 18,
    monthlyRevenue: 45000,
    occupancyRate: 100.0,
    image: "🏘️",
    status: "Active",
    manager: "Michael Chen",
    phone: "(555) 234-5678"
  },
  {
    id: 3,
    name: "Riverside Plaza",
    address: "789 River Road, Riverside, CA 90212",
    type: "Mixed Use",
    totalUnits: 32,
    occupiedUnits: 28,
    monthlyRevenue: 67200,
    occupancyRate: 87.5,
    image: "🏬",
    status: "Active",
    manager: "Emily Rodriguez",
    phone: "(555) 345-6789"
  },
  {
    id: 4,
    name: "Hillside Manor",
    address: "321 Hill Street, Uptown, CA 90213",
    type: "Luxury Apartments",
    totalUnits: 16,
    occupiedUnits: 15,
    monthlyRevenue: 48000,
    occupancyRate: 93.8,
    image: "🏰",
    status: "Active",
    manager: "David Thompson",
    phone: "(555) 456-7890"
  },
  {
    id: 5,
    name: "Metro Towers",
    address: "654 Metro Boulevard, Downtown, CA 90214",
    type: "High-Rise",
    totalUnits: 48,
    occupiedUnits: 45,
    monthlyRevenue: 108000,
    occupancyRate: 93.8,
    image: "🏗️",
    status: "Active",
    manager: "Lisa Wang",
    phone: "(555) 567-8901"
  },
  {
    id: 6,
    name: "Parkview Estates",
    address: "987 Park Lane, Suburbia, CA 90215",
    type: "Townhouses",
    totalUnits: 12,
    occupiedUnits: 10,
    monthlyRevenue: 30000,
    occupancyRate: 83.3,
    image: "🏡",
    status: "Active",
    manager: "Robert Martinez",
    phone: "(555) 678-9012"
  },
  {
    id: 7,
    name: "University Heights",
    address: "147 College Drive, University District, CA 90216",
    type: "Student Housing",
    totalUnits: 36,
    occupiedUnits: 34,
    monthlyRevenue: 61200,
    occupancyRate: 94.4,
    image: "🎓",
    status: "Active",
    manager: "Jennifer Lee",
    phone: "(555) 789-0123"
  },
  {
    id: 8,
    name: "Executive Suites",
    address: "258 Business Plaza, Financial District, CA 90217",
    type: "Corporate Housing",
    totalUnits: 20,
    occupiedUnits: 18,
    monthlyRevenue: 72000,
    occupancyRate: 90.0,
    image: "💼",
    status: "Active",
    manager: "Christopher Brown",
    phone: "(555) 890-1234"
  }
];

export const recentTenants = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "(555) 111-2222",
    unit: "Sunset Apartments - Unit 101",
    moveInDate: "2024-01-15",
    leaseEndDate: "2024-12-31",
    monthlyRent: 2200,
    status: "Active",
    profileImage: "👨‍💼"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "(555) 333-4444",
    unit: "Garden View Condos - Unit 205",
    moveInDate: "2024-01-20",
    leaseEndDate: "2025-01-20",
    monthlyRent: 2500,
    status: "Active",
    profileImage: "👩‍💼"
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "(555) 555-6666",
    unit: "Riverside Plaza - Unit 312",
    moveInDate: "2024-02-01",
    leaseEndDate: "2025-02-01",
    monthlyRent: 2100,
    status: "Active",
    profileImage: "👨‍🎓"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    phone: "(555) 777-8888",
    unit: "Hillside Manor - Unit 401",
    moveInDate: "2024-02-10",
    leaseEndDate: "2025-02-10",
    monthlyRent: 3000,
    status: "Active",
    profileImage: "👩‍🎨"
  },
  {
    id: 5,
    name: "David Thompson",
    email: "david.thompson@email.com",
    phone: "(555) 999-0000",
    unit: "Metro Towers - Unit 1502",
    moveInDate: "2024-02-15",
    leaseEndDate: "2025-02-15",
    monthlyRent: 2250,
    status: "Active",
    profileImage: "👨‍🔬"
  }
];

export const maintenanceRequests = [
  {
    id: 1,
    tenantName: "John Smith",
    unit: "Sunset Apartments - Unit 101",
    title: "Kitchen Faucet Leak",
    description: "Small leak under the kitchen sink that needs repair",
    priority: "Medium",
    status: "In Progress",
    submittedDate: "2024-01-20",
    assignedTo: "Mike's Plumbing",
    estimatedCost: 150,
    category: "Plumbing"
  },
  {
    id: 2,
    tenantName: "Sarah Johnson",
    unit: "Garden View Condos - Unit 205",
    title: "Heating System Not Working",
    description: "Heater stopped working in living room, no heat coming through",
    priority: "High",
    status: "Completed",
    submittedDate: "2024-01-18",
    assignedTo: "HVAC Solutions",
    estimatedCost: 300,
    category: "HVAC"
  },
  {
    id: 3,
    tenantName: "Michael Chen",
    unit: "Riverside Plaza - Unit 312",
    title: "Broken Window Lock",
    description: "Window lock mechanism is broken and window won't stay closed",
    priority: "Low",
    status: "Pending",
    submittedDate: "2024-01-22",
    assignedTo: "Quick Fix Repairs",
    estimatedCost: 75,
    category: "General"
  },
  {
    id: 4,
    tenantName: "Emily Rodriguez",
    unit: "Hillside Manor - Unit 401",
    title: "Electrical Outlet Not Working",
    description: "Kitchen outlet stopped working, no power to appliances",
    priority: "High",
    status: "In Progress",
    submittedDate: "2024-01-21",
    assignedTo: "Electric Pro",
    estimatedCost: 200,
    category: "Electrical"
  },
  {
    id: 5,
    tenantName: "David Thompson",
    unit: "Metro Towers - Unit 1502",
    title: "Carpet Cleaning Request",
    description: "Request for professional carpet cleaning service",
    priority: "Low",
    status: "Completed",
    submittedDate: "2024-01-19",
    assignedTo: "Clean Pro Services",
    estimatedCost: 120,
    category: "Cleaning"
  }
];

export const recentActivities = [
  {
    id: 1,
    type: "maintenance",
    message: "New maintenance request from Unit 101 - Kitchen Faucet Leak",
    time: "2 hours ago",
    priority: "medium",
    icon: "🔧"
  },
  {
    id: 2,
    type: "tenant",
    message: "New tenant registration: Sarah Johnson - Garden View Condos",
    time: "4 hours ago",
    priority: "low",
    icon: "👤"
  },
  {
    id: 3,
    type: "payment",
    message: "Rent payment received from Unit 205 - $2,500",
    time: "6 hours ago",
    priority: "low",
    icon: "💳"
  },
  {
    id: 4,
    type: "maintenance",
    message: "Maintenance completed for Unit 312 - Window Lock Repair",
    time: "1 day ago",
    priority: "low",
    icon: "✅"
  },
  {
    id: 5,
    type: "lease",
    message: "Lease renewal signed for Unit 401 - Hillside Manor",
    time: "2 days ago",
    priority: "medium",
    icon: "📋"
  },
  {
    id: 6,
    type: "inspection",
    message: "Property inspection scheduled for Sunset Apartments",
    time: "3 days ago",
    priority: "medium",
    icon: "🔍"
  }
];

export const financialData = {
  monthlyRevenue: [
    { month: "Jan", revenue: 284000 },
    { month: "Feb", revenue: 276000 },
    { month: "Mar", revenue: 292000 },
    { month: "Apr", revenue: 288000 },
    { month: "May", revenue: 296000 },
    { month: "Jun", revenue: 304000 }
  ],
  expenses: [
    { category: "Maintenance", amount: 45000, percentage: 15.8 },
    { category: "Utilities", amount: 32000, percentage: 11.3 },
    { category: "Insurance", amount: 18000, percentage: 6.3 },
    { category: "Property Tax", amount: 25000, percentage: 8.8 },
    { category: "Management", amount: 22000, percentage: 7.7 },
    { category: "Other", amount: 15000, percentage: 5.3 }
  ]
};

export const upcomingTasks = [
  {
    id: 1,
    title: "Property Inspection - Sunset Apartments",
    dueDate: "2024-02-15",
    priority: "High",
    assignedTo: "Sarah Johnson",
    type: "Inspection"
  },
  {
    id: 2,
    title: "Lease Renewal - Unit 205",
    dueDate: "2024-02-20",
    priority: "Medium",
    assignedTo: "Michael Chen",
    type: "Lease"
  },
  {
    id: 3,
    title: "Maintenance Review Meeting",
    dueDate: "2024-02-25",
    priority: "Medium",
    assignedTo: "All Managers",
    type: "Meeting"
  },
  {
    id: 4,
    title: "Budget Planning Q2",
    dueDate: "2024-03-01",
    priority: "High",
    assignedTo: "Finance Team",
    type: "Planning"
  }
];
