import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import { transactions, budgets, goals } from "../data/mockData";

const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [transactionList] = useState(transactions);
  const [budgetList] = useState(budgets);
  const [goalList] = useState(goals);
  const [profileName, setProfileName] = useState(
    () => localStorage.getItem("name") || "Sarika"
  );
  const [profileEmail, setProfileEmail] = useState(
    () => localStorage.getItem("email") || "sarikajivrajika2005@gmail.com"
  );

  const updateProfile = useCallback((name: string, email: string) => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    setProfileName(name);
    setProfileEmail(email);
  }, []);

  return (
    <AppContext.Provider
      value={{
        transactionList,
        budgetList,
        goalList,
        profileName,
        profileEmail,
        updateProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);