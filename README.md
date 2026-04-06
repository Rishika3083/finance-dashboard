<img width="1270" height="861" alt="Screenshot 2026-04-06 150458" src="https://github.com/user-attachments/assets/d8054d58-18b0-44ec-b7b8-0962fb340617" />

<img width="1167" height="634" alt="Screenshot 2026-04-06 150116" src="https://github.com/user-attachments/assets/7b2e7d60-0349-4512-85dc-617ff3c2a4e4" />
<img width="1349" height="628" alt="Screenshot 2026-04-06 150100" src="https://github.com/user-attachments/assets/87a277e7-c215-4dc8-8968-14257a07d602" />
<img width="1537" height="953" alt="Screenshot 2026-04-06 150050" src="https://github.com/user-attachments/assets/60dcfa2e-4f67-4dd9-bb88-03b476093a96" />
📊 Finance Dashboard UI
🧾 Overview

This project is a Finance Dashboard UI built to visualize and manage financial data in a clean, interactive, and user-friendly interface.

The application allows users to:

View financial summaries
Track transactions
Analyze spending patterns
Interact with role-based UI

This project focuses purely on frontend design, state management, and user experience, as per the assignment guidelines.
🚀 Features
1. 📈 Dashboard Overview
Summary cards:
Total Balance
Total Income
Total Expenses
Visualizations:
📊 Income vs Expenses (Pie Chart)
🧾 Expenses by Category (Pie Chart)
📉 Balance Trend Over Time (Line Chart)
2. 💳 Transactions Section
Displays transaction details:
Date
Amount
Category
Type (Income / Expense)
Features:
🔍 Search by category
🎯 Filter by type
📂 Filter by category
🗑️ Delete transactions (Admin only)
3. 👥 Role-Based UI (Simulated)
Viewer
Can view all data
Admin
Can:
Add transactions
Delete transactions
Export data

Role switching is implemented via a dropdown for demonstration.

4. 💡 Insights Section
Displays useful financial insights:
Highest spending category
Total expenses
Helps users quickly understand spending behavior
5. 🧠 State Management

Managed using React Hooks:

useState → UI state, filters, transactions, role
useEffect → Local storage persistence
6. 🎨 UI/UX Features
Clean and modern card-based layout
Responsive grid design
Smooth hover effects and transitions
Handles empty states (e.g., no transactions found)
✨ Optional Enhancements Implemented
🌙 Dark Mode toggle
💾 Local Storage persistence
📤 Export transactions as CSV
🎞️ Chart animations (Recharts)
📱 Responsive design
🛠️ Tech Stack
Frontend Framework: React (Vite)
Charts Library: Recharts
Icons: React Icons
Styling: Custom CSS
State Management: React Hooks
📂 Project Structure
finance-dashboard/
│── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│── public/
│── package.json
│── README.md
⚙️ Installation & Setup
Clone the repository:
git clone https://github.com/your-username/finance-dashboard.git
Navigate to the project:
cd finance-dashboard
Install dependencies:
npm install
Run the app:
npm run dev
Open in browser:
http://localhost:5173/
