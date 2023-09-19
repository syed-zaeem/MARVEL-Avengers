import React, { createContext, useState } from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <LoadingContext.Provider value={{ progress, updateProgress }}>
      {children}
    </LoadingContext.Provider>
  );
};
