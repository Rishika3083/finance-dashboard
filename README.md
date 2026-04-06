<img width="1270" height="861" alt="Screenshot 2026-04-06 150458" src="https://github.com/user-attachments/assets/d8054d58-18b0-44ec-b7b8-0962fb340617" />

<img width="1167" height="634" alt="Screenshot 2026-04-06 150116" src="https://github.com/user-attachments/assets/7b2e7d60-0349-4512-85dc-617ff3c2a4e4" />
<img width="1349" height="628" alt="Screenshot 2026-04-06 150100" src="https://github.com/user-attachments/assets/87a277e7-c215-4dc8-8968-14257a07d602" />
<img width="1537" height="953" alt="Screenshot 2026-04-06 150050" src="https://github.com/user-attachments/assets/60dcfa2e-4f67-4dd9-bb88-03b476093a96" />
# 📊 Finance Dashboard UI

## 🧾 Overview
This project is a **Finance Dashboard UI** built to visualize and manage financial data in a clean, interactive, and user-friendly interface.

The application allows users to:
- View financial summaries
- Track transactions
- Analyze spending patterns
- Interact with role-based UI

This project focuses purely on **frontend design, state management, and user experience**, as per the assignment guidelines.

---

## 🚀 Features

### 📈 Dashboard Overview
- Summary cards:
  - Total Balance
  - Total Income
  - Total Expenses
- Visualizations:
  - Income vs Expenses (Pie Chart)
  - Expenses by Category (Pie Chart)
  - Balance Trend Over Time (Line Chart)

---

### 💳 Transactions Section
- Displays:
  - Date
  - Amount
  - Category
  - Type (Income / Expense)

**Features:**
- Search by category
- Filter by type
- Filter by category
- Delete transactions (Admin only)

---

### 👥 Role-Based UI
- **Viewer**
  - Can only view data
- **Admin**
  - Can add transactions
  - Can delete transactions
  - Can export data

Role switching is implemented via a dropdown.

---

### 💡 Insights
- Highest spending category
- Total expenses

---

### 🧠 State Management
- useState → UI state, filters, transactions, role
- useEffect → Local storage persistence

---

### 🎨 UI/UX
- Clean card-based layout
- Responsive design
- Hover effects
- Handles empty states

---

## ✨ Optional Enhancements
- Dark mode
- Local storage persistence
- Export CSV
- Chart animations
- Responsive layout

---

## 🛠️ Tech Stack
- React (Vite)
- Recharts
- React Icons
- CSS

---

## 📂 Project Structure

```
finance-dashboard/
│── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│── public/
│── package.json
│── README.md
```

## ⚙️ Setup Instructions

1. Clone the repo
2. Install dependencies
3. Run the project
4. Open in browser


---

## 📊 Key Logic

**Balance Calculation:**
Balance = Income - Expenses

**Data Persistence:**
- Stored in localStorage

---

## 📌 Evaluation Coverage

- Design & Creativity ✅
- Responsiveness ✅
- Functionality ✅
- User Experience ✅
- State Management ✅
- Documentation ✅

---

## 🔮 Future Improvements
- Edit transactions
- Backend integration
- Authentication
- Advanced analytics

---

## 🙌 Conclusion
This project demonstrates strong frontend development skills including UI design, state management, and interactive features.
