import React from 'react';

function Dashboard({ books }) {
  return (
    <div className="dashboard">
      <h1>📚 Book Manager</h1>
      <p className="dashboard-desc">
        Manage your book collection with style! Add, view, and organize your favorite books.
      </p>
      <div className="dashboard-stats">
        <div className="stat-card">
          <span className="stat-number">{books.length}</span>
          <span className="stat-label">Books</span>
        </div>
        {/* Add more stats here if needed */}
      </div>
    </div>
  );
}

export default Dashboard;
