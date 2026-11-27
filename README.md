# 🏛️ Nagrik Bank — Banking & Personal Finance Management System

> **A Complete Front-End Digital Banking Portal built with HTML5, CSS3, and Vanilla JavaScript.**  
> **Tagline:** *Your Trust, Our Priority* • **Primary User:** *Rohit Saraswat (NB123456)*

---

## 📌 Project Overview

**Nagrik Bank** is a comprehensive, responsive web-based digital banking and personal finance management platform designed for academic and portfolio demonstration. The project is organized cleanly into **4 distinct member modules** inside a unified flat directory (`Banking and Personal Finance Management System/`), where each member owns their dedicated HTML, CSS, and JavaScript files.

---

## ✨ Key Features by Module

### 🔐 Member 1: User & Admin Login, Dashboards & Accounts
* **NetBanking & Staff Login (`index.html`):** The primary entry point for the entire banking platform. Features a dual-role switcher:
  - **Customer NetBanking:** Autofill demo (`NB123456` / `password123`) leading to the personal banking dashboard.
  - **Bank Staff / Admin Portal:** Autofill demo (`EMP-9021` / `admin123`) for branch officer Core Banking System (CBS) access.
  - Includes 256-bit AES encryption trust badges, Show/Hide password toggle, OTP recovery modal, and New User Registration modal.
* **Customer Overview Dashboard (`dashboard.html`):** Net worth, liquid balance, FD balance cards with privacy toggle, income/expense summaries, recent transactions list, quick deposit modal, and direct UPI QR Code generator.
* **CBS Admin & Branch Terminal (`admin.html`):** Full-featured banking operations dashboard for branch employees & administration:
  - **Branch Overview & KPIs:** Total customer deposits, active KYC-verified accounts, today's counter clearing volume, statutory CRR compliance (18.5%), and live system-wide transaction monitor.
  - **Customer Roster Management:** Search and filter all customer accounts, live balance sync, instant Account Freeze/Unfreeze, and biometric KYC verification.
  - **Cashier Counter & Teller Desk:** Walk-in cash deposit and cash withdrawal vouchers that update real-time customer balances and insert audit-grade ledger records.
  - **Loan & Applications Desk:** Sanction, disburse, or reject customer home, vehicle, and MSME loan applications.
  - **Audit & Surveillance:** Tamper-evident transaction surveillance with high-value flagging (≥ ₹50,000) and one-click CSV audit export.
  - **Customer Onboarding:** Direct branch opening of new savings and current accounts.
* **Virtual 3D Debit Card:** Issued by Nagrik Bank to cardholder **ROHIT SARASWAT** with realistic 3D flip animation (CVV on back) and live Freeze/Unfreeze toggle.
* **Account Management (`accounts.html`):** Savings, Current, and Fixed Deposit cards, open new sub-accounts with custom nicknames, instant account-specific deposit modal, and side-by-side account comparison table.

### 📑 Member 2: Transactions & Statement Generator
* **Transaction Center (`transactions.html`):** Complete searchable transaction ledger with live filters by transaction type (Credit/Debit), category, account, and date range.
* **Interactive Receipts:** Click any transaction to open a detailed modal receipt showing status, transaction reference numbers, and timestamps.
* **Export & Print:** One-click CSV export and print-ready formal account statement.

### 📊 Member 3: Personal Finance, Budgets & Savings Goals
* **Budget Tracking (`finance.html`):** Visual monthly category-wise budget progress bars (Food, Shopping, Utilities, Entertainment, Travel).
* **Expense Manager:** Add custom expenses with instant deduction and real-time category spending updates.
* **Target Savings Goals:** Visual goal cards with target dates, dynamic percentage meters, and quick contribution buttons.
* **Financial Calculators:** Interactive Loan & EMI Calculator with real-time monthly installment calculations.

### 💸 Member 4: Money Transfer & User Profile
* **Fund Transfer Engine (`transfer.html`):** 3-way transfers (Between Own Accounts, Other Bank via IMPS/NEFT/RTGS, and Saved Beneficiaries).
* **Beneficiaries:** Quick-select beneficiary avatars with one-click payment and new beneficiary addition form.
* **Daily Limits:** Visual daily transfer limit utilization progress bar.
* **User Profile & Security (`profile.html`):** Full profile card for **Rohit Saraswat** with KYC Verified badge, contact details editing, password changer, transaction MPIN reset, and 2FA toggles.

