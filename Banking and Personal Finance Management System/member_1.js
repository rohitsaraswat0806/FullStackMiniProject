// ==============================================================
// MEMBER 1 COMPLETE JAVASCRIPT ENGINE
// Self-contained: Includes Banking State Engine (localStorage) & Member 1 Logic
// ==============================================================


(function () {
    const STORAGE_KEY = 'NAGRIK BANK_state_v1';

    const DEFAULT_STATE = {
        user: {
            name: 'Rohit Saraswat',
            email: 'rohit.saraswat@nagrikbank.in',
            phone: '+91 98765 43210',
            customerId: 'BE-892401',
            accountType: 'Premier Savings & Investment',
            city: 'New Delhi',
            address: '42, Connaught Place, New Delhi - 110001',
            dob: '1998-08-15',
            pan: 'ABCPS8921K',
            memberSince: '2023',
            kycVerified: true,
            twoFactorEnabled: true,
            biometricsEnabled: true,
            smsAlertsEnabled: true,
            pin: '1234',
            dailyTransferLimit: 100000,
            currency: 'INR',
            currencySymbol: '₹',
            theme: 'light'
        },
        accounts: [
            {
                id: 'acc_sav_1',
                type: 'Savings',
                name: 'Primary Savings Account',
                accountNumber: '458289204582',
                displayNumber: '•••• •••• 4582',
                balance: 82450.00,
                interestRate: '4.25% p.a.',
                status: 'Active',
                ifsc: 'BEAS0001042',
                branch: 'Connaught Place Main Branch, New Delhi',
                card: {
                    number: '4582 8920 3145 9012',
                    holder: 'ROHIT SARASWAT',
                    expiry: '09/29',
                    cvv: '742',
                    type: 'VISA Platinum',
                    frozen: false,
                    dailyLimit: 75000
                }
            },
            {
                id: 'acc_cur_1',
                type: 'Current',
                name: 'Business Current Account',
                accountNumber: '782199407821',
                displayNumber: '•••• •••• 7821',
                balance: 24800.00,
                interestRate: 'N/A (Business)',
                status: 'Active',
                ifsc: 'BEAS0001042',
                branch: 'Connaught Place Main Branch, New Delhi',
                card: {
                    number: '5214 7821 9901 3410',
                    holder: 'ROHIT SARASWAT',
                    expiry: '11/28',
                    cvv: '318',
                    type: 'Mastercard World',
                    frozen: false,
                    dailyLimit: 150000
                }
            },
            {
                id: 'acc_fd_1',
                type: 'Fixed Deposit',
                name: 'High Yield Wealth Vault',
                accountNumber: '330911203309',
                displayNumber: '•••• •••• 3309',
                balance: 150000.00,
                interestRate: '7.15% p.a.',
                status: 'Active (Locked)',
                maturityDate: '15 Dec 2027',
                ifsc: 'BEAS0001042',
                branch: 'Treasury Branch, New Delhi'
            }
        ],
        transactions: [
            {
                id: 'TXN-902184',
                date: '2026-10-28',
                time: '10:30 AM',
                description: 'Salary Credit - TechCorp Global',
                category: 'Income',
                type: 'credit',
                amount: 75000.00,
                accountId: 'acc_sav_1',
                accountName: 'Primary Savings',
                status: 'Completed',
                refNo: 'UPI/NEFT/39201948',
                icon: 'briefcase'
            },
            {
                id: 'TXN-902143',
                date: '2026-10-27',
                time: '08:15 PM',
                description: 'Grocery Supermarket & Organics',
                category: 'Food',
                type: 'debit',
                amount: 3450.00,
                accountId: 'acc_sav_1',
                accountName: 'Primary Savings',
                status: 'Completed',
                refNo: 'POS/CARD/881290',
                icon: 'shopping-cart'
            },
            {
                id: 'TXN-902098',
                date: '2026-10-25',
                time: '02:40 PM',
                description: 'Tata Power Electricity Bill',
                category: 'Utilities',
                type: 'debit',
                amount: 2180.00,
                accountId: 'acc_sav_1',
                accountName: 'Primary Savings',
                status: 'Completed',
                refNo: 'BBPS/BIL/490123',
                icon: 'zap'
            },
            {
                id: 'TXN-901980',
                date: '2026-10-22',
                time: '11:10 AM',
                description: 'Freelance Design Retainer',
                category: 'Income',
                type: 'credit',
                amount: 18500.00,
                accountId: 'acc_cur_1',
                accountName: 'Business Current',
                status: 'Completed',
                refNo: 'IMPS/RET/110293',
                icon: 'award'
            },
            {
                id: 'TXN-901844',
                date: '2026-10-20',
                time: '07:25 PM',
                description: 'Amazon Electronics & Gadgets',
                category: 'Shopping',
                type: 'debit',
                amount: 6499.00,
                accountId: 'acc_sav_1',
                accountName: 'Primary Savings',
                status: 'Completed',
                refNo: 'PG/AMZ/772183',
                icon: 'package'
            },
            {
                id: 'TXN-901720',
                date: '2026-10-18',
                time: '09:45 PM',
                description: 'Fine Dining at The Bistro',
                category: 'Food',
                type: 'debit',
                amount: 2850.00,
                accountId: 'acc_sav_1',
                accountName: 'Primary Savings',
                status: 'Completed',
                refNo: 'UPI/REST/990142',
                icon: 'coffee'
            },
            {
                id: 'TXN-901612',
                date: '2026-10-15',
                time: '04:15 PM',
                description: 'Airtel Broadband Fiber Bill',
                category: 'Utilities',
                type: 'debit',
                amount: 1199.00,
                accountId: 'acc_sav_1',
                accountName: 'Primary Savings',
                status: 'Completed',
                refNo: 'BBPS/TEL/332190',
                icon: 'wifi'
            },
            {
                id: 'TXN-901501',
                date: '2026-10-12',
                time: '01:20 PM',
                description: 'Transfer to Priya Sharma (Sister)',
                category: 'Transfer',
                type: 'debit',
                amount: 10000.00,
                accountId: 'acc_sav_1',
                accountName: 'Primary Savings',
                status: 'Completed',
                refNo: 'IMPS/P2P/551902',
                icon: 'send'
            },
            {
                id: 'TXN-901430',
                date: '2026-10-10',
                time: '06:00 PM',
                description: 'Netflix 4K Premium Subscription',
                category: 'Entertainment',
                type: 'debit',
                amount: 649.00,
                accountId: 'acc_sav_1',
                accountName: 'Primary Savings',
                status: 'Completed',
                refNo: 'REC/SUB/440192',
                icon: 'film'
            },
            {
                id: 'TXN-901310',
                date: '2026-10-06',
                time: '03:10 PM',
                description: 'HP Petrol Pump Fuel',
                category: 'Travel',
                type: 'debit',
                amount: 3200.00,
                accountId: 'acc_sav_1',
                accountName: 'Primary Savings',
                status: 'Completed',
                refNo: 'POS/FUEL/110943',
                icon: 'navigation'
            }
        ],
        budgets: [
            { category: 'Food', name: 'Food & Dining', budget: 12000, spent: 6300, color: '#f59e0b' },
            { category: 'Shopping', name: 'Shopping & Retail', budget: 10000, spent: 6499, color: '#ec4899' },
            { category: 'Utilities', name: 'Utilities & Bills', budget: 8000, spent: 3379, color: '#3b82f6' },
            { category: 'Entertainment', name: 'Entertainment & Media', budget: 4000, spent: 649, color: '#8b5cf6' },
            { category: 'Travel', name: 'Travel & Transport', budget: 6000, spent: 3200, color: '#06b6d4' },
            { category: 'Health', name: 'Health & Wellness', budget: 5000, spent: 1250, color: '#10b981' }
        ],
        savingsGoals: [
            {
                id: 'goal_1',
                title: 'Emergency Reserve Fund',
                target: 150000,
                current: 115000,
                category: 'Safety',
                targetDate: 'Dec 2026',
                color: '#10b981'
            },
            {
                id: 'goal_2',
                title: 'New Apple MacBook Pro M3',
                target: 180000,
                current: 135000,
                category: 'Gadgets',
                targetDate: 'Nov 2026',
                color: '#3b82f6'
            },
            {
                id: 'goal_3',
                title: 'Goa Holiday Getaway',
                target: 45000,
                current: 38000,
                category: 'Travel',
                targetDate: 'Jan 2027',
                color: '#f59e0b'
            }
        ],
        beneficiaries: [
            {
                id: 'ben_1',
                name: 'Priya Sharma',
                relation: 'Sister',
                accountNumber: '984512003412',
                ifsc: 'HDFC0001245',
                bank: 'HDFC Bank',
                upi: 'priya@okhdfcbank',
                avatarColor: '#ec4899',
                initials: 'PS'
            },
            {
                id: 'ben_2',
                name: 'Amit Kumar',
                relation: 'Colleague',
                accountNumber: '409128301129',
                ifsc: 'SBIN0004012',
                bank: 'State Bank of India',
                upi: 'amit.k@oksbi',
                avatarColor: '#3b82f6',
                initials: 'AK'
            },
            {
                id: 'ben_3',
                name: 'Sneha Patel',
                relation: 'Friend',
                accountNumber: '610293847102',
                ifsc: 'ICIC0000412',
                bank: 'ICICI Bank',
                upi: 'sneha@icici',
                avatarColor: '#10b981',
                initials: 'SP'
            },
            {
                id: 'ben_4',
                name: 'Vikram Singh',
                relation: 'Landlord (Rent)',
                accountNumber: '110928374019',
                ifsc: 'KKBK0008812',
                bank: 'Kotak Mahindra',
                upi: 'vikram.rent@okaxis',
                avatarColor: '#f59e0b',
                initials: 'VS'
            }
        ],
        notifications: [
            { id: 1, title: 'Salary Credited', time: '2 days ago', unread: false, text: '₹75,000 credited from TechCorp Global to Primary Savings.' },
            { id: 2, title: 'High Spend Alert', time: '5 days ago', unread: false, text: 'Shopping category has reached 65% of your monthly budget.' },
            { id: 3, title: 'Security Check Passed', time: '1 week ago', unread: false, text: '2-Factor Authentication was successfully verified on your device.' }
        ]
    };

    // BankStore Singleton class
    class BankStore {
        constructor() {
            this.state = this.loadState();
            this.listeners = [];
            this.applySavedTheme();
        }

        loadState() {
            try {
                try { localStorage.removeItem('bankease_state_v1'); } catch (e) { }
                const data = localStorage.getItem(STORAGE_KEY);
                if (data) {
                    const parsed = JSON.parse(data);
                    const merged = Object.assign({}, DEFAULT_STATE, parsed);
                    merged.user = Object.assign({}, DEFAULT_STATE.user, parsed.user || {});
                    if (merged.user.email === 'rohit.saraswat@NAGRIK BANK.io') {
                        merged.user.email = 'rohit.saraswat@nagrikbank.in';
                    }
                    return merged;
                }
            } catch (err) {
                console.warn('Error reading from localStorage:', err);
            }
            this.saveState(DEFAULT_STATE);
            return JSON.parse(JSON.stringify(DEFAULT_STATE));
        }

        saveState(state = this.state) {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
                this.state = state;
                this.notify();
            } catch (err) {
                console.error('Error saving state:', err);
            }
        }

        resetToDefaults() {
            this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
            this.saveState();
            this.showToast('Demo data reset to original defaults!', 'info');
            setTimeout(() => {
                window.location.reload();
            }, 600);
        }

        subscribe(callback) {
            this.listeners.push(callback);
        }

        notify() {
            this.listeners.forEach(cb => {
                try {
                    cb(this.state);
                } catch (e) {
                    console.error(e);
                }
            });
        }

        // ================= GETTERS =================
        getState() {
            return this.state;
        }

        getPrimaryAccount() {
            return (this.state.accounts || []).find(a => a.type === 'Savings') || (this.state.accounts || [])[0];
        }

        getUser() {
            return this.state.user;
        }

        getAccounts() {
            return this.state.accounts || [];
        }

        getAccountById(id) {
            return (this.state.accounts || []).find(a => a.id === id);
        }

        getTotalBalance() {
            return (this.state.accounts || []).reduce((sum, acc) => sum + (acc.balance || 0), 0);
        }

        getLiquidBalance() {
            // Excluding fixed deposit
            return (this.state.accounts || [])
                .filter(a => a.type !== 'Fixed Deposit')
                .reduce((sum, acc) => sum + (acc.balance || 0), 0);
        }

        getTransactions() {
            return this.state.transactions || [];
        }

        getMonthlyStats() {
            const txs = this.state.transactions || [];
            let income = 0;
            let expense = 0;

            txs.forEach(t => {
                if (t.type === 'credit') {
                    income += Number(t.amount || 0);
                } else if (t.type === 'debit') {
                    expense += Number(t.amount || 0);
                }
            });

            return {
                income,
                expense,
                netSavings: Math.max(0, income - expense),
                savingsRate: income > 0 ? Math.round(((income - expense) / income) * 100) : 0
            };
        }

        getBudgets() {
            return this.state.budgets || [];
        }

        getSavingsGoals() {
            return this.state.savingsGoals || [];
        }

        getBeneficiaries() {
            return this.state.beneficiaries || [];
        }

        getNotifications() {
            return this.state.notifications || [];
        }

        // ================= ACTIONS =================

        // Transfer Money
        transferMoney({ fromAccountId, recipientName, recipientAccount, amount, remarks, mode = 'UPI' }) {
            amount = parseFloat(amount);
            if (isNaN(amount) || amount <= 0) {
                return { success: false, message: 'Please enter a valid positive transfer amount.' };
            }

            const fromAcc = this.getAccountById(fromAccountId);
            if (!fromAcc) {
                return { success: false, message: 'Source account not found.' };
            }

            if (fromAcc.status === 'Frozen') {
                return { success: false, message: `${fromAcc.name} is currently frozen. Unfreeze it to make transfers.` };
            }

            if (fromAcc.balance < amount) {
                return {
                    success: false,
                    message: `Insufficient balance in ${fromAcc.name}. Available: ${this.formatCurrency(fromAcc.balance)}`
                };
            }

            if (amount > (this.state.user.dailyTransferLimit || 100000)) {
                return {
                    success: false,
                    message: `Amount exceeds your daily online transfer limit of ${this.formatCurrency(this.state.user.dailyTransferLimit)}.`
                };
            }

            // Deduct balance
            fromAcc.balance -= amount;

            const now = new Date();
            const dateStr = now.toISOString().split('T')[0];
            const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const txnId = 'TXN-' + Math.floor(100000 + Math.random() * 900000);
            const refNo = `${mode}/TRF/${Math.floor(10000000 + Math.random() * 90000000)}`;

            const newTxn = {
                id: txnId,
                date: dateStr,
                time: timeStr,
                description: `Transfer to ${recipientName} (${mode})`,
                category: 'Transfer',
                type: 'debit',
                amount: amount,
                accountId: fromAcc.id,
                accountName: fromAcc.name,
                status: 'Completed',
                refNo: refNo,
                remarks: remarks || 'Funds Transfer',
                recipientName: recipientName,
                recipientAccount: recipientAccount,
                mode: mode,
                icon: 'send'
            };

            this.state.transactions.unshift(newTxn);

            // Add notification
            this.addNotification(
                'Money Transferred',
                `Successfully transferred ${this.formatCurrency(amount)} to ${recipientName}. Ref: ${txnId}`,
                'info'
            );

            this.saveState();
            return {
                success: true,
                message: `Transfer of ${this.formatCurrency(amount)} to ${recipientName} successful!`,
                transaction: newTxn
            };
        }

        // Quick Deposit Funds
        depositFunds(accountId, amount, note = 'Online Self Deposit') {
            amount = parseFloat(amount);
            if (isNaN(amount) || amount <= 0) {
                return { success: false, message: 'Invalid deposit amount.' };
            }

            const acc = this.getAccountById(accountId);
            if (!acc) return { success: false, message: 'Account not found.' };

            acc.balance += amount;

            const now = new Date();
            const dateStr = now.toISOString().split('T')[0];
            const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const txnId = 'TXN-' + Math.floor(100000 + Math.random() * 900000);

            const newTxn = {
                id: txnId,
                date: dateStr,
                time: timeStr,
                description: note,
                category: 'Income',
                type: 'credit',
                amount: amount,
                accountId: acc.id,
                accountName: acc.name,
                status: 'Completed',
                refNo: `DEP/NET/${Math.floor(10000000 + Math.random() * 90000000)}`,
                icon: 'plus-circle'
            };

            this.state.transactions.unshift(newTxn);
            this.addNotification('Funds Deposited', `${this.formatCurrency(amount)} added to ${acc.name}.`, 'success');
            this.saveState();

            return { success: true, message: `Successfully deposited ${this.formatCurrency(amount)}!`, transaction: newTxn };
        }

        // Branch Counter Cash Withdrawal
        withdrawFunds(accountId, amount, note = 'Branch Counter Cash Withdrawal') {
            amount = parseFloat(amount);
            if (isNaN(amount) || amount <= 0) {
                return { success: false, message: 'Invalid withdrawal amount.' };
            }

            const acc = this.getAccountById(accountId) || this.getPrimaryAccount();
            if (!acc) return { success: false, message: 'Account not found.' };

            if (acc.status === 'Frozen') {
                return { success: false, message: `${acc.name} is currently frozen. Unfreeze account before withdrawal.` };
            }

            if (acc.balance < amount) {
                return { success: false, message: 'Insufficient funds for withdrawal.' };
            }

            acc.balance -= amount;

            const now = new Date();
            const dateStr = now.toISOString().split('T')[0];
            const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const txnId = 'TXN-' + Math.floor(100000 + Math.random() * 900000);

            const newTxn = {
                id: txnId,
                date: dateStr,
                time: timeStr,
                description: note,
                category: 'Cash',
                type: 'debit',
                amount: amount,
                accountId: acc.id,
                accountName: acc.name,
                status: 'Completed',
                refNo: `WDL/CTR/${Math.floor(10000000 + Math.random() * 90000000)}`,
                icon: 'minus-circle'
            };

            this.state.transactions.unshift(newTxn);
            this.addNotification('Counter Cash Withdrawal', `${this.formatCurrency(amount)} withdrawn from ${acc.name}.`, 'warning');
            this.saveState();

            return { success: true, message: `Successfully processed withdrawal of ${this.formatCurrency(amount)}!`, transaction: newTxn };
        }

        // Toggle Account / Card Freeze (Admin or User)
        toggleAccountFreeze(accountId) {
            const acc = this.getAccountById(accountId) || this.getPrimaryAccount();
            if (!acc) return false;
            acc.status = (acc.status === 'Frozen') ? 'Active' : 'Frozen';
            if (acc.card) {
                acc.card.frozen = (acc.status === 'Frozen');
            }
            this.saveState();
            return acc.status === 'Frozen';
        }

        // Add New Account
        createAccount({ type, name, initialDeposit }) {
            const initial = parseFloat(initialDeposit) || 0;
            const randomSuffix = Math.floor(1000 + Math.random() * 9000);
            const fullAccNo = '458289' + Math.floor(100000 + Math.random() * 900000);

            const newAcc = {
                id: 'acc_usr_' + Date.now(),
                type: type || 'Savings',
                name: name || `${type} Account`,
                accountNumber: fullAccNo,
                displayNumber: `•••• •••• ${randomSuffix}`,
                balance: initial,
                interestRate: type === 'Fixed Deposit' ? '7.10% p.a.' : '3.80% p.a.',
                status: 'Active',
                ifsc: 'BEAS0001042',
                branch: 'Connaught Place Main Branch, New Delhi',
                card: {
                    number: '4582 ' + randomSuffix + ' ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(1000 + Math.random() * 9000),
                    holder: this.state.user.name.toUpperCase(),
                    expiry: '10/30',
                    cvv: String(Math.floor(100 + Math.random() * 900)),
                    type: 'VISA Classic',
                    frozen: false,
                    dailyLimit: 50000
                }
            };

            this.state.accounts.push(newAcc);

            if (initial > 0) {
                this.state.transactions.unshift({
                    id: 'TXN-' + Math.floor(100000 + Math.random() * 900000),
                    date: new Date().toISOString().split('T')[0],
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    description: `Initial Opening Deposit - ${newAcc.name}`,
                    category: 'Income',
                    type: 'credit',
                    amount: initial,
                    accountId: newAcc.id,
                    accountName: newAcc.name,
                    status: 'Completed',
                    refNo: `OPEN/ACC/${newAcc.id.toUpperCase()}`,
                    icon: 'check-circle'
                });
            }

            this.addNotification('New Account Created', `Your new ${newAcc.name} is now active.`, 'success');
            this.saveState();
            return { success: true, account: newAcc };
        }

        // Add Expense to Budget
        addExpense({ category, amount, description }) {
            amount = parseFloat(amount);
            if (isNaN(amount) || amount <= 0) return { success: false, message: 'Invalid amount.' };

            const budgetItem = (this.state.budgets || []).find(b => b.category.toLowerCase() === category.toLowerCase());
            if (budgetItem) {
                budgetItem.spent += amount;
            }

            const primaryAcc = this.state.accounts[0];
            if (primaryAcc) {
                primaryAcc.balance = Math.max(0, primaryAcc.balance - amount);
            }

            const txnId = 'TXN-' + Math.floor(100000 + Math.random() * 900000);
            this.state.transactions.unshift({
                id: txnId,
                date: new Date().toISOString().split('T')[0],
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                description: description || `Expense in ${category}`,
                category: category,
                type: 'debit',
                amount: amount,
                accountId: primaryAcc ? primaryAcc.id : 'acc_sav_1',
                accountName: primaryAcc ? primaryAcc.name : 'Primary Savings',
                status: 'Completed',
                refNo: `EXP/MAN/${Math.floor(100000 + Math.random() * 900000)}`,
                icon: 'tag'
            });

            this.saveState();
            return { success: true, message: `Recorded expense of ${this.formatCurrency(amount)} under ${category}.` };
        }

        // Contribute to Savings Goal
        contributeToGoal(goalId, amount) {
            amount = parseFloat(amount);
            if (isNaN(amount) || amount <= 0) return { success: false, message: 'Invalid contribution amount.' };

            const goal = (this.state.savingsGoals || []).find(g => g.id === goalId);
            if (!goal) return { success: false, message: 'Goal not found.' };

            const primaryAcc = this.state.accounts[0];
            if (!primaryAcc || primaryAcc.balance < amount) {
                return { success: false, message: 'Insufficient funds in Primary Savings account.' };
            }

            primaryAcc.balance -= amount;
            goal.current += amount;

            const txnId = 'TXN-' + Math.floor(100000 + Math.random() * 900000);
            this.state.transactions.unshift({
                id: txnId,
                date: new Date().toISOString().split('T')[0],
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                description: `Goal Deposit: ${goal.title}`,
                category: 'Transfer',
                type: 'debit',
                amount: amount,
                accountId: primaryAcc.id,
                accountName: primaryAcc.name,
                status: 'Completed',
                refNo: `GOAL/DEP/${goal.id}`,
                icon: 'target'
            });

            this.addNotification('Savings Goal Funded', `${this.formatCurrency(amount)} added to "${goal.title}".`, 'success');
            this.saveState();
            return { success: true, message: `Added ${this.formatCurrency(amount)} to ${goal.title}!` };
        }

        // Create New Savings Goal
        createGoal({ title, target, category, targetDate }) {
            const targetVal = parseFloat(target);
            if (!title || isNaN(targetVal) || targetVal <= 0) {
                return { success: false, message: 'Please provide a valid goal title and target amount.' };
            }

            const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            const newGoal = {
                id: 'goal_' + Date.now(),
                title: title.trim(),
                target: targetVal,
                current: 0,
                category: category || 'General',
                targetDate: targetDate || 'Next Year',
                color: randomColor
            };

            this.state.savingsGoals.push(newGoal);
            this.saveState();
            return { success: true, goal: newGoal };
        }

        // Toggle Card Freeze
        toggleCardFreeze(accountId) {
            const acc = this.getAccountById(accountId);
            if (!acc || !acc.card) return false;
            acc.card.frozen = !acc.card.frozen;
            this.saveState();
            return acc.card.frozen;
        }

        // Update User Profile
        updateProfile(data) {
            Object.assign(this.state.user, data);
            this.saveState();
            return { success: true, message: 'Profile updated successfully!' };
        }

        // Add Notification
        addNotification(title, text, type = 'info') {
            const newNotif = {
                id: Date.now(),
                title: title,
                text: text,
                time: 'Just now',
                unread: true,
                type: type
            };
            this.state.notifications = this.state.notifications || [];
            this.state.notifications.unshift(newNotif);
            if (this.state.notifications.length > 20) {
                this.state.notifications.pop();
            }
            this.saveState();
        }

        // Theme management
        toggleTheme() {
            const nextTheme = this.state.user.theme === 'dark' ? 'light' : 'dark';
            this.state.user.theme = nextTheme;
            this.applySavedTheme();
            this.saveState();
            return nextTheme;
        }

        applySavedTheme() {
            const theme = this.state.user.theme || 'light';
            document.documentElement.setAttribute('data-theme', theme);
        }

        // ================= HELPERS =================
        formatCurrency(amount) {
            const num = Number(amount) || 0;
            const sym = this.state.user.currencySymbol || '₹';
            // Format to Indian numbering format e.g. 1,82,450.00
            const parts = num.toFixed(2).split('.');
            let integerPart = parts[0];
            const decimalPart = parts[1];

            // Indian number comma separation: last 3 digits, then groups of 2
            const lastThree = integerPart.substring(integerPart.length - 3);
            const otherNumbers = integerPart.substring(0, integerPart.length - 3);
            if (otherNumbers !== '') {
                integerPart = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
            }

            return `${sym}${integerPart}.${decimalPart}`;
        }

        showToast(message, type = 'info') {
            let container = document.getElementById('nagrik-toast-container');
            if (!container) {
                container = document.createElement('div');
                container.id = 'nagrik-toast-container';
                container.className = 'bank-toast-container';
                document.body.appendChild(container);
            }

            const toast = document.createElement('div');
            toast.className = `bank-toast bank-toast-${type}`;

            let iconSvg = '';
            if (type === 'success') {
                iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
            } else if (type === 'error') {
                iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
            } else {
                iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
            }

            toast.innerHTML = `
                <div class="toast-icon">${iconSvg}</div>
                <div class="toast-body">${message}</div>
                <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
            `;

            container.appendChild(toast);

            // Auto dismiss after 4 seconds
            setTimeout(() => {
                toast.classList.add('fade-out');
                setTimeout(() => toast.remove(), 400);
            }, 4000);
        }
    }

    // Export to global window scope
    window.BankStore = new BankStore();

    // Listen to storage events across different tabs
    window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEY) {
            window.BankStore.state = window.BankStore.loadState();
            window.BankStore.notify();
        }
    });

    // Auto apply theme on DOM ready
    document.addEventListener('DOMContentLoaded', () => {
        window.BankStore.applySavedTheme();
    });
})();


