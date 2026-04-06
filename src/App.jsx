import React, { useState, useEffect } from "react";
import "./App.css";
import {
  PieChart, Pie, Cell, Tooltip,
  LineChart, Line, XAxis, YAxis, ResponsiveContainer
} from "recharts";
import { FiSun, FiMoon, FiDollarSign, FiPieChart } from "react-icons/fi";

function App() {
  const [role, setRole] = useState("Viewer");
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved
      ? JSON.parse(saved)
      : [
          { date: "2026-04-01", amount: 5000, category: "Salary", type: "Income" },
          { date: "2026-04-02", amount: 200, category: "Food", type: "Expense" },
          { date: "2026-04-03", amount: 150, category: "Transport", type: "Expense" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleRoleChange = (e) => setRole(e.target.value);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = t.category.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === "All" || t.type === typeFilter;
    const matchesCategory = categoryFilter === "All" || t.category === categoryFilter;
    return matchesSearch && matchesType && matchesCategory;
  });

  const totalIncome = transactions.filter(t => t.type === "Income").reduce((acc, t) => acc + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === "Expense").reduce((acc, t) => acc + t.amount, 0);
  const totalBalance = totalIncome - totalExpenses;

  const pieData = [
    { name: "Income", value: totalIncome },
    { name: "Expenses", value: totalExpenses }
  ];

  const categoryData = transactions
    .filter(t => t.type === "Expense")
    .reduce((acc, t) => {
      const existing = acc.find(a => a.name === t.category);
      if (existing) existing.value += t.amount;
      else acc.push({ name: t.category, value: t.amount });
      return acc;
    }, []);

  const lineData = transactions.map((t, i) => ({
    date: t.date,
    balance: transactions
      .slice(0, i + 1)
      .reduce((acc, cur) => acc + (cur.type === "Income" ? cur.amount : -cur.amount), 0)
  }));

  const COLORS = ["#22c55e", "#ef4444", "#f59e0b", "#3b82f6", "#8b5cf6"];

  const highestExpense = transactions
    .filter(t => t.type === "Expense")
    .reduce((max, t) => (t.amount > max.amount ? t : max), { amount: 0 });

  const addTransaction = () => {
    const newTransaction = {
      date: new Date().toISOString().split("T")[0],
      amount: Math.floor(Math.random() * 500),
      category: "Shopping",
      type: "Expense",
    };
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (index) => {
    const updated = [...transactions];
    updated.splice(index, 1);
    setTransactions(updated);
  };

  const exportCSV = () => {
    const csv = [
      ["Date", "Amount", "Category", "Type"],
      ...transactions.map(t => [t.date, t.amount, t.category, t.type])
    ].map(e => e.join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
  };

  const categories = ["All", ...new Set(transactions.map(t => t.category))];

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>FinanceApp</h2>
        <select value={role} onChange={handleRoleChange}>
          <option value="Admin">Admin</option>
          <option value="Viewer">Viewer</option>
        </select>
        <button onClick={toggleDarkMode}>
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        <nav>
          <ul>
            <li><FiDollarSign /> Dashboard</li>
            <li><FiPieChart /> Transactions</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Summary Cards */}
        <div className="grid">
          <div className="card">
            <h3>Total Balance</h3>
            <p>${totalBalance.toLocaleString()}</p>
          </div>
          <div className="card">
            <h3>Income</h3>
            <p>${totalIncome.toLocaleString()}</p>
          </div>
          <div className="card">
            <h3>Expenses</h3>
            <p>${totalExpenses.toLocaleString()}</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid">
          <div className="card">
            <h3>Income vs Expenses</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" label>
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: darkMode ? "#374151" : "#fff", color: darkMode ? "#f3f4f6" : "#111827" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h3>Expenses by Category</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={categoryData} dataKey="value" label>
                  {categoryData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: darkMode ? "#374151" : "#fff", color: darkMode ? "#f3f4f6" : "#111827" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h3>Balance Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <Line type="monotone" dataKey="balance" stroke={darkMode ? "#22c55e" : "#3b82f6"} isAnimationActive={true}/>
                <XAxis dataKey="date" stroke={darkMode ? "#f3f4f6" : "#111827"} />
                <YAxis stroke={darkMode ? "#f3f4f6" : "#111827"} />
                <Tooltip contentStyle={{ backgroundColor: darkMode ? "#374151" : "#fff", color: darkMode ? "#f3f4f6" : "#111827" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Filters */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="All">All Types</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Transactions Table */}
        <div className="card">
          <h3>Transactions</h3>
          {filteredTransactions.length === 0 ? (
            <p>No transactions found</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Type</th>
                  {role === "Admin" && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((t, i) => (
                  <tr key={i}>
                    <td>{t.date}</td>
                    <td style={{ color: t.type === "Income" ? "green" : "red" }}>
                      ${t.amount.toLocaleString()}
                    </td>
                    <td>{t.category}</td>
                    <td>{t.type}</td>
                    {role === "Admin" && (
                      <td>
                        <button className="add-btn" onClick={() => deleteTransaction(i)}>Delete</button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Insights */}
        <div className="card">
          <h3>Insights</h3>
          <p>Highest spending: {highestExpense.category || "No data"} (${highestExpense.amount.toLocaleString()})</p>
          <p>Total Expenses: ${totalExpenses.toLocaleString()}</p>
        </div>

        {/* Admin Actions */}
        {role === "Admin" && (
          <div className="admin-actions">
            <button className="add-btn" onClick={addTransaction}>Add Transaction</button>
            <button className="add-btn" onClick={exportCSV}>Export CSV</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;