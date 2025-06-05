import React, { createContext, useState, useEffect } from "react";

export const NoticeContext = createContext();

export const NoticeProvider = ({ children }) => {
  const [notices, setNotices] = useState(() => {
    const saved = localStorage.getItem("notices");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("notices", JSON.stringify(notices));
  }, [notices]);

  const addNotice = (notice) => {
    setNotices((prev) => [notice, ...prev]);
  };

  return (
    <NoticeContext.Provider value={{ notices, addNotice }}>
      {children}
    </NoticeContext.Provider>
  );
};
