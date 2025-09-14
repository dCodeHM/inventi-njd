// Comprehensive sample data for Tenant Dashboard

export const tenantProfile = {
  id: 2,
  firstName: "John",
  lastName: "Doe",
  email: "tenant@example.com",
  phone: "+1234567891",
  role: "tenant",
  profileImage: "👨‍💼",
  emergencyContact: {
    name: "Jane Doe",
    phone: "(555) 987-6543",
    relationship: "Spouse"
  }
};

export const unitInfo = {
  id: 1,
  unitNumber: "101",
  propertyName: "Sunset Apartments",
  propertyAddress: "123 Main Street, Downtown, CA 90210",
  propertyManager: "Sarah Johnson",
  managerPhone: "(555) 123-4567",
  managerEmail: "sarah.johnson@sunsetapartments.com",
  floor: 1,
  bedrooms: 1,
  bathrooms: 1,
  squareFeet: 750,
  monthlyRent: 2200.00,
  securityDeposit: 2200.00,
  leaseStartDate: "2024-01-01",
  leaseEndDate: "2024-12-31",
  leaseType: "12-Month Lease",
  parkingSpaces: 1,
  parkingNumber: "A-15",
  amenities: [
    "In-unit washer/dryer",
    "Central air conditioning",
    "Hardwood floors",
    "Balcony",
    "Pet-friendly",
    "Fitness center access",
    "Swimming pool",
    "24/7 security"
  ],
  utilities: {
    included: ["Water", "Sewer", "Trash"],
    tenantResponsible: ["Electricity", "Internet", "Cable"]
  }
};

export const paymentHistory = [
  {
    id: 1,
    month: "January 2024",
    amount: 2200.00,
    dueDate: "2024-01-01",
    paidDate: "2023-12-28",
    status: "Paid",
    method: "Online Transfer",
    reference: "PAY-001"
  },
  {
    id: 2,
    month: "February 2024",
    amount: 2200.00,
    dueDate: "2024-02-01",
    paidDate: "2024-01-30",
    status: "Paid",
    method: "Online Transfer",
    reference: "PAY-002"
  },
  {
    id: 3,
    month: "March 2024",
    amount: 2200.00,
    dueDate: "2024-03-01",
    paidDate: null,
    status: "Pending",
    method: null,
    reference: null
  },
  {
    id: 4,
    month: "April 2024",
    amount: 2200.00,
    dueDate: "2024-04-01",
    paidDate: null,
    status: "Upcoming",
    method: null,
    reference: null
  }
];

export const currentPayment = {
  month: "March 2024",
  amount: 2200.00,
  dueDate: "2024-03-01",
  daysUntilDue: 15,
  status: "Pending",
  lateFee: 0.00,
  totalAmount: 2200.00
};

export const maintenanceRequests = [
  {
    id: 1,
    title: "Kitchen Faucet Leak",
    description: "Small leak under the kitchen sink that needs repair. Water is dripping slowly but consistently.",
    priority: "Medium",
    status: "In Progress",
    submittedDate: "2024-01-20",
    lastUpdated: "2024-01-22",
    assignedTo: "Mike's Plumbing",
    estimatedCompletion: "2024-01-25",
    category: "Plumbing",
    images: ["faucet-leak-1.jpg", "faucet-leak-2.jpg"]
  },
  {
    id: 2,
    title: "Heating System Not Working",
    description: "Heater stopped working in living room, no heat coming through vents. Temperature is dropping.",
    priority: "High",
    status: "Completed",
    submittedDate: "2024-01-18",
    lastUpdated: "2024-01-20",
    assignedTo: "HVAC Solutions",
    completedDate: "2024-01-20",
    category: "HVAC",
    images: ["heater-issue-1.jpg"]
  },
  {
    id: 3,
    title: "Broken Window Lock",
    description: "Window lock mechanism is broken and window won't stay closed properly. Security concern.",
    priority: "Low",
    status: "Pending",
    submittedDate: "2024-01-22",
    lastUpdated: "2024-01-22",
    assignedTo: "Quick Fix Repairs",
    estimatedCompletion: "2024-01-28",
    category: "General",
    images: ["window-lock-1.jpg"]
  }
];

export const leaseDocuments = [
  {
    id: 1,
    name: "Lease Agreement - Unit 101",
    type: "Lease Agreement",
    uploadDate: "2024-01-01",
    size: "2.3 MB",
    status: "Active"
  },
  {
    id: 2,
    name: "Move-in Inspection Report",
    type: "Inspection Report",
    uploadDate: "2024-01-01",
    size: "1.8 MB",
    status: "Completed"
  },
  {
    id: 3,
    name: "Property Rules and Regulations",
    type: "Rules Document",
    uploadDate: "2024-01-01",
    size: "856 KB",
    status: "Active"
  },
  {
    id: 4,
    name: "Emergency Contact Information",
    type: "Contact Info",
    uploadDate: "2024-01-01",
    size: "245 KB",
    status: "Active"
  }
];

export const announcements = [
  {
    id: 1,
    title: "Scheduled Maintenance - Elevator Service",
    message: "The main elevator will be serviced on February 15th from 9 AM to 2 PM. Please use the stairs during this time.",
    date: "2024-02-10",
    priority: "Medium",
    type: "Maintenance"
  },
  {
    id: 2,
    title: "Pool Area Renovation Complete",
    message: "The swimming pool area renovation has been completed. The pool is now open for use with new deck furniture and improved lighting.",
    date: "2024-02-08",
    priority: "Low",
    type: "Amenity"
  },
  {
    id: 3,
    title: "Rent Increase Notice",
    message: "Please be advised that rent will increase by 3% starting April 1st, 2024. New monthly rent will be $2,266.",
    date: "2024-02-05",
    priority: "High",
    type: "Financial"
  },
  {
    id: 4,
    title: "New Property Manager Introduction",
    message: "We're pleased to introduce Sarah Johnson as your new property manager. She can be reached at (555) 123-4567.",
    date: "2024-02-01",
    priority: "Low",
    type: "General"
  }
];

export const upcomingEvents = [
  {
    id: 1,
    title: "Property Inspection",
    date: "2024-02-15",
    time: "10:00 AM",
    type: "Inspection",
    description: "Quarterly property inspection to ensure everything is in good condition."
  },
  {
    id: 2,
    title: "Lease Renewal Deadline",
    date: "2024-11-01",
    time: "5:00 PM",
    type: "Lease",
    description: "Deadline to submit lease renewal application for 2025."
  },
  {
    id: 3,
    title: "Community Meeting",
    date: "2024-03-05",
    time: "7:00 PM",
    type: "Meeting",
    description: "Monthly community meeting to discuss property updates and resident concerns."
  }
];

export const contactInfo = {
  propertyManager: {
    name: "Sarah Johnson",
    phone: "(555) 123-4567",
    email: "sarah.johnson@sunsetapartments.com",
    officeHours: "Monday-Friday, 9 AM - 5 PM"
  },
  emergencyMaintenance: {
    phone: "(555) 911-HELP",
    available: "24/7"
  },
  leasingOffice: {
    phone: "(555) 123-4567",
    email: "leasing@sunsetapartments.com",
    address: "123 Main Street, Downtown, CA 90210"
  }
};

export const tenantStats = {
  daysInUnit: 45,
  paymentsOnTime: 2,
  totalPayments: 2,
  maintenanceRequests: 3,
  completedRequests: 1,
  pendingRequests: 2
};
