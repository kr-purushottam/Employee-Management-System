const employee = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "emp1@mail.com",
    password: "123",
    tasks: [
      {
        title: "UI Design",
        description: "Create wireframes for dashboard",
        date: "2025-09-20",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "API Integration",
        description: "Integrate login API with frontend",
        date: "2025-09-21",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Bug Fix",
        description: "Resolve login button alignment issue",
        date: "2025-09-22",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "emp2@mail.com",
    password: "123",
    tasks: [
      {
        title: "Database Setup",
        description: "Create schema for employee records",
        date: "2025-09-20",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Write Queries",
        description: "Prepare SQL queries for reporting",
        date: "2025-09-21",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Optimize Query",
        description: "Improve performance of join queries",
        date: "2025-09-23",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Backup Test",
        description: "Run backup and restore test",
        date: "2025-09-24",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "emp3@mail.com",
    password: "123",
    tasks: [
      {
        title: "Frontend Review",
        description: "Review homepage responsiveness",
        date: "2025-09-20",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Component Creation",
        description: "Build reusable button component",
        date: "2025-09-21",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Deploy to Staging",
        description: "Push frontend updates to staging",
        date: "2025-09-22",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 4,
    name: "Sneha Gupta",
    email: "emp4@mail.com",
    password: "123",
    tasks: [
      {
        title: "Testing",
        description: "Write unit tests for auth module",
        date: "2025-09-20",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Bug Report",
        description: "Document bugs found during regression",
        date: "2025-09-21",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Navbar",
        description: "Resolve broken links in navbar",
        date: "2025-09-22",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Performance Audit",
        description: "Check load time under 2s",
        date: "2025-09-23",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "emp5@mail.com",
    password: "123",
    tasks: [
      {
        title: "Research",
        description: "Explore new frontend frameworks",
        date: "2025-09-20",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Documentation",
        description: "Update API documentation",
        date: "2025-09-21",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Presentation",
        description: "Prepare sprint demo slides",
        date: "2025-09-22",
        category: "Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Feedback",
        description: "Collect client feedback",
        date: "2025-09-23",
        category: "Management",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Code Review",
        description: "Review PRs for bug fixes",
        date: "2025-09-24",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCount: { active: 3, newTask: 1, completed: 1, failed: 1 },
  },
]

const admin = [
  {
    id: 100,
    name: "Admin User",
    email: "admin@mail.com",
    password: "123",
  },
]




export function setLocalStorage() {
  // Only seed if not already present
  if (!localStorage.getItem("employee")) {
    localStorage.setItem("employee", JSON.stringify(employee));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
}
// localStorage.clear()
setLocalStorage();

export function getLocalStorage() {
    const empData = localStorage.getItem('employee');
    if(!empData) {
        //Handle Error
    }
    const employeeData = JSON.parse(empData);
    // console.log("emp data :", employeeData  )


    const admnData = localStorage.getItem('admin');
    if(!admnData) {
        //Handle Error
    }
    const adminData = JSON.parse(admnData);
    // console.log("admin data :", adminData  )
    return {adminData, employeeData};
}