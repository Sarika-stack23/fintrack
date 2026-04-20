import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { transactions, budgets, goals } from "../data/mockData";

const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [transactionList] = useState(transactions);
  const [budgetList] = useState(budgets);
  const [goalList] = useState(goals);

  return (
    <AppContext.Provider value={{ transactionList, budgetList, goalList }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
