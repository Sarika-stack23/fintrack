# 💰 FinTrack — Personal Finance Dashboard

> A modern, responsive personal finance dashboard built with React, TypeScript, and Tailwind CSS. Track your income, expenses, budgets, and savings goals in one beautiful interface.

---

## 🔗 Important Links

| Resource | Link |
|----------|------|
| 🌐 Live Demo | https://fintrack-dashboard-tau.vercel.app |
| 🎨 Figma Design | https://www.figma.com/design/GMBMshLwOTC4R3QWERtmz0/Fintrack |
| ▶️ Figma Prototype | https://www.figma.com/proto/GMBMshLwOTC4R3QWERtmz0/Fintrack |
| 💻 GitHub Repo | https://github.com/Sarika-stack23/fintrack |
| 🎥 Video Walkthrough | https://drive.google.com/file/d/1rh8A0UVmAqfEIuRHm_xIxQctlHVXqyVr/view?usp=drive_link|

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📊 Dashboard | Overview with stat cards, line chart, donut chart, recent transactions |
| 💳 Transactions | Add income/expense, search, filter by category, delete entries |
| 📈 Budget Tracker | Progress bars per category, warning states, overall summary |
| 🎯 Goals | Create goals, add money, track progress |
| 📉 Analytics | Area chart, radar chart, weekly bar chart, insight cards |
| 📄 Reports | Monthly, budget, and goals reports with one-click PDF export |
| ⚙️ Settings | Edit profile, currency, notification toggles — **sidebar & navbar update instantly** |
| 🔔 Notifications | Bell dropdown with alerts |
| 🔍 Search | Global search navigates to any page |
| 🌗 Dynamic Greeting | Changes Morning / Afternoon / Evening based on time |
| 💾 Persistent Data | localStorage saves settings across sessions |
| 📱 Responsive | Works on desktop and mobile |
| ✨ Animations | Framer Motion on every component |
| 🔐 Sidebar | Collapsible with icon-only mode |

---

## 🚀 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | Frontend framework |
| TypeScript | 6 | Type safety |
| Vite | 8 | Build tool |
| Tailwind CSS | 3 | Styling + design tokens |
| Framer Motion | 12 | Animations |
| Recharts | 3 | Charts |
| Lucide React | 1 | Icons |
| React Router | v7 | Navigation |
| jsPDF | 4 | PDF export |
| Storybook | 10 | Component stories & docs |
| Vercel | — | Deployment |

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

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 20+
- npm 9+

### Clone & Install
```bash
git clone https://github.com/Sarika-stack23/fintrack
cd fintrack
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

### Run Storybook
```bash
npm run storybook
```
Open http://localhost:6006

### Deploy to Vercel
```bash
vercel --prod
```

---

## 📁 Project Structure

```
fintrack/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Toggle.tsx         # Animated toggle switch
│   │   │   ├── AnimatedCounter.tsx
│   │   │   ├── Loader.tsx
│   │   │   ├── PageTransition.tsx
│   │   │   └── ErrorBoundary.tsx
│   │   ├── charts/
│   │   │   ├── LineChart.tsx      # Income vs Expense
│   │   │   ├── DonutChart.tsx     # Spending by category
│   │   │   └── BarChart.tsx       # Monthly overview
│   │   ├── cards/
│   │   │   ├── StatCard.tsx       # Balance/Income/Expense/Savings
│   │   │   ├── BudgetCard.tsx     # Budget progress card
│   │   │   └── GoalCard.tsx       # Savings goal card
│   │   └── layout/
│   │       ├── Sidebar.tsx        # Collapsible navigation (reactive to profile changes)
│   │       └── Navbar.tsx         # Top bar with search/notifications (reactive)
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Transactions.tsx
│   │   ├── Budget.tsx
│   │   ├── Goals.tsx
│   │   ├── Analytics.tsx
│   │   ├── Reports.tsx            # PDF export via jsPDF
│   │   ├── Settings.tsx           # Updates global context on save
│   │   └── NotFound.tsx
│   ├── context/
│   │   └── AppContext.tsx          # Global state: transactions, budgets, goals, profile
│   ├── data/
│   │   └── mockData.ts
│   ├── hooks/
│   │   ├── useTransactions.ts
│   │   └── useBudget.ts
│   ├── stories/                   # Storybook stories for all components
│   ├── App.tsx
│   └── main.tsx
├── .storybook/
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## 🏗️ Architecture Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Build Tool | Vite 8 | Fast HMR, instant dev server |
| Language | TypeScript | Type safety, better DX |
| Styling | Tailwind CSS | Utility-first, maps directly to design tokens |
| Animation | Framer Motion | Most powerful React animation library |
| Charts | Recharts | Lightweight, composable, React-native |
| Icons | Lucide React | Clean, consistent, tree-shakeable |
| State | Context API | No over-engineering for this scale |
| Profile State | React Context | Sidebar & Navbar update instantly without page reload |
| Persistence | localStorage | Simple client-side persistence |
| PDF Export | jsPDF | Lightweight, no server needed |
| Deployment | Vercel | Free tier, instant deploys |

