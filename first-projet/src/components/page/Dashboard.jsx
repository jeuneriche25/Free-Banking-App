import React from "react";
import { HiOutlineStar } from "react-icons/hi";

import "./Dashboard.css";
import '../../../src/App.css'


function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>LouBank</h1>
          <p>Your balance: <span className="balance-amount">$7,896</span></p>
        </div>

        <div className="dashboard-cards">
          <div className="card dark-card">
            <h3>Salary</h3>
            <p className="amount">$2,230</p>
            <p className="info">**6917</p>
          </div>
          <div className="card yellow-card">
            <h3>Savings</h3>
            <p className="amount">$5,666</p>
            <p className="info">**4552</p>
          </div>
        </div>

        <div className="dashboard-icons">
          <div className="icon-box">
            <div className="icon"><HiOutlineStar /></div>
            <p>My Bonuses</p>
          </div>
          <div className="icon-box">
            <div className="icon">💼</div>
            <p>My Budget</p>
          </div>
          <div className="icon-box">
            <div className="icon">📊</div>
            <p>Finance analysis</p>
          </div>
        </div>
{/* suite */}
    <div className="dashboard">
      <div className="account-card">
        <div>
          <p className="label">Account N° 8874825</p>
          <p className="sub">Expires 12/22/2023</p>
        </div>
        <div className="amount">$78,92</div>
      </div>

      <div className="invest-banner">
        <span>⚡ Start investing now!</span>
        <p>Protected savings and investment plans</p>
      </div>

      <div className="section">
        <h3>Currencies and Metals</h3>

        <div className="currency-table">
          <div className="row header">
            <span>Currency</span>
            <span>Buy</span>
            <span>Sell</span>
          </div>
          <div className="row">
            <span>💲 USD</span>
            <span>$78,92</span>
            <span>$78,92</span>
          </div>
          <div className="row">
            <span>💶 EUR</span>
            <span>$78,92</span>
            <span>$78,92</span>
          </div>
          <div className="row">
            <span>🏅 Gold</span>
            <span>$78,92</span>
            <span>$78,92</span>
          </div>
          <div className="row">
            <span>🥈 Silver</span>
            <span>$78,92</span>
            <span>$78,92</span>
          </div>
        </div>
      </div>
    </div>
  





      </div>
    </div>
  );
}

export default Dashboard;
