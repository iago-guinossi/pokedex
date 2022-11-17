import React, { createContext, useContext, useState } from "react";

type View = {
  view: boolean;
  setView?: any;
};

const ViewContext = createContext<View>({ view: true });

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState(true);
  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}

export const useView = () => useContext(ViewContext);
