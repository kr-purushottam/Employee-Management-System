
# Employee Management System (React + AWS Amplify/CloudFront)

A production-style React app for managing employees (create, edit, list, filter). CI/CD on AWS Amplify, global delivery via CloudFront with SPA routing.


## 🔑 Test Credentials (Demo)
Use these on the live demo so reviewers can log in quickly.

- Admin: admin@mail.com

- Employee: emp1@mail.com (also emp2/emp3/emp4/emp5@mail.com)

- Password (demo): 123
## Features

- CRUD for employees with controlled forms

- Search, filter, sort; list virtualization/memoized rows → smoother UX

- Role-based UI (Admin vs Employee)

- Error + loading states;  form validation

- CI/CD (Amplify) + CloudFront SPA fallback (no 404 on refresh)


## 🧰 Tech Stack

React, React Router, Hooks (useState/useEffect/useMemo/useReducer), Tailwind CSS, Vite/CRA, AWS Amplify, CloudFront, GitHub Actions (optional)
## 🧱 Architecture & Decisions

- Feature-oriented folders (/features/employees, /features/auth)

- State: local state + reducer for complex flows (forms, list ops)

- Perf: memoized list rows; stable handlers (useCallback where needed)
## 📈 Performance
- Avoids unnecessary re-renders on large lists via memoization and keying

- Lighthouse (desktop) ~90+ (varies by network)

- Code-split routes (optional)
## 🖼️ Screenshots

![App Screenshot](https://github.com/kr-purushottam/Employee-Management-System/blob/459d8764a416dbf2b9ce0beda5b89c6b687058a6/src/assets/screenshot/homePage.png)
![App Screenshot](https://github.com/kr-purushottam/Employee-Management-System/blob/459d8764a416dbf2b9ce0beda5b89c6b687058a6/src/assets/screenshot/adminDashboard.png)
![App Screenshot](https://github.com/kr-purushottam/Employee-Management-System/blob/459d8764a416dbf2b9ce0beda5b89c6b687058a6/src/assets/screenshot/employeeDashboard.png)



## 📦 Release Notes
- v1.0.0: CRUD, role-based UI, Amplify deploy, CloudFront SPA routing.