---

## 👥 Team Work Division

| Member | Assigned Work | Dedicated Files |
|---|---|---|
| **Member 1** | User & Admin Login, Dashboards & Accounts | `index.html`, `dashboard.html`, `admin.html`, `accounts.html`, `member_1.css`, `member_1.js` |
| **Member 2** | Transaction Management & Statements | `transactions.html`, `member_2.css`, `member_2.js` |
| **Member 3** | Personal Finance, Budgets & Savings Goals | `finance.html`, `member_3.css`, `member_3.js` |
| **Member 4** | Money Transfer & User Profile | `transfer.html`, `profile.html`, `member_4.css`, `member_4.js` |

---

## 📁 Repository & Folder Structure

```
Banking and Personal Finance Management System/
├── index.html          # Dual NetBanking & Staff Login (Entry Point) [Member 1]
├── dashboard.html      # Customer Overview Dashboard & Virtual 3D Card [Member 1]
├── admin.html          # CBS Admin & Branch Terminal Portal [Member 1]
├── accounts.html       # Account Management & Sub-Accounts [Member 1]
├── member_1.css        # Member 1 Complete Standalone CSS
├── member_1.js         # Member 1 Complete Standalone JS
│
├── transactions.html   # Transaction Ledger & Statement Generator [Member 2]
├── member_2.css        # Member 2 Complete Standalone CSS
├── member_2.js         # Member 2 Complete Standalone JS
│
├── finance.html        # Budgets, Expense Tracker, Goals & EMI Calculator [Member 3]
├── member_3.css        # Member 3 Complete Standalone CSS
├── member_3.js         # Member 3 Complete Standalone JS
│
├── transfer.html       # Money Transfer & Beneficiaries [Member 4]
├── profile.html        # User Profile, KYC & Security Settings [Member 4]
├── member_4.css        # Member 4 Complete Standalone CSS
├── member_4.js         # Member 4 Complete Standalone JS
│
└── README.md           # Project Documentation
```

---

## 🚀 How to Run & Deploy the Project

1. **Launch the Portal:**
   - Open `Banking and Personal Finance Management System/index.html` directly in any web browser (Chrome, Edge, Firefox, Safari).
   - Or when deploying to static hosting (GitHub Pages / Vercel / Netlify), set `Banking and Personal Finance Management System/` as the publish root so `index.html` loads directly.
2. **On the Login Screen (`index.html`):**
   - **For Customer NetBanking:** Select the *Customer NetBanking* tab, click the demo pill to autofill `NB123456` / `password123`, and click **Login to Account** to enter **`dashboard.html`** (default transaction MPIN: `1234`).
   - **For Bank Staff / Admin:** Select the *Bank Staff / Admin* tab, click the demo pill to autofill `EMP-9021` / `admin123`, and click **Login to CBS Terminal** to enter **`admin.html`**.
3. **Session Security & Role Isolation:**
   - All internal pages enforce a strict **Role-Based Authentication Guard** (`nagrik_bank_session` check). Unauthenticated users are routed back to `index.html`.
   - Customer and Admin portals are strictly isolated: staff/admin sessions (`role: "admin"`) are restricted to `admin.html` without direct switching into the customer portal, and customer sessions cannot access `admin.html`.
   - Click **Logout** at any time to securely end the session and return to the login screen.

---

## 🛠️ Technologies Used

* **HTML5:** Semantic elements, forms, and inline SVGs.
* **CSS3:** Custom properties (CSS variables), Light/Dark theme support (`data-theme`), Flexbox, CSS Grid, 3D card transforms, animations, and responsive design.
* **Vanilla JavaScript (ES6+):** Pure client-side JavaScript for DOM manipulation, interactive modals, tabs, and toast notifications.
* **State Management:** Browser `localStorage` ensures all data updates sync in real time across all pages without requiring a backend server:
  - `NAGRIK BANK_state_v1` — Shared user, accounts, transactions, budgets, goals, and beneficiary state
  - `nagrik_bank_session` — Active customer/admin login session
  - `nagrik_bank_admin_roster` & `nagrik_bank_loans` — Admin branch customer roster and loan application records
