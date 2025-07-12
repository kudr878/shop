import React, { createContext, useState, useMemo } from 'react';
import { staff } from '../assets/staff/staff';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [data] = useState(staff);

  const value = useMemo(() => ({
    data,
  }), [data]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