---

## 🔄 Profile Reactive Update Flow

When the user saves their name/email in **Settings**:

```
Settings.tsx → updateProfile() in AppContext
     ↓
AppContext updates profileName & profileEmail state
     ↓
Sidebar.tsx reads profileName via useApp() → re-renders instantly
Navbar.tsx reads profileName via useApp()  → re-renders instantly
```

No page reload required. Changes are visible immediately across all components.

---

## 💰 Cost Analysis

| Service | Plan | Monthly Cost |
|---------|------|-------------|
| Vercel Hosting | Free | ₹0 |
| Figma | Free | ₹0 |
| GitHub | Free | ₹0 |
| Domain (optional) | .app domain | ~₹67/month |
| **Total** | | **₹0 – ₹67/month** |

---

## ✅ Accessibility

- ✅ Semantic HTML (`nav`, `main`, `header`, `section`)
- ✅ WCAG AA color contrast ratios
- ✅ Keyboard navigable interface
- ✅ `aria-labels` on all icon buttons
- ✅ Skip to main content link
- ✅ Focus states visible
- ✅ Screen reader friendly markup
- ✅ Responsive on all screen sizes

---

## 🎯 Pages Overview

### 1. Dashboard
- 4 stat cards (Balance, Income, Expense, Savings)
- Quick income/expense/net savings strip
- Line chart (Income vs Expense — 6 months)
- Donut chart (Spending by category)
- Recent transactions list → navigates to Transactions

### 2. Transactions
- Search by name
- Filter by category (All / Food / Income / Entertainment / Utilities)
- Add new transaction (Income or Expense)
- Delete any transaction on hover
- Real-time table update

### 3. Budget Tracker
- Overall budget summary card
- Per-category progress bars
- Color coded (Green / Orange / Red based on usage %)
- Warning states at 70% and 90%

### 4. Goals
- Create new savings goals
- Add money to existing goals
- Progress bars with percentage
- Goal reached celebration state

### 5. Analytics
- Insight cards (best month, highest spending, etc.)
- Area chart — Income vs Expense vs Savings
- Weekly spending bar chart
- Financial health radar chart
- Monthly comparison bar chart

### 6. Reports
- Switch between Monthly / Budget / Goals report views
- One-click **Export PDF** (downloads a formatted PDF instantly)

### 7. Settings
- Edit name and email — **sidebar and navbar update instantly on save**
- Change currency
- Notification toggles
- Appearance toggles

---

## 📖 Storybook Components

Stories are written for all major components:

- `Cards/StatCard` — Balance, Income, Expense, Savings variants
- `Cards/BudgetCard` — Safe, Warning, Danger states
- `Cards/GoalCard` — Phone, Trip, Laptop goals
- `UI/Toggle` — On / Off states

---

## 📜 License

MIT License — free to use for learning or inspiration.

---

*Built with ❤️ for the HiDevs Frontend Engineer Internship Challenge*