// ==============================================================
// MEMBER 1 INTERACTIVE LOGIC
// ==============================================================
// ==============================================================
// Member 1 - Dashboard & Accounts Interactive Logic
// ==============================================================

document.addEventListener('DOMContentLoaded', () => {
    if (!window.BankStore) {
        console.error('BankStore not loaded!');
        return;
    }

    let hideBalance = false;

    // Check which page we are on
    const isDashboard = document.getElementById('dashboard-view');
    const isAccountsPage = document.getElementById('accounts-view');
    const isLoginPage = document.getElementById('login-view');
    const isAdminPage = document.getElementById('admin-view');

    // Authentication Guard: Ensure customer logs in before accessing Dashboard or Accounts
    if (isDashboard || isAccountsPage) {
        try {
            const session = JSON.parse(localStorage.getItem('nagrik_bank_session') || '{}');
            if (!session || !session.isLoggedIn) {
                window.location.replace('index.html');
                return;
            }
            if (session.role === 'admin') {
                window.location.replace('admin.html');
                return;
            }
        } catch (e) {
            window.location.replace('index.html');
            return;
        }
    }

    // Admin Authentication Guard: Only staff / admin allowed on CBS Admin portal
    if (isAdminPage) {
        try {
            const session = JSON.parse(localStorage.getItem('nagrik_bank_session') || '{}');
            if (!session || !session.isLoggedIn || session.role !== 'admin') {
                window.location.replace('index.html');
                return;
            }
        } catch (e) {
            window.location.replace('index.html');
            return;
        }
    }

    if (isDashboard) {
        initDashboard();
    }

    if (isAccountsPage) {
        initAccountsPage();
    }

    if (isLoginPage) {
        initLoginPage();
    }

    if (isAdminPage) {
        initAdminPage();
    }

    // Shared global header handlers (Theme, Notifs, etc.)
    initHeaderControls();

    // ==========================================================
    // LOGIN PAGE INITIALIZATION
    // ==========================================================
    function initLoginPage() {
        const loginForm = document.getElementById('netbanking-login-form');
        const fillDemoBtn = document.getElementById('btn-fill-demo');
        const togglePwdBtn = document.getElementById('btn-toggle-pwd');
        const pwdInput = document.getElementById('login-password');
        const custIdInput = document.getElementById('login-customer-id');
        const linkForgot = document.getElementById('link-forgot-pwd');
        const linkRegister = document.getElementById('link-register-user');

        const roleCustomerTab = document.getElementById('tab-role-customer');
        const roleAdminTab = document.getElementById('tab-role-admin');
        const loginHeading = document.getElementById('login-heading-text');
        const loginSubtext = document.getElementById('login-subtext');
        const lblLoginId = document.getElementById('lbl-login-id');
        const btnSubmitText = document.getElementById('btn-submit-text');
        const demoBannerText = document.getElementById('demo-banner-text');
        const selectedRoleInput = document.getElementById('login-selected-role');
        const registerPrompt = document.getElementById('auth-register-prompt');
        const authDivider = document.getElementById('auth-divider-box');

        function setLoginRole(role) {
            if (role === 'admin') {
                if (roleAdminTab) roleAdminTab.classList.add('active');
                if (roleCustomerTab) roleCustomerTab.classList.remove('active');
                if (selectedRoleInput) selectedRoleInput.value = 'admin';
                if (loginHeading) loginHeading.textContent = 'Branch Staff & CBS Terminal';
                if (loginSubtext) loginSubtext.textContent = 'Authorized Core Banking System access for branch staff & management';
                if (lblLoginId) lblLoginId.textContent = 'Employee ID / Staff Code';
                if (custIdInput) {
                    custIdInput.placeholder = 'Enter Employee ID (e.g. EMP-9021)';
                    custIdInput.value = 'EMP-9021';
                }
                if (pwdInput) pwdInput.value = 'admin123';
                if (btnSubmitText) btnSubmitText.textContent = 'Login to CBS Terminal';
                if (demoBannerText) demoBannerText.innerHTML = `<strong>Admin Demo:</strong> ID: <code>EMP-9021</code> | Pass: <code>admin123</code> (Click to Fill)`;
                if (registerPrompt) registerPrompt.style.display = 'none';
                if (authDivider) authDivider.style.display = 'none';
            } else {
                if (roleCustomerTab) roleCustomerTab.classList.add('active');
                if (roleAdminTab) roleAdminTab.classList.remove('active');
                if (selectedRoleInput) selectedRoleInput.value = 'customer';
                if (loginHeading) loginHeading.textContent = 'Login to Your Account';
                if (loginSubtext) loginSubtext.textContent = 'Access your personal banking and finance services securely';
                if (lblLoginId) lblLoginId.textContent = 'Customer ID / Account ID';
                if (custIdInput) {
                    custIdInput.placeholder = 'Enter Customer ID (e.g. NB123456)';
                    custIdInput.value = 'NB123456';
                }
                if (pwdInput) pwdInput.value = 'password123';
                if (btnSubmitText) btnSubmitText.textContent = 'Login to Account';
                if (demoBannerText) demoBannerText.innerHTML = `<strong>Customer Demo:</strong> ID: <code>NB123456</code> | Pass: <code>password123</code> (Click to Fill)`;
                if (registerPrompt) registerPrompt.style.display = 'block';
                if (authDivider) authDivider.style.display = 'flex';
            }
        }

        if (roleCustomerTab) {
            roleCustomerTab.addEventListener('click', () => setLoginRole('customer'));
        }
        if (roleAdminTab) {
            roleAdminTab.addEventListener('click', () => setLoginRole('admin'));
        }

        // One-click demo credential fill
        if (fillDemoBtn && custIdInput && pwdInput) {
            fillDemoBtn.addEventListener('click', () => {
                const isRoleAdmin = selectedRoleInput && selectedRoleInput.value === 'admin';
                if (isRoleAdmin) {
                    custIdInput.value = 'EMP-9021';
                    pwdInput.value = 'admin123';
                    window.BankStore.showToast('Admin staff credentials autofilled: EMP-9021 / admin123', 'info');
                } else {
                    custIdInput.value = 'NB123456';
                    pwdInput.value = 'password123';
                    window.BankStore.showToast('Customer demo credentials filled: NB123456 / password123', 'info');
                }
                custIdInput.focus();
            });
        }

        // Show / Hide Password toggle
        if (togglePwdBtn && pwdInput) {
            togglePwdBtn.addEventListener('click', () => {
                const isPassword = pwdInput.type === 'password';
                pwdInput.type = isPassword ? 'text' : 'password';
                togglePwdBtn.innerHTML = isPassword
                    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
                    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
            });
        }

        // Forgot password modal triggers
        if (linkForgot) {
            linkForgot.addEventListener('click', () => {
                openModal('forgot-password-modal');
            });
        }

        const forgotForm = document.getElementById('forgot-password-form');
        if (forgotForm) {
            forgotForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const userIn = document.getElementById('forgot-user-input').value;
                window.BankStore.showToast(`OTP recovery code dispatched for ${userIn}!`, 'success');
                closeModal('forgot-password-modal');
                forgotForm.reset();
            });
        }

        // Register user modal triggers
        if (linkRegister) {
            linkRegister.addEventListener('click', () => {
                openModal('register-user-modal');
            });
        }

        const regForm = document.getElementById('register-user-form');
        if (regForm) {
            regForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('reg-name').value;
                const acc = document.getElementById('reg-acc-num').value;
                window.BankStore.showToast(`Welcome ${name}! NetBanking registered successfully. You can now login.`, 'success');
                closeModal('register-user-modal');
                if (custIdInput) custIdInput.value = acc || 'NB123456';
                regForm.reset();
            });
        }

        // Login form submission
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const custId = custIdInput ? custIdInput.value.trim() : '';
                const pwd = pwdInput ? pwdInput.value.trim() : '';
                const currentRole = selectedRoleInput ? selectedRoleInput.value : 'customer';

                if (!custId || !pwd) {
                    window.BankStore.showToast('Please enter both ID and Password', 'warning');
                    return;
                }

                const submitBtn = document.getElementById('btn-login-submit');
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = `<span>Authenticating...</span>`;
                }

                const isAdminLogin = (currentRole === 'admin') || custId.toUpperCase().startsWith('EMP') || custId.toLowerCase() === 'admin';

                if (isAdminLogin) {
                    try {
                        localStorage.setItem('nagrik_bank_session', JSON.stringify({
                            isLoggedIn: true,
                            role: 'admin',
                            employeeId: custId || 'EMP-9021',
                            user: 'Vikram Malhotra',
                            designation: 'Senior Branch Manager',
                            branch: 'Civil Lines Branch #0402',
                            loginTime: new Date().toISOString()
                        }));
                    } catch (e) {}

                    window.BankStore.showToast('Staff credentials verified! Launching CBS Terminal...', 'success');
                    setTimeout(() => {
                        window.location.href = 'admin.html';
                    }, 600);
                } else {
                    try {
                        localStorage.setItem('nagrik_bank_session', JSON.stringify({
                            isLoggedIn: true,
                            role: 'customer',
                            customerId: custId,
                            user: 'Rohit Saraswat',
                            loginTime: new Date().toISOString()
                        }));
                    } catch (e) {}

                    window.BankStore.showToast('Authentication successful! Welcome to Nagrik Bank.', 'success');
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 600);
                }
            });
        }
    }

    // ==========================================================
    // ADMIN CBS & BRANCH TERMINAL INITIALIZATION
    // ==========================================================
    function initAdminPage() {
        // Admin staff details from session
        try {
            const session = JSON.parse(localStorage.getItem('nagrik_bank_session') || '{}');
            if (session && session.user) {
                const nameEl = document.getElementById('admin-staff-name');
                if (nameEl) nameEl.textContent = session.user;
            }
        } catch (e) {}

        // Admin Navigation Tabs
        const navBtns = document.querySelectorAll('.admin-nav-btn');
        const panels = document.querySelectorAll('.admin-panel');

        navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                navBtns.forEach(b => b.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));

                btn.classList.add('active');
                const targetPanel = document.getElementById(targetId);
                if (targetPanel) targetPanel.classList.add('active');
            });
        });

        // Overview Header Actions
        const btnQuickTeller = document.getElementById('btn-quick-teller-deposit');
        if (btnQuickTeller) {
            btnQuickTeller.addEventListener('click', () => {
                const tellerBtn = document.querySelector('[data-target="panel-teller"]');
                if (tellerBtn) tellerBtn.click();
            });
        }

        const btnViewAllAudit = document.getElementById('btn-view-all-audit');
        if (btnViewAllAudit) {
            btnViewAllAudit.addEventListener('click', () => {
                const auditBtn = document.querySelector('[data-target="panel-audit"]');
                if (auditBtn) auditBtn.click();
            });
        }

        // Live Clock in Status Strip
        const clockEl = document.getElementById('live-clock');
        function updateClock() {
            if (!clockEl) return;
            const now = new Date();
            const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
            const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
            clockEl.textContent = `${dateStr} | ${timeStr}`;
        }
        updateClock();
        setInterval(updateClock, 1000);

        // Core Customer Roster
        const ROSTER_KEY = 'nagrik_bank_admin_roster';
        function loadCustomerRoster() {
            let list = null;
            try {
                list = JSON.parse(localStorage.getItem(ROSTER_KEY));
            } catch (e) {}
            if (!list || !Array.isArray(list) || list.length === 0) {
                list = [
                    { id: 'NB123456', name: 'Rohit Saraswat', accountNo: '4582 8920 4582', type: 'Savings', status: 'Active', kyc: 'Verified', isPrimary: true },
                    { id: 'NB458921', name: 'Priya Sharma', accountNo: '5129 3840 9921', type: 'Current', balance: 148200, status: 'Active', kyc: 'Verified' },
                    { id: 'NB782103', name: 'Amit Verma', accountNo: '6621 9012 3451', type: 'Savings', balance: 84500, status: 'Active', kyc: 'Pending' },
                    { id: 'NB339102', name: 'Sunita Gupta', accountNo: '7812 4432 1098', type: 'Savings', balance: 215000, status: 'Active', kyc: 'Verified' }
                ];
                try { localStorage.setItem(ROSTER_KEY, JSON.stringify(list)); } catch (e) {}
            }
            return list;
        }

        function saveCustomerRoster(list) {
            try { localStorage.setItem(ROSTER_KEY, JSON.stringify(list)); } catch (e) {}
        }

        let roster = loadCustomerRoster();

        // Sync Rohit's live balance & account status with BankStore
        function syncPrimaryCustomer() {
            const rohit = roster.find(c => c.isPrimary);
            if (rohit) {
                rohit.balance = window.BankStore.getTotalBalance();
                const primaryAcc = window.BankStore.getPrimaryAccount();
                if (primaryAcc) {
                    rohit.status = primaryAcc.status === 'Frozen' ? 'Frozen' : 'Active';
                }
            }
        }

        // Render Overview KPIs
        function renderAdminMetrics() {
            syncPrimaryCustomer();
            const totalDepEl = document.getElementById('kpi-total-deposits');
            const totalAccEl = document.getElementById('kpi-active-accounts');
            const clearingEl = document.getElementById('kpi-clearing-volume');

            let totalBal = 0;
            roster.forEach(c => {
                totalBal += (c.isPrimary ? window.BankStore.getTotalBalance() : (c.balance || 0));
            });

            if (totalDepEl) totalDepEl.textContent = window.BankStore.formatCurrency(totalBal + 3850000);
            if (totalAccEl) totalAccEl.textContent = `${roster.length} Accounts`;

            const txns = window.BankStore.getTransactions();
            let sumToday = 0;
            txns.slice(0, 10).forEach(t => sumToday += (t.amount || 0));
            if (clearingEl) clearingEl.textContent = window.BankStore.formatCurrency(sumToday > 0 ? sumToday : 185400);

            const tbodyOverview = document.getElementById('overview-recent-txns-tbody');
            if (tbodyOverview) {
                tbodyOverview.innerHTML = txns.slice(0, 5).map(t => {
                    const isCredit = t.type === 'credit';
                    return `
                        <tr>
                            <td>
                                <strong>${t.id || 'TXN'}</strong>
                                <span class="admin-td-sub">${t.date} ${t.time || ''}</span>
                            </td>
                            <td>
                                <strong>${escapeHtml(t.description)}</strong>
                                <span class="admin-td-sub">${t.accountName || 'Primary Savings'}</span>
                            </td>
                            <td><span class="type-pill ${isCredit ? 'credit' : 'debit'}">${isCredit ? 'INWARD' : 'OUTWARD'}</span></td>
                            <td><strong style="color:${isCredit ? 'var(--success)' : 'var(--text-primary)'};">${(isCredit ? '+' : '-') + window.BankStore.formatCurrency(t.amount)}</strong></td>
                            <td><span class="status-pill success">Settled</span></td>
                        </tr>
                    `;
                }).join('');
            }
        }

        // Render Customer Accounts Roster Table
        function renderRosterTable() {
            syncPrimaryCustomer();
            const tbody = document.getElementById('customer-roster-tbody');
            if (!tbody) return;

            const searchVal = (document.getElementById('admin-customer-search-input')?.value || '').toLowerCase().trim();
            const statusFilter = document.getElementById('filter-customer-status')?.value || 'all';
            const typeFilter = document.getElementById('filter-customer-type')?.value || 'all';

            const filtered = roster.filter(c => {
                const matchesSearch = c.name.toLowerCase().includes(searchVal) ||
                                      c.id.toLowerCase().includes(searchVal) ||
                                      c.accountNo.replace(/\s/g, '').includes(searchVal.replace(/\s/g, ''));
                const matchesStatus = (statusFilter === 'all') || (c.status.toLowerCase() === statusFilter);
                const matchesType = (typeFilter === 'all') || (c.type.toLowerCase() === typeFilter);
                return matchesSearch && matchesStatus && matchesType;
            });

            if (filtered.length === 0) {
                tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:32px; color:var(--text-muted);">No matching customer accounts found.</td></tr>`;
                return;
            }

            tbody.innerHTML = filtered.map(c => {
                const bal = c.isPrimary ? window.BankStore.getTotalBalance() : (c.balance || 0);
                const isFrozen = (c.status === 'Frozen');
                const isVerified = (c.kyc === 'Verified');

                return `
                    <tr>
                        <td><code>${c.id}</code></td>
                        <td>
                            <div class="cust-cell">
                                <div class="avatar-sm">${c.name.split(' ').map(n=>n[0]).join('')}</div>
                                <div>
                                    <strong>${c.name}</strong>
                                    ${c.isPrimary ? '<span class="primary-tag">Primary NetBanking User</span>' : ''}
                                </div>
                            </div>
                        </td>
                        <td><span style="font-family:monospace; font-size:13px;">${c.accountNo}</span></td>
                        <td><span class="account-type-badge">${c.type}</span></td>
                        <td><strong>${window.BankStore.formatCurrency(bal)}</strong></td>
                        <td>
                            <span class="status-pill ${isFrozen ? 'danger' : 'success'}" id="status-badge-${c.id}">
                                ${isFrozen ? '● Frozen' : '● Active'}
                            </span>
                        </td>
                        <td>
                            <span class="status-pill ${isVerified ? 'success' : 'warning'}" id="kyc-badge-${c.id}">
                                ${isVerified ? '✓ Verified' : '⏳ Pending'}
                            </span>
                        </td>
                        <td>
                            <div class="table-actions">
                                <button class="btn-table-action ${isFrozen ? 'unfreeze' : 'freeze'}" onclick="window.AdminModule.toggleFreeze('${c.id}')" title="${isFrozen ? 'Unfreeze Account' : 'Freeze Account'}">
                                    ${isFrozen ? 'Unfreeze' : 'Freeze'}
                                </button>
                                ${!isVerified ? `<button class="btn-table-action approve" onclick="window.AdminModule.verifyKYC('${c.id}')">Verify KYC</button>` : ''}
                                <button class="btn-table-action teller" onclick="window.AdminModule.openTellerFor('${c.id}')" title="Cashier Deposit/Withdraw">Counter</button>
                                <button class="btn-table-action" onclick="window.AdminModule.viewLedger('${c.id}')" title="View Mini Statement">Statement</button>
                            </div>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        const searchInp = document.getElementById('admin-customer-search-input');
        if (searchInp) searchInp.addEventListener('input', renderRosterTable);
        const filterStatus = document.getElementById('filter-customer-status');
        if (filterStatus) filterStatus.addEventListener('change', renderRosterTable);
        const filterType = document.getElementById('filter-customer-type');
        if (filterType) filterType.addEventListener('change', renderRosterTable);

        const refreshMetricsBtn = document.getElementById('btn-refresh-admin-metrics');
        if (refreshMetricsBtn) {
            refreshMetricsBtn.addEventListener('click', () => {
                renderAdminMetrics();
                renderRosterTable();
                renderAuditTable();
                window.BankStore.showToast('Branch metrics refreshed with live CBS core ledger.', 'success');
            });
        }

        // ==========================================
        // TELLER DESK (Walk-in Cash Deposit / Withdrawal)
        // ==========================================
        const tellerForm = document.getElementById('teller-operation-form');
        const tellerCustId = document.getElementById('teller-customer-id');
        const tellerLookupBtn = document.getElementById('btn-teller-lookup');
        const tellerFillRohitBtn = document.getElementById('btn-teller-fill-rohit');
        const previewName = document.getElementById('preview-name');
        const previewAcc = document.getElementById('preview-acc');
        const previewBal = document.getElementById('preview-current-balance');
        const tellerSessionCountEl = document.getElementById('teller-session-count');
        let tellerSessionTxnCount = 0;

        function lookupTellerCustomer(id) {
            syncPrimaryCustomer();
            const cust = roster.find(c => c.id.toLowerCase() === id.toLowerCase() || c.accountNo.replace(/\s/g, '').includes(id.replace(/\s/g, '')));
            if (cust) {
                if (previewName) previewName.textContent = cust.name;
                if (previewAcc) previewAcc.textContent = `A/C: ${cust.accountNo} • ${cust.type} Account`;
                const bal = cust.isPrimary ? window.BankStore.getTotalBalance() : (cust.balance || 0);
                if (previewBal) previewBal.textContent = window.BankStore.formatCurrency(bal);
                return cust;
            } else {
                if (previewName) previewName.textContent = 'Account Not Found';
                if (previewAcc) previewAcc.textContent = 'Please check Customer ID or Account No.';
                if (previewBal) previewBal.textContent = '₹0.00';
                return null;
            }
        }

        if (tellerLookupBtn && tellerCustId) {
            tellerLookupBtn.addEventListener('click', () => {
                const found = lookupTellerCustomer(tellerCustId.value.trim());
                if (found) {
                    window.BankStore.showToast(`Account found: ${found.name}`, 'info');
                } else {
                    window.BankStore.showToast('No customer found matching that ID.', 'error');
                }
            });
        }

        if (tellerFillRohitBtn && tellerCustId) {
            tellerFillRohitBtn.addEventListener('click', () => {
                tellerCustId.value = 'NB123456';
                lookupTellerCustomer('NB123456');
                window.BankStore.showToast('Selected: Rohit Saraswat (NB123456)', 'info');
            });
        }

        const radioLabels = document.querySelectorAll('.teller-radio-label');
        radioLabels.forEach(lbl => {
            const radio = lbl.querySelector('input[type="radio"]');
            if (radio) {
                radio.addEventListener('change', () => {
                    radioLabels.forEach(l => l.classList.remove('active'));
                    lbl.classList.add('active');
                });
            }
        });

        if (tellerForm) {
            tellerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const custId = tellerCustId ? tellerCustId.value.trim() : '';
                const cust = lookupTellerCustomer(custId);
                if (!cust) {
                    window.BankStore.showToast('Please select a valid customer account first.', 'error');
                    return;
                }

                const opType = document.querySelector('input[name="teller-type"]:checked')?.value || 'deposit';
                const amount = parseFloat(document.getElementById('teller-amount')?.value || '0');
                const slipNo = document.getElementById('teller-slip-no')?.value || ('SLIP-' + Math.floor(10000 + Math.random() * 90000));
                const narration = document.getElementById('teller-narration')?.value || `Branch Counter Cash ${opType === 'deposit' ? 'Deposit' : 'Withdrawal'}`;

                if (isNaN(amount) || amount <= 0) {
                    window.BankStore.showToast('Please enter a valid amount.', 'warning');
                    return;
                }

                let success = false;

                if (cust.isPrimary) {
                    const primaryAcc = window.BankStore.getPrimaryAccount();
                    if (!primaryAcc) {
                        window.BankStore.showToast('Primary account not found.', 'error');
                        return;
                    }
                    if (opType === 'deposit') {
                        const res = window.BankStore.depositFunds(primaryAcc.id, amount, `${narration} (Voucher: ${slipNo})`);
                        success = res.success;
                    } else {
                        const res = window.BankStore.withdrawFunds(primaryAcc.id, amount, `${narration} (Voucher: ${slipNo})`);
                        success = res.success;
                        if (!success) {
                            window.BankStore.showToast(res.message, 'error');
                            return;
                        }
                    }
                } else {
                    if (opType === 'withdrawal' && (cust.balance || 0) < amount) {
                        window.BankStore.showToast('Insufficient funds in customer account.', 'error');
                        return;
                    }
                    if (opType === 'deposit') {
                        cust.balance = (cust.balance || 0) + amount;
                    } else {
                        cust.balance = (cust.balance || 0) - amount;
                    }
                    saveCustomerRoster(roster);
                    success = true;
                    const newTxn = {
                        id: 'TXN-' + Math.floor(100000 + Math.random() * 900000),
                        date: new Date().toISOString().split('T')[0],
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        description: `${narration} (Voucher: ${slipNo})`,
                        category: 'Cash',
                        type: opType === 'deposit' ? 'credit' : 'debit',
                        amount: amount,
                        accountName: `${cust.name} (${cust.type})`,
                        status: 'Completed',
                        refNo: slipNo
                    };
                    window.BankStore.getState().transactions.unshift(newTxn);
                    window.BankStore.saveState();
                }

                if (success) {
                    tellerSessionTxnCount++;
                    if (tellerSessionCountEl) tellerSessionCountEl.textContent = `${tellerSessionTxnCount} Cleared`;

                    const placeholder = document.getElementById('teller-empty-placeholder');
                    if (placeholder) placeholder.style.display = 'none';

                    const list = document.getElementById('teller-recent-list');
                    if (list) {
                        const card = document.createElement('div');
                        card.className = `teller-voucher-card ${opType}`;
                        card.innerHTML = `
                            <div class="voucher-top">
                                <div>
                                    <span class="voucher-tag">${opType === 'deposit' ? 'CASH DEPOSIT RECEIPT' : 'CASH WITHDRAWAL VOUCHER'}</span>
                                    <h4 class="voucher-name">${cust.name} (${cust.id})</h4>
                                </div>
                                <div class="voucher-amount ${opType}">${(opType === 'deposit' ? '+' : '-') + window.BankStore.formatCurrency(amount)}</div>
                            </div>
                            <div class="voucher-meta">
                                <span>Slip: <strong>${slipNo}</strong></span>
                                <span>A/C: ${cust.accountNo}</span>
                                <span>Time: ${new Date().toLocaleTimeString()}</span>
                            </div>
                            <div class="voucher-note">${narration} • Authorized by Branch Manager</div>
                        `;
                        list.prepend(card);
                    }

                    window.BankStore.showToast(`Counter Voucher ${slipNo} processed successfully! ${window.BankStore.formatCurrency(amount)} ${opType === 'deposit' ? 'credited to' : 'debited from'} ${cust.name}.`, 'success');

                    lookupTellerCustomer(cust.id);
                    renderAdminMetrics();
                    renderRosterTable();
                    renderAuditTable();

                    document.getElementById('teller-amount').value = '';
                    document.getElementById('teller-slip-no').value = 'SLIP-' + Math.floor(10000 + Math.random() * 90000);
                }
            });
        }

        // ==========================================
        // AUDIT & SURVEILLANCE
        // ==========================================
        function renderAuditTable() {
            const tbody = document.getElementById('audit-master-tbody');
            if (!tbody) return;

            const searchVal = (document.getElementById('audit-search-input')?.value || '').toLowerCase().trim();
            const filterType = document.getElementById('audit-filter-type')?.value || 'all';

            const txns = window.BankStore.getTransactions();
            const filtered = txns.filter(t => {
                const matchesSearch = (t.description || '').toLowerCase().includes(searchVal) ||
                                      (t.refNo || '').toLowerCase().includes(searchVal) ||
                                      (t.id || '').toLowerCase().includes(searchVal) ||
                                      (t.category || '').toLowerCase().includes(searchVal);
                const matchesType = (filterType === 'all') || (t.type === filterType);
                return matchesSearch && matchesType;
            });

            if (filtered.length === 0) {
                tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:32px; color:var(--text-muted);">No transactions match the surveillance criteria.</td></tr>`;
                return;
            }

            tbody.innerHTML = filtered.map(t => {
                const isCredit = t.type === 'credit';
                const isHighValue = (t.amount >= 50000);
                return `
                    <tr>
                        <td><code style="font-size:12px;">${t.refNo || t.id}</code></td>
                        <td><span style="font-size:12px; color:var(--text-secondary);">${t.date} ${t.time || ''}</span></td>
                        <td>
                            <strong>${escapeHtml(t.description)}</strong>
                            <span class="admin-td-sub">${t.accountName || 'Primary Savings'}</span>
                        </td>
                        <td><span class="channel-badge">${t.category || 'Core CBS'}</span></td>
                        <td><span class="type-pill ${isCredit ? 'credit' : 'debit'}">${isCredit ? 'INWARD' : 'OUTWARD'}</span></td>
                        <td><strong style="color:${isCredit ? 'var(--success)' : 'var(--text-primary)'};">${(isCredit ? '+' : '-') + window.BankStore.formatCurrency(t.amount)}</strong></td>
                        <td>
                            ${isHighValue
                                ? `<span class="surveillance-pill alert">⚠️ High Value</span>`
                                : `<span class="surveillance-pill ok">✓ Cleared</span>`}
                        </td>
                        <td>
                            <button class="btn-table-action" onclick="window.BankStore.showToast('Transaction audit log verified and logged in tamper-evident CBS journal.', 'info')">Audit</button>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        const auditSearchInp = document.getElementById('audit-search-input');
        if (auditSearchInp) auditSearchInp.addEventListener('input', renderAuditTable);
        const auditFilterType = document.getElementById('audit-filter-type');
        if (auditFilterType) auditFilterType.addEventListener('change', renderAuditTable);

        const exportCsvBtn = document.getElementById('btn-export-audit-csv');
        if (exportCsvBtn) {
            exportCsvBtn.addEventListener('click', () => {
                const txns = window.BankStore.getTransactions();
                let csv = 'RefNo,Date,Time,Description,Category,Type,Amount,Status\n';
                txns.forEach(t => {
                    csv += `"${t.refNo || t.id}","${t.date}","${t.time || ''}","${t.description.replace(/"/g, '""')}","${t.category}","${t.type}",${t.amount},"${t.status}"\n`;
                });
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `nagrik_bank_audit_trail_${new Date().toISOString().split('T')[0]}.csv`;
                a.click();
                URL.revokeObjectURL(url);
                window.BankStore.showToast('Audit CSV downloaded successfully.', 'success');
            });
        }

        // ==========================================
        // CUSTOMER ONBOARDING
        // ==========================================
        const onboardForm = document.getElementById('onboard-customer-form');
        if (onboardForm) {
            onboardForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('onboard-name')?.value.trim();
                const mobile = document.getElementById('onboard-mobile')?.value.trim();
                const email = document.getElementById('onboard-email')?.value.trim();
                const kyc = document.getElementById('onboard-kyc-status')?.value === 'verified' ? 'Verified' : 'Pending';
                const accType = document.getElementById('onboard-acc-type')?.value || 'Savings';
                const deposit = parseFloat(document.getElementById('onboard-deposit')?.value || '5000');

                const newId = 'NB' + Math.floor(100000 + Math.random() * 900000);
                const randomAcc = '4582 ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(1000 + Math.random() * 9000);

                const newCustomer = {
                    id: newId,
                    name: name,
                    accountNo: randomAcc,
                    type: accType,
                    balance: deposit,
                    status: 'Active',
                    kyc: kyc,
                    mobile: mobile,
                    email: email
                };

                roster.push(newCustomer);
                saveCustomerRoster(roster);

                window.BankStore.getState().transactions.unshift({
                    id: 'TXN-' + Math.floor(100000 + Math.random() * 900000),
                    date: new Date().toISOString().split('T')[0],
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    description: `New Account Opening Deposit - ${name}`,
                    category: 'Income',
                    type: 'credit',
                    amount: deposit,
                    accountName: `${name} (${accType})`,
                    status: 'Completed',
                    refNo: `OPEN/${newId}`,
                    icon: 'check-circle'
                });
                window.BankStore.saveState();

                window.BankStore.showToast(`New Account opened successfully for ${name}! Customer ID: ${newId}`, 'success');
                onboardForm.reset();

                const custTabBtn = document.querySelector('[data-target="panel-customers"]');
                if (custTabBtn) custTabBtn.click();

                renderAdminMetrics();
                renderRosterTable();
                renderAuditTable();
            });
        }

        // ==========================================
        // ADMIN MODULE GLOBAL ACTIONS
        // ==========================================
        window.AdminModule = {
            toggleFreeze: function (id) {
                const cust = roster.find(c => c.id === id);
                if (!cust) return;

                if (cust.isPrimary) {
                    const isFrozen = window.BankStore.toggleAccountFreeze();
                    cust.status = isFrozen ? 'Frozen' : 'Active';
                } else {
                    cust.status = cust.status === 'Frozen' ? 'Active' : 'Frozen';
                    saveCustomerRoster(roster);
                }

                window.BankStore.showToast(`Account for ${cust.name} (${cust.id}) is now ${cust.status.toUpperCase()}.`, cust.status === 'Frozen' ? 'warning' : 'success');
                renderRosterTable();
                renderAdminMetrics();
            },

            verifyKYC: function (id) {
                const cust = roster.find(c => c.id === id);
                if (!cust) return;
                cust.kyc = 'Verified';
                saveCustomerRoster(roster);
                window.BankStore.showToast(`Biometric KYC verification approved for ${cust.name}.`, 'success');
                renderRosterTable();
            },

            openTellerFor: function (id) {
                const tellerBtn = document.querySelector('[data-target="panel-teller"]');
                if (tellerBtn) tellerBtn.click();
                if (tellerCustId) {
                    tellerCustId.value = id;
                    lookupTellerCustomer(id);
                }
            },

            viewLedger: function (id) {
                syncPrimaryCustomer();
                const cust = roster.find(c => c.id === id);
                if (!cust) return;

                const modalTitle = document.getElementById('stmt-modal-title');
                const modalSub = document.getElementById('stmt-modal-sub');
                const modalBody = document.getElementById('stmt-modal-body');

                if (modalTitle) modalTitle.textContent = `${cust.name} — Customer 360 Ledger`;
                if (modalSub) modalSub.textContent = `Customer ID: ${cust.id} • Account No: ${cust.accountNo} • ${cust.type} Account`;

                const bal = cust.isPrimary ? window.BankStore.getTotalBalance() : (cust.balance || 0);
                const txns = window.BankStore.getTransactions().slice(0, 6);

                if (modalBody) {
                    modalBody.innerHTML = `
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-bottom:20px; background:var(--bg-subtle); padding:16px; border-radius:var(--radius-md);">
                            <div>
                                <span style="font-size:11px; color:var(--text-muted); text-transform:uppercase;">Account Status</span>
                                <div style="font-weight:700; color:${cust.status === 'Frozen' ? 'var(--danger)' : 'var(--success)'};">${cust.status}</div>
                            </div>
                            <div>
                                <span style="font-size:11px; color:var(--text-muted); text-transform:uppercase;">KYC Compliance</span>
                                <div style="font-weight:700; color:${cust.kyc === 'Verified' ? 'var(--success)' : 'var(--warning)'};">${cust.kyc}</div>
                            </div>
                            <div>
                                <span style="font-size:11px; color:var(--text-muted); text-transform:uppercase;">Available Balance</span>
                                <div style="font-size:18px; font-weight:800; color:var(--brand-blue);">${window.BankStore.formatCurrency(bal)}</div>
                            </div>
                        </div>

                        <h4 style="font-size:14px; margin-bottom:12px; color:var(--text-primary);">Recent Statement Transactions</h4>
                        <div class="admin-table-wrap">
                            <table class="admin-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Description</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${txns.map(t => {
                                        const isCredit = t.type === 'credit';
                                        return `
                                            <tr>
                                                <td>${t.date}</td>
                                                <td><strong>${escapeHtml(t.description)}</strong></td>
                                                <td><span class="type-pill ${isCredit ? 'credit' : 'debit'}">${isCredit ? 'CR' : 'DR'}</span></td>
                                                <td><strong style="color:${isCredit ? 'var(--success)' : 'var(--text-primary)'};">${(isCredit ? '+' : '-') + window.BankStore.formatCurrency(t.amount)}</strong></td>
                                                <td><span class="status-pill success">${t.status}</span></td>
                                            </tr>
                                        `;
                                    }).join('')}
                                </tbody>
                            </table>
                        </div>
                    `;
                }

                openModal('customer-statement-modal');
            },

            handleLoanAction: function (loanId, action) {
                const statusEl = document.getElementById(`loan-status-${loanId}`);
                const row = document.getElementById(`loan-row-${loanId}`);
                const badge = document.getElementById('pending-loan-badge');

                if (statusEl && (statusEl.textContent === 'Sanctioned & Disbursed' || statusEl.textContent === 'Rejected')) {
                    return;
                }

                if (action === 'approve') {
                    if (statusEl) {
                        statusEl.className = 'status-pill success';
                        statusEl.textContent = 'Sanctioned & Disbursed';
                    }
                    if (row) {
                        const btns = row.querySelectorAll('.table-actions button');
                        btns.forEach(b => {
                            b.disabled = true;
                            b.textContent = 'Sanctioned';
                        });
                    }
                    window.BankStore.showToast(`Loan Application ${loanId} approved by Branch Manager and sanction letter dispatched!`, 'success');
                } else {
                    if (statusEl) {
                        statusEl.className = 'status-pill danger';
                        statusEl.textContent = 'Rejected';
                    }
                    if (row) {
                        const btns = row.querySelectorAll('.table-actions button');
                        btns.forEach(b => {
                            b.disabled = true;
                            b.textContent = 'Rejected';
                        });
                    }
                    window.BankStore.showToast(`Loan Application ${loanId} rejected.`, 'info');
                }

                try {
                    const savedLoans = JSON.parse(localStorage.getItem('nagrik_bank_loans') || '{}');
                    savedLoans[loanId] = action;
                    localStorage.setItem('nagrik_bank_loans', JSON.stringify(savedLoans));
                } catch (e) {}

                if (badge) {
                    let cur = parseInt(badge.textContent) || 0;
                    if (cur > 0) badge.textContent = cur - 1;
                }
            }
        };

        // Restore persisted Loan Desk decisions on load
        (function syncLoanDecisions() {
            try {
                const savedLoans = JSON.parse(localStorage.getItem('nagrik_bank_loans') || '{}');
                let pendingCount = 0;
                ['LN-8021', 'LN-8023'].forEach(loanId => {
                    const action = savedLoans[loanId];
                    const statusEl = document.getElementById(`loan-status-${loanId}`);
                    const row = document.getElementById(`loan-row-${loanId}`);
                    if (!action) {
                        pendingCount++;
                        return;
                    }
                    if (statusEl) {
                        statusEl.className = action === 'approve' ? 'status-pill success' : 'status-pill danger';
                        statusEl.textContent = action === 'approve' ? 'Sanctioned & Disbursed' : 'Rejected';
                    }
                    if (row) {
                        row.querySelectorAll('.table-actions button').forEach(b => {
                            b.disabled = true;
                            b.textContent = action === 'approve' ? 'Sanctioned' : 'Rejected';
                        });
                    }
                });
                const badge = document.getElementById('pending-loan-badge');
                if (badge) badge.textContent = pendingCount;
            } catch (e) {}
        })();

        const adminLogoutBtn = document.getElementById('btn-admin-logout');
        if (adminLogoutBtn) {
            adminLogoutBtn.addEventListener('click', () => {
                try {
                    localStorage.removeItem('nagrik_bank_session');
                } catch (e) {}
            });
        }

        lookupTellerCustomer('NB123456');
        renderAdminMetrics();
        renderRosterTable();
        renderAuditTable();

        window.BankStore.subscribe(() => {
            syncPrimaryCustomer();
            renderAdminMetrics();
            renderRosterTable();
            renderAuditTable();
        });
    }

    // ==========================================================
    // DASHBOARD INITIALIZATION
    // ==========================================================
    function initDashboard() {
        renderDashboardData();

        // Subscribe to changes from BankStore (e.g. transfers, deposits)
        window.BankStore.subscribe(() => {
            renderDashboardData();
        });

        // Balance privacy toggle
        const toggleBtn = document.getElementById('toggle-balance-visibility');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                hideBalance = !hideBalance;
                updateBalanceDisplay();
            });
        }

        // 3D Card Flip
        const card3D = document.getElementById('virtual-card-inner');
        const flipBtn = document.getElementById('flip-card-btn');
        if (card3D && flipBtn) {
            flipBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                card3D.classList.toggle('flipped');
            });
            card3D.addEventListener('click', () => {
                card3D.classList.toggle('flipped');
            });
        }

        // Freeze Card Toggle
        const freezeBtn = document.getElementById('freeze-card-btn');
        if (freezeBtn) {
            freezeBtn.addEventListener('click', () => {
                const accounts = window.BankStore.getAccounts();
                const primary = accounts[0];
                if (primary) {
                    const isFrozen = window.BankStore.toggleCardFreeze(primary.id);
                    freezeBtn.innerHTML = isFrozen
                        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Unfreeze`
                        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Freeze`;

                    window.BankStore.showToast(isFrozen ? 'Card has been temporarily frozen for security.' : 'Card is now unfrozen and active!', isFrozen ? 'error' : 'success');
                    renderCardDetails();
                }
            });
        }

        // Quick Deposit Modal Wireup
        const quickDepositBtn = document.getElementById('btn-quick-deposit');
        const depositModal = document.getElementById('deposit-modal');
        const depositForm = document.getElementById('quick-deposit-form');

        if (quickDepositBtn && depositModal) {
            quickDepositBtn.addEventListener('click', () => {
                populateDepositAccountDropdown();
                openModal('deposit-modal');
            });
        }

        if (depositForm) {
            depositForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const accountId = document.getElementById('deposit-account-select').value;
                const amount = parseFloat(document.getElementById('deposit-amount-input').value);
                const note = document.getElementById('deposit-note-input').value || 'Quick Online Deposit';

                if (isNaN(amount) || amount <= 0) {
                    window.BankStore.showToast('Please enter a valid deposit amount.', 'error');
                    return;
                }

                const res = window.BankStore.depositFunds(accountId, amount, note);
                if (res.success) {
                    window.BankStore.showToast(res.message, 'success');
                    closeModal('deposit-modal');
                    depositForm.reset();
                } else {
                    window.BankStore.showToast(res.message, 'error');
                }
            });
        }

        // QR Code Modal Wireup
        const qrBtn = document.getElementById('btn-show-qr');
        if (qrBtn) {
            qrBtn.addEventListener('click', () => {
                openModal('qr-modal');
            });
        }

        const copyUpiBtn = document.getElementById('btn-copy-upi');
        if (copyUpiBtn) {
            copyUpiBtn.addEventListener('click', () => {
                const user = window.BankStore.getUser();
                const upi = `${(user.phone || '9876543210').replace(/[^0-9]/g, '').slice(-10)}@nagrikbank`;
                navigator.clipboard.writeText(upi).then(() => {
                    window.BankStore.showToast('UPI ID copied to clipboard: ' + upi, 'success');
                }).catch(() => {
                    window.BankStore.showToast('UPI ID: ' + upi, 'info');
                });
            });
        }

        // Recent transactions filter tabs
        const filterBtns = document.querySelectorAll('.txn-filter-pill');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderRecentTransactions(btn.getAttribute('data-filter'));
            });
        });
    }

    function renderDashboardData() {
        const user = window.BankStore.getUser();
        const stats = window.BankStore.getMonthlyStats();

        // Greeting with current time of day
        const greetingEl = document.getElementById('welcome-user-name');
        if (greetingEl) {
            const hour = new Date().getHours();
            let timeGreeting = 'Good morning';
            if (hour >= 12 && hour < 17) timeGreeting = 'Good afternoon';
            else if (hour >= 17) timeGreeting = 'Good evening';
            greetingEl.textContent = `${timeGreeting}, ${user.name.split(' ')[0]}!`;
        }

        // Date Display
        const dateEl = document.getElementById('current-date-display');
        if (dateEl) {
            const now = new Date();
            dateEl.textContent = now.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
        }

        updateBalanceDisplay();

        // Income, Expenses, Savings stats
        const incomeEl = document.getElementById('stat-monthly-income');
        if (incomeEl) incomeEl.textContent = window.BankStore.formatCurrency(stats.income);

        const expenseEl = document.getElementById('stat-monthly-expense');
        if (expenseEl) expenseEl.textContent = window.BankStore.formatCurrency(stats.expense);

        const savingsEl = document.getElementById('stat-net-savings');
        if (savingsEl) savingsEl.textContent = `${stats.savingsRate}% (${window.BankStore.formatCurrency(stats.netSavings)})`;

        // Render card
        renderCardDetails();

        // Update UPI QR display
        const qrUpiEl = document.getElementById('qr-upi-id-display');
        if (qrUpiEl) {
            qrUpiEl.textContent = `${(user.phone || '9876543210').replace(/[^0-9]/g, '').slice(-10)}@nagrikbank`;
        }

        // Render mini account list
        renderMiniAccounts();

        // Render budget quick glance
        renderBudgetGlance();

        // Render recent transactions
        renderRecentTransactions('all');
    }

    function updateBalanceDisplay() {
        const balEl = document.getElementById('stat-total-balance');
        const eyeIcon = document.getElementById('eye-icon-svg');
        if (!balEl) return;

        const totalBal = window.BankStore.getTotalBalance();

        if (hideBalance) {
            balEl.textContent = '••••••••';
            if (eyeIcon) {
                // Eye off icon
                eyeIcon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`;
            }
        } else {
            balEl.textContent = window.BankStore.formatCurrency(totalBal);
            if (eyeIcon) {
                // Eye open icon
                eyeIcon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
            }
        }
    }

    function renderCardDetails() {
        const accounts = window.BankStore.getAccounts();
        const primary = accounts[0];
        if (!primary || !primary.card) return;

        const card = primary.card;
        const numberEl = document.getElementById('card-number-text');
        const holderEl = document.getElementById('card-holder-text');
        const expiryEl = document.getElementById('card-expiry-text');
        const cvvEl = document.getElementById('card-cvv-text');
        const badgeEl = document.getElementById('card-frozen-badge');
        const freezeBtn = document.getElementById('freeze-card-btn');

        if (numberEl) numberEl.textContent = card.number;
        if (holderEl) holderEl.textContent = (window.BankStore.getUser().name || card.holder).toUpperCase();
        if (expiryEl) expiryEl.textContent = card.expiry;
        if (cvvEl) cvvEl.textContent = card.cvv;

        if (badgeEl) {
            badgeEl.style.display = card.frozen ? 'inline-block' : 'none';
        }
        if (freezeBtn) {
            freezeBtn.innerHTML = card.frozen
                ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Unfreeze`
                : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Freeze`;
        }
    }

    function renderBudgetGlance() {
        const container = document.getElementById('dashboard-budget-glance');
        if (!container) return;
        const budgets = window.BankStore.getBudgets().slice(0, 3);
        container.innerHTML = budgets.map((b, i) => {
            const pct = b.budget > 0 ? Math.min(100, Math.round((b.spent / b.budget) * 100)) : 0;
            const barColor = pct >= 100 ? 'var(--danger)' : (b.color || 'var(--brand-blue)');
            return `
                <div style="${i < budgets.length - 1 ? 'margin-bottom:12px;' : ''}">
                    <div style="display:flex; justify-content:space-between; font-size:13px; font-weight:600;">
                        <span>${escapeHtml(b.name || b.category)}</span>
                        <span style="color:${barColor};">${window.BankStore.formatCurrency(b.spent)} / ${window.BankStore.formatCurrency(b.budget)} (${pct}%)</span>
                    </div>
                    <div class="progress-container">
                        <div class="progress-fill" style="width:${pct}%; background:${barColor};"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderMiniAccounts() {
        const container = document.getElementById('mini-accounts-list');
        if (!container) return;

        const accounts = window.BankStore.getAccounts();
        container.innerHTML = accounts.map(acc => `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid var(--border-light);">
                <div>
                    <div style="font-weight:700; font-size:14px; color:var(--text-primary);">${acc.name}</div>
                    <div style="font-size:12px; color:var(--text-muted);">${acc.displayNumber} • ${acc.type}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-weight:800; font-size:15px; color:var(--text-primary);">${window.BankStore.formatCurrency(acc.balance)}</div>
                    <div style="font-size:11px; color:var(--success); font-weight:600;">${acc.status}</div>
                </div>
            </div>
        `).join('');
    }

    function renderRecentTransactions(filter = 'all') {
        const tableBody = document.getElementById('recent-transactions-tbody');
        if (!tableBody) return;

        let txs = window.BankStore.getTransactions();

        if (filter === 'incoming') {
            txs = txs.filter(t => t.type === 'credit');
        } else if (filter === 'outgoing') {
            txs = txs.filter(t => t.type === 'debit');
        }

        // Show latest 5 on dashboard
        const preview = txs.slice(0, 5);

        if (preview.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px; color:var(--text-muted);">No transactions match this filter.</td></tr>`;
            return;
        }

        tableBody.innerHTML = preview.map(t => {
            const isCredit = t.type === 'credit';
            const amountFormatted = (isCredit ? '+' : '-') + window.BankStore.formatCurrency(t.amount);
            const amountClass = isCredit ? 'credit-amount' : 'debit-amount';
            const badgeClass = isCredit ? 'badge-success' : 'badge-danger';

            return `
                <tr style="cursor:pointer;" onclick="showTransactionDetail('${t.id}')">
                    <td>
                        <div class="txn-desc-cell">
                            <div class="txn-category-icon ${isCredit ? 'icon-green' : 'icon-blue'}">
                                ${getCategorySvg(t.category, isCredit)}
                            </div>
                            <div>
                                <div class="txn-name">${escapeHtml(t.description)}</div>
                                <div class="txn-meta">${t.accountName || 'Savings'} • Ref: ${t.refNo || t.id}</div>
                            </div>
                        </div>
                    </td>
                    <td><span class="badge ${badgeClass}">${t.category}</span></td>
                    <td style="font-size:13px; color:var(--text-secondary);">${t.date} <span style="font-size:11px; color:var(--text-muted);">${t.time || ''}</span></td>
                    <td><span class="badge badge-info">${t.status}</span></td>
                    <td class="${amountClass}" style="text-align:right;">${amountFormatted}</td>
                </tr>
            `;
        }).join('');
    }

    function populateDepositAccountDropdown() {
        const select = document.getElementById('deposit-account-select');
        if (!select) return;

        const accounts = window.BankStore.getAccounts().filter(a => a.type !== 'Fixed Deposit');
        select.innerHTML = accounts.map(a => `
            <option value="${a.id}">${a.name} (${a.displayNumber}) - Bal: ${window.BankStore.formatCurrency(a.balance)}</option>
        `).join('');
    }

    // ==========================================================
    // ACCOUNTS PAGE INITIALIZATION
    // ==========================================================
    function initAccountsPage() {
        renderAccountsPage();

        window.BankStore.subscribe(() => {
            renderAccountsPage();
        });

        // Open new account modal
        const openAccBtn = document.getElementById('btn-open-new-account');
        const openAccModal = document.getElementById('open-account-modal');
        const openAccForm = document.getElementById('open-account-form');

        if (openAccBtn && openAccModal) {
            openAccBtn.addEventListener('click', () => {
                openModal('open-account-modal');
            });
        }

        if (openAccForm) {
            openAccForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const type = document.getElementById('new-acc-type').value;
                const name = document.getElementById('new-acc-name').value;
                const initialDeposit = parseFloat(document.getElementById('new-acc-deposit').value) || 0;

                const res = window.BankStore.createAccount({ type, name, initialDeposit });
                if (res.success) {
                    window.BankStore.showToast(`Account "${res.account.name}" created successfully!`, 'success');
                    closeModal('open-account-modal');
                    openAccForm.reset();
                }
            });
        }

        // Account Quick Deposit Form
        const accDepositForm = document.getElementById('account-deposit-form');
        if (accDepositForm) {
            accDepositForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const accId = document.getElementById('acc-deposit-id').value;
                const amount = parseFloat(document.getElementById('acc-deposit-amount').value);
                const note = document.getElementById('acc-deposit-note').value || 'Account Direct Deposit';

                const res = window.BankStore.depositFunds(accId, amount, note);
                if (res.success) {
                    window.BankStore.showToast(res.message, 'success');
                    closeModal('account-deposit-modal');
                    accDepositForm.reset();
                } else {
                    window.BankStore.showToast(res.message, 'error');
                }
            });
        }
    }

    function renderAccountsPage() {
        const accounts = window.BankStore.getAccounts();
        const grid = document.getElementById('accounts-cards-grid');
        const summaryLiquid = document.getElementById('summary-liquid-balance');
        const summaryFD = document.getElementById('summary-fd-balance');
        const summaryTotal = document.getElementById('summary-total-networth');

        if (summaryLiquid) summaryLiquid.textContent = window.BankStore.formatCurrency(window.BankStore.getLiquidBalance());
        if (summaryFD) {
            const fdTotal = accounts.filter(a => a.type === 'Fixed Deposit').reduce((s, a) => s + a.balance, 0);
            summaryFD.textContent = window.BankStore.formatCurrency(fdTotal);
        }
        if (summaryTotal) summaryTotal.textContent = window.BankStore.formatCurrency(window.BankStore.getTotalBalance());

        if (!grid) return;

        grid.innerHTML = accounts.map(acc => {
            let badgeClass = 'acc-badge-savings';
            if (acc.type === 'Current') badgeClass = 'acc-badge-current';
            if (acc.type === 'Fixed Deposit') badgeClass = 'acc-badge-fd';
            const statusClass = acc.status === 'Frozen' ? 'badge-danger' : (acc.status.includes('Locked') ? 'badge-warning' : 'badge-success');

            return `
                <div class="account-detail-card">
                    <div>
                        <div class="acc-card-top">
                            <span class="acc-badge ${badgeClass}">${acc.type}</span>
                            <span class="badge ${statusClass}">${acc.status}</span>
                        </div>
                        <h2 class="acc-type-title">${escapeHtml(acc.name)}</h2>
                        <div class="acc-num-row">
                            <span>A/C: ${acc.accountNumber}</span>
                            <button class="copy-btn" title="Copy Account Number" onclick="copyToClipboard('${acc.accountNumber}', 'Account number')">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                            </button>
                        </div>
                        <div class="acc-balance-label">Available Balance</div>
                        <div class="acc-balance-amount">${window.BankStore.formatCurrency(acc.balance)}</div>
                        
                        <div class="acc-meta-grid">
                            <div class="acc-meta-item">
                                <span>Interest Rate</span>
                                <strong>${acc.interestRate || '4.00%'}</strong>
                            </div>
                            <div class="acc-meta-item">
                                <span>IFSC Code</span>
                                <strong>${acc.ifsc || 'BEAS0001042'}</strong>
                            </div>
                            <div class="acc-meta-item" style="grid-column: span 2;">
                                <span>Branch</span>
                                <strong>${acc.branch || 'Connaught Place, New Delhi'}</strong>
                            </div>
                        </div>
                    </div>
                    
                    <div class="acc-card-actions">
                        <button class="btn-primary" onclick="openDepositModalFor('${acc.id}', '${escapeHtml(acc.name)}')">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Deposit
                        </button>
                        <a href="transfer.html" class="btn-secondary">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Transfer
                        </a>
                    </div>
                </div>
            `;
        }).join('');

        // Also render the detailed comparison table
        const compTable = document.getElementById('accounts-comparison-tbody');
        if (compTable) {
            compTable.innerHTML = accounts.map(acc => {
                const statusClass = acc.status === 'Frozen' ? 'badge-danger' : (acc.status.includes('Locked') ? 'badge-warning' : 'badge-success');
                return `
                <tr>
                    <td><strong>${escapeHtml(acc.name)}</strong><br><span style="font-size:12px; color:var(--text-muted);">${acc.displayNumber}</span></td>
                    <td><span class="badge badge-info">${acc.type}</span></td>
                    <td>${acc.accountNumber}</td>
                    <td><strong>${window.BankStore.formatCurrency(acc.balance)}</strong></td>
                    <td>${acc.interestRate || 'N/A'}</td>
                    <td><span class="badge ${statusClass}">${acc.status}</span></td>
                </tr>
            `;
            }).join('');
        }
    }

    // ==========================================================
    // GLOBAL HEADER CONTROLS (THEME, NOTIFICATIONS, MODALS)
    // ==========================================================
    function syncHeaderUserBadge() {
        if (isAdminPage) return;
        const user = window.BankStore.getUser();
        const name = (user && user.name) ? user.name : 'Rohit Saraswat';
        const initials = name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'RS';
        document.querySelectorAll('.badge-name').forEach(el => { el.textContent = name; });
        document.querySelectorAll('.avatar-circle:not(.admin-avatar)').forEach(el => { el.textContent = initials; });
    }

    function initHeaderControls() {
        syncHeaderUserBadge();
        window.BankStore.subscribe(syncHeaderUserBadge);

        const logoutBtn = document.getElementById('btn-logout-nav');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                try {
                    localStorage.removeItem('nagrik_bank_session');
                } catch (e) { }
            });
        }
        const themeBtn = document.getElementById('theme-toggle-btn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const next = window.BankStore.toggleTheme();
                updateThemeButton(next);
            });
            updateThemeButton(window.BankStore.getUser().theme || 'light');
        }

        const notifBtn = document.getElementById('notifications-btn');
        const notifDropdown = document.getElementById('notifications-dropdown');
        if (notifBtn && notifDropdown) {
            notifBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = notifDropdown.style.display === 'block';
                notifDropdown.style.display = isOpen ? 'none' : 'block';
                if (!isOpen) {
                    renderNotificationList();
                }
            });

            document.addEventListener('click', () => {
                if (notifDropdown) notifDropdown.style.display = 'none';
            });
        }
    }

    function updateThemeButton(theme) {
        const themeBtn = document.getElementById('theme-toggle-btn');
        if (!themeBtn) return;
        if (theme === 'dark') {
            // Show sun icon
            themeBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        } else {
            // Show moon icon
            themeBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        }
    }

    function renderNotificationList() {
        const container = document.getElementById('notifications-list-container');
        if (!container) return;
        const notifs = window.BankStore.getNotifications();
        if (notifs.length === 0) {
            container.innerHTML = `<div style="padding:16px; text-align:center; color:var(--text-muted); font-size:13px;">No new alerts.</div>`;
            return;
        }

        container.innerHTML = notifs.map(n => `
            <div style="padding:12px 16px; border-bottom:1px solid var(--border-light); font-size:13px;">
                <div style="font-weight:700; color:var(--text-primary); margin-bottom:2px;">${escapeHtml(n.title)}</div>
                <div style="color:var(--text-secondary); margin-bottom:4px;">${escapeHtml(n.text)}</div>
                <div style="font-size:11px; color:var(--text-muted);">${n.time}</div>
            </div>
        `).join('');
    }

    // Modal Helpers
    window.openModal = function (modalId) {
        const m = document.getElementById(modalId);
        if (m) {
            m.style.display = 'flex';
            setTimeout(() => m.classList.add('show'), 10);
        }
    };

    window.closeModal = function (modalId) {
        const m = document.getElementById(modalId);
        if (m) {
            m.classList.remove('show');
            setTimeout(() => m.style.display = 'none', 200);
        }
    };

    window.openDepositModalFor = function (accId, accName) {
        const idInput = document.getElementById('acc-deposit-id');
        const nameLabel = document.getElementById('acc-deposit-name-label');
        if (idInput) idInput.value = accId;
        if (nameLabel) nameLabel.textContent = `Depositing into: ${accName}`;
        openModal('account-deposit-modal');
    };

    window.copyToClipboard = function (text, label) {
        navigator.clipboard.writeText(text).then(() => {
            window.BankStore.showToast(`${label} copied to clipboard!`, 'success');
        }).catch(() => {
            window.BankStore.showToast(`${label}: ${text}`, 'info');
        });
    };

    window.showTransactionDetail = function (txnId) {
        const txs = window.BankStore.getTransactions();
        const t = txs.find(item => item.id === txnId);
        if (!t) return;

        const body = document.getElementById('txn-detail-modal-body');
        if (!body) return;

        const isCredit = t.type === 'credit';
        body.innerHTML = `
            <div style="text-align:center; margin-bottom:20px;">
                <div class="badge ${isCredit ? 'badge-success' : 'badge-danger'}" style="font-size:14px; padding:6px 14px; margin-bottom:12px;">
                    ${isCredit ? 'CREDIT / INFLOW' : 'DEBIT / OUTFLOW'}
                </div>
                <div style="font-size:32px; font-weight:800; color:${isCredit ? 'var(--success)' : 'var(--danger)'};">
                    ${(isCredit ? '+' : '-') + window.BankStore.formatCurrency(t.amount)}
                </div>
                <div style="color:var(--text-muted); font-size:13px; margin-top:4px;">Transaction ID: ${t.id}</div>
            </div>

            <div style="background:var(--bg-subtle); padding:18px; border-radius:var(--radius-md); font-size:13px; display:flex; flex-direction:column; gap:10px;">
                <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Description:</span>
                    <strong>${escapeHtml(t.description)}</strong>
                </div>
                <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Category:</span>
                    <strong>${t.category}</strong>
                </div>
                <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Date & Time:</span>
                    <strong>${t.date} at ${t.time || 'N/A'}</strong>
                </div>
                <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Account:</span>
                    <strong>${t.accountName || 'Primary Savings'}</strong>
                </div>
                <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Reference No:</span>
                    <strong style="font-family:monospace;">${t.refNo || 'N/A'}</strong>
                </div>
                <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Status:</span>
                    <strong style="color:var(--success);">${t.status}</strong>
                </div>
            </div>
        `;
        openModal('txn-detail-modal');
    };

    function escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function getCategorySvg(category, isCredit) {
        if (isCredit) {
            return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`;
        }
        switch (category) {
            case 'Food':
                return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`;
            case 'Shopping':
                return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`;
            case 'Utilities':
                return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
            case 'Entertainment':
                return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>`;
            case 'Travel':
                return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`;
            default:
                return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`;
        }
    }
});

