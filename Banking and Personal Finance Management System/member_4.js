// ==============================================================
// MEMBER 4 COMPLETE JAVASCRIPT ENGINE
// Self-contained: Includes Banking State Engine (localStorage) & Member 4 Logic
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
                try { localStorage.removeItem('bankease_state_v1'); } catch (e) {}
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
// MEMBER 4 INTERACTIVE LOGIC
// ==============================================================
// ==============================================================
// Member 4 - Transfer Money & Profile Management Interactive Logic
// ==============================================================

document.addEventListener('DOMContentLoaded', () => {
    if (!window.BankStore) {
        console.error('BankStore not loaded!');
        return;
    }

    // Authentication Guard: Ensure customer logs in before accessing Transfer or Profile
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

    const isTransferPage = document.getElementById('transfer-view');
    const isProfilePage = document.getElementById('profile-view');

    if (isTransferPage) {
        initTransferPage();
    }

    if (isProfilePage) {
        initProfilePage();
    }

    initGlobalControls();

    // ==========================================================
    // TRANSFER MONEY PAGE
    // ==========================================================
    function initTransferPage() {
        renderBeneficiaries();
        populateSourceAccounts();

        window.BankStore.subscribe(() => {
            populateSourceAccounts();
        });

        let selectedMode = 'UPI';
        let pendingTransferData = null;

        // Mode Selector Radio Pills
        const modeLabels = document.querySelectorAll('.mode-radio-label');
        modeLabels.forEach(label => {
            label.addEventListener('click', () => {
                modeLabels.forEach(l => l.classList.remove('selected'));
                label.classList.add('selected');
                selectedMode = label.getAttribute('data-mode') || 'UPI';
            });
        });

        // Quick Amount Chips
        const chips = document.querySelectorAll('.amount-chip');
        const amountInput = document.getElementById('transfer-amount-input');
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                const addVal = parseFloat(chip.getAttribute('data-add') || 0);
                const currentVal = parseFloat(amountInput.value) || 0;
                amountInput.value = currentVal + addVal;
                updateTransferSummary();
            });
        });

        if (amountInput) {
            amountInput.addEventListener('input', updateTransferSummary);
        }

        const sourceSelect = document.getElementById('transfer-source-account');
        if (sourceSelect) {
            sourceSelect.addEventListener('change', updateTransferSummary);
        }

        // Transfer Form Submission -> Open PIN modal
        const form = document.getElementById('money-transfer-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const fromAccountId = sourceSelect.value;
                const recipientName = document.getElementById('transfer-recipient-name').value.trim();
                const recipientAccount = document.getElementById('transfer-recipient-account').value.trim();
                const amount = parseFloat(amountInput.value);
                const remarks = document.getElementById('transfer-remarks').value.trim();

                const fromAcc = window.BankStore.getAccountById(fromAccountId);
                if (!fromAcc) {
                    window.BankStore.showToast('Please select a valid source account.', 'error');
                    return;
                }

                if (isNaN(amount) || amount <= 0) {
                    window.BankStore.showToast('Please specify a positive transfer amount.', 'error');
                    return;
                }

                if (fromAcc.balance < amount) {
                    window.BankStore.showToast(`Insufficient balance in ${fromAcc.name}. Available: ${window.BankStore.formatCurrency(fromAcc.balance)}`, 'error');
                    return;
                }

                // Prepare pending payload
                pendingTransferData = {
                    fromAccountId,
                    recipientName,
                    recipientAccount,
                    amount,
                    remarks,
                    mode: selectedMode
                };

                // Clear PIN inputs and open modal
                clearPinBoxes();
                openModal('pin-auth-modal');
                const firstPin = document.getElementById('pin-1');
                if (firstPin) firstPin.focus();
            });
        }

        // 4-Digit PIN Input Auto-focus Logic
        setupPinInputs();

        // PIN Confirm Button
        const confirmPinBtn = document.getElementById('btn-confirm-pin');
        if (confirmPinBtn) {
            confirmPinBtn.addEventListener('click', executeVerifiedTransfer);
        }
    }

    function populateSourceAccounts() {
        const select = document.getElementById('transfer-source-account');
        if (!select) return;

        const prevVal = select.value;
        const accounts = window.BankStore.getAccounts().filter(a => a.type !== 'Fixed Deposit');
        select.innerHTML = accounts.map(a => `
            <option value="${a.id}">${a.name} (${a.displayNumber}) - Bal: ${window.BankStore.formatCurrency(a.balance)}</option>
        `).join('');

        if (prevVal && accounts.some(a => a.id === prevVal)) {
            select.value = prevVal;
        }

        updateTransferSummary();
    }

    function renderBeneficiaries() {
        const strip = document.getElementById('beneficiaries-strip-container');
        if (!strip) return;

        const beneficiaries = window.BankStore.getBeneficiaries();
        strip.innerHTML = beneficiaries.map(b => `
            <button type="button" class="ben-avatar-item" onclick="selectBeneficiary('${b.id}')">
                <div class="ben-circle" style="background:${b.avatarColor || '#3b82f6'};">
                    ${b.initials || 'AB'}
                </div>
                <span class="ben-name-label">${escapeHtml(b.name)}</span>
            </button>
        `).join('');
    }

    window.selectBeneficiary = function (benId) {
        const ben = window.BankStore.getBeneficiaries().find(b => b.id === benId);
        if (!ben) return;

        const nameInput = document.getElementById('transfer-recipient-name');
        const accInput = document.getElementById('transfer-recipient-account');
        const ifscInput = document.getElementById('transfer-ifsc-code');

        if (nameInput) nameInput.value = ben.name;
        if (accInput) accInput.value = ben.accountNumber || ben.upi || '';
        if (ifscInput) ifscInput.value = ben.ifsc || 'HDFC0001245';

        window.BankStore.showToast(`Selected beneficiary: ${ben.name} (${ben.bank || 'UPI'})`, 'info');
        updateTransferSummary();
    };

    function updateTransferSummary() {
        const select = document.getElementById('transfer-source-account');
        const amountInput = document.getElementById('transfer-amount-input');
        const currentBalEl = document.getElementById('summary-current-balance');
        const amountEl = document.getElementById('summary-transfer-amount');
        const remBalEl = document.getElementById('summary-remaining-balance');

        if (!select || !amountInput) return;

        const acc = window.BankStore.getAccountById(select.value);
        const amount = parseFloat(amountInput.value) || 0;

        if (acc) {
            if (currentBalEl) currentBalEl.textContent = window.BankStore.formatCurrency(acc.balance);
            if (amountEl) amountEl.textContent = window.BankStore.formatCurrency(amount);

            const rem = acc.balance - amount;
            if (remBalEl) {
                remBalEl.textContent = window.BankStore.formatCurrency(Math.max(0, rem));
                remBalEl.style.color = rem < 0 ? 'var(--danger)' : 'var(--text-primary)';
            }
        }
    }

    function setupPinInputs() {
        const pinBoxes = document.querySelectorAll('.pin-digit-box');
        pinBoxes.forEach((box, idx) => {
            box.addEventListener('input', (e) => {
                if (e.target.value.length >= 1) {
                    box.value = e.target.value.slice(0, 1);
                    if (idx < pinBoxes.length - 1) {
                        pinBoxes[idx + 1].focus();
                    }
                }
            });

            box.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && !box.value && idx > 0) {
                    pinBoxes[idx - 1].focus();
                }
            });
        });
    }

    function clearPinBoxes() {
        document.querySelectorAll('.pin-digit-box').forEach(b => b.value = '');
    }

    function executeVerifiedTransfer() {
        const enteredPin = ['pin-1', 'pin-2', 'pin-3', 'pin-4']
            .map(id => (document.getElementById(id)?.value || '').trim())
            .join('');
        const expectedPin = (window.BankStore.getUser().pin || '1234');

        if (enteredPin.length < 4) {
            window.BankStore.showToast('Please enter all 4 digits of your Security PIN.', 'warning');
            const firstEmpty = ['pin-1', 'pin-2', 'pin-3', 'pin-4'].find(id => !document.getElementById(id)?.value);
            if (firstEmpty) document.getElementById(firstEmpty)?.focus();
            return;
        }

        if (enteredPin !== expectedPin) {
            window.BankStore.showToast('Incorrect 4-digit Security PIN. Default demo PIN is 1234.', 'error');
            clearPinBoxes();
            document.getElementById('pin-1')?.focus();
            return;
        }

        // Close PIN modal and show processing spinner
        closeModal('pin-auth-modal');
        openModal('transfer-processing-modal');

        setTimeout(() => {
            closeModal('transfer-processing-modal');
            const res = window.BankStore.transferMoney(pendingTransferData);

            if (res.success) {
                showTransferSuccessModal(res.transaction);
                document.getElementById('money-transfer-form').reset();
                updateTransferSummary();
            } else {
                window.BankStore.showToast(res.message, 'error');
            }
        }, 1200);
    }

    function showTransferSuccessModal(txn) {
        const body = document.getElementById('transfer-receipt-body');
        if (!body) return;

        body.innerHTML = `
            <div style="text-align:center; margin-bottom:20px;">
                <div style="width:64px; height:64px; border-radius:50%; background:var(--success-bg); color:var(--success); display:flex; align-items:center; justify-content:center; margin:0 auto 12px;">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div style="font-size:22px; font-weight:800; color:var(--text-primary);">Payment Successful!</div>
                <div style="font-size:32px; font-weight:800; color:var(--brand-blue); margin:8px 0;">
                    ${window.BankStore.formatCurrency(txn.amount)}
                </div>
                <div style="font-size:13px; color:var(--text-muted);">Ref: ${txn.refNo || txn.id}</div>
            </div>

            <div style="background:var(--bg-subtle); padding:18px; border-radius:var(--radius-md); font-size:13px; display:flex; flex-direction:column; gap:10px;">
                <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Recipient:</span>
                    <strong>${escapeHtml(txn.recipientName || 'Beneficiary')}</strong>
                </div>
                <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">A/C or UPI:</span>
                    <strong style="font-family:monospace;">${escapeHtml(txn.recipientAccount || 'N/A')}</strong>
                </div>
                <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">From Account:</span>
                    <strong>${txn.accountName}</strong>
                </div>
                <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Transfer Mode:</span>
                    <strong>${txn.mode || 'UPI'}</strong>
                </div>
                <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-muted);">Date & Time:</span>
                    <strong>${txn.date} at ${txn.time}</strong>
                </div>
            </div>
        `;

        openModal('transfer-success-modal');
    }

    // ==========================================================
    // PROFILE & SECURITY MANAGEMENT PAGE
    // ==========================================================
    function initProfilePage() {
        renderProfileData();

        // Profile Form Submit
        const form = document.getElementById('user-profile-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('profile-name-input').value.trim();
                const email = document.getElementById('profile-email-input').value.trim();
                const phone = document.getElementById('profile-phone-input').value.trim();
                const city = document.getElementById('profile-city-input').value.trim();
                const address = document.getElementById('profile-address-input').value.trim();
                const dob = document.getElementById('profile-dob-input').value;
                const pan = document.getElementById('profile-pan-input').value.trim();

                const res = window.BankStore.updateProfile({ name, email, phone, city, address, dob, pan });
                if (res.success) {
                    window.BankStore.showToast('Profile information successfully saved!', 'success');
                    renderProfileData();
                }
            });
        }

        // Daily Transfer Limit Slider
        const limitSlider = document.getElementById('daily-limit-slider');
        const limitDisplay = document.getElementById('daily-limit-display');
        if (limitSlider && limitDisplay) {
            const user = window.BankStore.getUser();
            limitSlider.value = user.dailyTransferLimit || 100000;
            limitDisplay.textContent = window.BankStore.formatCurrency(limitSlider.value);

            limitSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                limitDisplay.textContent = window.BankStore.formatCurrency(val);
                window.BankStore.updateProfile({ dailyTransferLimit: val });
            });
        }

        // Security Switches (2FA, Biometrics, SMS Alerts)
        const switchMap = [
            { id: 'toggle-2fa', key: 'twoFactorEnabled', label: 'Two-Factor Authentication (2FA)' },
            { id: 'toggle-bio', key: 'biometricsEnabled', label: 'Biometric Quick Login' },
            { id: 'toggle-sms', key: 'smsAlertsEnabled', label: 'SMS & Email Transaction Alerts' }
        ];
        const currentUser = window.BankStore.getUser();
        switchMap.forEach(({ id, key, label }) => {
            const el = document.getElementById(id);
            if (!el) return;
            el.checked = currentUser[key] !== false;
            el.addEventListener('change', () => {
                window.BankStore.updateProfile({ [key]: el.checked });
                window.BankStore.showToast(`${label} ${el.checked ? 'enabled' : 'disabled'}.`, el.checked ? 'success' : 'info');
            });
        });

        // Reset Demo Data Button
        const resetBtn = document.getElementById('btn-reset-demo-data');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to reset all mock data (balances, transactions, budgets) to factory defaults?')) {
                    window.BankStore.resetToDefaults();
                }
            });
        }
    }

    function renderProfileData() {
        const user = window.BankStore.getUser();

        // Top Hero elements
        const nameHero = document.getElementById('profile-hero-name');
        const customerIdHero = document.getElementById('profile-hero-cid');
        const typeHero = document.getElementById('profile-hero-type');

        if (nameHero) nameHero.textContent = user.name;
        if (customerIdHero) customerIdHero.textContent = `Customer ID: ${user.customerId || 'BE-892401'}`;
        if (typeHero) typeHero.textContent = `${user.accountType || 'Premier Savings'} • Since ${user.memberSince || '2023'}`;
        const avatarLg = document.querySelector('.profile-avatar-lg');
        if (avatarLg && user.name) {
            avatarLg.textContent = user.name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'RS';
        }

        // Input Fields
        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.value = val || '';
        };

        setVal('profile-name-input', user.name);
        setVal('profile-email-input', user.email);
        setVal('profile-phone-input', user.phone);
        setVal('profile-city-input', user.city);
        setVal('profile-address-input', user.address);
        setVal('profile-dob-input', user.dob);
        setVal('profile-pan-input', user.pan);
    }

    // Global Header & Controls
    function syncHeaderUserBadge() {
        const user = window.BankStore.getUser();
        const name = (user && user.name) ? user.name : 'Rohit Saraswat';
        const initials = name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'RS';
        document.querySelectorAll('.badge-name').forEach(el => { el.textContent = name; });
        document.querySelectorAll('.avatar-circle').forEach(el => { el.textContent = initials; });
    }

    function initGlobalControls() {
        syncHeaderUserBadge();
        window.BankStore.subscribe(syncHeaderUserBadge);

        const logoutBtn = document.getElementById('btn-logout-nav');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                try {
                    localStorage.removeItem('nagrik_bank_session');
                } catch (e) {}
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
    }

    function updateThemeButton(theme) {
        const themeBtn = document.getElementById('theme-toggle-btn');
        if (!themeBtn) return;
        if (theme === 'dark') {
            themeBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        } else {
            themeBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        }
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

    function escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
});

