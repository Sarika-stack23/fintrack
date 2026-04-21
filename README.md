# 💰 FinTrack — Personal Finance Dashboard

> A modern, responsive personal finance dashboard built with React, TypeScript, and Tailwind CSS. Track your income, expenses, budgets, and savings goals in one beautiful interface.

---

## 🔗 Important Links

| Resource | Link |
|----------|------|
| 🌐 Live Demo | https://fintrack-dashboard-tau.vercel.app |
| 🎨 Figma Design | https://www.figma.com/design/GMBMshLwOTC4R3QWERtmz0/Fintrack |
| ▶️ Figma Prototype | https://www.figma.com/proto/GMBMshLwOTC4R3QWERtmz0/Fintrack |
| 💻 GitHub Repo | https://github.com/23btrcn057/fintrack-dashboard |
| 🎥 Video Walkthrough | (add loom link here) |

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📊 Dashboard | Overview with stat cards, line chart, donut chart, recent transactions |
| 💳 Transactions | Add income/expense, search, filter by category |
| 📈 Budget Tracker | Progress bars per category, warning states, overall summary |
| 🎯 Goals | Create goals, add money, track progress |
| ⚙️ Settings | Edit profile, currency, notifications, appearance toggles |
| 🔔 Notifications | Bell dropdown with alerts |
| 🔍 Search | Global search navigates to pages |
| 🌗 Dynamic Greeting | Changes Morning/Afternoon/Evening based on time |
| 💾 Persistent Data | localStorage saves settings across sessions |
| 📱 Responsive | Works on desktop and mobile |
| ✨ Animations | Framer Motion on every component |
| 🔐 Sidebar | Collapsible with icon-only mode |

---

## 🚀 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | Frontend framework |
| TypeScript | 5 | Type safety |
| Vite | 8 | Build tool |
| Tailwind CSS | 3 | Styling + design tokens |
| Framer Motion | Latest | Animations |
| Recharts | Latest | Charts |
| Lucide React | Latest | Icons |
| React Router | v6 | Navigation |
| Vercel | - | Deployment |

---

## 🎨 Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#6366F1` | Buttons, active states, highlights |
| Success | `#22C55E` | Income, positive states, goals |
| Danger | `#EF4444` | Expenses, alerts, budget exceeded |
| Warning | `#F59E0B` | Budget warnings, caution states |
| Dark | `#0F172A` | Sidebar, text, headings |
| Light | `#F8FAFC` | Background, hover states |

### Typography
| Style | Font | Weight | Size |
|-------|------|--------|------|
| H1 | Inter | Bold | 32px |
| H2 | Inter | SemiBold | 24px |
| Body | Inter | Regular | 14px |
| Small | Inter | Regular | 12px |

### Spacing Scale
```
4px  → xs
8px  → sm
12px → md
16px → base
24px → lg
32px → xl
48px → 2xl
64px → 3xl
```

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+
- npm 9+

### Clone & Install
```bash
git clone https://github.com/23btrcn057/fintrack-dashboard
cd fintrack-dashboard
npm install
```

### Run Development Server
```bash
npm run dev
```
Open http://localhost:5173

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel --prod
```

---

## 📁 Project Structure

```
fintrack-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Toggle.tsx       # Animated toggle switch
│   │   │   └── Button.tsx       # Reusable button
│   │   ├── charts/
│   │   │   ├── LineChart.tsx    # Income vs Expense
│   │   │   └── DonutChart.tsx   # Spending by category
│   │   ├── cards/
│   │   │   ├── StatCard.tsx     # Balance/Income/Expense/Savings
│   │   │   ├── BudgetCard.tsx   # Budget progress card
│   │   │   └── GoalCard.tsx     # Savings goal card
│   │   └── layout/
│   │       ├── Sidebar.tsx      # Collapsible navigation
│   │       └── Navbar.tsx       # Top bar with search/notifications
│   ├── pages/
│   │   ├── Dashboard.tsx        # Overview page
│   │   ├── Transactions.tsx     # Transaction management
│   │   ├── Budget.tsx           # Budget tracker
│   │   ├── Goals.tsx            # Savings goals
│   │   └── Settings.tsx         # User preferences
│   ├── context/
│   │   └── AppContext.tsx       # Global state management
│   ├── data/
│   │   └── mockData.ts          # Sample data
│   ├── hooks/
│   │   ├── useTransactions.ts
│   │   └── useBudget.ts
│   ├── App.tsx                  # Router setup
│   └── main.tsx                 # Entry point
├── tailwind.config.js           # Design tokens
├── vite.config.ts
└── README.md
```

---

## 🏗️ Architecture Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Build Tool | Vite | 10x faster than CRA, instant HMR |
| Language | TypeScript | Type safety, better DX |
| Styling | Tailwind CSS | Utility-first, maps directly to Figma tokens |
| Animation | Framer Motion | Most powerful React animation library |
| Charts | Recharts | Lightweight, composable, React-native |
| Icons | Lucide React | Clean, consistent, tree-shakeable |
| State | Context API | No over-engineering for this scale |
| Persistence | localStorage | Simple client-side persistence |
| Deployment | Vercel | Free tier, instant deploys, great DX |

---

## 💰 Cost Analysis

| Service | Plan | Monthly Cost |
|---------|------|-------------|
| Vercel Hosting | Free | ₹0 |
| Figma | Free | ₹0 |
| GitHub | Free | ₹0 |
| Domain (optional) | .app domain | ₹67/month |
| **Total** | | **₹0 – ₹67/month** |

> This project can run completely free forever using Vercel free tier + GitHub free tier.

---

## ✅ Accessibility

- ✅ Semantic HTML (nav, main, header, section)
- ✅ WCAG AA color contrast ratios
- ✅ Keyboard navigable interface
- ✅ aria-labels on all icon buttons
- ✅ Focus states visible
- ✅ Screen reader friendly markup
- ✅ Responsive on all screen sizes

---

## 🎯 Pages Overview

### 1. Dashboard
- 4 stat cards (Balance, Income, Expense, Savings)
- Line chart (Income vs Expense 6 months)
- Donut chart (Spending by category)
- Recent transactions list
- View All → navigates to Transactions

### 2. Transactions
- Search by name
- Filter by category (All/Food/Income/Entertainment/Utilities)
- Add new transaction (Income or Expense)
- Real-time table update

### 3. Budget Tracker
- Overall budget summary card
- Per-category progress bars
- Color coded (Green/Orange/Red based on usage)
- Warning states at 70% and 90%

### 4. Goals
- Create new savings goals
- Add money to existing goals
- Progress bars with percentage
- Goal reached celebration state

### 5. Settings
- Edit name and email
- Change currency
- Persistent via localStorage
- Notification toggles
- Appearance toggles

---

## 📜 License

MIT License — feel free to use this project for learning or inspiration.

---

*Built with ❤️ for HiDevs Frontend Engineer Internship Challenge*