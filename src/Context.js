import React, { createContext, useEffect, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isMongolia, setIsMongolia] = useState(true)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)

  // useEffect(()=>{
  //   if(isPageLoaded){
  //     const timer = setTimeout(() => {
  //       setIsAnimated(true);
  //       setIsPageLoaded(true)
  //     }, 2000); 
  //     return () => clearTimeout(timer); 
  //   }
  // },[])

  return (
    <MyContext.Provider value={{ isDark, setIsDark, isMongolia, setIsMongolia, isPageLoaded, setIsPageLoaded, isAnimated, setIsAnimated }}>
      {children}
    </MyContext.Provider>
  );
};
